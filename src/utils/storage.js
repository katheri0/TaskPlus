export function loadFromLocalStorage(key, defaultValue) {
  try {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
  } catch (error) {
    console.error(`loadFromLocalStorage: Failed to parse "${key}"`, error)
    return defaultValue
  }
}

export function saveToLocalStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.error(`saveToLocalStorage: Failed to save "${key}"`, error)
  }
}
