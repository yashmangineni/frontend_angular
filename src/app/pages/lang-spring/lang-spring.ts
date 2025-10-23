import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface QA { q: string; a: string; }

@Component({
  selector: 'app-lang-spring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-spring.html',
  styleUrls: ['./lang-spring.css']
})
export class LangSpring {
  qaData: QA[] = [
    { "q": "What is Spring Framework?", "a": "Spring is a lightweight, open-source Java framework that simplifies enterprise application development by providing features like Dependency Injection (DI) and Aspect-Oriented Programming (AOP)." },
    { "q": "What are the main features of Spring?", "a": "Lightweight, Inversion of Control (IoC), Aspect-Oriented Programming (AOP), Transaction Management, Integration with frameworks, and MVC support." },
    { "q": "What is Dependency Injection (DI)?", "a": "A design pattern where the Spring container injects required dependencies into a class instead of the class creating them. This reduces tight coupling." },
    { "q": "What is Inversion of Control (IoC)?", "a": "spring framework control of managing the bean life cycle,configuration,bean dependencies. it allows for loose coupling between beans ,promotes modularity and smplifies  the configuration and management of application behaviour" },
    { "q": "What are Spring Beans?", "a": "Spring Beans are objects that are managed by the Spring IoC container. They are defined in configuration or annotated with @Component, @Service, etc." },
    { "q": "What is the difference between BeanFactory and ApplicationContext?", "a": "BeanFactory is the basic container with lazy loading. ApplicationContext is an advanced container that supports AOP, events, internationalization, and eager loading." },
    { "q": "What are the types of Spring Bean scopes?", "a": "singleton (default), prototype, request, session, application, and websocket (in Spring Web)." },
    { "q": "What is Spring MVC?", "a": "A web framework that follows the Model-View-Controller pattern. It uses DispatcherServlet as a front controller to handle all web requests." },
    { "q": "What is the role of @Autowired annotation?", "a": "@Autowired is used for automatic dependency injection. Spring automatically resolves and injects the required bean." },
    { "q": "What is AOP in Spring?", "a": "Aspect-Oriented Programming separates cross-cutting concerns like logging, security, and transactions from business logic using aspects, advice, and joinpoints." },
    { "q": "What is Spring Boot and why is it used?", "a": "Spring Boot is built on Spring and provides auto-configuration, starter dependencies, and embedded servers. It simplifies setup and speeds up development." },
    { "q": "What are advantages of Spring Boot over Spring?", "a": "Auto-configuration, starter dependencies, embedded servers, Actuator for monitoring, and minimal XML configuration." },
    { "q": "What is the difference between @Component, @Service, and @Repository?", "a": "@Component is a generic stereotype. @Service is used in the business layer. @Repository is used in the persistence layer (DAO)." },
    { "q": "What is @RestController in Spring Boot?", "a": "It is a combination of @Controller and @ResponseBody, used to build REST APIs that return JSON or XML directly." },
    { "q": "What is the use of Spring Boot Actuator?", "a": "Actuator provides production-ready features like monitoring and management endpoints (health, metrics, env, etc.)." },
    { "q": "How does Spring Boot handle external configuration?", "a": "It uses application.properties or application.yml, environment variables, command-line arguments, and config servers." },
    { "q": "What is Spring Data JPA?", "a": "Spring Data JPA simplifies database access using JPA. It provides interfaces like CrudRepository and JpaRepository to reduce boilerplate code." },
    { "q": "What is the difference between @RequestParam and @PathVariable?", "a": "@RequestParam extracts query parameters (e.g., /users?id=1). @PathVariable extracts values from the URI path (e.g., /users/1)." },
    { "q": "How does Spring Boot handle exception handling?", "a": "It uses @ControllerAdvice and @ExceptionHandler for centralized exception handling across the application." },
    { "q": "What is Spring Security?", "a": "Spring Security is a framework for authentication and authorization. It provides features like login forms, role-based access, CSRF protection, OAuth2, and JWT." }
  ];
}


