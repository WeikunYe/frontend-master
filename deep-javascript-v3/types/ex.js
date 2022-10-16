// TODO: define polyfill for `Object.is(..)`

function IsNaN(a) {
  return typeof a === 'number' && a.toString() === 'NaN';
}

function IsNegativeZero(a) {
  return a === 0 && 1/a === -Infinity;
}

function ObjectIs(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (IsNaN(a) && IsNaN(b)) return true;
    if (IsNegativeZero(a) && IsNegativeZero(b)) return true;
    if (IsNegativeZero(a) || IsNegativeZero(b)) return false;
  }

  return a === b;
}

if (true) {
  Object.is = ObjectIs;
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
