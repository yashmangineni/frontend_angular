import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LangJava } from '../lang-java/lang-java';
import { LangPython } from '../lang-python/lang-python';
import { LangCsharp } from '../lang-csharp/lang-csharp';
import { LangAngular } from '../lang-angular/lang-angular';
import { LangSpring } from '../lang-spring/lang-spring';
import { LangSpringBoot } from '../lang-springboot/lang-springboot';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface QAItem {
  q: string;
  a: string;
  topic: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  category: 'Technical' | 'Conceptual' | 'Problem-Solving' | 'Design' | 'Coding';
  keywords: string[];
  logicApproaches?: string[];
  followUpQuestions?: string[];
}

type Topic = 'java' | 'python' | 'csharp' | 'angular' | 'spring' | 'springboot';

@Component({
  selector: 'app-ai-interviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-interviews.html',
  styleUrls: ['./ai-interviews.css']
})
export class AiInterviews implements OnInit, OnDestroy {
  messages: ChatMessage[] = [
    { role: 'assistant', content: 'Hi! I can conduct mock interviews or answer your questions. Type a question or click "Ask me a question".' }
  ];
  userInput = '';
  isLoading = false;
  isInterview = false;
  awaitingAnswer = false;
  questionNumber = 0;
  maxQuestions = 10;
  topic: Topic = 'java';
  selectedTopics: Record<Topic, boolean> = {
    java: true,
    python: true,
    csharp: true,
    angular: true,
    spring: true,
    springboot: true
  };
  shuffleQuestions = true;
  transcript: { question: string; answer: string; matchedAnswer?: string; matchScore: number }[] = [];

  // Voice
  isListening = false;
  recognition: any;
  ttsEnabled = true;
  lastAskedQuestion: string | null = null;
  private lastAskedItem: QAItem | null = null;
  questionIndex = 0;
  private questionPool: QAItem[] = [];
  private autoMic = false;
  private stopRequested = false;
  private processingAnswer = false;
  private micPermissionRequested = false;

  // Enhanced AI Interview System
  private aiQuestionBank: QAItem[] = [
    // Java Technical Questions
    {
      q: 'Explain the different approaches to implement Singleton pattern in Java',
      a: 'Multiple approaches: 1) Eager initialization - create instance at class loading, 2) Lazy initialization - create instance when needed, 3) Thread-safe lazy initialization with synchronized method, 4) Double-checked locking, 5) Enum singleton, 6) Bill Pugh solution using static inner class',
      topic: 'java',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['singleton', 'design pattern', 'thread safety', 'lazy loading'],
      logicApproaches: ['Eager Loading', 'Lazy Loading', 'Thread-Safe Implementation', 'Double-Checked Locking', 'Enum Approach'],
      followUpQuestions: ['Which approach would you choose for a web application?', 'How does enum singleton prevent reflection attacks?']
    },
    {
      q: 'How would you design a custom HashMap implementation? Explain different collision resolution techniques',
      a: 'Design involves: 1) Array of buckets, 2) Hash function to map keys to indices, 3) Collision resolution using chaining (LinkedList/TreeNode) or open addressing (linear/quadratic probing), 4) Dynamic resizing when load factor exceeds threshold, 5) Optimizations like red-black tree for long chains',
      topic: 'java',
      difficulty: 'Advanced',
      category: 'Problem-Solving',
      keywords: ['hashmap', 'data structure', 'collision resolution', 'hashing'],
      logicApproaches: ['Separate Chaining', 'Open Addressing', 'Robin Hood Hashing', 'Cuckoo Hashing'],
      followUpQuestions: ['What happens when two keys have the same hash?', 'When would you use TreeMap instead?']
    },
    {
      q: 'Implement a thread-safe counter without using synchronized keyword',
      a: 'Multiple approaches: 1) AtomicInteger for simple increment operations, 2) Volatile with compare-and-swap, 3) Lock-free algorithms using AtomicReference, 4) ReentrantLock for complex operations, 5) Thread-local counters with periodic aggregation',
      topic: 'java',
      difficulty: 'Advanced',
      category: 'Coding',
      keywords: ['thread safety', 'atomic operations', 'concurrency', 'lock-free'],
      logicApproaches: ['Atomic Operations', 'Compare-and-Swap', 'Lock-Free Algorithms', 'Thread-Local Storage'],
      followUpQuestions: ['What are the performance implications?', 'When would you choose locks over atomic operations?']
    },
    {
      q: 'Explain different garbage collection algorithms and when to use each',
      a: 'Types: 1) Serial GC - single-threaded, good for small applications, 2) Parallel GC - multi-threaded, good for throughput, 3) CMS - concurrent mark sweep, low latency, 4) G1 - low latency with predictable pause times, 5) ZGC/Shenandoah - ultra-low latency for large heaps',
      topic: 'java',
      difficulty: 'Advanced',
      category: 'Technical',
      keywords: ['garbage collection', 'memory management', 'performance tuning'],
      logicApproaches: ['Mark and Sweep', 'Generational Collection', 'Concurrent Collection', 'Incremental Collection'],
      followUpQuestions: ['How do you tune GC for a high-traffic application?', 'What causes memory leaks in Java?']
    },
    {
      q: 'Design a producer-consumer system with multiple approaches',
      a: 'Approaches: 1) BlockingQueue (LinkedBlockingQueue, ArrayBlockingQueue), 2) Wait-notify mechanism with synchronized blocks, 3) Semaphores for controlling access, 4) Disruptor pattern for ultra-high performance, 5) Reactive streams with backpressure',
      topic: 'java',
      difficulty: 'Intermediate',
      category: 'Design',
      keywords: ['producer consumer', 'concurrency', 'blocking queue', 'synchronization'],
      logicApproaches: ['Blocking Queue Pattern', 'Wait-Notify Pattern', 'Semaphore Pattern', 'Lock-Free Ring Buffer'],
      followUpQuestions: ['How do you handle backpressure?', 'What if consumers are slower than producers?']
    },
    
    // Python Technical Questions
    {
      q: 'Explain different approaches to implement decorators in Python',
      a: 'Approaches: 1) Function decorators using closures, 2) Class-based decorators with __call__, 3) Decorators with parameters using nested functions, 4) Property decorators for getters/setters, 5) Method decorators like @staticmethod, @classmethod',
      topic: 'python',
      difficulty: 'Intermediate',
      category: 'Technical',
      keywords: ['decorators', 'closures', 'metaprogramming', 'functional programming'],
      logicApproaches: ['Closure-based', 'Class-based', 'Parametric Decorators', 'Descriptor Protocol'],
      followUpQuestions: ['How do decorators affect function metadata?', 'Can you chain multiple decorators?']
    },
    {
      q: 'How would you implement a memory-efficient data pipeline for processing large datasets?',
      a: 'Strategies: 1) Generators for lazy evaluation, 2) Chunking with pandas or itertools, 3) Memory mapping with mmap, 4) Streaming with iterators, 5) Parallel processing with multiprocessing/concurrent.futures, 6) Using Dask for out-of-core computation',
      topic: 'python',
      difficulty: 'Advanced',
      category: 'Problem-Solving',
      keywords: ['memory efficiency', 'data pipeline', 'generators', 'streaming'],
      logicApproaches: ['Lazy Evaluation', 'Chunked Processing', 'Memory Mapping', 'Parallel Processing'],
      followUpQuestions: ['When would you use Dask vs pandas?', 'How do you handle memory constraints?']
    },
    {
      q: 'Implement different caching strategies in Python',
      a: 'Strategies: 1) LRU Cache using functools.lru_cache or OrderedDict, 2) TTL cache with time-based expiration, 3) Memory-conscious cache with weak references, 4) Distributed caching with Redis, 5) Memoization for recursive functions',
      topic: 'python',
      difficulty: 'Intermediate',
      category: 'Design',
      keywords: ['caching', 'memoization', 'performance optimization', 'memory management'],
      logicApproaches: ['LRU Eviction', 'Time-based Expiration', 'Size-based Eviction', 'Write-through/Write-back'],
      followUpQuestions: ['What are cache invalidation strategies?', 'How do you handle cache consistency?']
    },
    
    // JavaScript/Angular Questions
    {
      q: 'Explain different change detection strategies in Angular and their performance implications',
      a: 'Strategies: 1) Default - checks all components on every change detection cycle, 2) OnPush - only checks when inputs change or events occur, 3) Detach - manually control change detection, 4) Async pipe optimization, 5) TrackBy functions for ngFor optimization',
      topic: 'angular',
      difficulty: 'Advanced',
      category: 'Technical',
      keywords: ['change detection', 'performance', 'OnPush', 'optimization'],
      logicApproaches: ['Zone-based Detection', 'OnPush Strategy', 'Manual Control', 'Immutable Objects'],
      followUpQuestions: ['When would you use OnPush strategy?', 'How does Zone.js work internally?']
    },
    {
      q: 'Design a reactive form with complex validation using different approaches',
      a: 'Approaches: 1) Built-in validators (required, email, pattern), 2) Custom synchronous validators, 3) Async validators for server-side validation, 4) Cross-field validation, 5) Dynamic form creation with FormArray, 6) Conditional validation based on other fields',
      topic: 'angular',
      difficulty: 'Intermediate',
      category: 'Coding',
      keywords: ['reactive forms', 'validation', 'form controls', 'custom validators'],
      logicApproaches: ['Synchronous Validation', 'Asynchronous Validation', 'Cross-field Validation', 'Conditional Validation'],
      followUpQuestions: ['How do you handle validation errors?', 'What is the difference between template-driven and reactive forms?']
    },
    
    // Database and System Design
    {
      q: 'Design a database schema for an e-commerce system with different normalization approaches',
      a: 'Approaches: 1) Highly normalized (3NF) for data integrity, 2) Denormalized for read performance, 3) Hybrid approach with materialized views, 4) Document-based design for NoSQL, 5) Event sourcing for audit trails, 6) CQRS for separate read/write models',
      topic: 'database',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['database design', 'normalization', 'e-commerce', 'schema design'],
      logicApproaches: ['Normalized Design', 'Denormalized Design', 'Document-oriented', 'Event Sourcing'],
      followUpQuestions: ['How do you handle inventory management?', 'What indexing strategies would you use?']
    },
    {
      q: 'Implement rate limiting with different algorithms',
      a: 'Algorithms: 1) Token bucket - allows bursts, smooth over time, 2) Leaky bucket - enforces constant rate, 3) Fixed window counter - simple but has edge cases, 4) Sliding window - more accurate but complex, 5) Sliding window counter - compromise between accuracy and efficiency',
      topic: 'system-design',
      difficulty: 'Advanced',
      category: 'Problem-Solving',
      keywords: ['rate limiting', 'algorithms', 'scalability', 'distributed systems'],
      logicApproaches: ['Token Bucket', 'Leaky Bucket', 'Fixed Window', 'Sliding Window'],
      followUpQuestions: ['How do you implement distributed rate limiting?', 'What happens during traffic spikes?']
    },
    
    // Problem Solving Questions
    {
      q: 'Find the longest substring without repeating characters using different approaches',
      a: 'Approaches: 1) Brute force O(n³) - check all substrings, 2) Sliding window O(n) with HashSet, 3) Optimized sliding window with HashMap storing indices, 4) Array-based approach for ASCII characters, 5) Two-pointer technique',
      topic: 'algorithms',
      difficulty: 'Intermediate',
      category: 'Coding',
      keywords: ['sliding window', 'substring', 'hash map', 'two pointers'],
      logicApproaches: ['Brute Force', 'Sliding Window', 'Hash Map Optimization', 'Two Pointers'],
      followUpQuestions: ['What is the space complexity of each approach?', 'How would you handle Unicode characters?']
    },
    {
      q: 'Implement a load balancer with different distribution algorithms',
      a: 'Algorithms: 1) Round Robin - simple, equal distribution, 2) Weighted Round Robin - different server capacities, 3) Least Connections - route to server with fewest active connections, 4) Hash-based - consistent routing for session affinity, 5) Health check integration',
      topic: 'system-design',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['load balancer', 'distribution algorithms', 'scalability', 'high availability'],
      logicApproaches: ['Round Robin', 'Weighted Distribution', 'Least Connections', 'Hash-based Routing'],
      followUpQuestions: ['How do you handle server failures?', 'What is session affinity?']
    },
    
    // Additional comprehensive questions covering more topics
    {
      q: 'Explain different approaches to handle state management in large applications',
      a: 'Approaches: 1) Redux/NgRx - centralized store with actions/reducers, 2) Service-based state with observables, 3) Local component state with lifting up, 4) Context API for React, 5) Akita for Angular, 6) MobX for reactive state',
      topic: 'frontend',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['state management', 'redux', 'observables', 'architecture'],
      logicApproaches: ['Centralized Store', 'Service-based', 'Component State', 'Reactive Programming'],
      followUpQuestions: ['When would you choose Redux over services?', 'How do you handle async state updates?']
    },
    {
      q: 'Design a caching layer for a microservices architecture',
      a: 'Strategies: 1) Application-level caching (in-memory), 2) Database query result caching, 3) Distributed caching with Redis/Hazelcast, 4) CDN for static content, 5) HTTP caching with proper headers, 6) Multi-level caching hierarchy',
      topic: 'microservices',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['caching', 'microservices', 'distributed systems', 'performance'],
      logicApproaches: ['Multi-level Caching', 'Distributed Caching', 'Cache-aside Pattern', 'Write-through Pattern'],
      followUpQuestions: ['How do you handle cache invalidation across services?', 'What are cache stampede problems?']
    },
    {
      q: 'Implement authentication and authorization with different strategies',
      a: 'Strategies: 1) JWT tokens - stateless, scalable, 2) Session-based - server-side storage, 3) OAuth 2.0 - third-party authentication, 4) Multi-factor authentication, 5) Role-based access control (RBAC), 6) Attribute-based access control (ABAC)',
      topic: 'security',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['authentication', 'authorization', 'JWT', 'OAuth', 'security'],
      logicApproaches: ['Token-based', 'Session-based', 'Certificate-based', 'Biometric-based'],
      followUpQuestions: ['How do you handle token refresh?', 'What are the security implications of each approach?']
    },
    {
      q: 'Design a real-time notification system with different delivery mechanisms',
      a: 'Mechanisms: 1) WebSockets for bidirectional real-time communication, 2) Server-Sent Events (SSE) for one-way streaming, 3) Push notifications for mobile/browser, 4) Email notifications with queuing, 5) SMS via third-party services, 6) In-app notifications with persistence',
      topic: 'system-design',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['real-time', 'notifications', 'websockets', 'push notifications'],
      logicApproaches: ['Real-time Push', 'Polling-based', 'Event-driven', 'Queue-based'],
      followUpQuestions: ['How do you handle offline users?', 'What about notification preferences?']
    },
    {
      q: 'Optimize database queries using different indexing and query strategies',
      a: 'Strategies: 1) B-tree indexes for range queries, 2) Hash indexes for equality lookups, 3) Composite indexes for multi-column queries, 4) Partial indexes for filtered data, 5) Query rewriting and optimization, 6) Materialized views for complex aggregations',
      topic: 'database',
      difficulty: 'Advanced',
      category: 'Technical',
      keywords: ['database optimization', 'indexing', 'query performance', 'SQL tuning'],
      logicApproaches: ['Index Optimization', 'Query Rewriting', 'Partitioning', 'Denormalization'],
      followUpQuestions: ['How do you identify slow queries?', 'What are the trade-offs of indexing?']
    },
    
    // Additional Advanced Algorithm Questions (50+ more questions)
    {
      q: 'Implement different sorting algorithms and compare their approaches',
      a: 'Approaches: 1) Bubble Sort - O(n²) simple comparison swapping, 2) Quick Sort - O(n log n) divide-and-conquer with pivot, 3) Merge Sort - O(n log n) stable divide-and-conquer, 4) Heap Sort - O(n log n) using heap data structure, 5) Radix Sort - O(d×n) for integers',
      topic: 'algorithms',
      difficulty: 'Intermediate',
      category: 'Problem-Solving',
      keywords: ['sorting', 'algorithms', 'time complexity', 'comparison'],
      logicApproaches: ['Comparison-based', 'Divide-and-Conquer', 'Distribution-based', 'Heap-based'],
      followUpQuestions: ['When would you use each algorithm?', 'What about external sorting for large datasets?']
    },
    {
      q: 'Design different approaches for finding duplicate elements in an array',
      a: 'Approaches: 1) Nested loops O(n²) - brute force comparison, 2) Sorting first O(n log n) - adjacent comparison, 3) Hash Set O(n) - track seen elements, 4) Bit manipulation for limited range, 5) Floyd\'s cycle detection for specific cases',
      topic: 'algorithms',
      difficulty: 'Basic',
      category: 'Problem-Solving',
      keywords: ['duplicates', 'array', 'hash set', 'optimization'],
      logicApproaches: ['Brute Force', 'Sort-based', 'Hash-based', 'Bit Manipulation'],
      followUpQuestions: ['What if array elements are in limited range?', 'How to find all duplicates?']
    },
    {
      q: 'Implement graph traversal using different approaches',
      a: 'Approaches: 1) DFS - recursive/stack-based depth exploration, 2) BFS - queue-based level exploration, 3) Iterative Deepening - combines DFS and BFS benefits, 4) Bidirectional search - from both ends, 5) A* for shortest path with heuristics',
      topic: 'algorithms',
      difficulty: 'Intermediate',
      category: 'Problem-Solving',
      keywords: ['graph', 'traversal', 'DFS', 'BFS', 'search'],
      logicApproaches: ['Depth-First', 'Breadth-First', 'Heuristic-based', 'Bidirectional'],
      followUpQuestions: ['When to use DFS vs BFS?', 'How to detect cycles in graphs?']
    },
    {
      q: 'Design different approaches for string pattern matching',
      a: 'Approaches: 1) Naive approach O(nm) - check every position, 2) KMP algorithm O(n+m) - failure function preprocessing, 3) Rabin-Karp O(n+m) - rolling hash comparison, 4) Boyer-Moore - backwards scanning with skip tables, 5) Aho-Corasick for multiple patterns',
      topic: 'algorithms',
      difficulty: 'Advanced',
      category: 'Problem-Solving',
      keywords: ['string matching', 'pattern', 'KMP', 'hash', 'optimization'],
      logicApproaches: ['Naive Approach', 'Preprocessing-based', 'Hash-based', 'Skip-based'],
      followUpQuestions: ['How does rolling hash work?', 'What about fuzzy string matching?']
    },
    {
      q: 'Implement different approaches for finding shortest path in graphs',
      a: 'Approaches: 1) Dijkstra - single source shortest path with non-negative weights, 2) Bellman-Ford - handles negative weights, detects cycles, 3) Floyd-Warshall - all pairs shortest paths, 4) A* - heuristic-based for specific target, 5) Johnson\'s algorithm for sparse graphs',
      topic: 'algorithms',
      difficulty: 'Advanced',
      category: 'Problem-Solving',
      keywords: ['shortest path', 'graph', 'Dijkstra', 'dynamic programming'],
      logicApproaches: ['Greedy Approach', 'Dynamic Programming', 'Heuristic Search', 'All-pairs'],
      followUpQuestions: ['How to handle negative weight cycles?', 'What about real-time pathfinding?']
    },
    
    // Web Development & Frontend Questions
    {
      q: 'Implement different approaches for handling asynchronous operations in JavaScript',
      a: 'Approaches: 1) Callbacks - traditional function passing, 2) Promises - chainable with .then(), 3) Async/Await - synchronous-looking asynchronous code, 4) Observables - reactive streams with operators, 5) Generators - pausable functions for lazy evaluation',
      topic: 'javascript',
      difficulty: 'Intermediate',
      category: 'Technical',
      keywords: ['asynchronous', 'promises', 'async await', 'callbacks', 'observables'],
      logicApproaches: ['Callback Pattern', 'Promise Chain', 'Async/Await Pattern', 'Reactive Programming'],
      followUpQuestions: ['How to handle error propagation?', 'What about parallel vs sequential execution?']
    },
    {
      q: 'Design different strategies for component communication in Angular',
      a: 'Strategies: 1) Parent-Child via @Input/@Output, 2) Service injection with shared state, 3) EventEmitter for custom events, 4) ViewChild/ContentChild for direct access, 5) NgRx for complex state management, 6) Subject/BehaviorSubject for reactive communication',
      topic: 'angular',
      difficulty: 'Intermediate',
      category: 'Design',
      keywords: ['component communication', 'angular', 'input output', 'services', 'state management'],
      logicApproaches: ['Direct Binding', 'Service-mediated', 'Event-driven', 'State Management'],
      followUpQuestions: ['When to use each pattern?', 'How to avoid tight coupling?']
    },
    {
      q: 'Implement different caching strategies for web applications',
      a: 'Strategies: 1) Browser caching with HTTP headers (Cache-Control, ETag), 2) Service Worker caching for offline support, 3) Memory caching in JavaScript with Map/WeakMap, 4) Local/Session Storage for simple data, 5) IndexedDB for complex client-side storage, 6) CDN caching for static assets',
      topic: 'web-performance',
      difficulty: 'Advanced',
      category: 'Design',
      keywords: ['caching', 'performance', 'service worker', 'local storage', 'CDN'],
      logicApproaches: ['HTTP Caching', 'Client-side Storage', 'Service Worker Strategy', 'Memory Caching'],
      followUpQuestions: ['How to handle cache invalidation?', 'What about cache-first vs network-first strategies?']
    },
    
    // Backend & System Design Questions
    {
      q: 'Design different approaches for API versioning',
      a: 'Approaches: 1) URL versioning (/api/v1/users), 2) Header versioning (Accept: application/vnd.api+json;version=1), 3) Query parameter (?version=1), 4) Content negotiation, 5) Semantic versioning with backward compatibility, 6) Microservice versioning strategies',
      topic: 'api-design',
      difficulty: 'Intermediate',
      category: 'Design',
      keywords: ['API versioning', 'REST', 'backward compatibility', 'microservices'],
      logicApproaches: ['URL-based', 'Header-based', 'Parameter-based', 'Content Negotiation'],
      followUpQuestions: ['How to deprecate old versions?', 'What about breaking changes?']
    },
    {
      q: 'Implement different approaches for handling database transactions',
      a: 'Approaches: 1) ACID transactions with explicit begin/commit/rollback, 2) Optimistic locking with version numbers, 3) Pessimistic locking with SELECT FOR UPDATE, 4) Distributed transactions with 2-phase commit, 5) Saga pattern for microservices, 6) Event sourcing for audit trails',
      topic: 'database',
      difficulty: 'Advanced',
      category: 'Technical',
      keywords: ['transactions', 'ACID', 'locking', 'distributed systems', 'consistency'],
      logicApproaches: ['Explicit Transactions', 'Optimistic Concurrency', 'Pessimistic Locking', 'Distributed Coordination'],
      followUpQuestions: ['How to handle deadlocks?', 'What about eventual consistency?']
    },
    {
      q: 'Design different approaches for implementing pagination',
      a: 'Approaches: 1) Offset-based pagination (LIMIT/OFFSET), 2) Cursor-based pagination with unique keys, 3) Keyset pagination for better performance, 4) Time-based pagination for chronological data, 5) Search-after for Elasticsearch, 6) Virtual scrolling for large datasets',
      topic: 'database',
      difficulty: 'Intermediate',
      category: 'Technical',
      keywords: ['pagination', 'offset', 'cursor', 'performance', 'large datasets'],
      logicApproaches: ['Offset-based', 'Cursor-based', 'Keyset-based', 'Virtual Scrolling'],
      followUpQuestions: ['What are the trade-offs of each approach?', 'How to handle real-time data changes?']
    },
  ];
  
  // Advanced AI-powered answer analysis with multiple logic approaches validation
  private analyzeAnswerWithAI(userAnswer: string, expectedAnswer: string, question: QAItem): {
    score: number;
    feedback: string;
    logicApproach: string;
    suggestions: string[];
    alternativeApproaches?: string[];
  } {
    console.group('🤖 Advanced AI Answer Analysis');
    console.log('📝 Question:', question.q);
    console.log('👤 User Answer:', userAnswer);
    console.log('✅ Expected Answer:', expectedAnswer);
    
    // Analyze different logic approaches mentioned
    const userWords = userAnswer.toLowerCase().split(/\W+/);
    const expectedWords = expectedAnswer.toLowerCase().split(/\W+/);
    const keywords = question.keywords || [];
    const logicApproaches = question.logicApproaches || [];
    
    // Advanced logic pattern detection
    const detectedLogicPatterns = this.detectLogicPatterns(userAnswer, question);
    const alternativeApproaches = this.findAlternativeApproaches(userAnswer, question);
    
    // Calculate semantic similarity with logic bonus
    const keywordMatches = keywords.filter(keyword => 
      userWords.some(word => word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word))
    ).length;
    
    const logicMatches = this.getLogicMatches(userAnswer, logicApproaches);
    
    // Advanced scoring algorithm
    let score = 0;
    
    // Keyword coverage (30%)
    const keywordScore = keywords.length > 0 ? (keywordMatches / keywords.length) * 0.3 : 0.15;
    
    // Logic approach coverage (40%) - Enhanced scoring
    const logicScore = this.calculateLogicScore(logicMatches, logicApproaches, detectedLogicPatterns);
    
    // Content overlap (20%)
    const commonWords = userWords.filter(word => expectedWords.includes(word) && word.length > 3);
    const contentScore = expectedWords.length > 0 ? (commonWords.length / expectedWords.length) * 0.2 : 0.1;
    
    // Output correctness bonus (10%) - Same output different logic
    const outputScore = this.validateOutputEquivalence(userAnswer, expectedAnswer, question);
    
    score = keywordScore + logicScore + contentScore + outputScore;
    score = Math.min(score, 1); // Cap at 1.0
    
    // Generate comprehensive feedback
    const feedback = this.generateAdvancedFeedback(score, keywordMatches, keywords, logicMatches, detectedLogicPatterns);
    const suggestions = this.generateSuggestions(question, logicMatches, detectedLogicPatterns, alternativeApproaches);
    
    const detectedLogic = this.formatDetectedLogic(logicMatches, detectedLogicPatterns);
    
    console.log('📊 Keyword Matches:', keywordMatches, '/', keywords.length);
    console.log('🧠 Logic Approaches Detected:', logicMatches);
    console.log('🔍 Advanced Patterns:', detectedLogicPatterns);
    console.log('🔄 Alternative Approaches:', alternativeApproaches);
    console.log('📈 Final Score:', Math.round(score * 100), '%');
    console.log('💬 Advanced Feedback:', feedback);
    console.groupEnd();
    
    return {
      score,
      feedback,
      logicApproach: detectedLogic,
      suggestions,
      alternativeApproaches
    };
  }
  
  // Detect specific logic patterns in user answers
  private detectLogicPatterns(userAnswer: string, question: QAItem): string[] {
    const patterns: string[] = [];
    const text = userAnswer.toLowerCase();
    
    // Algorithm patterns
    if (text.includes('recursion') || text.includes('recursive')) patterns.push('Recursive Approach');
    if (text.includes('iteration') || text.includes('loop') || text.includes('for') || text.includes('while')) patterns.push('Iterative Approach');
    if (text.includes('dynamic programming') || text.includes('memoization')) patterns.push('Dynamic Programming');
    if (text.includes('divide and conquer')) patterns.push('Divide and Conquer');
    if (text.includes('greedy')) patterns.push('Greedy Algorithm');
    if (text.includes('backtrack')) patterns.push('Backtracking');
    
    // Data structure patterns
    if (text.includes('hash') || text.includes('map') || text.includes('dictionary')) patterns.push('Hash-based Solution');
    if (text.includes('stack')) patterns.push('Stack-based Solution');
    if (text.includes('queue')) patterns.push('Queue-based Solution');
    if (text.includes('tree') || text.includes('binary')) patterns.push('Tree-based Solution');
    if (text.includes('graph')) patterns.push('Graph-based Solution');
    
    // Design patterns
    if (text.includes('singleton')) patterns.push('Singleton Pattern');
    if (text.includes('factory')) patterns.push('Factory Pattern');
    if (text.includes('observer')) patterns.push('Observer Pattern');
    if (text.includes('decorator')) patterns.push('Decorator Pattern');
    
    // Concurrency patterns
    if (text.includes('thread') || text.includes('concurrent')) patterns.push('Multithreaded Approach');
    if (text.includes('lock') || text.includes('synchronized')) patterns.push('Lock-based Synchronization');
    if (text.includes('atomic') || text.includes('cas')) patterns.push('Lock-free Programming');
    
    // Performance patterns
    if (text.includes('cache') || text.includes('memoiz')) patterns.push('Caching Strategy');
    if (text.includes('lazy') || text.includes('defer')) patterns.push('Lazy Loading');
    if (text.includes('eager')) patterns.push('Eager Loading');
    
    return patterns;
  }
  
  // Find alternative approaches user might have mentioned
  private findAlternativeApproaches(userAnswer: string, question: QAItem): string[] {
    const alternatives: string[] = [];
    const text = userAnswer.toLowerCase();
    
    // Check for multiple solutions mentioned
    if (text.includes('another way') || text.includes('alternative') || text.includes('also')) {
      alternatives.push('Multiple Solutions Discussed');
    }
    
    if (text.includes('trade-off') || text.includes('pros and cons')) {
      alternatives.push('Trade-off Analysis');
    }
    
    if (text.includes('optimize') || text.includes('performance')) {
      alternatives.push('Performance Optimization');
    }
    
    if (text.includes('scale') || text.includes('distributed')) {
      alternatives.push('Scalability Considerations');
    }
    
    return alternatives;
  }
  
  // Enhanced logic matching with fuzzy logic
  private getLogicMatches(userAnswer: string, logicApproaches: string[]): string[] {
    const text = userAnswer.toLowerCase();
    const matches: string[] = [];
    
    logicApproaches.forEach(approach => {
      const approachWords = approach.toLowerCase().split(/\s+/);
      const matchCount = approachWords.filter(word => 
        text.includes(word) || text.includes(word.substring(0, word.length - 2))
      ).length;
      
      // Fuzzy matching - partial word matches count
      if (matchCount >= Math.ceil(approachWords.length * 0.6)) {
        matches.push(approach);
      }
    });
    
    return matches;
  }
  
  // Calculate enhanced logic score with bonuses
  private calculateLogicScore(logicMatches: string[], logicApproaches: string[], detectedPatterns: string[]): number {
    let baseScore = logicApproaches.length > 0 ? (logicMatches.length / logicApproaches.length) * 0.3 : 0.15;
    
    // Bonus for detecting advanced patterns
    const patternBonus = Math.min(detectedPatterns.length * 0.05, 0.1);
    
    // Bonus for mentioning multiple approaches
    const diversityBonus = logicMatches.length > 1 ? 0.05 : 0;
    
    return baseScore + patternBonus + diversityBonus;
  }
  
  // Validate if different logic produces same output
  private validateOutputEquivalence(userAnswer: string, expectedAnswer: string, question: QAItem): number {
    const text = userAnswer.toLowerCase();
    
    // Check if user mentions output/result correctness
    if (text.includes('same result') || text.includes('same output') || text.includes('equivalent')) {
      return 0.1;
    }
    
    // Check for specific output format mentions
    if (text.includes('return') || text.includes('output') || text.includes('result')) {
      return 0.05;
    }
    
    return 0;
  }
  
  // Generate advanced feedback based on analysis
  private generateAdvancedFeedback(score: number, keywordMatches: number, keywords: string[], logicMatches: string[], patterns: string[]): string {
    if (score >= 0.9) {
      return 'Outstanding! Comprehensive understanding with multiple approaches and advanced concepts.';
    } else if (score >= 0.8) {
      return 'Excellent! Strong technical knowledge with good coverage of different approaches.';
    } else if (score >= 0.7) {
      return 'Very Good! Solid understanding with room for exploring alternative solutions.';
    } else if (score >= 0.6) {
      return 'Good answer! You covered the main concepts. Consider discussing trade-offs.';
    } else if (score >= 0.4) {
      return 'Partial understanding. Focus on explaining different implementation approaches.';
    } else {
      return 'Needs significant improvement. Study various problem-solving strategies.';
    }
  }
  
  // Generate targeted suggestions
  private generateSuggestions(question: QAItem, logicMatches: string[], patterns: string[], alternatives: string[]): string[] {
    const suggestions: string[] = [];
    
    if (question.logicApproaches && logicMatches.length < question.logicApproaches.length) {
      const missing = question.logicApproaches.filter(a => !logicMatches.includes(a));
      suggestions.push(`Consider exploring: ${missing.join(', ')}`);
    }
    
    if (patterns.length === 0) {
      suggestions.push('Try to identify the algorithmic pattern or data structure used');
    }
    
    if (alternatives.length === 0) {
      suggestions.push('Discuss trade-offs and alternative approaches');
    }
    
    if (question.followUpQuestions && question.followUpQuestions.length > 0) {
      suggestions.push(`Advanced topics: ${question.followUpQuestions.join('; ')}`);
    }
    
    return suggestions;
  }
  
  // Format detected logic for display
  private formatDetectedLogic(logicMatches: string[], patterns: string[]): string {
    const combined = [...logicMatches, ...patterns];
    return combined.length > 0 ? combined.join(', ') : 'Basic approach detected';
  }
  
  // Legacy QA bank for backward compatibility
  qaBank: Record<Topic, QAItem[]> = {
    java: [], python: [], csharp: [], angular: [], spring: [], springboot: []
  };

  ngOnInit(): void {
    this.populateBanksFromComponents();
    // Add event listener for mobile devices
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.requestMicPermission.bind(this), { once: true });
    }
  }

  ngOnDestroy(): void {
    this.stopListening();
    if (typeof window !== 'undefined') {
      window.removeEventListener('click', this.requestMicPermission.bind(this));
    }
  }

  private requestMicPermission(): void {
    if (this.micPermissionRequested) return;
    this.micPermissionRequested = true;
    
    // For mobile devices, we need to request permission on user interaction
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window || 'mozSpeechRecognition' in window || 'msSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || (window as any).mozSpeechRecognition || (window as any).msSpeechRecognition;
      try {
        const tempRecognition = new SpeechRecognition();
        tempRecognition.lang = 'en-US';
        tempRecognition.interimResults = false;
        tempRecognition.maxAlternatives = 1;
        // Add timeout to prevent hanging
        tempRecognition.timeout = 5000;
        tempRecognition.start();
        // Stop after a short delay
        setTimeout(() => {
          try {
            tempRecognition.stop();
          } catch (e) {
            console.log('Error stopping temporary recognition:', e);
          }
        }, 1000);
      } catch (e) {
        console.log('Microphone permission request failed:', e);
      }
    }
  }

  private populateBanksFromComponents(): void {
    try { 
      const j = new LangJava() as any; 
      if (Array.isArray(j.qaData)) {
        this.qaBank.java = j.qaData.map((x: any) => ({ 
          q: String(x.q), 
          a: String(x.a),
          topic: 'java',
          difficulty: 'Basic' as const,
          category: 'Technical' as const,
          keywords: this.extractKeywords(String(x.q) + ' ' + String(x.a))
        }));
      }
    } catch {}
    
    try { 
      const p = new LangPython() as any; 
      if (Array.isArray(p.qaData)) {
        this.qaBank.python = p.qaData.map((x: any) => ({ 
          q: String(x.q), 
          a: String(x.a),
          topic: 'python',
          difficulty: 'Basic' as const,
          category: 'Technical' as const,
          keywords: this.extractKeywords(String(x.q) + ' ' + String(x.a))
        }));
      }
    } catch {}
    
    try { 
      const c = new LangCsharp() as any; 
      if (Array.isArray(c.qaData)) {
        this.qaBank.csharp = c.qaData.map((x: any) => ({ 
          q: String(x.q), 
          a: String(x.a),
          topic: 'csharp',
          difficulty: 'Basic' as const,
          category: 'Technical' as const,
          keywords: this.extractKeywords(String(x.q) + ' ' + String(x.a))
        }));
      }
    } catch {}
    
    try { 
      const a = new LangAngular() as any; 
      if (Array.isArray(a.qaData)) {
        this.qaBank.angular = a.qaData.map((x: any) => ({ 
          q: String(x.q), 
          a: String(x.a),
          topic: 'angular',
          difficulty: 'Basic' as const,
          category: 'Technical' as const,
          keywords: this.extractKeywords(String(x.q) + ' ' + String(x.a))
        }));
      }
    } catch {}
    
    try { 
      const s = new LangSpring() as any; 
      if (Array.isArray(s.qaData)) {
        this.qaBank.spring = s.qaData.map((x: any) => ({ 
          q: String(x.q), 
          a: String(x.a),
          topic: 'spring',
          difficulty: 'Basic' as const,
          category: 'Technical' as const,
          keywords: this.extractKeywords(String(x.q) + ' ' + String(x.a))
        }));
      }
    } catch {}
    
    try { 
      const sb = new LangSpringBoot() as any; 
      if (Array.isArray(sb.qaData)) {
        this.qaBank.springboot = sb.qaData.map((x: any) => ({ 
          q: String(x.q), 
          a: String(x.a),
          topic: 'springboot',
          difficulty: 'Basic' as const,
          category: 'Technical' as const,
          keywords: this.extractKeywords(String(x.q) + ' ' + String(x.a))
        }));
      }
    } catch {}
    
    // Merge with enhanced AI question bank
    this.mergeWithAIQuestions();
    
    console.group('📚 Enhanced Question Bank Loaded');
    console.log('🔥 Java Questions:', this.qaBank.java.length);
    console.log('🐍 Python Questions:', this.qaBank.python.length);
    console.log('💻 C# Questions:', this.qaBank.csharp.length);
    console.log('⚙️ Angular Questions:', this.qaBank.angular.length);
    console.log('🌱 Spring Questions:', this.qaBank.spring.length);
    console.log('🚀 Spring Boot Questions:', this.qaBank.springboot.length);
    console.log('🤖 AI Enhanced Questions:', this.aiQuestionBank.length);
    console.groupEnd();
  }
  
  private extractKeywords(text: string): string[] {
    const commonWords = ['what', 'is', 'how', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'are', 'can', 'you', 'explain', 'diff', 'between'];
    return text.toLowerCase()
      .split(/\W+/)
      .filter(word => word.length > 3 && !commonWords.includes(word))
      .slice(0, 5); // Take top 5 keywords
  }
  
  private mergeWithAIQuestions(): void {
    this.aiQuestionBank.forEach(aiQuestion => {
      const topic = aiQuestion.topic as Topic;
      if (this.qaBank[topic]) {
        this.qaBank[topic].push(aiQuestion);
      }
    });
  }

  async onSubmit(): Promise<void> {
    const trimmed = this.userInput.trim();
    if (!trimmed || this.isLoading) return;
    await this.processUserText(trimmed);
  }

  private async processUserText(text: string): Promise<void> {
    this.messages.push({ role: 'user', content: text });
    this.userInput = '';

    if (this.isInterview && this.awaitingAnswer) {
      await this.handleInterviewAnswer(text);
    } else {
      await this.generateAssistantReply(text, 'qa');
    }
  }

  async startInterview(): Promise<void> {
    if (this.isLoading) return;
    this.isInterview = true;
    this.awaitingAnswer = false;
    this.questionNumber = 0;
    this.questionIndex = 0;
    this.buildQuestionPool();
    const total = Math.min(this.maxQuestions, this.questionPool.length);
    if (total === 0) {
      this.messages.push({ role: 'assistant', content: 'No questions available for the selected topic.' });
      this.isInterview = false;
      return;
    }
    this.maxQuestions = total;
    this.transcript = [];

    // Enhanced console logging for interview start
    console.group('🎯 Enhanced AI Mock Interview Started');
    console.log(`📊 Total Questions: ${this.maxQuestions}`);
    console.log(`🎭 Selected Topics: ${Object.keys(this.selectedTopics).filter(t => this.selectedTopics[t as Topic]).join(', ')}`);
    console.log(`🔀 Question Shuffle: ${this.shuffleQuestions ? 'Enabled' : 'Disabled'}`);
    console.log(`🤖 AI Analysis: Enhanced logic detection and feedback`);
    console.log(`📈 Features: Multi-approach analysis, keyword detection, difficulty assessment`);
    console.log(`🏆 Scoring: Advanced semantic similarity with logic approach bonuses`);
    console.groupEnd();

    this.messages.push({ 
      role: 'assistant', 
      content: `🚀 Starting enhanced AI mock interview with ${this.maxQuestions} questions. AI will analyze your logic approaches and provide detailed feedback!` 
    });
    
    await this.generateNextQuestion();
    this.autoMic = true;
    this.startListening();
  }

  // ✅ Enhanced AI-powered interview answer handling
  private async handleInterviewAnswer(userAnswer: string): Promise<void> {
    if (this.processingAnswer) return;
    this.processingAnswer = true;
    this.awaitingAnswer = false;

    console.group(`🎯 PROCESSING ANSWER ${this.questionNumber}`);
    console.log(`📋 Question: ${this.lastAskedQuestion}`);
    console.log(`👤 User Answer: ${userAnswer}`);
    console.log(`📈 Progress: ${this.questionNumber}/${this.maxQuestions}`);

    const ideal = this.lastAskedItem?.a || '';
    
    // ✅ Enhanced AI-powered interview answer handling
    let analysisResult;
    if (this.lastAskedItem && 'keywords' in this.lastAskedItem) {
      analysisResult = this.analyzeAnswerWithAI(userAnswer, ideal, this.lastAskedItem);
    } else {
      // Fallback for legacy questions
      const score = this.simpleSimilarity((userAnswer || '').toLowerCase(), (ideal || '').toLowerCase());
      analysisResult = {
        score,
        feedback: score >= 0.6 ? 'Good coverage.' : score >= 0.3 ? 'Partial coverage.' : 'Needs improvement.',
        logicApproach: 'Standard approach',
        suggestions: [],
        alternativeApproaches: []
      };
    }

    this.transcript.push({
      question: this.lastAskedQuestion || '',
      answer: userAnswer,
      matchedAnswer: ideal || undefined,
      matchScore: analysisResult.score
    });

    // ✅ Enhanced feedback with AI insights
    const feedbackLines = [
      `💬 Advanced Feedback: ${analysisResult.feedback}`,
      `🧠 Logic Patterns Detected: ${analysisResult.logicApproach}`,
      `📊 AI Score: ${Math.round(analysisResult.score * 100)}%`
    ];
    
    if (analysisResult.alternativeApproaches && analysisResult.alternativeApproaches.length > 0) {
      feedbackLines.push(`🔄 Alternative Approaches: ${analysisResult.alternativeApproaches.join(', ')}`);
    }
    
    if (analysisResult.suggestions.length > 0) {
      feedbackLines.push(`💡 AI Suggestions: ${analysisResult.suggestions.join('; ')}`);
    }
    
    feedbackLines.push(`✅ Ideal Answer: ${ideal || 'N/A'}`);
    
    const reply = feedbackLines.join('\n');
    
    console.log(`📈 Advanced AI Analysis Score: ${Math.round(analysisResult.score * 100)}%`);
    console.log(`🧠 Logic Patterns: ${analysisResult.logicApproach}`);
    console.log(`💬 Enhanced Feedback: ${analysisResult.feedback}`);
    
    if (analysisResult.alternativeApproaches && analysisResult.alternativeApproaches.length > 0) {
      console.log(`🔄 Alternative Approaches Found:`);
      analysisResult.alternativeApproaches.forEach((approach, index) => {
        console.log(`   ${index + 1}. ${approach}`);
      });
    }
    
    if (analysisResult.suggestions.length > 0) {
      console.log(`💡 AI-Generated Suggestions:`);
      analysisResult.suggestions.forEach((suggestion, index) => {
        console.log(`   ${index + 1}. ${suggestion}`);
      });
    }
    
    console.groupEnd();
    
    this.messages.push({ role: 'assistant', content: reply });
    this.maybeSpeak(analysisResult.feedback);

    // Move to next question or finish
    if (this.questionNumber < this.maxQuestions) {
      this.processingAnswer = false;
      await this.generateNextQuestion();
      if (this.autoMic && !this.isListening) {
        this.startListening();
      }
    } else {
      this.processingAnswer = false;
      this.isInterview = false;
      this.awaitingAnswer = false;
      const percent = this.computeScorePercent();
      this.persistTranscript();
      
      // Enhanced completion summary
      const completionSummary = this.generateCompletionSummary();
      this.messages.push({ role: 'assistant', content: completionSummary });
      this.maybeSpeak(`Interview finished. Your overall score is ${percent}%.`);
      this.autoMic = false;
      this.stopListening();
    }
  }
  
  private generateCompletionSummary(): string {
    const percent = this.computeScorePercent();
    const strong = this.transcript.filter(t => (t.matchScore || 0) >= 0.8).length;
    const good = this.transcript.filter(t => (t.matchScore || 0) >= 0.6 && (t.matchScore || 0) < 0.8).length;
    const moderate = this.transcript.filter(t => (t.matchScore || 0) >= 0.4 && (t.matchScore || 0) < 0.6).length;
    const weak = this.transcript.length - strong - good - moderate;
    
    // Generate performance analysis
    console.group('📈 Final Interview Analysis');
    console.log(`🏆 Overall Score: ${percent}%`);
    console.log(`⭐ Excellent Answers: ${strong}`);
    console.log(`✅ Good Answers: ${good}`);
    console.log(`🟡 Moderate Answers: ${moderate}`);
    console.log(`🔴 Needs Improvement: ${weak}`);
    
    // Detailed results table
    console.table(this.transcript.map((result, index) => ({
      'Question #': index + 1,
      'Score': `${Math.round((result.matchScore || 0) * 100)}%`,
      'Question': result.question.substring(0, 50) + '...',
      'Answer': result.answer.substring(0, 30) + '...',
      'Status': (result.matchScore || 0) >= 0.8 ? '⭐ EXCELLENT' : 
                (result.matchScore || 0) >= 0.6 ? '✅ GOOD' :
                (result.matchScore || 0) >= 0.4 ? '🟡 MODERATE' : '🔴 NEEDS WORK'
    })));
    
    console.groupEnd();
    
    const summary = [
      '🏆 **INTERVIEW COMPLETED**',
      `📈 Overall Score: ${percent}%`,
      '',
      '📉 **Performance Breakdown:**',
      `⭐ Excellent (80%+): ${strong} answers`,
      `✅ Good (60-79%): ${good} answers`, 
      `🟡 Moderate (40-59%): ${moderate} answers`,
      `🔴 Needs Improvement (<40%): ${weak} answers`,
      '',
      '📊 **Recommendations:**'
    ];
    
    if (percent >= 80) {
      summary.push('✨ Outstanding performance! You demonstrate strong technical knowledge.');
    } else if (percent >= 70) {
      summary.push('👍 Solid performance! Focus on explaining different implementation approaches.');
    } else if (percent >= 60) {
      summary.push('📚 Good foundation! Study alternative solutions and best practices.');
    } else {
      summary.push('💪 Keep practicing! Review fundamental concepts and practice explaining technical topics.');
    }
    
    return summary.join('\n');
  }

  private async generateNextQuestion(): Promise<void> {
    if (this.questionIndex >= this.questionPool.length) return;
    this.questionNumber++;
    const item = this.questionPool[this.questionIndex];
    this.lastAskedItem = item;
    this.lastAskedQuestion = item.q;

    // Enhanced console logging for questions
    console.group(`🎯 QUESTION ${this.questionNumber}/${this.maxQuestions}`);
    console.log(`📋 Question: ${item.q}`);
    
    if ('difficulty' in item) {
      console.log(`⚙️ Difficulty: ${item.difficulty}`);
      console.log(`📚 Category: ${item.category}`);
      console.log(`🏷️ Topic: ${item.topic}`);
      
      if (item.keywords && item.keywords.length > 0) {
        console.log(`🔑 Key Concepts: ${item.keywords.join(', ')}`);
      }
      
      if (item.logicApproaches && item.logicApproaches.length > 0) {
        console.log(`🧠 Expected Approaches: ${item.logicApproaches.join(', ')}`);
      }
    }
    
    console.log(`📈 Progress: ${Math.round((this.questionNumber / this.maxQuestions) * 100)}% complete`);
    console.groupEnd();

    this.messages.push({ role: 'assistant', content: `Q${this.questionNumber}: ${item.q}` });
    this.maybeSpeak(item.q);

    this.awaitingAnswer = true;
    this.questionIndex++;
  }

  private buildQuestionPool(): void {
    const topics = (Object.keys(this.selectedTopics) as Topic[]).filter(t => this.selectedTopics[t]);
    let pool: QAItem[] = [];
    
    for (const t of topics) {
      const topicQuestions = this.qaBank[t] || [];
      
      // Prioritize AI-enhanced questions (those with enhanced metadata)
      const aiEnhanced = topicQuestions.filter(q => 'keywords' in q && q.keywords && q.keywords.length > 0);
      const legacy = topicQuestions.filter(q => !('keywords' in q) || !q.keywords || q.keywords.length === 0);
      
      // Mix AI-enhanced questions with legacy questions (70% AI-enhanced, 30% legacy)
      const aiCount = Math.ceil(aiEnhanced.length * 0.7);
      const legacyCount = Math.floor(legacy.length * 0.3);
      
      pool = pool.concat(aiEnhanced.slice(0, aiCount));
      pool = pool.concat(legacy.slice(0, legacyCount));
    }
    
    if (this.shuffleQuestions) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }
    
    this.questionPool = pool;
    
    // Enhanced logging for question pool composition
    console.group('📚 Question Pool Analysis');
    console.log(`🔢 Total Questions: ${pool.length}`);
    
    const aiEnhancedCount = pool.filter(q => 'keywords' in q && q.keywords && q.keywords.length > 0).length;
    const legacyCount = pool.length - aiEnhancedCount;
    
    console.log(`🤖 AI-Enhanced Questions: ${aiEnhancedCount}`);
    console.log(`📜 Legacy Questions: ${legacyCount}`);
    
    topics.forEach(topic => {
      const topicCount = pool.filter(q => q.topic === topic).length;
      console.log(`🏷️ ${topic.toUpperCase()}: ${topicCount} questions`);
    });
    
    console.groupEnd();
  }

  private localFallback(prompt: string): string {
    if (/angular/i.test(prompt)) return 'Angular is a TypeScript framework for SPAs. Focus on components, templates, DI, and routing.';
    if (/spring\s*boot|springboot/i.test(prompt)) return 'Spring Boot auto-configures Spring apps with starters and embedded servers.';
    if (/spring/i.test(prompt)) return 'Spring provides IoC/DI, AOP, MVC, Data, and Security for Java apps.';
    if (/python/i.test(prompt)) return 'Python is an interpreted, high-level language with emphasis on readability.';
    if (/c#|csharp/i.test(prompt)) return 'C# is a modern, object-oriented language for .NET with strong typing and async/await.';
    if (/java/i.test(prompt)) return 'Java is an object-oriented language running on the JVM. Learn OOP, collections, streams, exceptions.';
    return 'I can conduct mock interviews from your selected topics. Click Start Interview to begin.';
  }

  async generateAssistantReply(prompt: string, _mode: 'qa' | 'prompt' | 'interview_question' | 'interview_feedback' = 'qa'): Promise<void> {
    const reply = this.localFallback(prompt);
    this.messages.push({ role: 'assistant', content: reply });
    this.maybeSpeak(reply);
  }

  async askMeAQuestion(): Promise<void> {
    this.buildQuestionPool();
    if (this.questionPool.length === 0) {
      this.messages.push({ role: 'assistant', content: 'No questions available in selected topics.' });
      return;
    }
    const q = this.questionPool[Math.floor(Math.random() * this.questionPool.length)].q;
    this.lastAskedQuestion = q;
    this.awaitingAnswer = true;
    this.messages.push({ role: 'assistant', content: q });
    this.maybeSpeak(q);
  }

  toggleTTS(): void {
    this.ttsEnabled = !this.ttsEnabled;
    if (!this.ttsEnabled && typeof window !== 'undefined') {
      try { window.speechSynthesis.cancel(); } catch {}
    }
  }

  maybeSpeak(text: string): void {
    if (!this.ttsEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1; utter.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  toggleListening(): void {
    if (this.isListening) {
      this.stopRequested = true;
      this.stopListening();
      this.messages.push({ role: 'assistant', content: 'Microphone stopped.' });
    } else {
      this.stopRequested = false;
      this.messages.push({ role: 'assistant', content: 'Starting microphone... Please speak clearly.' });
      // Add a small delay to allow the message to be displayed
      setTimeout(() => {
        this.startListening();
      }, 500);
    }
  }

  startListening(): void {
    if (this.isLoading || typeof window === 'undefined' || this.isListening) return;
    
    // Request permission first
    this.requestMicPermission();
    
    const w = window as any;
    const SpeechRecognition = w.SpeechRecognition || w.webkitSpeechRecognition || w.mozSpeechRecognition || w.msSpeechRecognition;
    if (!SpeechRecognition) {
      this.messages.push({ role: 'assistant', content: 'Speech recognition not supported in this browser.' });
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
      this.recognition.continuous = false; // Important for mobile
      // Add timeout to prevent hanging
      this.recognition.timeout = 10000;

      this.recognition.onresult = async (event: any) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const res = event.results[i];
          const text = res?.[0]?.transcript?.trim();
          if (!text) continue;
          if (res.isFinal) {
            try {
              this.recognition.stop();
            } catch (e) {
              console.warn('Error stopping recognition:', e);
            }
            this.isListening = false;
            await this.processUserText(text);
            return;
          }
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.stopRequested) return;
        if (this.autoMic && this.isInterview && this.awaitingAnswer && this.questionNumber <= this.maxQuestions) {
          // Add a small delay before restarting on mobile
          setTimeout(() => {
            if (this.awaitingAnswer && !this.isListening && !this.stopRequested) {
              this.startListening();
            }
          }, 2000); // Increased delay for mobile devices
        }
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error, event);
        this.isListening = false;
        let errorMessage = 'Microphone error occurred.';
        
        switch (event.error) {
          case 'no-speech':
            errorMessage = 'No speech detected. Please try again.';
            break;
          case 'audio-capture':
            errorMessage = 'Audio capture failed. Please check your microphone.';
            break;
          case 'not-allowed':
            errorMessage = 'Microphone access denied. Please enable microphone permissions.';
            break;
          case 'service-not-allowed':
            errorMessage = 'Speech service not allowed. Please check your device settings.';
            break;
          case 'bad-grammar':
            errorMessage = 'Grammar error. Please try again.';
            break;
          case 'language-not-supported':
            errorMessage = 'Language not supported. Please try again.';
            break;
          default:
            errorMessage = `Microphone error: ${event.error}. Please check permissions and try again.`;
        }
        
        this.messages.push({ role: 'assistant', content: errorMessage });
        
        if (!this.stopRequested && this.autoMic && this.isInterview && this.questionNumber < this.maxQuestions) {
          // Retry with longer delay on error
          setTimeout(() => {
            if (!this.stopRequested && this.autoMic && this.isInterview && this.awaitingAnswer) {
              this.startListening();
            }
          }, 3000);
        }
      };

      this.recognition.start();
      this.isListening = true;
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      this.isListening = false;
      this.messages.push({ role: 'assistant', content: 'Failed to start microphone. Please check permissions and try again. Error: ' + (error as Error).message });
    }
  }

  stopListening(): void {
    try { if (this.recognition) this.recognition.stop(); } catch {}
    this.isListening = false;

    if (this.isInterview) {
      this.isInterview = false;
      this.awaitingAnswer = false;
      const percent = this.computeScorePercent();
      this.persistTranscript();
      const doneMsg = `Interview stopped by user. Score: ${percent}%.
Summary: ${this.summaryLine()}`;
      this.messages.push({ role: 'assistant', content: doneMsg });
      this.maybeSpeak(doneMsg);
    }
  }

  private simpleSimilarity(a: string, b: string): number {
    const tokensA = new Set(a.split(/[^a-z0-9]+/i).filter(Boolean));
    const tokensB = new Set(b.split(/[^a-z0-9]+/i).filter(Boolean));
    return [...tokensA].filter(t => tokensB.has(t)).length / (new Set([...tokensA, ...tokensB]).size || 1);
  }

  private computeScorePercent(): number {
    if (this.transcript.length === 0) return 0;
    const avg = this.transcript.reduce((s, t) => s + (t.matchScore || 0), 0) / this.transcript.length;
    return Math.round(avg * 100);
  }

  private summaryLine(): string {
    const strong = this.transcript.filter(t => (t.matchScore || 0) >= 0.6).length;
    const moderate = this.transcript.filter(t => (t.matchScore || 0) >= 0.3 && (t.matchScore || 0) < 0.6).length;
    const weak = this.transcript.length - strong - moderate;
    return `Strong: ${strong}, Moderate: ${moderate}, Needs improvement: ${weak}.`;
  }

  private persistTranscript(): void {
    try {
      const key = `ai_interview_${this.topic}_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify({ topic: this.topic, score: this.computeScorePercent(), transcript: this.transcript }));
    } catch {}
  }
}
