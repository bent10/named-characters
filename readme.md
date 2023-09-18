# named-characters

Provides a collection of [named character references](https://www.w3.org/TR/2011/WD-html5-20110525/named-character-references.html) commonly used in HTML. It offers functions to check if a character is a named character reference, retrieve information about a named character reference, and obtain an iterable of all named character references. This module is useful for handling and manipulating HTML character references in your web development projects.

## Install

You can install this module using npm or yarn:

```bash
npm install named-characters

# or

yarn add named-characters
```

## Usage

### `isNamedChar(char: string): boolean`

You can use the `isNamedChar` function to check if a character is a named character reference. It returns `true` if the character is a named character reference, and `false` otherwise.

```js
import { isNamedChar } from 'named-characters'

isNamedChar('&lt;') // yields: true
isNamedChar('lt') // yields: true
isNamedChar('&AMP;') // yields: true
isNamedChar('&amp;') // yields: true
isNamedChar('amp') // yields: true
isNamedChar('&amp') // yields: false
isNamedChar('amp;') // yields: false
isNamedChar('&foo;') // yields: false
```

### `getCharInfo(char: string): CharInfo | undefined`

To retrieve information about a named character reference, use the `getCharInfo` function. It returns an object containing the name, Unicode code point, and glyph representation of the character reference. If the character is not found, it returns `undefined`.

```js
import { getCharInfo } from 'named-characters'

const charInfo = getCharInfo('&hearts;')

console.log(charInfo)
```

Yields:

```js
{
  name: 'hearts',
  unicode: 'U+02665',
  glyph: '♥'
}
```

### getCharRefs(): IterableIterator<CharInfo>

To obtain an iterable of all named character references, you can use the `getCharRefs` function. It returns an iterable that allows you to iterate through all the named character references in the collection.

```js
import { getCharRefs } from 'named-characters'

const charRefs = getCharRefs()

for (const charInfo of charRefs) {
  console.log(charInfo)
}
```

Yields:

```js
{ name: 'AElig', unicode: 'U+000C6', glyph: 'Æ' }
{ name: 'AMP', unicode: 'U+00026', glyph: '&' }
{ name: 'Aacute', unicode: 'U+000C1', glyph: 'Á' }
{ name: 'Abreve', unicode: 'U+00102', glyph: 'Ă' }
{ name: 'Acirc', unicode: 'U+000C2', glyph: 'Â' }
...
```

## Related

- [attributes-parser](https://github.com/bent10/attributes-parser) - Tokenize and parse attributes string into meaningful tokens and key-value pairs.

## Contributing

We 💛&nbsp; issues.

When committing, please conform to [the semantic-release commit standards](https://www.conventionalcommits.org/). Please install `commitizen` and the adapter globally, if you have not already.

```bash
npm i -g commitizen cz-conventional-changelog
```

Now you can use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

```bash
git add . && git cz
```

## License

![GitHub](https://img.shields.io/github/license/bent10/named-characters)

A project by [Stilearning](https://stilearning.com) &copy; 2023.
