import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTasksStore } from './TasksStore'
import { useModulStore } from './ModulStore'

// Mock the ModulStore dependency to isolate TasksStore
const mockCloseModule = vi.fn()
const mockOpenEditModule = vi.fn()

vi.mock('./ModulStore', () => ({
  useModulStore: vi.fn(() => ({
    closeModule: mockCloseModule,
    openEditModule: mockOpenEditModule
  }))
}))

// Mock window.alert to prevent actual alerts during tests
global.alert = vi.fn()

describe('TasksStore.js', () => {
  beforeEach(() => {
    // Isolate Pinia environment before each test
    setActivePinia(createPinia())
    // Clear localStorage to ensure fresh state
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('initializes with empty tasks array by default when localStorage is empty', () => {
    // Act
    const store = useTasksStore()

    // Assert
    expect(store.tasks).toEqual([])
  })

  describe('addTask', () => {
    it('adds a new task when name and description are provided and closes the modal', () => {
      // Arrange
      const store = useTasksStore()
      const modulStoreMock = useModulStore()
      const newTask = { name: 'New Task', description: 'Task Description' }

      // Act
      store.addTask(newTask)

      // Assert
      expect(store.tasks.length).toBe(1)
      expect(store.tasks[0]).toMatchObject({
        id: 1,
        name: 'New Task',
        description: 'Task Description'
      })
      expect(modulStoreMock.closeModule).toHaveBeenCalled()
    })

    it('shows an alert and does not add task if fields are empty', () => {
      // Arrange
      const store = useTasksStore()
      const invalidTask = { name: '', description: '' }

      // Act
      store.addTask(invalidTask)

      // Assert
      expect(store.tasks.length).toBe(0)
      expect(global.alert).toHaveBeenCalledWith("fill the feilds")
    })
  })

  describe('edit task lifecycle', () => {
    it('startEditTask sets editedTask, editTaskId, and opens edit modal', () => {
      // Arrange
      const store = useTasksStore()
      const modulStoreMock = useModulStore()
      store.tasks.push({ id: 1, name: 'Task 1', description: 'Desc 1' })

      // Act
      store.startEditTask(1)

      // Assert
      expect(store.editedTask).toEqual({ name: 'Task 1', description: 'Desc 1' })
      expect(store.editTaskId).toBe(1)
      expect(modulStoreMock.openEditModule).toHaveBeenCalled()
    })

    it('updateTask modifies the targeted task and closes the modal', () => {
      // Arrange
      const store = useTasksStore()
      const modulStoreMock = useModulStore()
      store.tasks.push({ id: 2, name: 'Old Name', description: 'Old Desc' })
      store.editTaskId = 2
      store.editedTask = { name: 'Updated Name', description: 'Updated Desc' }

      // Act
      store.updateTask()

      // Assert
      const updatedTask = store.tasks.find(t => t.id === 2)
      expect(updatedTask.name).toBe('Updated Name')
      expect(updatedTask.description).toBe('Updated Desc')
      expect(modulStoreMock.closeModule).toHaveBeenCalled()
    })
  })

  describe('deleteTask', () => {
    it('removes a task by id', () => {
      // Arrange
      const store = useTasksStore()
      store.tasks.push({ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' })

      // Act
      store.deleteTask(1)

      // Assert
      expect(store.tasks.length).toBe(1)
      expect(store.tasks[0].id).toBe(2)
    })
  })

  describe('toggles (completed, status, priorityStatus)', () => {
    it('toggleCompleted toggles the completed status of a task', () => {
      const store = useTasksStore()
      store.tasks.push({ id: 1, completed: false })
      store.toggleCompleted(1)
      expect(store.tasks[0].completed).toBe(true)
    })

    it('toggleStatus toggles status between Active and Inactive', () => {
      const store = useTasksStore()
      store.tasks.push({ id: 1, status: 'Active' })
      store.toggleStatus(1)
      expect(store.tasks[0].status).toBe('Inactive')
      store.toggleStatus(1)
      expect(store.tasks[0].status).toBe('Active')
    })

    it('togglPriorityeStatus cycles through priority statuses', () => {
      const store = useTasksStore()
      store.tasks.push({ id: 1, priorityStatus: 'High priority' })
      store.togglPriorityeStatus(1)
      expect(store.tasks[0].priorityStatus).toBe('Med priority')
      store.togglPriorityeStatus(1)
      expect(store.tasks[0].priorityStatus).toBe('Low priority')
      store.togglPriorityeStatus(1)
      expect(store.tasks[0].priorityStatus).toBe('High priority')
    })
  })

  describe('filteredTasks computed property', () => {
    it('returns all tasks by default', () => {
      const store = useTasksStore()
      store.tasks.push(
        { id: 1, completed: false },
        { id: 2, completed: true }
      )
      expect(store.filteredTasks.length).toBe(2)
    })

    it('filters To-Do tasks', () => {
      const store = useTasksStore()
      store.tasks.push(
        { id: 1, completed: false },
        { id: 2, completed: true }
      )
      store.setFilter('To-Do')
      expect(store.filteredTasks.length).toBe(1)
      expect(store.filteredTasks[0].completed).toBe(false)
    })

    it('filters Done tasks', () => {
      const store = useTasksStore()
      store.tasks.push(
        { id: 1, completed: false },
        { id: 2, completed: true }
      )
      store.setFilter('Done')
      expect(store.filteredTasks.length).toBe(1)
      expect(store.filteredTasks[0].completed).toBe(true)
    })
  })
})
