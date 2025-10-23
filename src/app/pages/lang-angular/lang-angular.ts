import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
  q: string;
  a: string;
}
@Component({
  selector: 'app-lang-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-angular.html',
  styleUrls: ['./lang-angular.css']
})
export class LangAngular {

  qaData: QA[] = [
    { q: 'What is Angular?', a: 'A TypeScript-based framework for building single-page applications.' },
    { q: 'What are components?', a: 'The basic UI building blocks with templates, styles, and logic.' },
    { q: 'What is data binding?', a: 'Synchronizing data between the model and the view.' },
    { q: 'What is AngularJS?', a: 'AngularJS is the first version of Angular (v1.x), a JavaScript-based framework for building dynamic single-page applications using MVC architecture.' },
  { q: 'What is Angular?', a: 'Angular is a TypeScript-based, modern framework for building scalable and high-performance single-page applications (SPA). It is the successor to AngularJS.' },
  { q: 'What is npm install and why do we use it?', a: 'npm install is used to download and install dependencies (packages) required for a project from the npm registry. In Angular, it is used to install Angular CLI, libraries, and modules.' },
  { q: 'What is bootstrapping in Angular?', a: 'Bootstrapping is the process of initializing or starting an Angular application. It involves loading the root module (AppModule) and root component (AppComponent) to start the app.' },
  { q: 'What are Angular directives?', a: 'Directives are instructions in the DOM. They can modify behavior or appearance. There are three types: \n1. Component directives – define components\n2. Structural directives – change DOM structure (e.g., *ngIf, *ngFor)\n3. Attribute directives – change appearance/behavior of elements (e.g., [ngStyle], [ngClass])' },
  { q: 'What is a component in Angular?', a: 'A component is a basic building block of an Angular app that contains HTML template, CSS styles, and TypeScript logic. Components interact through @Input() and @Output() decorators.' },
  { q: 'What is component interaction?', a: 'Component interaction is communication between components. Types include:\n1. Parent to Child (@Input)\n2. Child to Parent (@Output + EventEmitter)\n3. Sibling via shared service\n4. ViewChild/ViewChildren references' },
  { q: 'What is Angular routing?', a: 'Routing allows navigation between different components or pages without refreshing the browser. Angular Router handles URL mapping to components.' },
  { q: 'What are Angular services?', a: 'Services are singleton objects used to share data, logic, or functions across components. They promote code reusability and are typically injected using Dependency Injection.' },
  { q: 'What is an Observable in Angular?', a: 'An Observable is a stream of data that can be observed over time, provided by RxJS. It allows asynchronous operations like HTTP requests to be handled reactively.' },
  { q: 'What is a Promise in Angular?', a: 'A Promise represents a single future value or error. It is used for asynchronous operations but cannot handle multiple values over time like Observables.' },
  { q: 'What is lazy loading in Angular?', a: 'Lazy loading is a technique to load modules only when they are needed, reducing initial load time and improving performance.' },
  { q: 'What are Angular forms and their types?', a: 'Angular provides two types of forms:\n1. Template-driven forms – simple, defined in HTML template, suitable for simple scenarios.\n2. Reactive forms – more robust, defined in TypeScript, provides full control and validation logic.' },
  { q: 'What are Angular lifecycle hooks?', a: 'Lifecycle hooks are methods that allow developers to tap into key events of a component or directive, like creation, update, and destruction. Examples: ngOnInit, ngOnChanges, ngOnDestroy.' },
  { q: 'What is JIT vs AOT compilation in Angular?', a: 'JIT (Just-in-Time) compiles the app in the browser at runtime.\nAOT (Ahead-of-Time) compiles the app during build time, leading to faster rendering and smaller bundle size.' },
  { q: 'Difference between find() vs filter() in JavaScript?', a: 'find() returns the first element matching a condition.\nfilter() returns an array of all elements matching a condition.' },
  { q: 'What are directives?', a: 'Instructions in the DOM that change its appearance or behavior, like *ngIf and *ngFor.' },
  { q: 'What are services?', a: 'Reusable classes for sharing data or logic across components.' },
  { q: 'What is dependency injection?', a: 'A design pattern where Angular automatically provides dependencies to classes.' },
  { q: 'What are modules?', a: 'Containers for related components, directives, pipes, and services.' },
  { q: 'What is Angular CLI?', a: 'Command-line interface tool to generate and manage Angular projects.' },
  { q: 'What is RxJS?', a: 'Reactive programming library for handling asynchronous data streams.' },
  { q: 'What are pipes?', a: 'Transform data in templates, e.g., date, uppercase, or custom pipes.' },
  { q: 'What is routing in Angular?', a: 'Mechanism to navigate between views using the Router module.' },
  { q: 'What is change detection?', a: 'The process Angular uses to update the view when the model changes.' },
  { q: 'What are forms in Angular?', a: 'Template-driven or reactive forms for handling user input and validation.' },
  { q: 'What is lazy loading?', a: 'Loading feature modules only when needed to reduce initial load time.' },
  { q: 'What is Angular Universal?', a: 'Server-side rendering solution for Angular apps for better SEO and performance. '},
  { q: 'What are the types of data binding in Angular?', a: 'There are four types: Interpolation, Property Binding, Event Binding, and Two-Way Binding.' },
  { q: 'What is a Single Page Application (SPA)?', a: 'A SPA is a web application that loads a single HTML page and dynamically updates content without refreshing the entire page, providing a faster and smoother user experience.' },
  
  // TypeScript
  { q: 'What is TypeScript?', a: 'TypeScript is a superset of JavaScript that adds static types and compile-time checking. It helps catch errors early and makes code more maintainable. Angular is built using TypeScript.' },
  { q: 'What is Interpolation?', a: 'Interpolation allows you to display component data in the template using {{ }} syntax. Example: <h1>{{title}}</h1>.' },
  
  { q: 'What is Property Binding?', a: 'Property binding sets values of HTML element properties dynamically. Example: <img [src]="imageUrl">.' },
  
  { q: 'What is Event Binding?', a: 'Event binding listens to events like clicks and executes a component method. Example: <button (click)="onClick()">Click Me</button>.' },
  
  { q: 'What is Two-Way Binding?', a: 'Two-way binding allows simultaneous data update between model and view using [(ngModel)]. Example: <input [(ngModel)]="username">.' },
] 
  
}
