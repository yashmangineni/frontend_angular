import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
  q: string;
  a: string;
}
@Component({
  selector: 'app-js',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './js.html',
  styleUrls: ['./js.scss']
})
export class Js {
  qaData: QA[] = [
    { q: 'What is JavaScript?', a: 'JavaScript is a lightweight, interpreted programming language used mainly for web development to make web pages interactive.' },
  { q: 'What are variables in JavaScript?', a: 'Variables are containers to store data. Declared using var, let, or const. Example: let name = "John";' },
  { q: 'Difference between var, let, and const?', a: 'var is function-scoped, let and const are block-scoped. const cannot be reassigned.' },
  { q: 'What are data types in JavaScript?', a: 'Primitive: string, number, boolean, null, undefined, symbol, bigint. Non-primitive: objects, arrays, functions.' },
  { q: 'What are functions?', a: 'Functions are reusable blocks of code that perform a task. Example: function sum(a, b){ return a+b; }' },
  { q: 'What are operators in JavaScript?', a: 'Operators are symbols to perform operations: arithmetic (+,-,*,/), comparison (==,===), logical (&&,||), assignment (=,+=).' },
  { q: 'What is the difference between == and ===?', a: '== checks equality with type coercion, === checks equality without type coercion (strict equality).' },
  { q: 'What are if, else if, else statements?', a: 'Used to execute code based on conditions. Example: if(condition){...} else {...}' },
  { q: 'What is the switch statement?', a: 'Switch allows executing code based on multiple possible values of a variable.' },
  { q: 'What are loops in JavaScript?', a: 'Loops allow repeating code: for, while, do-while. Example: for(let i=0;i<5;i++){ console.log(i); }' },
  { q: 'Difference between for and for...in?', a: 'for loops iterate over indices; for...in iterates over keys of objects.' },
  { q: 'Difference between for...of and for...in?', a: 'for...of iterates over values of iterable objects; for...in iterates over property names (keys).' },
  { q: 'What are arrow functions?', a: 'Shorter syntax for functions: const sum = (a,b) => a+b;' },
  { q: 'What are anonymous functions?', a: 'Functions without a name, often used as arguments: setTimeout(function(){...},1000);' },
  { q: 'What are IIFE (Immediately Invoked Function Expressions)?', a: 'Functions that run as soon as they are defined: (function(){ console.log("Hi"); })();' },
  { q: 'What are closures?', a: 'A closure is a function that remembers variables from its outer scope even after the outer function has executed.' },
  { q: 'What is the difference between function declaration and function expression?', a: 'Declaration: function sum(){} (hoisted). Expression: const sum = function(){} (not hoisted).' },
  { q: 'What are JavaScript objects?', a: 'Objects store key-value pairs. Example: const obj = {name:"John", age:30};' },
  { q: 'What are arrays?', a: 'Arrays store ordered lists. Example: const arr = [1,2,3];' },
  { q: 'Difference between shallow copy and deep copy?', a: 'Shallow copy duplicates top-level only; deep copy duplicates all levels of an object.' },
  { q: 'How to iterate over objects?', a: 'Using for...in loop or Object.keys(), Object.values(), Object.entries().' },
  { q: 'How to destructure arrays and objects?', a: 'Array: const [a,b] = [1,2]; Object: const {name,age} = obj;' },
  { q: 'What are callbacks?', a: 'Functions passed as arguments to be executed later: setTimeout(()=>{...},1000);' },
  { q: 'What are promises?', a: 'Promises represent future completion/failure of async tasks with states: pending, fulfilled, rejected.' },
  { q: 'What is async/await?', a: 'Syntactic sugar over promises for cleaner async code. Example: const result = await fetchData();' },
  { q: 'What is the event loop?', a: 'Event loop handles async tasks, executing callbacks from the queue when call stack is empty.' },
  { q: 'What is the difference between microtasks and macrotasks?', a: 'Microtasks (like promises) run before the next event loop tick. Macrotasks (like setTimeout) run in the next tick.' }
  ]
}
