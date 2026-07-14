import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { loadFromLocalStorage, saveToLocalStorage } from './storage'

describe('storage.js', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    vi.clearAllMocks()
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('loadFromLocalStorage', () => {
    it('returns parsed value when valid JSON exists in localStorage', () => {
      // Arrange
      const key = 'testKey'
      const mockData = { id: 1, name: 'Test' }
      localStorage.setItem(key, JSON.stringify(mockData))

      // Act
      const result = loadFromLocalStorage(key, [])

      // Assert
      expect(result).toEqual(mockData)
    })

    it('returns default value when key does not exist in localStorage', () => {
      // Arrange
      const key = 'missingKey'
      const defaultValue = [{ id: 1 }]

      // Act
      const result = loadFromLocalStorage(key, defaultValue)

      // Assert
      expect(result).toEqual(defaultValue)
    })

    it('returns default value and logs error when parsing fails', () => {
      // Arrange
      const key = 'invalidKey'
      const defaultValue = []
      localStorage.setItem(key, 'invalid-json') // This will throw an error on JSON.parse

      // Act
      const result = loadFromLocalStorage(key, defaultValue)

      // Assert
      expect(result).toEqual(defaultValue)
      expect(console.error).toHaveBeenCalledWith(
        `loadFromLocalStorage: Failed to parse "${key}"`,
        expect.any(SyntaxError)
      )
    })
  })

  describe('saveToLocalStorage', () => {
    it('saves stringified value to localStorage', () => {
      // Arrange
      const key = 'saveKey'
      const dataToSave = { tasks: [{ id: 1, name: 'Task 1' }] }

      // Act
      saveToLocalStorage(key, dataToSave)

      // Assert
      const storedValue = localStorage.getItem(key)
      expect(storedValue).toBe(JSON.stringify(dataToSave))
    })

    it('logs error if JSON.stringify fails (e.g. circular reference)', () => {
      // Arrange
      const key = 'circularKey'
      const circularObj = {}
      circularObj.self = circularObj

      // Act
      saveToLocalStorage(key, circularObj)

      // Assert
      expect(console.error).toHaveBeenCalledWith(
        `saveToLocalStorage: Failed to save "${key}"`,
        expect.any(TypeError)
      )
    })
  })
})
