/// <reference types="vitest/globals" />

import { isNamedChar, getCharInfo, getCharRefs } from '../src/index.js'

describe('isNamedChar', () => {
  it('should correctly identify a named character reference', () => {
    const namedChar = '&copy;'
    const nonNamedChar = '&unknown;'

    expect(isNamedChar(namedChar)).toBe(true)
    expect(isNamedChar(nonNamedChar)).toBe(false)
  })

  it('should handle character references with different cases', () => {
    expect(isNamedChar('&AMP;')).toBe(true)
    expect(isNamedChar('&amp;')).toBe(true)
    expect(isNamedChar('amp')).toBe(true)

    // falsy
    expect(isNamedChar('&amp')).toBe(false)
    expect(isNamedChar('amp;')).toBe(false)
  })
})

describe('getCharInfo', () => {
  it('should correctly retrieve information about a named character reference', () => {
    const namedChar = '&copy;'
    const charInfo = getCharInfo(namedChar)

    expect(charInfo).toEqual({ name: 'copy', unicode: 'U+000A9', glyph: '©' })
  })

  it('should return undefined for non-existent character references', () => {
    const nonNamedChar = '&unknown;'
    const charInfo = getCharInfo(nonNamedChar)

    expect(charInfo).toBeUndefined()
  })

  it('should handle character references with different cases', () => {
    expect(getCharInfo('&COPY;')).toBeTruthy()
    expect(getCharInfo('&copy;')).toBeTruthy()
    expect(getCharInfo('copy')).toBeTruthy()

    // falsy
    expect(getCharInfo('&copy')).toBeUndefined()
    expect(getCharInfo('copy;')).toBeUndefined()
  })
})

describe('getCharRefs', () => {
  it('should return an iterable of all named character references', () => {
    const charRefs = Array.from(getCharRefs())

    // Ensure that charRefs is an array of CharInfo objects
    expect(charRefs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          unicode: expect.any(String),
          glyph: expect.any(String)
        })
      ])
    )
  })
})
