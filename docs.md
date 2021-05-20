# The Priceless JS Extension Packs

## About
The JS extension pack is a bunch of algorithms added onto Javascript to make programming easier for everyone.


## Documentation - Arrays

---

*Note about Error Handling:* WIP --> Will finish when we will complete the error hadling function / the whole package will be 90% finished

---

#### Array.prototype.locate()
The `locate()` function works like a basic search & autocomplete engine, returning the first item in an array that contains the desired string.

##### Syntax
`Array.prototype.locate(array)`

##### Examples
```javascript
let arr = ["Emerald", "Diamond", "Ruby"]; 
console.log(arr.locate("d")); // returns "Emerald"
console.log(arr.locate("apple")); // returns false
console.log(arr.locate("rb")); // returns Ruby"
console.log(arr.locate("D")); // returns "Diamond"
```

*Useful Note:* The function is case sensitive - Only the first matching element is extracted

---

#### Array.prototype.locateAll()
The `locateAll()` function works as the `locate()` one but impact all the elements that match the inputted string. 

##### Syntax
`Array.prototype.locateAll(string)`

##### Examples
```javascript
let arr = ["Emerald", "Diamond", "Ruby"]; 
console.log(arr.locateAll("d")); // returns ["Emerald", "Diamond"]
console.log(arr.locateAll("apple")); // returns false
console.log(arr.locateAll("rb")); // returns false
console.log(arr.locateAll("D")); // returns ["Diamond"]
```
*Useful Note:* The function is case sensitive - All the elements matching are extracted

---

#### Array.prototype.replace()
The `replace()` function from replace a given element with a given value and returns an. it also work with regex. 

##### Syntax
`Array.prototype.replace(element, value)`

##### Examples
```javascript
let arr = ["Emerald", "Diamond", "Ruby", "Diamond"];
console.log(arr.replaceAll("Diamond", "Tourmaline")) // returns ["Emerald", "Tourmaline", "Ruby", "Tourmaline"]

console.log(arr.replaceAll(/Emerald/, "Aquamarine")) // returns ["Aquamarine", "Diamond", "Ruby", "Diamond"]

console.log(arr.replaceAll(/D/i, (x) => x+" contains 'D'")) // returns ["Emerald", "Diamond contains 'D'", "Ruby", "Diamond contains 'D'"]
```

*Useful Note:* The function is case sensitive - Only the first matching element is replaced

---

#### Array.prototype.replaceAll()
The `replaceAll()` function works as the `replace()` one but impact all elements that match the inputted one. 

##### Syntax
`Array.prototype.replaceAll(element, value)`

##### Examples
```javascript
let arr = ["Emerald", "Diamond", "Ruby", "Diamond"];
console.log(arr.replaceAll("Diamond", "Tourmaline")) // returns ["Emerald", "Tourmaline", "Ruby", "Tourmaline"]

console.log(arr.replaceAll(/Emerald/, "Aquamarine")) // returns ["Aquamarine", "Diamond", "Ruby", "Diamond"]

console.log(arr.replaceAll(/D/i, (x) => x+" contains 'D'")) // returns ["Emerald", "Diamond contains 'D'", "Ruby", "Diamond contains 'D'"]
```

*Useful Note:* The function is case sensitive - All the matching elements are replaced

---

#### Array.prototype.remove()
The `remove()` function removes a given element in an array and returns the array without the value.  

##### Syntax
`Array.prototype.remove(string)`

##### Examples
```javascript
let arr = ["Emerald", "Diamond", "Ruby", "Diamond"];
console.log(arr.remove("Diamond")) // returns ["Emerald", "Ruby"]
```

*Useful Note:* The function is case sensitive - Only the first matching element is deleted

---

#### Array.prototype.removeAll()
The `removeAll()` function works as the `remove()` one but removes all elements that match the inputted one. 

##### Syntax
`Array.prototype.removeAll(string)`

##### Examples
```javascript
let arr = ["Emerald", "Diamond", "Ruby", "Diamond"];
console.log(arr.removeAll("Diamond")) // returns ["Emerald", "Ruby"]
```

*Useful Note:* The function is case sensitive - All the elements matching are deleted

---

#### Array.prototype.sift()
The Array `sift()` function removes all duplicate items in an array.

##### Syntax
`Array.prototype.sift()`

##### Examples
```javascript
let arr = ["dog", "cat", "ball", "mouse", "clock", "dog", "dog", "clock"];
console.log(arr.sift()) //returns [ 'dog', 'cat', 'ball', 'mouse', 'clock' ]
```

---

#### Array.prototype.diff()
The `diff()` function returns an array containing all uncommon items shared between two arrays.

##### Syntax
`Array.prototype.diff(array)`

##### Examples
```javascript
let arr = ["sword", "shield", "helmet", "loaf of bread", "potion"];

console.log(arr.diff(["sword", "shield", "helmet", "loaf of bread", "potion", "wand"])); // returns [ 'wand' ]
console.log(arr.diff(["sword", "shield", "helmet", "elixir", "loaf of bread", "potion", "gold nugget"])); // returns [ 'elixir', 'gold nugget' ]
console.log(arr.diff(["sword", "shield", "helmet", "loaf of bread", "potion"])); // returns []
```

---

#### Array.prototype.comm()
The `comm()` function returns an array containing all common items shared between two arrays.

##### Syntax
`Array.prototype.comm(array)`

##### Examples
```javascript
let arr = ["hydrogen", "helium", "oxygen", "phosphorus"];
console.log(arr.comm(["hydrogen", "iron", "copper", "uranium"])); // returns [ 'hydrogen' ]
console.log(arr.comm(["hydrogen", "helium", "oxygen", "phosphorus"])); // returns []
console.log(arr.comm(["hydrogen", "phosphorus", "copper", "uranium"])); // returns [ 'hydrogen', 'phosphorus' ]

```

---

#### Array.prototype.random()
The `random()` function returns a random element in an array.

##### Syntax
`Array.prototype.random(resultsNb);`

##### Example
```javascript
let arr = ["Emerald", "Diamond", "Ruby", "Diamond"];

console.log(arr.random(2)) // randomly returns ["Emerald","Ruby"]

console.log(arr.random()) // If resultsNb is left blank one element is extracted --> randomly returns ["Diamond"] 

console.log(arr.random(0)) // If 0 is given one element will anyway be extracted --> randomly returns ["Emerald"] 
```

---

#### Array.prototype.randomPlacement()
The `randomPlacement()` is a cool extra to the random function, as a the cherry on the cake, it returns a random element next to his placements (Integer) in an array.

##### Syntax
`Array.prototype.randomPlacement(resultsNb); //Testing before examples`

##### Example
```javascript // Work in Progress for examples
let arr = ["Cherry", "Cake", "Cream", "Cheesecake"];

console.log(arr.random(2)) // randomly returns ["Emerald","Ruby"]

console.log(arr.random()) // If resultsNb is left blank one element is extracted --> randomly returns ["Diamond"] 

console.log(arr.random(0)) // If 0 is given one element will anyway be extracted --> randomly returns ["Cherry"] 
```

---
#### Array.prototype.roundAll()
The `roundAll()` is a function that simply rounds all the numbers in an array

##### Syntax
`Array.prototype.roundAll();`

##### Example
```javascript
let arr = [5.123, 6.5, 99.9, 11.9];

console.log(arr.roundAll()) // returns [5, 7, 100, 12]

arr.push("I'm a string")

console.log(arr.roundAll()) //  returns [5, 7, 100, 12, "I'm a string"], non-Numbers are simply ignored

```

---
#### Array.prototype.listTypes()
The `listTypes()` is a function that returns the type of element each item is in an array.

##### Syntax
`Array.prototype.listTypes();`

##### Example
```javascript
console.log([2, "hello"].listTypes()) // returns ['number', 'string']
console.log([].listTypes()) // returns []
console.log([undefined, true].listTypes()) // returns ['undefined', 'boolean']
console.log([{}, []].listTypes()) // returns ['object', 'object']

```

---

























## Documentation - Strings

---
#### String.prototype.splitBy()
The String `splitBy()` function returns an array splitted on a certain amount of digits.

##### Syntax
`String.prototype.splitBy(number)`

##### Examples
```javascript
let str = "abcdefgh";
console.log(str.splitBy(2)); // returns ["ab", "cd", "ef", "gh"]
console.log(str.splitBy(3)); // returns ["abc", "def", "gh"]
console.log(str.splitBy(4)); // returns ["abcd", "efgh"]
```
---
#### String.prototype.cipher()
The `cipher()` function will encrypt and decrypt ciphered codes by changing strings relative to alphabetical order.  It does not change numbers, punctuation, or special characters.

##### Syntax
`String.prototype.cipher(number)`

##### Examples
```javascript
console.log("a".cipher(1)); //returns "b"
console.log("abc".cipher(1)); //returns "bcd"
console.log("abc".cipher(3)); //returns "def"
console.log("Hello World!!!".cipher(1)); //returns "Ifmmp Xpsme!!!"
console.log("Hello World!!!".cipher()); //returns "Ifmmp Xpsme!!!"
console.log("Ifmmp Xpsme!!!".cipher(-1)); //returns "Hello World!!!"
```
---
#### String.prototype.countOf()
`countOf()` returns a number which is the count of the parameter in the string

##### Syntax
```javascript
String.prototype.countOf("string or letter to count")
```

##### Examples
```javascript
let str = "Hello World!";
console.log(str.countOf("o")); // returns 2
console.log(str.countOf("ll")); // returns 1
str = "Q: what did HTML say to CSS? A: it said: I like your style"
console.log(str.countOf("i")); // returns 4
```
---
#### String.prototype.toRx()
`toRx()` converts a string into a regular expression with pre-escaped characters.

##### Syntax
```javascript
String.prototype.toRx(flag)
```

##### Examples
```javascript
console.log("hello".toRx()) /*returns /hello/ */
console.log("hello".toRx("g")) /*returns /hello/g */
console.log("AAH!!!".toRx()) /*returns /AAH\!\!\!/ */
console.log("Hey, man!".toRx("ig")) /*returns /Hey\, man\!/ig */
```
---
#### String.prototype.esc()
`esc()` converts a string to a js escape code. The default value for convertAll is true. When convertAll is set to false, common english characters will not be escaped.

##### Syntax
```javascript
String.prototype.esc(convertAll)
```

##### Examples
```javascript
console.log("aπ".esc()); // "\x61\u03c0"
console.log("aπλ".esc()); // "\x61\u03c0\u03bb"
console.log("aπλ畈".esc(false)); // "a\u03c0\u03bb\u7548"
```
---

#### String.prototype.extract()
`extract()` filters and returns the characters in a string that match a regular expression as an array.

##### Syntax
```javascript
String.prototype.extract(regexp, split)
```

##### Examples
```javascript
console.log("hello".extract(/l/,'')); //returns [ 'l','l' ]
console.log("h@e#l$l%o!!".extract(/\w/,'')); //returns [ 'h','e','l','l','o' ]
console.log("h@e#l$l%o!!".extract(/\W/,'')); //returns [ '@','#','$','%' ]


//notice that the extract splits on every space ↓
console.log("dog blog cog flog".extract(/og/,' ')); //returns [ 'dog','blog','cog','flog' ]
console.log("dog blog cog flog".extract(/\w/,'og')); //returns [ 'd', ' bl', ' c', ' fl' ]
```
---












## Documentation - Math

---
#### Math.randRange()
`Math.randRange()` returns a random float number between a minimum and maximum range.

##### Syntax
`Math.randRange(min, max)`

##### Examples
```javascript
console.log(Math.randRange(1,10)); //returns a number between one and ten
console.log(Math.randRange(5)); //returns a number between zero and five
console.log(Math.randRange(10, 1)); //returns a number between one and ten
console.log(Math.randRange()); //returns a random number between zero and one
```
---










## Documentation - Numbers

---
#### Number.prototype.sumDigits()
the `sumDigits` function returns the result of a number's digits added together.

##### Syntax
`Number.prototype.sumDigits()`

##### Examples
```javascript
var x = 25;
console.log(x.sumDigits()); //returns 7

var y = 9;
console.log(y.sumDigits()); //returns 9
```
---
#### Number.prototype.isPrime()
the `isPrime` function returns whether a number is a prime number or not

##### Syntax
`Number.prototype.isPrime()`

##### Examples
```javascript
var x = 25;
console.log(x.isPrime()); //returns false

var y = 7;
console.log(y.isPrime()); //returns true
```
---











---

## Contributors

LeviathanProgramming
- [github](https://github.com/Conner1115)
- [website](https://leviathan-programming.cf)
- [dev](https://dev.to/leviathanprogramming)

DevLorenzo
- [github](https://github.com/DevLorenz0)
- [website](https://example.com)
- [dev](https://dev.to/devlorenzo)

KY246
- [github](https://github.com/KY246)
- [dev](https://dev.to/ky246)

5alidshammout
- [github](https://github.com/5alidshammout)
- [dev](https://dev.to/5alidshammout)
- [codepen](https://codepen.io/5alidshammout)

Ethanthe (None)

---
&copy; DevUnited 2021