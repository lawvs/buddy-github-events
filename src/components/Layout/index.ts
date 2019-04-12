/**
 * ported from yui540's palette
 * url: https://github.com/yui540/palette/blob/master/src/breakpoint.ts
 * commit 961dec4
 * this code is under [MIT licence](https://github.com/yui540/palette/blob/master/LICENSE)
 * in thankful acknowledgment of [yui540](https://github.com/yui540)
 * fileneme are modified
 */

export const pcLayout = (styles: string): string => {
  return `
      @media screen and (min-width: 761px) {
        ${styles}
      }
    `
}

export const spLayout = (styles: string): string => {
  return `
      @media screen and (max-width: 760px) {
        ${styles}
      }
    `
}
