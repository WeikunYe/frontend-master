# JavaScript: The New Hard Part

Understanding following codes with Memory, Console Log, Execute Context, Browser Feature, Callback Queue, Event Loop, Microtask Queue, Call Stack.
## Asynchronous JavaScript

```javascript
function printHello() {
  console.log("Hello");
}

function blockFourSecond() {
  // blocks thread 4 seconds
}

setTimeOut(printHello, 0);

blockFourSecond();

console.log("Me first!");
```

## Promises

```javascript
function display(data) {console.log(data)}
function printHello() {console.log("Hello")}
function block300ms() {/**code to block js thread 300ms */}

setTimeOut(printHello, 0);
const futureData = fetch("https://some-api");
futureData.then(display);

block300ms();

console.log("Me first");
```

```bash
Me first
hi from api call
Hello
```

## Iterator

```javascript
function createFunction(array){
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const returnNextElement = createFunction([4, 5, 6]);
const element1 = returnNextElement();
const element2 = returnNextElement();
```

## Generator

```javascript
function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}
const returnNextElement = createFlow();
const element1 = returnNextElement.next(); // 10
const element2 = returnNextElement.next(2) // 7 2+5
```
Async

```javascript
function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch("https://some-api");
  console.log(data);
}

const returnNextElement = createFlow();
const futureData =  returnNextElement.next();
futureData.then(doWhenDataReceived);
```