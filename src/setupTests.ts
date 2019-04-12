// fail tests that print errors and warnings
function mockConsole() {
  let isConsoleWarningOrError = false

  beforeEach(() => {
    isConsoleWarningOrError = false
    const originalError = global.console.error
    global.console.error = jest.fn((...args) => {
      isConsoleWarningOrError = true
      originalError(...args)
    })
    const originalWarn = global.console.warn
    global.console.warn = jest.fn((...args) => {
      isConsoleWarningOrError = true
      originalWarn(...args)
    })
  })

  afterEach(() => {
    if (isConsoleWarningOrError) {
      throw new Error('Console warnings and errors are not allowed')
    }
  })
}

mockConsole()
