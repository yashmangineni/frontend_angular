import { TestBed } from '@angular/core/testing';
import { CodingTest } from './coding-test';
import { JavaProblemsComponent } from './java-problems.component';
import { PythonProblemsComponent } from './python-problems.component';
import { CSharpProblemsComponent } from './csharp-problems.component';

describe('CodingTest', () => {
  let component: CodingTest;
  
  // Mock implementations for the problem components
  const mockJavaProblems = {
    getJavaProblems: () => [
      {
        id: 'java-1',
        title: 'Hello World',
        description: 'Write a program that prints Hello World to the console.',
        difficulty: 'Basic',
        language: 'java',
        expectedOutput: 'Hello, World!',
        testCases: [{ input: '', expectedOutput: 'Hello, World!', description: 'Print Hello World' }],
        starterCode: 'public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n        \n    }\n}',
        solution: 'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
      },
      {
        id: 'java-2',
        title: 'Sum of Two Numbers',
        description: 'Write a method to find sum of two integers.',
        difficulty: 'Basic',
        language: 'java',
        expectedOutput: '8',
        testCases: [{ input: '3, 5', expectedOutput: '8', description: 'Sum of 3 and 5' }],
        starterCode: 'public class Solution {\n    public static int sum(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(sum(3, 5));\n    }\n}',
        solution: 'public class Solution {\n    public static int sum(int a, int b) {\n        return a + b;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(sum(3, 5));\n    }\n}'
      }
    ],
    getJavaProblemsSummary: () => ({ total: 2, basic: 2, intermediate: 0, advanced: 0 })
  } as unknown as JavaProblemsComponent;

  const mockPythonProblems = {
    getPythonProblems: () => [
      {
        id: 'python-1',
        title: 'Hello World',
        description: 'Write a program that prints Hello World to the console.',
        difficulty: 'Basic',
        language: 'python',
        expectedOutput: 'Hello, World!',
        testCases: [{ input: '', expectedOutput: 'Hello, World!', description: 'Print Hello World' }],
        starterCode: '# Write your code here\n',
        solution: 'print("Hello, World!")'
      }
    ]
  } as unknown as PythonProblemsComponent;

  const mockCSharpProblems = {
    getCSharpProblems: () => [
      {
        id: 'csharp-1',
        title: 'Hello World',
        description: 'Write a program that prints Hello World to the console.',
        difficulty: 'Basic',
        language: 'csharp',
        expectedOutput: 'Hello, World!',
        testCases: [{ input: '', expectedOutput: 'Hello, World!', description: 'Print Hello World' }],
        starterCode: 'using System;\n\nclass Solution\n{\n    static void Main()\n    {\n        // Write your code here\n        \n    }\n}',
        solution: 'using System;\n\nclass Solution\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}'
      }
    ]
  } as unknown as CSharpProblemsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingTest],
      providers: [
        { provide: JavaProblemsComponent, useValue: mockJavaProblems },
        { provide: PythonProblemsComponent, useValue: mockPythonProblems },
        { provide: CSharpProblemsComponent, useValue: mockCSharpProblems }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(CodingTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize problem banks', () => {
    expect(component.problemBanks.java.length).toBe(2);
    expect(component.problemBanks.python.length).toBe(1);
    expect(component.problemBanks.csharp.length).toBe(1);
  });

  it('should calculate total available problems', () => {
    expect(component.totalAvailableProblems).toBe(4);
  });

  it('should start coding test', () => {
    component.selectedLanguage = 'java';
    component.startCodingTest();
    expect(component.isTestActive).toBe(true);
    expect(component.currentProblems.length).toBe(3); // Default totalProblems is 3
    expect(component.currentProblem).toBeTruthy();
  });

  it('should filter problems by difficulty', () => {
    component.selectedLanguage = 'java';
    component.selectedDifficulty = 'Basic';
    component.startCodingTest();
    expect(component.currentProblems.every(p => p.difficulty === 'Basic')).toBe(true);
  });

  it('should handle all difficulty levels', () => {
    component.selectedLanguage = 'java';
    component.selectedDifficulty = 'all';
    component.startCodingTest();
    expect(component.currentProblems.length).toBe(2); // Only 2 Java problems in mock
  });

  it('should shuffle array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = component['shuffleArray'](array);
    expect(shuffled.length).toBe(array.length);
    // Note: This test might occasionally fail due to randomness, but it's unlikely with 5 distinct elements
  });

  it('should validate user code', () => {
    // Test with empty code
    component.userCode = '';
    expect(component['validateUserCode']()).toBe(false);
    
    // Test with placeholder code
    component.userCode = '// Write your code here';
    expect(component['validateUserCode']()).toBe(false);
    
    // Test with valid code
    component.userCode = 'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}';
    expect(component['validateUserCode']()).toBe(true);
  });

  it('should run code', () => {
    component.isTestActive = true;
    component.currentProblem = component.problemBanks.java[0];
    component.userCode = 'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}';
    component.runCode();
    // We can't easily test the setTimeout, but we can check that isCodeRunning is set
    expect(component.isCodeRunning).toBe(true);
  });

  it('should submit solution', () => {
    component.isTestActive = true;
    component.currentProblem = component.problemBanks.java[0];
    component.currentOutput = 'Hello, World!';
    component.submitSolution();
    expect(component.testResults.length).toBe(1);
    expect(component.testResults[0].passed).toBe(true);
  });

  it('should skip current problem', () => {
    component.isTestActive = true;
    component.currentProblem = component.problemBanks.java[0];
    component.skipCurrentProblem();
    expect(component.testResults.length).toBe(1);
    expect(component.testResults[0].passed).toBe(false);
  });

  it('should calculate overall score', () => {
    component.testResults = [
      { passed: true, score: 100 } as any,
      { passed: false, score: 0 } as any,
      { passed: true, score: 100 } as any
    ];
    expect(component.getOverallScore()).toBe(67); // (100 + 0 + 100) / 3 = 66.67, rounded to 67
  });

  it('should count passed problems', () => {
    component.testResults = [
      { passed: true } as any,
      { passed: false } as any,
      { passed: true } as any
    ];
    expect(component.getPassedCount()).toBe(2);
  });

  it('should reset test', () => {
    component.isTestActive = true;
    component.testResults = [{ passed: true } as any];
    component.userCode = 'some code';
    component.resetTest();
    expect(component.isTestActive).toBe(false);
    expect(component.testResults.length).toBe(0);
    expect(component.userCode).toBe('');
  });

  it('should get formatted time', () => {
    component.timeRemainingSeconds = 125;
    expect(component.getFormattedTime()).toBe('2:05');
    
    component.timeRemainingSeconds = 5;
    expect(component.getFormattedTime()).toBe('0:05');
  });

  it('should go back to language selection', () => {
    component.isTestActive = true;
    component.goBackToLanguageSelection();
    expect(component.isTestActive).toBe(false);
  });
});