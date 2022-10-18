# Coercion

## 1. Abstract Operations

hint: "number"
- valueOf()
- toString()

hint: "string"
- toString()
- valueOf()

## 2. toString

- null "null"
- undefined "undefined"
- true "true"
- false "false"
- 3.14159 "3.14159"
- 0 "0"
- -0 "0"

toString(object)
- [] ''
- [1, 2, 3] "1,2,3"
- [null, undefined] ','
- {} '[object, Object]'

```javascript
var a = [1, 2, 3]
a + "b" // "1,2,3b"
```

## 3. toNumber

- "" 0
- "009" 9
- "." NaN
- false 0
- true 1
- null 0
- undefined NaN

```javascript
var a = {valueOf(){return 3}}
a + 3 // 6
a * 3 // 9
```

## 4. toBoolean

| Falsy     | Truthy       |
|-----------|--------------|
| ""        | "foo"        |
| 0, -0     | 23           |
| null      | {a: 1}       |
| NaN       | [1, 2]       |
| false     | true         |
| undefined | function(){} |

## 5. Cases of Coercion

```javascript
// Coercion
function logStudentName (name) {
  console.log(`Student name is ${name}`)
}
```

```javascript
// Operation overloading
console.log("There are " + 16  + " students")
```

## 6. Boxing

## 7. Coner Cases of Coercion

White space to 0
