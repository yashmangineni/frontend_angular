import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface QA { q: string; a: string; }

@Component({
  selector: 'app-lang-springboot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-springboot.html',
  styleUrls: ['./lang-springboot.css']
})
export class LangSpringBoot {
  qaData: QA[] = [
    { q: 'What is Spring Boot?', a: 'Spring Boot simplifies Spring application setup with auto-configuration, starters, and embedded servers.' },
    { q: 'What are Spring Boot Starters?', a: 'Pre-configured dependencies for common use cases like web, data, security.' },
    { q: 'How does auto-configuration work?', a: 'It configures beans automatically based on classpath contents and properties.' },
    { q: 'What is application.properties?', a: 'A file to externalize configuration like server.port, datasource settings, etc.' },
    { q: 'Embedded server support?', a: 'Spring Boot supports embedded Tomcat, Jetty, and Undertow for standalone apps.' },
    
    { 
      "q": "What are the advantages of Spring Boot?", 
      "a": "No XML configuration, embedded servers, starter dependencies, Actuator for monitoring, faster development, and easy integration with databases and security." 
    },
    { 
      "q": "What is an API?", 
      "a": "API (Application Programming Interface) is a set of rules and definitions that allows software components to communicate with each other. It acts as a contract between client and server." 
    },
    { 
      "q": "What is a REST API?", 
      "a": "REST (Representational State Transfer) API is a stateless architecture that uses HTTP methods (GET, POST, PUT, DELETE) to access and manipulate resources, usually represented in JSON or XML." 
    },
    { 
      "q": "How is a REST API different from SOAP?", 
      "a": "REST is lightweight, stateless, and commonly uses JSON, while SOAP is a strict protocol using XML, more complex, and supports enterprise-level features like WS-Security and ACID transactions." 
    },
    { 
      "q": "How do you create an instance of a class in Spring Boot?", 
      "a": "In Spring Boot, instances (beans) are created and managed by the IoC container. Instead of using 'new', you annotate classes with @Component, @Service, or @Repository and let Spring manage them." 
    },
    { 
      "q": "What is Dependency Injection in Spring Boot?", 
      "a": "Dependency Injection is a design pattern where the Spring container provides required class dependencies automatically instead of creating them manually. This makes the application loosely coupled." 
    },
    { 
      "q": "What is @Autowired annotation in Spring Boot?", 
      "a": "@Autowired is used for automatic dependency injection. Spring automatically identifies the required bean and injects it into the dependent class." 
    },
    { 
      "q": "What is the difference between new keyword and @Autowired in Spring Boot?", 
      "a": "Using 'new' creates a local instance not managed by Spring, while @Autowired lets Spring create and manage the bean, enabling dependency injection and lifecycle management." 
    },
    { 
      "q": "What is the role of the IoC container in Spring Boot?", 
      "a": "The IoC (Inversion of Control) container creates, manages, and injects beans. It controls the lifecycle of objects and resolves dependencies at runtime." 
    },
    { 
      "q": "What is the use of annotations in Spring Boot?", 
      "a": "Annotations in Spring Boot provide metadata that tells the Spring container how to configure and manage beans, dependencies, and application behavior. They reduce XML configuration." 
    },
    { 
      "q": "What is @SpringBootApplication?", 
      "a": "@SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan. It marks the main class of a Spring Boot application." 
    },
    { 
      "q": "What is @Component in Spring?", 
      "a": "@Component is a generic stereotype annotation for any Spring-managed bean. Classes annotated with @Component are automatically detected and registered as beans." 
    },
    { 
      "q": "What is @Service in Spring?", 
      "a": "@Service is a specialization of @Component used to mark classes that hold business logic. It improves readability and makes the intention clearer." 
    },
    { 
      "q": "What is @Repository in Spring?", 
      "a": "@Repository is a specialization of @Component used for DAO (Data Access Object) classes. It also provides automatic exception translation for database errors." 
    },
    { 
      "q": "What is @Controller in Spring MVC?", 
      "a": "@Controller is used to define a web controller that handles HTTP requests and returns views (HTML pages)." 
    },
    { 
      "q": "What is @RestController in Spring Boot?", 
      "a": "@RestController is a combination of @Controller and @ResponseBody. It is used to build REST APIs where methods return JSON or XML directly." 
    },
    { 
      "q": "What is @Autowired in Spring?", 
      "a": "@Autowired is used to automatically inject dependencies into a class without using the 'new' keyword. It works by type matching or by qualifier." 
    },
    { 
      "q": "What is @Qualifier in Spring?", 
      "a": "@Qualifier is used with @Autowired to specify which bean should be injected when multiple beans of the same type exist." 
    },
    { 
      "q": "What is @Configuration in Spring?", 
      "a": "@Configuration is used to mark a class as a source of bean definitions. Methods annotated with @Bean inside this class define beans managed by Spring." 
    },
    { 
      "q": "What is @Bean in Spring?", 
      "a": "@Bean is used inside a @Configuration class to define and return a bean that will be managed by Spring's IoC container." 
    },
    { 
      "q": "What is @Value in Spring?", 
      "a": "@Value is used to inject values from property files, environment variables, or expressions into Spring beans." 
    },
    { 
      "q": "What is @PropertySource in Spring?", 
      "a": "@PropertySource is used to declare property files that should be loaded into the Spring Environment." 
    },
    { 
      "q": "What is @Profile in Spring Boot?", 
      "a": "@Profile is used to define beans that should only be active in specific environments (e.g., dev, test, prod)." 
    },
    { 
      "q": "What is @EnableAutoConfiguration in Spring Boot?", 
      "a": "@EnableAutoConfiguration tells Spring Boot to automatically configure beans based on the dependencies present in the classpath." 
    }
  ];
}


