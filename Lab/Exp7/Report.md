# Experiment 7: ES6 Concepts

**Programs to Familiarise with ES6 (ECMAScript 2015) Features**

## 1. Introduction and Objective

ES6 (ECMAScript 2015) is a major update of JavaScript that introduced modern features such as `let` and `const`, arrow functions, classes, template literals, destructuring, promises and modules. This experiment demonstrates these concepts through small, runnable programs.

**Objectives:**

- Understand block scoping using `let` and `const`.
- Write functions using arrow syntax and understand how `this` behaves in arrow functions.
- Use template literals, destructuring, spread and rest operators, and default parameters.
- Create classes with inheritance, getters, setters, static members and private fields.
- Handle asynchronous code using promises and `async` / `await`.
- Use `Set`, `Map`, iterators and generators.
- Divide code into modules using `import` and `export`.

## 2. Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Language | JavaScript (ES6 and later) | Writing all programs |
| Runtime | Node.js | Running programs from the terminal |
| Editor | Visual Studio Code | Writing and managing code |

## 3. How to Run

1. Install Node.js and check its installation using `node -v`.
2. Open the `exp7-es6` folder in Visual Studio Code.
3. Open the terminal using `Ctrl + ``.
4. Run any individual program using the `node` command.

**Examples:**

```bash
node 01_let_const_var.js
node 09_modules_main.mjs
```

To run all programs one after another:

```bash
node run_all.js
```

The programs can also be pasted into the browser console by pressing `F12` and opening the Console tab, except Program 9, which requires modules.

## 4. Project Structure

```text
exp7-es6/
│
├── 01_let_const_var.js
├── 02_arrow_functions.js
├── 03_template_literals.js
├── 04_destructuring.js
├── 05_spread_rest_default.js
├── 06_classes.js
├── 07_promises_async.js
├── 08_map_set_generators.js
├── 09_math_module.mjs
├── 09_modules_main.mjs
├── run_all.js
└── REPORT.md
```

## 5. Programs and Output

### 5.1 Program 1: `var`, `let` and `const`

**File:** `01_let_const_var.js`

**Aim:** To understand scope, hoisting and the temporal dead zone, and why `let` and `const` are preferred over `var`.

| Concept | Description |
|---|---|
| `var` | Function-scoped, hoisted and initialized as `undefined`; ignores block boundaries |
| `let` | Block-scoped; cannot be accessed before declaration because of the temporal dead zone |
| `const` | Block-scoped and cannot be reassigned, but the contents of an object can be changed |

**Output:**

```text
--- var: function scoped and hoisted ---
before declaration: undefined
var leaks out of the block

--- let: block scoped, temporal dead zone ---
Error: ReferenceError - Cannot access 'tdz' before initialization
visible only inside this block
typeof blockOnly outside the block: undefined

--- const: cannot be reassigned ---
Error: TypeError - Assignment to constant variable.
const object after change: { name: 'Riya' }

--- classic loop closure problem ---
var: [ 3, 3, 3 ]
let: [ 0, 1, 2 ]
```

**Explanation:** Using `var` in a loop makes every callback share the same variable, so all callbacks print `3`. Using `let` creates a separate variable for each iteration, so the output becomes `0, 1, 2`.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.2 Program 2: Arrow Functions

**File:** `02_arrow_functions.js`

**Aim:** To write shorter functions using `=>` and understand how `this` behaves differently in arrow functions compared to regular functions.

| Concept | Description |
|---|---|
| Implicit return | `(a, b) => a + b` returns a value without using `return` |
| Returning an object | Wrap the object in parentheses: `() => ({ name, age })` |
| `this` | An arrow function does not have its own `this`; it uses the surrounding context |

**Output:**

```text
addOld(2, 3) = 5
add(2, 3) = 5
square(5) = 25
Hello, ES6!
makeUser: { name: 'Aman', age: 21 }
passed (>= 40): [ 45, 78, 92, 67 ]
with grace +5: [ 50, 83, 97, 38, 72 ]
total: 315
regular: Aman
arrow: undefined
arrow inside method: [ 'Aman1', 'Aman2' ]
```

**Explanation:** In Node.js, the top-level `this` is an empty object, so `arrowFn` prints `undefined`. In a browser console, it would be `window`. An arrow function inside a method uses the method's `this`, which is why `delayedList` works.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.3 Program 3: Template Literals

**File:** `03_template_literals.js`

**Aim:** To create strings using backticks, `${ }` expressions, multiline text and tagged templates.

| Concept | Description |
|---|---|
| `${ }` | Inserts a JavaScript expression into a string |
| Multiline strings | Line breaks inside backticks are preserved |
| Tagged templates | A function placed before the backticks receives text parts and inserted values |
| `String.raw` | Keeps backslashes exactly as typed |

**Output:**

```text
Old: Saanvi scored 86 marks.
New: Saanvi scored 86 marks.
Total = Rs. 1497
Result: Pass
Uppercase name: SAANVI
Student Card

Name  : Saanvi
Marks : 86

Hello [Saanvi], you scored [86]!
C:\new\table
```

**Explanation:** A tagged template calls `highlight(strings, ...values)`. In this program, it wraps every inserted value in square brackets.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.4 Program 4: Destructuring

**File:** `04_destructuring.js`

**Aim:** To unpack values from arrays and objects into variables using a single statement.

| Concept | Description |
|---|---|
| Array destructuring | Extracts values by position: `const [first, second] = colors` |
| Object destructuring | Extracts values by property name: `const { name, city } = student` |
| Rename and default | Uses `{ name: studentName, grade = "A" }` |
| Destructuring in parameters | Uses `function describe({ name, city = "Unknown" })` |

**Output:**

```text
red green blue
head: red | tail: [ 'green', 'blue', 'yellow' ]
after swap: a = 2 , b = 1
x = 5 , y = 20
Riya - Dehradun
Riya grade: A
maths: 90 science: 85
Riya lives in Dehradun
Karan lives in Unknown
min: 1 max: 9
```

**Explanation:** Two variables can be swapped without using a temporary variable through `[a, b] = [b, a]`. A function can also return an array whose values can be unpacked directly.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.5 Program 5: Spread, Rest and Default Parameters

**File:** `05_spread_rest_default.js`

**Aim:** To expand arrays and objects using `...`, collect extra arguments and provide default parameter values.

| Concept | Description |
|---|---|
| Spread `...` | Expands an array or object for copying, merging or passing arguments |
| Rest `...` | Collects remaining arguments into an array |
| Default parameters | Are used when an argument is `undefined` |

**Output:**

```text
basket: [ 'apple', 'banana', 'mango', 'carrot', 'peas' ]
original: [ 'apple', 'banana' ] | copy: [ 'apple', 'banana', 'grapes' ]
max: 9 | min: 2
updated: { name: 'Aman', age: 21, city: 'Delhi' }
sum(1, 2, 3) = 6
sum(10, 20, 30, 40) = 100
A, B and 3 more
Hello, Guest!
Hello, Saanvi!
Welcome, Saanvi!
Hi, Guest!
area(5) = 25 | area(5, 2) = 10
```

**Explanation:** Spreading an array creates a shallow copy, so changing the copy does not change the original array. In `{ ...base, age: 21 }`, the later property overrides the earlier value.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.6 Program 6: Classes and Inheritance

**File:** `06_classes.js`

**Aim:** To create classes using constructors, getters, setters, static members, private fields and inheritance.

| Concept | Description |
|---|---|
| `constructor` | Runs when an object is created using `new` |
| `get` / `set` | Properties that execute code when read or written |
| `static` | Belongs to the class rather than individual objects |
| `#id` | Private field accessible only inside the class |
| `extends` / `super` | Used for inheritance and calling the parent constructor or method |

**Output:**

```text
Hi, I am Aman, 25 years old.
Hi, I am Riya, 17 years old. I study Computer Science.
p.id: 1 | s.id: 2
p.isAdult: true | s.isAdult: false
Total people created: 2
s instanceof Student: true | s instanceof Person: true
typeof Person: function
Error: Age cannot be negative
```

**Explanation:** `typeof Person` returns `function` because classes are built on top of JavaScript's function mechanism. `s instanceof Person` returns `true` because the `Student` class extends the `Person` class.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.7 Program 7: Promises and Async / Await

**File:** `07_promises_async.js`

**Aim:** To handle asynchronous operations using promise chains, `async` / `await`, `Promise.all()` and `Promise.race()`.

| Concept | Description |
|---|---|
| `then` / `catch` | Chains promise steps and handles rejected promises |
| `async` / `await` | Makes asynchronous code easier to read; errors can be handled using `try` / `catch` |
| `Promise.all()` | Runs promises in parallel and waits for all of them to finish |
| `Promise.race()` | Returns the result of whichever promise finishes first |

**Output:**

```text
1. Promise chain
   got { id: 1, name: 'User1' }
   next step with id 1

2. async / await
   got { id: 2, name: 'User2' }
   caught: Invalid user id: -1

3. Promise.all (parallel)
   results: [ 'A', 'B', 'C' ] | finished in about 300 ms: true

4. Promise.race
   winner: fast

Done
```

**Explanation:** `fetchUser(-1)` rejects the promise, and the rejection is handled using `try` / `catch`, just like a normal error.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.8 Program 8: Set, Map, Iterators, Generators and Newer Operators

**File:** `08_map_set_generators.js`

**Aim:** To use new collection types, iterate using `for...of`, create sequences using generators and use optional chaining and nullish coalescing.

| Concept | Description |
|---|---|
| `Set` | Stores unique values; `[...new Set(array)]` removes duplicates |
| `Map` | Stores key-value pairs where keys can be of any type |
| `for...of` | Loops over arrays, strings, Sets, Maps and other iterables |
| Generator `function*` | Produces values one at a time using `yield` |
| `?.` and `??` | Provide safe property access and default values for `null` or `undefined` |

**Output:**

```text
Set: Set(4) { 1, 2, 3, 4 } | size: 4 | has 3: true
unique array: [ 'a', 'b', 'c' ]
Map size: 3 | get 42: answer
   entry: name => Aman
   entry: 42 => answer
   entry: true => yes
   char: E
   char: S
   char: 6
   maths: 90
   science: 85
generator: [ 1, 2, 3, 4, 5 ]
ids: 1 2 3
range: [ 1, 2, 3, 4 ]
city: Dehradun
phone: undefined
visits with ||: 10
visits with ??: 0
```

**Explanation:** `user.visits || 10` returns `10` because `0` is considered falsy. However, `user.visits ?? 10` correctly keeps the value `0`. The operators `?.` and `??` were introduced after ES6 as part of later JavaScript updates.

**Output Screenshot:** Insert the terminal screenshot here.

### 5.9 Program 9: Modules (`import` and `export`)

**Files:**
- `09_math_module.mjs`
- `09_modules_main.mjs`

**Aim:** To divide code into separate files and share values between them.

| Concept | Description |
|---|---|
| `export` | Makes a value, function or class available to other files |
| `export default` | Defines the main default export of a module |
| `import { a, b }` | Imports named exports; `multiply as times` renames an imported function |
| `import * as Lib` | Imports all exports as one object |

**Output:**

```text
PI = 3.14159
add(2, 3) = 5
times(4, 5) = 20
circleArea(2) = 12.57
history: [ '10 add 5 = 15', '3 multiply 7 = 21' ]
names exported by the module: [ 'PI', 'add', 'circleArea', 'default', 'multiply' ]
```

**Explanation:** Files with the `.mjs` extension are treated as ES modules by Node.js. The names in the last line include `default`, which represents the exported `Calculator` class.

**Output Screenshot:** Insert the terminal screenshot here.

## 6. Comparison: Old JavaScript vs ES6

| Task | Before ES6 | With ES6 |
|---|---|---|
| Variables | `var` (function scope) | `let` / `const` (block scope) |
| Functions | `function (a, b) { return a + b; }` | `(a, b) => a + b` |
| Strings | `"Hi " + name + "!"` | `` `Hi ${name}!` `` |
| Reading object values | `var n = obj.name; var c = obj.city;` | `const { name, city } = obj;` |
| Copy / merge | `Object.assign({}, a, b)` | `{ ...a, ...b }` |
| Objects with behaviour | Constructor functions and prototypes | `class` with `extends` |
| Asynchronous code | Nested callbacks | Promises and `async` / `await` |
| Sharing code | Global variables or script tags | `import` / `export` |

## 7. Problems Faced and Solutions

| Problem | Cause | Solution |
|---|---|---|
| `Cannot use import statement outside a module` | Node.js treats `.js` files as CommonJS by default in this setup | Use the `.mjs` extension or add `"type": "module"` to `package.json` |
| `Assignment to constant variable` | A `const` variable was reassigned | Use `let` if the value needs to change |
| `Cannot access 'x' before initialization` | A `let` / `const` variable was used before declaration | Declare the variable before using it |
| Arrow function printed `undefined` for `this.name` | Arrow functions do not have their own `this` | Use a regular method when the object's `this` is required |
| Returning an object from an arrow function gave `undefined` | `{ }` was interpreted as a function body | Wrap the object in parentheses: `() => ({ ... })` |
| `node` is not recognized | Node.js is not installed or is missing from PATH | Install Node.js and restart VS Code |

*Note: Keep only the problems that you actually faced during implementation.*

## 8. Testing

| Test | Expected Result |
|---|---|
| Run each program using `node <file>` | Runs without errors and prints the expected output |
| Run `node run_all.js` | All nine programs run one after another |
| Try `PI = 3` on a `const` variable | `TypeError: Assignment to constant variable.` |
| Use a `let` variable before its declaration | `ReferenceError` due to the temporal dead zone |
| Set a negative age in Program 6 | `Error: Age cannot be negative` |

## 9. Limitations and Future Scope

### Current Limitations

- The programs are small demonstrations and mainly run in the terminal. Program 9 does not run directly in the browser console.
- Older browsers may not support all ES6 features without a tool such as Babel.
- Promise timings use fixed delays instead of real network requests.

### Possible Improvements

- Use real asynchronous operations, such as `fetch()` calls to an API, in the promises program.
- Add a browser page that loads modules using `<script type="module">`.
- Cover additional features such as `Symbol`, `WeakMap`, proxies, and array methods such as `flat()` and `find()`.
- Bundle and transpile the code using Babel and a bundler.

## 10. Conclusion

This experiment demonstrated the main ES6 features through nine runnable programs. `let` and `const` improved variable scoping compared to `var`. Arrow functions, template literals, destructuring, spread, rest and default parameters made JavaScript code shorter and clearer.

Classes provided a cleaner syntax for inheritance, while promises and `async` / `await` made asynchronous programming easier to understand. Modules allowed code to be divided across multiple files.

Together, these features make modern JavaScript easier to write, read, organise and maintain.