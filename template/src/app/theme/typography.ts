// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"

export const FONT_SIZE = {
  title: 22,
  large: 20,
  small: 12,
  semismall: 14,
  medium: 16,
  ultrasmall: 8,
}
const fonts = {
  comfortaa: {
    light: 'Comfortaa-Light',
    regular: 'Comfortaa-Regular',
    medium: 'Comfortaa-Medium',
    bold: 'Comfortaa-Regular-',
    semibold: 'Comfortaa-SemiBold'
  },
  roboto: {
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    thin: 'Roboto-Thin',
    semibold: 'Roboto-SemiBold'
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.roboto,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}