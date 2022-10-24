# A Tour of JavaScript & React Pattern

## JavaScript Pattern

### Module Pattern

```javascript
export function foo() {
  /.../
}
```
```javascript
import { foo } from './foo';
```

### Singleton Pattern

```javascript
class DBConnection {
  constructor(uri) {
    this.uri = uri
  }
}

export default Object.freeze(new DBConnection('://mongodb...'))
```

### Proxy Pattern

For validation, formatting, notification, debugging, etc, but longer execute time.

```javascript
const myUser = {
  name: "AAA",
}

export function get(target, prop) {
  return Reflect.get(target, prop)
}

export function set(target, prop, value) {
  return Reflect.set(target, prop, value);
}
```

### Observer Pattern

```javascript
// observable.js
const observers = [];

export default Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

// subscriber.js
import Observable from "./observable";
function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

Observable.subscribe(logger);

// notify.js
import Observable from "./observable";

document.getElementById("my-button").addEventListener("click", () => {
  Observable.notify("Clicked!"); // Notifies all subscribed observers
});
```

### Factory Pattern

### Prototype Pattern

```javascript
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }
  wagTail() {
    console.log(`${this.name} is wagging their tail!`);
  }
}

const dog1 = new Dog("Max", 4);
const dog2 = new Dog("Sam", 2);
const dog3 = new Dog("Joy", 6);
const dog4 = new Dog("Spot", 8);
```

## React Pattern

### Container/Presention Pattern

### HOC Pattern

### Render Props Patter

Components as Props for render

### Hooks Pattern

### Provider Pattern

### Compound Pattern

```javascript
function List() {
  return ();

  function Item() {
    return ()
  }
}

import { List } from './List';

<List>
  <List.Item></List.Item>
</List>
```

## Performance Patterns

### Bundling & Compiling

### Static & Dynamic Imports

### Browser Hints: Prefetch vs Preload
webpackPrefetch
webpackPreload

## Rendering Patterns

### Core Web Vitals

### Client=Side & Static Rendering

### Incremental Rendering & SSR



