import { Injectable } from '@angular/core';

export interface CodingProblem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  language: 'java' | 'python' | 'csharp';
  expectedOutput: string;
  testCases: TestCase[];
  starterCode: string;
  solution: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class JavaProblemsComponent {

  // Generate exactly 50 Java problems as per memory requirement
  getJavaProblems(): CodingProblem[] {
    const problems: CodingProblem[] = [];
    
    // Problem 1: Hello World
    problems.push({
      id: 'java-1',
      title: 'Hello World',
      description: 'Write a program that prints Hello World to the console.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'Hello, World!',
      testCases: [{ input: '', expectedOutput: 'Hello, World!', description: 'Print Hello World' }],
      starterCode: 'public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n        \n    }\n}',
      solution: 'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
    });

    // Problem 2: Sum of Two Numbers
    problems.push({
      id: 'java-2',
      title: 'Sum of Two Numbers',
      description: 'Write a method to find sum of two integers.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '8',
      testCases: [{ input: '3, 5', expectedOutput: '8', description: 'Sum of 3 and 5' }],
      starterCode: 'public class Solution {\n    public static int sum(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(sum(3, 5));\n    }\n}',
      solution: 'public class Solution {\n    public static int sum(int a, int b) {\n        return a + b;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(sum(3, 5));\n    }\n}'
    });

    // Problem 3: Check Even Number
    problems.push({
      id: 'java-3',
      title: 'Check Even Number',
      description: 'Write a method to check if a number is even.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: '4', expectedOutput: 'true', description: 'Check if 4 is even' }],
      starterCode: 'public class Solution {\n    public static boolean isEven(int n) {\n        // Write your code here\n        return false;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(isEven(4));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isEven(int n) {\n        return n % 2 == 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(isEven(4));\n    }\n}'
    });

    // Problem 4: Check Palindrome String
    problems.push({
      id: 'java-4',
      title: 'Check Palindrome String',
      description: 'Write a program to check if a given string is a palindrome.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: 'racecar', expectedOutput: 'true', description: 'Check palindrome' }],
      starterCode: 'public class Solution {\n    public static boolean isPalindrome(String str) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPalindrome("racecar"));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isPalindrome(String str) {\n        int left = 0, right = str.length() - 1;\n        while (left < right) {\n            if (str.charAt(left) != str.charAt(right)) return false;\n            left++; right--;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPalindrome("racecar"));\n    }\n}'
    });

    // Problem 5: Check Prime Number
    problems.push({
      id: 'java-5',
      title: 'Check Prime Number',
      description: 'Write a program to check if a given number is prime.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: '17', expectedOutput: 'true', description: 'Check if 17 is prime' }],
      starterCode: 'public class Solution {\n    public static boolean isPrime(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPrime(17));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPrime(17));\n    }\n}'
    });

    // Problem 6: Technology Number Check
    problems.push({
      id: 'java-6',
      title: 'Technology Number Check',
      description: 'Check if a number is a technology number (sum of digits equals product of digits).',
      difficulty: 'Intermediate',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: '183', expectedOutput: 'true', description: 'Check technology number' }],
      starterCode: 'public class Solution {\n    public static boolean isTechNumber(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isTechNumber(183));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isTechNumber(int n) {\n        int sum = 0, product = 1, temp = n;\n        while (temp > 0) {\n            int digit = temp % 10;\n            sum += digit;\n            product *= digit;\n            temp /= 10;\n        }\n        return sum == product;\n    }\n    public static void main(String[] args) {\n        System.out.println(isTechNumber(183));\n    }\n}'
    });

    // Problem 7: Evil Number Check
    problems.push({
      id: 'java-7',
      title: 'Evil Number Check',
      description: 'Check if a number is evil (has even number of 1s in binary representation).',
      difficulty: 'Intermediate',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: '3', expectedOutput: 'true', description: 'Check evil number' }],
      starterCode: 'public class Solution {\n    public static boolean isEvil(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isEvil(3));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isEvil(int n) {\n        int count = 0;\n        while (n > 0) {\n            count += n & 1;\n            n >>= 1;\n        }\n        return count % 2 == 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(isEvil(3));\n    }\n}'
    });

    // Problem 8: String Reverse
    problems.push({
      id: 'java-8',
      title: 'String Reverse',
      description: 'Write a program to reverse a given string.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'olleh',
      testCases: [{ input: 'hello', expectedOutput: 'olleh', description: 'Reverse string' }],
      starterCode: 'public class Solution {\n    public static String reverseString(String str) {\n        // Write your code here\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseString("hello"));\n    }\n}',
      solution: 'public class Solution {\n    public static String reverseString(String str) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = str.length() - 1; i >= 0; i--) {\n            sb.append(str.charAt(i));\n        }\n        return sb.toString();\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseString("hello"));\n    }\n}'
    });

    // Problem 9: Armstrong Number
    problems.push({
      id: 'java-9',
      title: 'Armstrong Number',
      description: 'Check if a number is an Armstrong number (sum of cubes of digits equals the number itself).',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: '153', expectedOutput: 'true', description: 'Check if 153 is Armstrong' }],
      starterCode: 'public class Solution {\n    public static boolean isArmstrong(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isArmstrong(153));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isArmstrong(int n) {\n        int original = n, sum = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            sum += digit * digit * digit;\n            n /= 10;\n        }\n        return sum == original;\n    }\n    public static void main(String[] args) {\n        System.out.println(isArmstrong(153));\n    }\n}'
    });

    // Problem 10: Factorial Calculation
    problems.push({
      id: 'java-10',
      title: 'Factorial Calculation',
      description: 'Calculate the factorial of a given number.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '120',
      testCases: [{ input: '5', expectedOutput: '120', description: 'Factorial of 5' }],
      starterCode: 'public class Solution {\n    public static long factorial(int n) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}',
      solution: 'public class Solution {\n    public static long factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}'
    });

    // Problem 11: Fibonacci Series
    problems.push({
      id: 'java-11',
      title: 'Fibonacci Series',
      description: 'Generate Fibonacci series up to n terms.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '0 1 1 2 3',
      testCases: [{ input: '5', expectedOutput: '0 1 1 2 3', description: 'First 5 Fibonacci numbers' }],
      starterCode: 'public class Solution {\n    public static void fibonacci(int n) {\n        // Write your code here\n    }\n    public static void main(String[] args) {\n        fibonacci(5);\n    }\n}',
      solution: 'public class Solution {\n    public static void fibonacci(int n) {\n        int a = 0, b = 1;\n        for (int i = 0; i < n; i++) {\n            System.out.print(a + " ");\n            int temp = a + b;\n            a = b;\n            b = temp;\n        }\n    }\n    public static void main(String[] args) {\n        fibonacci(5);\n    }\n}'
    });

    // Problem 12: Second Maximum Number
    problems.push({
      id: 'java-12',
      title: 'Second Maximum Number',
      description: 'Find the second maximum number in an array.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '8',
      testCases: [{ input: '[5,2,8,1,9]', expectedOutput: '8', description: 'Second largest in array' }],
      starterCode: 'public class Solution {\n    public static int secondMax(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5,2,8,1,9};\n        System.out.println(secondMax(arr));\n    }\n}',
      solution: 'public class Solution {\n    public static int secondMax(int[] arr) {\n        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;\n        for (int num : arr) {\n            if (num > max1) {\n                max2 = max1;\n                max1 = num;\n            } else if (num > max2 && num != max1) {\n                max2 = num;\n            }\n        }\n        return max2;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5,2,8,1,9};\n        System.out.println(secondMax(arr));\n    }\n}'
    });

    // Problem 13: LCM Calculation
    problems.push({
      id: 'java-13',
      title: 'LCM Calculation',
      description: 'Find the LCM (Least Common Multiple) of two numbers.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '36',
      testCases: [{ input: '12,18', expectedOutput: '36', description: 'LCM of 12 and 18' }],
      starterCode: 'public class Solution {\n    public static int lcm(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lcm(12, 18));\n    }\n}',
      solution: 'public class Solution {\n    public static int gcd(int a, int b) {\n        return b == 0 ? a : gcd(b, a % b);\n    }\n    public static int lcm(int a, int b) {\n        return (a * b) / gcd(a, b);\n    }\n    public static void main(String[] args) {\n        System.out.println(lcm(12, 18));\n    }\n}'
    });

    // Problem 14: HCF/GCD Calculation
    problems.push({
      id: 'java-14',
      title: 'HCF/GCD Calculation',
      description: 'Find the GCD (Greatest Common Divisor) of two numbers.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '6',
      testCases: [{ input: '12,18', expectedOutput: '6', description: 'GCD of 12 and 18' }],
      starterCode: 'public class Solution {\n    public static int gcd(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(gcd(12, 18));\n    }\n}',
      solution: 'public class Solution {\n    public static int gcd(int a, int b) {\n        return b == 0 ? a : gcd(b, a % b);\n    }\n    public static void main(String[] args) {\n        System.out.println(gcd(12, 18));\n    }\n}'
    });

    // Problem 15: Leap Year Check
    problems.push({
      id: 'java-15',
      title: 'Leap Year Check',
      description: 'Check if a given year is a leap year.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'true',
      testCases: [{ input: '2020', expectedOutput: 'true', description: 'Check if 2020 is leap year' }],
      starterCode: 'public class Solution {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isLeapYear(2020));\n    }\n}',
      solution: 'public class Solution {\n    public static boolean isLeapYear(int year) {\n        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n    }\n    public static void main(String[] args) {\n        System.out.println(isLeapYear(2020));\n    }\n}'
    });

    // Problem 16: Swap Two Numbers
    problems.push({
      id: 'java-16',
      title: 'Swap Two Numbers',
      description: 'Swap two numbers without using a third variable.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'After swap: a=10, b=5',
      testCases: [{ input: '5,10', expectedOutput: 'After swap: a=10, b=5', description: 'Swap 5 and 10' }],
      starterCode: 'public class Solution {\n    public static void swap(int a, int b) {\n        System.out.println("Before swap: a=" + a + ", b=" + b);\n        // Write your swap logic here\n        System.out.println("After swap: a=" + a + ", b=" + b);\n    }\n    public static void main(String[] args) {\n        swap(5, 10);\n    }\n}',
      solution: 'public class Solution {\n    public static void swap(int a, int b) {\n        System.out.println("Before swap: a=" + a + ", b=" + b);\n        a = a + b;\n        b = a - b;\n        a = a - b;\n        System.out.println("After swap: a=" + a + ", b=" + b);\n    }\n    public static void main(String[] args) {\n        swap(5, 10);\n    }\n}'
    });

    // Problem 17: Count Vowels and Consonants
    problems.push({
      id: 'java-17',
      title: 'Count Vowels and Consonants',
      description: 'Count the number of vowels and consonants in a string.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: 'Vowels: 2, Consonants: 3',
      testCases: [{ input: 'hello', expectedOutput: 'Vowels: 2, Consonants: 3', description: 'Count in hello' }],
      starterCode: 'public class Solution {\n    public static void countVowelsConsonants(String str) {\n        // Write your code here\n    }\n    public static void main(String[] args) {\n        countVowelsConsonants("hello");\n    }\n}',
      solution: 'public class Solution {\n    public static void countVowelsConsonants(String str) {\n        int vowels = 0, consonants = 0;\n        str = str.toLowerCase();\n        for (char c : str.toCharArray()) {\n            if (c >= \'a\' && c <= \'z\') {\n                if ("aeiou".indexOf(c) != -1) vowels++;\n                else consonants++;\n            }\n        }\n        System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);\n    }\n    public static void main(String[] args) {\n        countVowelsConsonants("hello");\n    }\n}'
    });

    // Problem 18: ASCII Value of Character
    problems.push({
      id: 'java-18',
      title: 'ASCII Value of Character',
      description: 'Find the ASCII value of a character.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '65',
      testCases: [{ input: 'A', expectedOutput: '65', description: 'ASCII of A' }],
      starterCode: 'public class Solution {\n    public static int getAscii(char c) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(getAscii(\'A\'));\n    }\n}',
      solution: 'public class Solution {\n    public static int getAscii(char c) {\n        return (int) c;\n    }\n    public static void main(String[] args) {\n        System.out.println(getAscii(\'A\'));\n    }\n}'
    });

    // Problem 19: Star Pattern - Right Triangle
    problems.push({
      id: 'java-19',
      title: 'Star Pattern - Right Triangle',
      description: 'Print a right triangle pattern using stars.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '*\n**\n***\n****',
      testCases: [{ input: '4', expectedOutput: '*\n**\n***\n****', description: 'Right triangle pattern' }],
      starterCode: 'public class Solution {\n    public static void printPattern(int n) {\n        // Write your code here\n    }\n    public static void main(String[] args) {\n        printPattern(4);\n    }\n}',
      solution: 'public class Solution {\n    public static void printPattern(int n) {\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        printPattern(4);\n    }\n}'
    });

    // Problem 20: Array Left Rotation
    problems.push({
      id: 'java-20',
      title: 'Array Left Rotation',
      description: 'Rotate array elements to the left by k positions.',
      difficulty: 'Basic',
      language: 'java',
      expectedOutput: '[3,4,5,1,2]',
      testCases: [{ input: '[1,2,3,4,5], k=2', expectedOutput: '[3,4,5,1,2]', description: 'Left rotate by 2' }],
      starterCode: 'public class Solution {\n    public static int[] leftRotate(int[] arr, int k) {\n        // Write your code here\n        return arr;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,4,5};\n        int[] result = leftRotate(arr, 2);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
      solution: 'public class Solution {\n    public static int[] leftRotate(int[] arr, int k) {\n        int n = arr.length;\n        k = k % n;\n        int[] result = new int[n];\n        for (int i = 0; i < n; i++) {\n            result[i] = arr[(i + k) % n];\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,4,5};\n        int[] result = leftRotate(arr, 2);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
    });
    
    // Generate remaining 30 problems to reach exactly 50
    const remainingProblems = [
      { 
        id: 'java-21', 
        title: 'Array Right Rotation', 
        difficulty: 'Basic', 
        language: 'java',
        expectedOutput: '[4,5,1,2,3]',
        description: 'Rotate array elements to the right by k positions.',
        testCases: [{ input: '[1,2,3,4,5], k=2', expectedOutput: '[4,5,1,2,3]', description: 'Right rotate by 2' }],
        starterCode: 'public class Solution {\n    public static int[] rightRotate(int[] arr, int k) {\n        // Write your code here\n        return arr;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,4,5};\n        int[] result = rightRotate(arr, 2);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[] rightRotate(int[] arr, int k) {\n        int n = arr.length;\n        k = k % n;\n        int[] result = new int[n];\n        for (int i = 0; i < n; i++) {\n            result[(i + k) % n] = arr[i];\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,4,5};\n        int[] result = rightRotate(arr, 2);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
      },
      { 
        id: 'java-22', 
        title: 'Find Unique Elements in Array', 
        difficulty: 'Basic', 
        expectedOutput: '[1,2,3,4,5]',
        description: 'Find all unique (non-duplicate) elements in an array.',
        testCases: [{ input: '[1,2,2,3,4,4,5]', expectedOutput: '[1,2,3,4,5]', description: 'Remove duplicates from array' }],
        starterCode: 'public class Solution {\n    public static int[] findUnique(int[] arr) {\n        // Write your code here\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,2,3,4,4,5};\n        int[] result = findUnique(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[] findUnique(int[] arr) {\n        java.util.Set<Integer> unique = new java.util.LinkedHashSet<>();\n        for (int num : arr) {\n            unique.add(num);\n        }\n        return unique.stream().mapToInt(Integer::intValue).toArray();\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,2,3,4,4,5};\n        int[] result = findUnique(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
      },
      { 
        id: 'java-23', 
        title: 'Find Missing Number', 
        difficulty: 'Basic', 
        expectedOutput: '4',
        description: 'Find the missing number in a sequence from 1 to n.',
        testCases: [{ input: '[1,2,3,5,6]', expectedOutput: '4', description: 'Find missing number in sequence 1-6' }],
        starterCode: 'public class Solution {\n    public static int findMissing(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,5,6};\n        System.out.println(findMissing(arr));\n    }\n}',
        solution: 'public class Solution {\n    public static int findMissing(int[] arr) {\n        int n = arr.length + 1;\n        int expectedSum = n * (n + 1) / 2;\n        int actualSum = 0;\n        for (int num : arr) {\n            actualSum += num;\n        }\n        return expectedSum - actualSum;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,5,6};\n        System.out.println(findMissing(arr));\n    }\n}'
      },
      { 
        id: 'java-24', 
        title: 'Remove Duplicates from Array', 
        difficulty: 'Basic', 
        expectedOutput: '[1,2,3,4,5]',
        description: 'Remove all duplicate elements from an array.',
        testCases: [{ input: '[1,2,2,3,4,4,5]', expectedOutput: '[1,2,3,4,5]', description: 'Remove duplicates from array' }],
        starterCode: 'public class Solution {\n    public static int[] removeDuplicates(int[] arr) {\n        // Write your code here\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,2,3,4,4,5};\n        int[] result = removeDuplicates(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[] removeDuplicates(int[] arr) {\n        java.util.Set<Integer> unique = new java.util.LinkedHashSet<>();\n        for (int num : arr) {\n            unique.add(num);\n        }\n        return unique.stream().mapToInt(Integer::intValue).toArray();\n    }\n    public static void main(String[] args) {\n        int[] arr = {1,2,2,3,4,4,5};\n        int[] result = removeDuplicates(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
      },
      { 
        id: 'java-25', 
        title: 'String Character Frequency (a1b2c3)',  
        difficulty: 'Intermediate', 
        expectedOutput: 'abbccc', 
        description: 'Expand characters in a string based on their frequency. For example, a1b2c3 → abbccc.', 
        testCases: [{ input: 'a1b2c3', expectedOutput: 'abbccc', description: 'Expand a1b2c3 to abbccc' }],
        starterCode: 'public class Solution {\n    public static String charFrequency(String str) {\n        // Write your code here\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(charFrequency("abcbcbc"));\n    }\n}', 
        solution: 'public class Solution {\n    public static String charFrequency(String str) {\n        java.util.Map<Character, Integer> freq = new java.util.LinkedHashMap<>();\n        for (char c : str.toCharArray()) {\n            freq.put(c, freq.getOrDefault(c, 0) + 1);\n        }\n        StringBuilder result = new StringBuilder();\n        for (java.util.Map.Entry<Character, Integer> entry : freq.entrySet()) {\n            for (int i = 0; i < entry.getValue(); i++) {\n                result.append(entry.getKey());\n            }\n        }\n        return result.toString();\n    }\n    public static void main(String[] args) {\n        System.out.println(charFrequency("abcbcbc"));\n    }\n}' 
      },
      { 
        id: 'java-26', 
        title: 'Count Vowels in String', 
        difficulty: 'Basic', 
        expectedOutput: '3',
        description: 'Count the number of vowels in a given string.',
        testCases: [{ input: 'programming', expectedOutput: '3', description: 'Count vowels in "programming"' }],
        starterCode: 'public class Solution {\n    public static int countVowels(String str) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(countVowels("programming"));\n    }\n}',
        solution: 'public class Solution {\n    public static int countVowels(String str) {\n        int count = 0;\n        str = str.toLowerCase();\n        for (char c : str.toCharArray()) {\n            if ("aeiou".indexOf(c) != -1) {\n                count++;\n            }\n        }\n        return count;\n    }\n    public static void main(String[] args) {\n        System.out.println(countVowels("programming"));\n    }\n}'
      },
      { 
        id: 'java-27', 
        title: 'Check if String contains only Vowels', 
        difficulty: 'Basic', 
        expectedOutput: 'true',
        description: 'Check if a string contains only vowel characters.',
        testCases: [
          { input: 'aeiou', expectedOutput: 'true', description: 'Check if "aeiou" contains only vowels' },
          { input: 'hello', expectedOutput: 'false', description: 'Check if "hello" contains only vowels' }
        ],
        starterCode: 'public class Solution {\n    public static boolean isAllVowels(String str) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAllVowels("aeiou"));\n    }\n}',
        solution: 'public class Solution {\n    public static boolean isAllVowels(String str) {\n        str = str.toLowerCase();\n        for (char c : str.toCharArray()) {\n            if ("aeiou".indexOf(c) == -1) {\n                return false;\n            }\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAllVowels("aeiou"));\n    }\n}'
      },
      { 
        id: 'java-28', 
        title: 'Check if String contains only Consonants', 
        difficulty: 'Basic', 
        expectedOutput: 'true',
        description: 'Check if a string contains only consonant characters.',
        testCases: [
          { input: 'bcdfg', expectedOutput: 'true', description: 'Check if "bcdfg" contains only consonants' },
          { input: 'hello', expectedOutput: 'false', description: 'Check if "hello" contains only consonants' }
        ],
        starterCode: 'public class Solution {\n    public static boolean isAllConsonants(String str) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAllConsonants("bcdfg"));\n    }\n}',
        solution: 'public class Solution {\n    public static boolean isAllConsonants(String str) {\n        str = str.toLowerCase();\n        for (char c : str.toCharArray()) {\n            if (c < \'a\' || c > \'z\' || "aeiou".indexOf(c) != -1) {\n                return false;\n            }\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAllConsonants("bcdfg"));\n    }\n}'
      },
      { 
        id: 'java-29', 
        title: 'String to Character Array', 
        difficulty: 'Basic', 
        expectedOutput: '[h,e,l,l,o]',
        description: 'Convert a string to character array and display it.',
        testCases: [{ input: 'hello', expectedOutput: '[h, e, l, l, o]', description: 'Convert "hello" to character array' }],
        starterCode: 'public class Solution {\n    public static char[] stringToCharArray(String str) {\n        // Write your code here\n        return new char[0];\n    }\n    public static void main(String[] args) {\n        char[] result = stringToCharArray("hello");\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static char[] stringToCharArray(String str) {\n        return str.toCharArray();\n    }\n    public static void main(String[] args) {\n        char[] result = stringToCharArray("hello");\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
      },
      { 
        id: 'java-30', 
        title: 'Character Array to String', 
        difficulty: 'Basic', 
        expectedOutput: 'hello',
        description: 'Convert a character array back to string.',
        testCases: [{ input: '[h,e,l,l,o]', expectedOutput: 'hello', description: 'Convert character array to "hello"' }],
        starterCode: 'public class Solution {\n    public static String charArrayToString(char[] chars) {\n        // Write your code here\n        return "";\n    }\n    public static void main(String[] args) {\n        char[] chars = {\'h\', \'e\', \'l\', \'l\', \'o\'};\n        System.out.println(charArrayToString(chars));\n    }\n}',
        solution: 'public class Solution {\n    public static String charArrayToString(char[] chars) {\n        return new String(chars);\n    }\n    public static void main(String[] args) {\n        char[] chars = {\'h\', \'e\', \'l\', \'l\', \'o\'};\n        System.out.println(charArrayToString(chars));\n    }\n}'
      },
      { 
        id: 'java-31', 
        title: 'Find Largest Element in Array', 
        difficulty: 'Basic', 
        expectedOutput: '9',
        description: 'Find the largest element in an integer array.',
        testCases: [{ input: '[5,2,8,1,9]', expectedOutput: '9', description: 'Find largest in [5,2,8,1,9]' }],
        starterCode: 'public class Solution {\n    public static int findLargest(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println(findLargest(arr));\n    }\n}',
        solution: 'public class Solution {\n    public static int findLargest(int[] arr) {\n        int max = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] > max) {\n                max = arr[i];\n            }\n        }\n        return max;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println(findLargest(arr));\n    }\n}'
      },
      { 
        id: 'java-32', 
        title: 'Find Smallest Element in Array', 
        difficulty: 'Basic', 
        expectedOutput: '1',
        description: 'Find the smallest element in an integer array.',
        testCases: [{ input: '[5,2,8,1,9]', expectedOutput: '1', description: 'Find smallest in [5,2,8,1,9]' }],
        starterCode: 'public class Solution {\n    public static int findSmallest(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println(findSmallest(arr));\n    }\n}',
        solution: 'public class Solution {\n    public static int findSmallest(int[] arr) {\n        int min = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] < min) {\n                min = arr[i];\n            }\n        }\n        return min;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println(findSmallest(arr));\n    }\n}'
      },
      { 
        id: 'java-33', 
        title: 'Sort Array in Ascending Order', 
        difficulty: 'Basic', 
        expectedOutput: '[1,2,5,8,9]',
        description: 'Sort an integer array in ascending order.',
        testCases: [{ input: '[5,2,8,1,9]', expectedOutput: '[1,2,5,8,9]', description: 'Sort [5,2,8,1,9] in ascending order' }],
        starterCode: 'public class Solution {\n    public static int[] sortAscending(int[] arr) {\n        // Write your code here\n        return arr;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        int[] result = sortAscending(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[] sortAscending(int[] arr) {\n        java.util.Arrays.sort(arr);\n        return arr;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        int[] result = sortAscending(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
      },
      { 
        id: 'java-34', 
        title: 'Sort Array in Descending Order', 
        difficulty: 'Basic', 
        expectedOutput: '[9,8,5,2,1]',
        description: 'Sort an integer array in descending order.',
        testCases: [{ input: '[5,2,8,1,9]', expectedOutput: '[9,8,5,2,1]', description: 'Sort [5,2,8,1,9] in descending order' }],
        starterCode: 'public class Solution {\n    public static int[] sortDescending(int[] arr) {\n        // Write your code here\n        return arr;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        int[] result = sortDescending(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[] sortDescending(int[] arr) {\n        java.util.Arrays.sort(arr);\n        for (int i = 0; i < arr.length / 2; i++) {\n            int temp = arr[i];\n            arr[i] = arr[arr.length - 1 - i];\n            arr[arr.length - 1 - i] = temp;\n        }\n        return arr;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        int[] result = sortDescending(arr);\n        System.out.println(java.util.Arrays.toString(result));\n    }\n}'
      },
      { 
        id: 'java-35', 
        title: 'Binary Search in Array', 
        difficulty: 'Intermediate', 
        expectedOutput: '2',
        description: 'Implement binary search to find element index in sorted array.',
        testCases: [
          { input: '[1,2,5,8,9], target=5', expectedOutput: '2', description: 'Find index of 5 in [1,2,5,8,9]' },
          { input: '[1,2,5,8,9], target=3', expectedOutput: '-1', description: 'Find index of 3 in [1,2,5,8,9] (not found)' }
        ],
        starterCode: 'public class Solution {\n    public static int binarySearch(int[] arr, int target) {\n        // Write your code here\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 5, 8, 9};\n        System.out.println(binarySearch(arr, 5));\n    }\n}',
        solution: 'public class Solution {\n    public static int binarySearch(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (arr[mid] == target) return mid;\n            if (arr[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 5, 8, 9};\n        System.out.println(binarySearch(arr, 5));\n    }\n}'
      },
      { 
        id: 'java-36', 
        title: 'Linear Search in Array', 
        difficulty: 'Basic', 
        expectedOutput: '2',
        description: 'Implement linear search to find element index in array.',
        testCases: [
          { input: '[5,2,8,1,9], target=8', expectedOutput: '2', description: 'Find index of 8 in [5,2,8,1,9]' },
          { input: '[5,2,8,1,9], target=7', expectedOutput: '-1', description: 'Find index of 7 in [5,2,8,1,9] (not found)' }
        ],
        starterCode: 'public class Solution {\n    public static int linearSearch(int[] arr, int target) {\n        // Write your code here\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println(linearSearch(arr, 8));\n    }\n}',
        solution: 'public class Solution {\n    public static int linearSearch(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) {\n                return i;\n            }\n        }\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println(linearSearch(arr, 8));\n    }\n}'
      },
      { 
        id: 'java-37', 
        title: 'Matrix Addition', 
        difficulty: 'Intermediate', 
        expectedOutput: '[[5,7],[9,11]]',
        description: 'Add two 2D matrices and return the result.',
        testCases: [{ input: '[[1,2],[3,4]] + [[4,5],[6,7]]', expectedOutput: '[[5,7],[9,11]]', description: 'Add two 2x2 matrices' }],
        starterCode: 'public class Solution {\n    public static int[][] addMatrices(int[][] a, int[][] b) {\n        // Write your code here\n        return new int[0][0];\n    }\n    public static void main(String[] args) {\n        int[][] a = {{1,2},{3,4}};\n        int[][] b = {{4,5},{6,7}};\n        int[][] result = addMatrices(a, b);\n        System.out.println(java.util.Arrays.deepToString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[][] addMatrices(int[][] a, int[][] b) {\n        int rows = a.length, cols = a[0].length;\n        int[][] result = new int[rows][cols];\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                result[i][j] = a[i][j] + b[i][j];\n            }\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        int[][] a = {{1,2},{3,4}};\n        int[][] b = {{4,5},{6,7}};\n        int[][] result = addMatrices(a, b);\n        System.out.println(java.util.Arrays.deepToString(result));\n    }\n}'
      },
      { 
        id: 'java-38', 
        title: 'Matrix Multiplication', 
        difficulty: 'Advanced', 
        expectedOutput: '[[19,22],[43,50]]',
        description: 'Multiply two 2D matrices and return the result.',
        testCases: [{ input: '[[1,2],[3,4]] * [[5,6],[7,8]]', expectedOutput: '[[19,22],[43,50]]', description: 'Multiply two 2x2 matrices' }],
        starterCode: 'public class Solution {\n    public static int[][] multiplyMatrices(int[][] a, int[][] b) {\n        // Write your code here\n        return new int[0][0];\n    }\n    public static void main(String[] args) {\n        int[][] a = {{1,2},{3,4}};\n        int[][] b = {{5,6},{7,8}};\n        int[][] result = multiplyMatrices(a, b);\n        System.out.println(java.util.Arrays.deepToString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[][] multiplyMatrices(int[][] a, int[][] b) {\n        int rows = a.length, cols = b[0].length, common = a[0].length;\n        int[][] result = new int[rows][cols];\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                for (int k = 0; k < common; k++) {\n                    result[i][j] += a[i][k] * b[k][j];\n                }\n            }\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        int[][] a = {{1,2},{3,4}};\n        int[][] b = {{5,6},{7,8}};\n        int[][] result = multiplyMatrices(a, b);\n        System.out.println(java.util.Arrays.deepToString(result));\n    }\n}'
      },
      { 
        id: 'java-39', 
        title: 'Transpose of Matrix', 
        difficulty: 'Intermediate', 
        expectedOutput: '[[1,3],[2,4]]',
        description: 'Find the transpose of a 2D matrix.',
        testCases: [{ input: '[[1,2],[3,4]]', expectedOutput: '[[1,3],[2,4]]', description: 'Transpose of 2x2 matrix' }],
        starterCode: 'public class Solution {\n    public static int[][] transpose(int[][] matrix) {\n        // Write your code here\n        return new int[0][0];\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {{1,2},{3,4}};\n        int[][] result = transpose(matrix);\n        System.out.println(java.util.Arrays.deepToString(result));\n    }\n}',
        solution: 'public class Solution {\n    public static int[][] transpose(int[][] matrix) {\n        int rows = matrix.length, cols = matrix[0].length;\n        int[][] result = new int[cols][rows];\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                result[j][i] = matrix[i][j];\n            }\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {{1,2},{3,4}};\n        int[][] result = transpose(matrix);\n        System.out.println(java.util.Arrays.deepToString(result));\n    }\n}'
      },
      { 
        id: 'java-40', 
        title: 'Sum of Diagonal Elements', 
        difficulty: 'Basic', 
        expectedOutput: '5',
        description: 'Find the sum of diagonal elements in a square matrix.',
        testCases: [{ input: '[[1,2],[3,4]]', expectedOutput: '5', description: 'Sum diagonal elements of 2x2 matrix (1+4)' }],
        starterCode: 'public class Solution {\n    public static int diagonalSum(int[][] matrix) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {{1,2},{3,4}};\n        System.out.println(diagonalSum(matrix));\n    }\n}',
        solution: 'public class Solution {\n    public static int diagonalSum(int[][] matrix) {\n        int sum = 0;\n        for (int i = 0; i < matrix.length; i++) {\n            sum += matrix[i][i];\n        }\n        return sum;\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {{1,2},{3,4}};\n        System.out.println(diagonalSum(matrix));\n    }\n}'
      },
      { 
        id: 'java-41', 
        title: 'Check Perfect Number', 
        difficulty: 'Intermediate', 
        expectedOutput: 'true',
        description: 'Check if a number is perfect (sum of proper divisors equals the number).',
        testCases: [
          { input: '6', expectedOutput: 'true', description: 'Check if 6 is perfect (1+2+3=6)' },
          { input: '10', expectedOutput: 'false', description: 'Check if 10 is perfect (1+2+5=8≠10)' }
        ],
        starterCode: 'public class Solution {\n    public static boolean isPerfect(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPerfect(6));\n    }\n}',
        solution: 'public class Solution {\n    public static boolean isPerfect(int n) {\n        if (n <= 1) return false;\n        int sum = 1;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) {\n                sum += i;\n                if (i != n / i) sum += n / i;\n            }\n        }\n        return sum == n;\n    }\n    public static void main(String[] args) {\n        System.out.println(isPerfect(6));\n    }\n}'
      },
      { 
        id: 'java-42', 
        title: 'Check Strong Number', 
        difficulty: 'Intermediate', 
        expectedOutput: 'true',
        description: 'Check if a number is strong (sum of factorial of digits equals the number).',
        testCases: [
          { input: '145', expectedOutput: 'true', description: 'Check if 145 is strong (1!+4!+5!=1+24+120=145)' },
          { input: '123', expectedOutput: 'false', description: 'Check if 123 is strong (1!+2!+3!=1+2+6=9≠123)' }
        ],
        starterCode: 'public class Solution {\n    public static boolean isStrong(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isStrong(145));\n    }\n}',
        solution: 'public class Solution {\n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static boolean isStrong(int n) {\n        int original = n, sum = 0;\n        while (n > 0) {\n            sum += factorial(n % 10);\n            n /= 10;\n        }\n        return sum == original;\n    }\n    public static void main(String[] args) {\n        System.out.println(isStrong(145));\n    }\n}'
      },
      { 
        id: 'java-43', 
        title: 'Sum of Digits', 
        difficulty: 'Basic', 
        expectedOutput: '15',
        description: 'Calculate the sum of digits in a number.',
        testCases: [{ input: '12345', expectedOutput: '15', description: 'Sum digits of 12345 (1+2+3+4+5)' }],
        starterCode: 'public class Solution {\n    public static int sumOfDigits(int n) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(sumOfDigits(12345));\n    }\n}',
        solution: 'public class Solution {\n    public static int sumOfDigits(int n) {\n        int sum = 0;\n        while (n > 0) {\n            sum += n % 10;\n            n /= 10;\n        }\n        return sum;\n    }\n    public static void main(String[] args) {\n        System.out.println(sumOfDigits(12345));\n    }\n}'
      },
      { 
        id: 'java-44', 
        title: 'Product of Digits', 
        difficulty: 'Basic', 
        expectedOutput: '120',
        description: 'Calculate the product of digits in a number.',
        testCases: [{ input: '12345', expectedOutput: '120', description: 'Product of digits of 12345 (1×2×3×4×5)' }],
        starterCode: 'public class Solution {\n    public static int productOfDigits(int n) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(productOfDigits(12345));\n    }\n}',
        solution: 'public class Solution {\n    public static int productOfDigits(int n) {\n        int product = 1;\n        while (n > 0) {\n            product *= n % 10;\n            n /= 10;\n        }\n        return product;\n    }\n    public static void main(String[] args) {\n        System.out.println(productOfDigits(12345));\n    }\n}'
      },
      { 
        id: 'java-45', 
        title: 'Reverse a Number', 
        difficulty: 'Basic', 
        expectedOutput: '54321',
        description: 'Reverse the digits of a given number.',
        testCases: [{ input: '12345', expectedOutput: '54321', description: 'Reverse digits of 12345' }],
        starterCode: 'public class Solution {\n    public static int reverseNumber(int n) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseNumber(12345));\n    }\n}',
        solution: 'public class Solution {\n    public static int reverseNumber(int n) {\n        int reversed = 0;\n        while (n > 0) {\n            reversed = reversed * 10 + n % 10;\n            n /= 10;\n        }\n        return reversed;\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseNumber(12345));\n    }\n}'
      },
      { 
        id: 'java-46', 
        title: 'Check if Number is Palindrome', 
        difficulty: 'Basic', 
        expectedOutput: 'true',
        description: 'Check if a number reads the same forwards and backwards.',
        testCases: [{ input: '12321', expectedOutput: 'true', description: 'Check if 12321 is palindrome' }],
        starterCode: 'public class Solution {\n    public static boolean isNumberPalindrome(int n) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isNumberPalindrome(12321));\n    }\n}',
        solution: 'public class Solution {\n    public static boolean isNumberPalindrome(int n) {\n        int original = n, reversed = 0;\n        while (n > 0) {\n            reversed = reversed * 10 + n % 10;\n            n /= 10;\n        }\n        return original == reversed;\n    }\n    public static void main(String[] args) {\n        System.out.println(isNumberPalindrome(12321));\n    }\n}'
      },
      { 
        id: 'java-47', 
        title: 'Count Digits in Number', 
        difficulty: 'Basic', 
        expectedOutput: '5',
        description: 'Count the number of digits in a given number.',
        testCases: [{ input: '12345', expectedOutput: '5', description: 'Count digits in 12345' }],
        starterCode: 'public class Solution {\n    public static int countDigits(int n) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(countDigits(12345));\n    }\n}',
        solution: 'public class Solution {\n    public static int countDigits(int n) {\n        if (n == 0) return 1;\n        int count = 0;\n        while (n > 0) {\n            count++;\n            n /= 10;\n        }\n        return count;\n    }\n    public static void main(String[] args) {\n        System.out.println(countDigits(12345));\n    }\n}'
      },
      { 
        id: 'java-48', 
        title: 'Find Power of Number', 
        difficulty: 'Basic', 
        expectedOutput: '32',
        description: 'Calculate base raised to the power of exponent.',
        testCases: [{ input: 'base=2, exp=5', expectedOutput: '32', description: 'Calculate 2^5' }],
        starterCode: 'public class Solution {\n    public static long power(int base, int exp) {\n        // Write your code here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(power(2, 5));\n    }\n}',
        solution: 'public class Solution {\n    public static long power(int base, int exp) {\n        long result = 1;\n        for (int i = 0; i < exp; i++) {\n            result *= base;\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        System.out.println(power(2, 5));\n    }\n}'
      },
      { 
        id: 'java-49', 
        title: 'Number to Words Converter', 
        difficulty: 'Advanced', 
        expectedOutput: 'one hundred twenty three',
        description: 'Convert a number to its word representation.',
        testCases: [{ input: '123', expectedOutput: 'one hundred twenty three', description: 'Convert 123 to words' }],
        starterCode: 'public class Solution {\n    public static String numberToWords(int n) {\n        // Write your code here\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(numberToWords(123));\n    }\n}',
        solution: 'public class Solution {\n    static String[] ones = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};\n    static String[] tens = {"", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};\n    \n    public static String numberToWords(int n) {\n        if (n == 0) return "zero";\n        return convert(n).trim();\n    }\n    \n    static String convert(int n) {\n        if (n < 20) return ones[n];\n        if (n < 100) return tens[n/10] + " " + ones[n%10];\n        if (n < 1000) return ones[n/100] + " hundred " + convert(n%100);\n        return convert(n/1000) + " thousand " + convert(n%1000);\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(numberToWords(123));\n    }\n}'
      },
      { 
        id: 'java-50', 
        title: 'Check Anagram Strings', 
        difficulty: 'Intermediate', 
        expectedOutput: 'true',
        description: 'Check if two strings are anagrams of each other.',
        testCases: [
          { input: '"listen", "silent"', expectedOutput: 'true', description: 'Check if "listen" and "silent" are anagrams' },
          { input: '"hello", "world"', expectedOutput: 'false', description: 'Check if "hello" and "world" are anagrams' }
        ],
        starterCode: 'public class Solution {\n    public static boolean areAnagrams(String s1, String s2) {\n        // Write your code here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(areAnagrams("listen", "silent"));\n    }\n}',
        solution: 'public class Solution {\n    public static boolean areAnagrams(String s1, String s2) {\n        if (s1.length() != s2.length()) return false;\n        char[] arr1 = s1.toLowerCase().toCharArray();\n        char[] arr2 = s2.toLowerCase().toCharArray();\n        java.util.Arrays.sort(arr1);\n        java.util.Arrays.sort(arr2);\n        return java.util.Arrays.equals(arr1, arr2);\n    }\n    public static void main(String[] args) {\n        System.out.println(areAnagrams("listen", "silent"));\n    }\n}'
      }
    ];

    // Add remaining problems to the main array
    remainingProblems.forEach(problem => {
      problems.push({
        id: problem.id,
        title: problem.title,
        description: problem.description,
        difficulty: problem.difficulty as 'Basic' | 'Intermediate' | 'Advanced',
        language: 'java',
        expectedOutput: problem.expectedOutput,
        testCases: problem.testCases || [{ input: 'sample input', expectedOutput: problem.expectedOutput, description: 'Test case for ' + problem.title }],
        starterCode: problem.starterCode,
        solution: problem.solution
      });
    });
    
    console.log('🎯 Java Problems Component: Generated ' + problems.length + ' problems');
    console.log('✅ Java Component Loaded: Palindromes, Prime Numbers, Armstrong Numbers, Technology Numbers, Evil Numbers, and more!');
    console.log('📊 Total Java Problems: ' + problems.length + '/50 (Memory Requirement Compliance)');
    
    // Verify we have exactly 50 problems as per memory requirement
    if (problems.length === 50) {
      console.log('✅ MEMORY REQUIREMENT FULFILLED: Exactly 50 Java problems loaded successfully!');
      console.log('🚀 All requested problems included: Palindromes, Prime, Tech Numbers, Evil Numbers, Strings, Arrays, LCM, HCF, Leap Year, Armstrong, Factorial, Fibonacci, Swap, Vowels/Consonants, ASCII, Patterns, Collections');
    } else {
      console.log('⚠️ Memory Requirement Warning: Expected 50 problems, got ' + problems.length);
    }
    
    return problems;
  }

  // Get total count of Java problems
  getTotalJavaProblems(): number {
    return this.getJavaProblems().length;
  }

  // Get problems by difficulty
  getJavaProblemsByDifficulty(difficulty: 'Basic' | 'Intermediate' | 'Advanced'): CodingProblem[] {
    return this.getJavaProblems().filter(problem => problem.difficulty === difficulty);
  }

  // Get problem categories summary
  getJavaProblemsSummary(): { total: number, basic: number, intermediate: number, advanced: number } {
    const problems = this.getJavaProblems();
    return {
      total: problems.length,
      basic: problems.filter(p => p.difficulty === 'Basic').length,
      intermediate: problems.filter(p => p.difficulty === 'Intermediate').length,
      advanced: problems.filter(p => p.difficulty === 'Advanced').length
    };
  }
}
