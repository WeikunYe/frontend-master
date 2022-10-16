# Tpyes

Everything in JS is an object is **NOT** true. There are primitive types.

## 1. Primitive Types
- undefined
- string
- number
- boolean
- object
- symbol
- null
- bigint (future)

## 2. typeof Operator

`typeof` returns string enum.

```javascript
typeof doesnotExist; // 'undefined'
var v = null;
typeof v; // 'object'
v = function () {};
typeof v; // 'function'
v = [1, 2, 3];
typeof v; // 'object'
```

## 3. Bigint

```javascript
var v = 3;
typeof v; // 'number'
v = 42n;
typeof v; // 'bigint'
```

## 4. Kinds of Emptiness

undefined vs. undeclared vs. uninitialized (aka TDZ)

## 5 NaN & isNaN

NaN ~~(is not a number)~~ (it's a number but an invalid one).

```javascript
var myAge = Number('20'); // 20
var myCatsAge = Number('n/a'); // NaN
myAge - 'Something else'; // NaN
myCatsAge === myCatsAge // false NaN is the only value in the JS doesn't equal to itself

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN('Something else'); // true isNaN(Number('Something else'))

// Better utils in ES6
Number.isNaN(myCatsAge) // true
Number.isNaN('Something else'); // false
```
## 6. Negative Zero

We can use negative zero for indicating directions, trends, etc.

```javascript
var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); // "0"
trendRate === 0; // true
trendRate > 0; // false
trendRate < 0; // false

// Better utils in ES6
Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false
```
`Math.sign` is not a good solution.

```javascript
Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0
Math.sign(0); // 0

// "fix" Math.sign()
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); // -1
sign(3); // 1
sign(-0); // -1
sign(3); // 1
```

## 7 Fundamental Objects

aka: Built-In Objects
aka: Native Functions

Use `new`
- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

Don't use `new`:
- String() use as function
- Number()
- Boolean() use as fuction
