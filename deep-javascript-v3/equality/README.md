# Equality

## Double & Triple Equals

Type matched, double equal is triple equal.

## Coercive Equality

Do you allow coercion comparison, then choose double and triple equal.

```javascript
var a = { name: null };
var b = {};

// Bad
if ((a.name === null || a.name === undefined) && (b.name === null || b.name === undefined)) {
  // ...
}

// Good
if (a.name == null && b.name == null) {
  // ...
}
```

## Double Equals Algorithm

Make your code coercion more explicit.

## Double Equals Walkthrough

```javascript
var a = 42;
var b = [42]

a == b // true
// 42 == ToPrimitive([42])
// 42 == "42"
// 42 === 42
```

## Double Equals Summary

- If the types are the same: `===`
- If `null` or `undefined`: equal
- If no-primitives: ToPrimitive
- Prefer: ToNumber

## Double Equals Corner Cases

```javascript
[] == ![] // true this should never occur in your code
// [] == false
// "" == false
// 0 == false
// 0 === 0

var a = []
if(a) // true
// if(Boolean(a))
if(a == true) // false no case to equal true
// if("" == true)
// if(0 === 1)
if(a == false) // true no case to equal fasle
// if("" == false)
// if(0 === 0)
```

## Corner Cases: Summary

- `==` with 0 or "" or even " "
- `==` with non-primitives
- `== true` or `==false`: allow ToBoolean or `===`

## The Cases for Double Equals

It's okay to have both `==` and `===`. Or even better have `==`, because knowing types is better than unknown type comparisons.

- If you know the types, `==` is more making sense.
- If you don't know the type, types should be obvious to reader.

