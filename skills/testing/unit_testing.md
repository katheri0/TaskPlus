# Unit Testing

Objective:
Verify that individual units (functions, methods, classes, hooks, components) behave correctly, independently, and deterministically.

---

## Testing Principles

- FIRST Principles
  - Fast
  - Independent
  - Repeatable
  - Self-validating
  - Timely

- AAA Pattern
  - Arrange
  - Act
  - Assert

- Given / When / Then

- Test Pyramid

- Behavior-Driven Testing

---

## Capabilities

### Test Design

- Identify testable units
- Define expected behavior
- Determine test boundaries
- Design positive test cases
- Design negative test cases
- Design edge-case tests
- Design regression tests

---

### Assertions

- Equality
- Deep equality
- Boolean assertions
- Null / Undefined assertions
- Exception assertions
- Async assertions
- Snapshot assertions (when appropriate)

---

### Test Doubles

- Mocks
- Stubs
- Spies
- Fakes

Know when each is appropriate.

---

### Isolation

- Dependency Injection
- Mock external services
- Mock network requests
- Mock databases
- Mock filesystem
- Mock timers
- Mock browser APIs

---

### Asynchronous Testing

- Promises
- async/await
- Timers
- Events
- API calls
- Race conditions

---

### Component Testing

- Render components
- Simulate user interaction
- Verify UI state
- Verify accessibility
- Test custom hooks

---

### Coverage

- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

Coverage should guide testing, not define quality.

---

### Test Quality

Tests should be:

- Deterministic
- Readable
- Maintainable
- Independent
- Fast
- Focused on behavior
- Resistant to implementation changes

---

### Common Anti-Patterns

Avoid:

- Testing implementation details
- Over-mocking
- Brittle snapshots
- Sleep-based timing
- Shared mutable state
- Test interdependence
- Large monolithic tests
- Duplicate assertions

---

### Framework Knowledge

The agent should adapt to the project's testing framework, including but not limited to:

- Vitest
- Jest
- Testing Library
- Playwright (Component Testing)
- Cypress Component Testing
- PHPUnit
- PHPUnit Pest
- JUnit
- NUnit
- pytest
- unittest

---

### Expected Deliverables

The agent should be able to:

- Write new unit tests
- Improve existing tests
- Fix failing tests
- Increase meaningful coverage
- Refactor tests
- Mock dependencies correctly
- Explain why a test exists
- Detect missing edge cases
- Suggest additional tests
- Diagnose flaky tests