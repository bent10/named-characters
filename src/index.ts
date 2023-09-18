import namedCharacterReferences from './references.js'

/**
 * A type representing the named character references.
 */
export type Refs = typeof namedCharacterReferences

/**
 * Represents a named character from HTML character references.
 */
export type CharName = keyof Refs

/**
 * Represents a character reference with its name, Unicode code point, and
 * glyph representation.
 */
export type CharInfo = {
  name: CharName
  unicode: string
  glyph: string
}

/**
 * A map containing named character references.
 */
const namedCharMap = new Map(Object.entries(namedCharacterReferences)) as Map<
  CharName,
  CharInfo
>

/**
 * Normalizes a character reference.
 *
 * @param char - The character to normalize.
 * @returns The normalized character reference.
 */
function getName(char: string) {
  if (char.startsWith('&') && char.endsWith(';')) {
    return char.slice(1, -1) as CharName
  }

  return char as CharName
}

/**
 * Check if a character is a named character reference.
 *
 * @param char - The character to check.
 * @returns `true` if the character is a named character reference,
 *   otherwise `false`.
 */
export function isNamedChar(char: string) {
  return namedCharMap.has(getName(char))
}

/**
 * Get information about a named character reference.
 *
 * @param char - The named character reference.
 * @returns Information about the character reference, or `undefined` if
 *   not found.
 */
export function getCharInfo(char: string) {
  return namedCharMap.get(getName(char))
}

/**
 * Get an iterable of all named character references.
 *
 * @returns An iterable of named character references.
 */
export function getCharRefs(): IterableIterator<CharInfo> {
  return namedCharMap.values()
}
