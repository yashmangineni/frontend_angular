import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
	q: string;
	a: string;
  }
@Component({
	selector: 'app-lang-python',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './lang-python.html',
	styleUrls: ['./lang-python.css'] 
})
export class LangPython {

	qaData: QA[] = [
		{ q: 'What is Python?', a: 'Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity.' },
      { q: 'What are Python data types?', a: 'Common data types include int, float, str, list, tuple, set, dict, bool, NoneType.' },
      { q: 'Difference between list and tuple?', a: 'List is mutable, tuples are immutable. Lists have more methods, tuples are faster and can be used as keys in dictionaries.' },
      { q: 'Difference between set and frozenset?', a: 'Set is mutable, frozenset is immutable. Both store unordered unique elements.' },
      { q: 'What is a Python function?', a: 'A block of reusable code that performs a specific task, defined using the def keyword.' },
      { q: 'What is a Python class?', a: 'A blueprint for creating objects, supporting encapsulation, inheritance, and polymorphism.' },
      { q: 'What are Python decorators?', a: 'Functions that modify the behavior of other functions or methods without changing their code.' },
      { q: 'What is Python inheritance?', a: 'A feature where one class (child) can acquire properties and methods from another class (parent).' },
      { q: 'Difference between shallow copy and deep copy?', a: 'Shallow copy copies only references to objects, deep copy copies objects recursively.' },
      { q: 'What is Python lambda?', a: 'Anonymous small function defined using lambda keyword, typically used for short operations.' },
      { q: 'Difference between list comprehension vs generator expression?', a: 'List comprehension returns a full list in memory, generator expression returns items lazily and saves memory.' },
      { q: 'What are Python modules and packages?', a: 'Module: a .py file containing Python code. Package: a directory of modules with an __init__.py file.' },
      { q: 'What are Python iterators and generators?', a: 'Iterator: object with __next__() method to iterate over. Generator: function that yields values lazily using yield.' },
      { q: 'Difference between Python is and ==?', a: 'is checks identity (same object), == checks value equality.' },
      { q: 'What is Python GIL?', a: 'Global Interpreter Lock, ensures only one thread executes Python bytecode at a time, affecting multi-threading.' },
      { q: 'Difference between Python range and xrange?', a: 'In Python 3, range behaves like xrange from Python 2, generating numbers lazily.' },
      { q: 'What is Python exception handling?', a: 'Using try, except, else, finally blocks to handle runtime errors gracefully.' },
      { q: 'Difference between Python pass, continue, break?', a: 'pass does nothing, continue skips current loop iteration, break exits the loop.' },
      { q: 'What is Python file handling?', a: 'Opening, reading, writing, and closing files using open(), read(), write(), and close() methods.' },
      { q: 'What are Python built-in functions?', a: 'Functions like len(), type(), sum(), max(), min(), range(), sorted(), map(), filter(), zip(), etc.' },
      { q: 'Difference between Python map, filter, reduce?', a: 'map applies a function to each item, filter selects items based on a condition, reduce accumulates values.' },
      { q: 'What is Python comprehension?', a: 'Concise way to create lists, sets, or dictionaries using a single line of code.' },
      { q: 'Difference between Python global, local, and nonlocal variables?', a: 'Global: declared outside function, Local: inside function, Nonlocal: refers to outer function variables.' },
      { q: 'What are Python magic methods?', a: 'Special methods like __init__, __str__, __repr__, __len__, __add__ that define object behavior.' },
      { q: 'Difference between Python str, repr?', a: 'str is readable representation, repr is unambiguous for developers.' },
      { q: 'What is Python property?', a: 'Used to manage getters and setters in classes using @property decorator.' },
      { q: 'What is Python duck typing?', a: 'If an object behaves like a type (e.g., iterable), it can be used regardless of its actual class.' },
      { q: 'Difference between Python deep vs shallow equality?', a: 'Shallow compares object references, deep compares actual contents recursively.' },
      { q: 'What are Python threads and multiprocessing?', a: 'Threads share memory space; multiprocessing runs processes in separate memory space.' },
      { q: 'Difference between Python yield vs return?', a: 'return exits a function with a value, yield produces a value and maintains function state for next call.' },
      { q: 'What is Python context manager?', a: 'Manages resources using with statement, automatically closing or cleaning up.' },
      { q: 'What are Python sets?', a: 'Unordered collection of unique elements, supports set operations like union, intersection.' },
      { q: 'Difference between Python shallow copy vs deep copy?', a: 'Shallow copy copies references only, deep copy recursively copies all nested objects.' },
      { q: 'What are Python metaclasses?', a: 'Classes of classes, used to control class creation and behavior dynamically.' },
      { q: 'Difference between Python mutable vs immutable?', a: 'Mutable objects can change (list, dict, set), immutable cannot (str, tuple, int, float).' },
      { q: 'Difference between Python append vs extend?', a: 'append adds a single element, extend concatenates an iterable.' },
      { q: 'Difference between Python find vs index?', a: 'find returns -1 if not found, index raises ValueError.' },
      { q: 'Difference between Python pop vs remove?', a: 'pop removes by index and returns value, remove deletes by value.' },
      { q: 'What are Python packages?', a: 'A collection of modules in a directory containing __init__.py file.' },
      { q: 'Difference between Python mutable default arguments?', a: 'Mutable defaults persist across function calls, causing potential bugs.' },
      { q: 'What is Python serialization (pickle)?', a: 'Converting Python objects to a byte stream for storage or transmission.' },
      { q: 'What is Python deserialization (unpickle)?', a: 'Converting a byte stream back to Python objects.' },
      { q: 'Difference between Python list vs array?', a: 'list can store mixed types, array stores only same type and is more memory efficient.' },
      { q: 'Difference between Python append() vs insert()?', a: 'append adds at end, insert allows specifying index position.' },
      { q: 'Difference between Python is vs ==?', a: 'is checks object identity, == checks value equality.' },
      { q: 'Difference between Python remove() vs del?', a: 'remove deletes by value, del deletes by index or variable.' },
      { q: 'Difference between Python staticmethod vs classmethod?', a: 'staticmethod doesn’t access class/instance, classmethod receives class as first argument.' },
      { q: 'Difference between Python *args vs **kwargs?', a: '*args passes variable positional arguments, **kwargs passes variable keyword arguments.' },
      { q: 'Difference between Python iter() and next()?', a: 'iter() creates an iterator, next() gets next item from iterator.' },
      { q: 'What is Python monkey patching?', a: 'Dynamically changing classes or modules at runtime.' },
      { q: 'Difference between Python repr() vs str()?', a: 'repr() gives developer-friendly representation, str() gives user-friendly representation.' },
      { q: 'Difference between Python find() vs index() in strings?', a: 'find() returns -1 if not found, index() raises ValueError.' },
      { q: 'Difference between Python filter vs map?', a: 'map applies a function to all items, filter returns items meeting a condition.' },
      { q: 'Difference between Python pass vs continue vs break?', a: 'pass does nothing, continue skips current iteration, break exits loop.' },
      { q: 'Difference between Python JIT and interpreted code?', a: 'Python is interpreted; JIT compiles code at runtime to improve speed.' },
      { q: 'Difference between Python finally vs else in exception?', a: 'else runs if no exception, finally always runs.' },
      { q: 'What is Python lazy loading?', a: 'Loading data or objects only when needed, e.g., generators or importlib.' },
      { q: 'What are Python hooks?', a: 'Custom functions that are automatically called by a library or framework at certain events.' },
      { q: 'Difference between Python find() vs filter()?', a: 'find searches in a string, filter works on iterables returning elements meeting a condition.' }

	];
}


