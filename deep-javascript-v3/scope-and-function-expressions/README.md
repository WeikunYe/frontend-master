# Scope & Function Expressions

## Function Expressions

```javascript
function a () {}  // global a
var b = function c () {} // global b, c this not accessible

a // yes
b // yes
c // Reference Error
```

Named Function Expression

```javascript
var a = function () {} // anonymous function expression
var b = function c () {} // named function expression
```
Why use named function expression
- Reliable function self-reference (recursion, etc);
- More debuggable stack traces
- More self-documenting code


## Arrow Functions

```javascript
var ids = people.map(person => persion.id);
var ids = people.map( function getId(person) {
  return persion.id;
})
```

## Function Types Hierachy

(Named) Function Declaration > Named Function Expression > Anonymous Function Express