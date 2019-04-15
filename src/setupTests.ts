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

// mock i18n
// https://react.i18next.com/misc/testing
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: any) => {
    Component.defaultProps = { ...Component.defaultProps, t: (s: any) => s }
    return Component
  },
}))
