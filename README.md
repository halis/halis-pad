# halis-pad
> Pad left, right or both (to your heart's content)

## Install

``` bash
npm install halis-pad --save
```

## Unit Tests

``` bash
npm run test
```

## Usage

Minimal usage:

```js

const padWith = ' ';
const pad = require( 'halis-pad' ) ( padWith ); // pass in character to pad with

console.log( pad.both( 'Hello' ) ); // " Hello "
console.log( pad.both2( 'Hello' ) ); // "  Hello  "
console.log( pad.both3( 'Hello' ) ); // "   Hello   "
console.log( pad.both4( 'Hello' ) ); // "    Hello    "
console.log( pad.bothUntil( 'Hello', 14 ) ); // "      Hi      "

console.log( pad.left( 'Hello' ) ); // " Hello"
console.log( pad.left2( 'Hello' ) ); // "  Hello"
console.log( pad.left3( 'Hello' ) ); // "   Hello"
console.log( pad.left4( 'Hello' ) ); // "    Hello"
console.log( pad.leftUntil( 'Hello', 14 ) ); // "            Hi"

console.log( pad.right( 'Hello' ) ); // "Hello "
console.log( pad.right2( 'Hello' ) ); // "Hello  "
console.log( pad.right3( 'Hello' ) ); // "Hello   "
console.log( pad.right4( 'Hello' ) ); // "Hello    "
console.log( pad.rightUntil( 'Hello', 14 ) ); // "Hi            "

const star = '*';
const padStars = require( 'halis-pad' ) ( star );
console.log( padStars.both3( ' Hello ') ); // "*** Hello ***";

const bad = require( 'halis-pad' ) ( '   ' );
// ERROR: length on padWith cannot be more than 1

const good = require( 'halis-pad' ) ( );
// Okay: if padWith is empty defaults to ' '
```
