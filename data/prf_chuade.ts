import { Question } from '../types';

export const prfChuadeData: Question[] = [
    {
        "id": 1,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "printf(\"ll\");", "label": "A" },
            { "text": "printf(\"abc\");", "label": "B" },
            { "text": "printf(\"%%\");", "label": "C" },
            { "text": "printf(\"\\n\");", "label": "D" }
        ],
        "question": "Which of the following statements is invalid?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 2,
        "type": "multiple",
        "points": 2,
        "correct": ["C", "E"],
        "options": [
            { "text": "scanf(\"%s\", s);", "label": "A" },
            { "text": "scanf(\"%[^\\n]\", s);", "label": "B" },
            { "text": "getc(s);", "label": "C" },
            { "text": "gets(s)", "label": "D" },
            { "text": "scanf(s);", "label": "E" }
        ],
        "question": "What is incorrect when input a string?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 3,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "float* ptr;", "label": "A" },
            { "text": "float ptr;", "label": "B" },
            { "text": "*float ptr;", "label": "C" },
            { "text": "float ptr *;", "label": "D" }
        ],
        "question": "Choose the correct statement for declaring a float pointer:",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 4,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "string a;", "label": "A" },
            { "text": "float a = 3e2;", "label": "B" },
            { "text": "int* a;", "label": "C" },
            { "text": "float *a;", "label": "D" },
            { "text": "char * a;", "label": "E" }
        ],
        "question": "Which of the following declaration is not supported by C?",
        "image_url": "",
        "explanation": "Trong C không có kiểu dữ liệu string. Chuỗi trong C phải dùng char[] hoặc char *. The rest đều hợp lệ."
    },
    {
        "id": 5,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "float* fun(float *p);", "label": "A" },
            { "text": "float fun(float *p);", "label": "B" },
            { "text": "float fun(double *p);", "label": "C" },
            { "text": "float* fun(int *p);", "label": "D" }
        ],
        "question": "Which of the following statements correctly declares a function that receives a float pointer parameter and returns a float pointer?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 6,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "int_a3;", "label": "A" },
            { "text": "int a_3;", "label": "B" },
            { "text": "int 3_a;", "label": "C" },
            { "text": "int_3a", "label": "D" }
        ],
        "question": "Which of the following is not a valid variable name declaration?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 7,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "int 1student ID;", "label": "A" },
            { "text": "int_Student_ID1;", "label": "B" },
            { "text": "int Age$;", "label": "C" },
            { "text": "int long;", "label": "D" }
        ],
        "question": "Which of the following is a valid variable definition?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 8,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "int *p;", "label": "A" },
            { "text": "int p *;", "label": "B" },
            { "text": "int +p;", "label": "C" },
            { "text": "int $p;", "label": "D" }
        ],
        "question": "Choose the correct statement for declaring a pointer variable to an integer variable.",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 9,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "int a[2,3] = [[1,2,3],[4,5,6]];", "label": "A" },
            { "text": "int a[ll]= {1,2,3},{4,5,6}};", "label": "B" },
            { "text": "int a[2][3]= [[1,2,3],[4,5,6]];", "label": "C" },
            { "text": "int a[l[3]={{1,2,3},{4,5,6}};", "label": "D" }
        ],
        "question": "Which of the following is a valid code to use to declare and initialize a two-dimensional array?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 10,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "int arr[5];", "label": "A" },
            { "text": "array int arr = [5];", "label": "B" },
            { "text": "int arr = new int[5];", "label": "C" },
            { "text": "int arr{5};", "label": "D" }
        ],
        "question": "Which of the following correctly declares an integer array of size 5 in C/C++?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 11,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "int* a = (int*)malloc(5*sizeof(int));", "label": "A" },
            { "text": "int a[5];", "label": "B" },
            { "text": "int a[5][5];", "label": "C" },
            { "text": "free(a);", "label": "D" }
        ],
        "question": "What represents dynamic allocation in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 12,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "feof()", "label": "A" },
            { "text": "eof()", "label": "B" },
            { "text": "fscanf()", "label": "C" },
            { "text": "checkEOF()", "label": "D" }
        ],
        "question": "What function in C is used to check if the end of a file has been reached?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 13,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "int minus(int a; int b) {return (a - b);}", "label": "A" },
            { "text": "int minus (int a, b) {return (a - b);};", "label": "B" },
            {
                "text": "int minus (int a, int b) {return (a - b);};",
                "label": "C"
            },
            { "text": "int minus (int a, b) {return (a - b);};", "label": "D" }
        ],
        "question": "Which is the correct function definition that will run without errors?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 14,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "void printSum(int* a, int b);", "label": "A" },
            { "text": "int printSum(int* a, int b);", "label": "B" },
            { "text": "int printSum(int a, b);", "label": "C" },
            { "text": "int* printSum(int* a, int b);", "label": "D" }
        ],
        "question": "What is incorrect about function prototype?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 15,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            {
                "text": "for ( Init1, Init2; Condition; Task1, Task2);",
                "label": "A"
            },
            { "text": "for ( Init1, Condition ,Task1);", "label": "B" },
            { "text": "for (Condition ; Init1, Init2; Task1);", "label": "C" },
            { "text": "for ( Init1; Init2; Condition ; Task2)", "label": "D" }
        ],
        "question": "Which of the following is the correct syntax of the for statement?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 16,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "int average( double, double);", "label": "A" },
            { "text": "double average( double, double);", "label": "B" },
            { "text": "char average( double, double);", "label": "C" },
            { "text": "void average( double, double);", "label": "D" }
        ],
        "question": "The function which will compute the average of two real numbers should be prototyped as:",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 17,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "int i=(double)123.5;", "label": "A" },
            { "text": "double t = double(2);", "label": "B" },
            { "text": "double t = (double) 2;", "label": "C" },
            { "text": "double t = (int) 2.7;", "label": "D" }
        ],
        "question": "Which implicit type casting is used in the following codes in C programming?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 18,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "char arr[] = \"Hello\";", "label": "A" },
            {
                "text": "char arrll = ['H', 'e', 'l', 'l', 'o','/e'];",
                "label": "B"
            },
            { "text": "Char[] arr =\"Hello\";", "label": "C" },
            {
                "text": "Charl] arr = {'H', 'e', 'T', 'T', 'o','/0'};",
                "label": "D"
            }
        ],
        "question": "How can you initialize a character array in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 19,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "char c1 = 'B'; printf(\"%c\",c1);", "label": "A" },
            { "text": "char c2 = 066; printf(\"%c\",c2);", "label": "B" },
            { "text": "char c3 = 0x42; printf(\"%c\",c3);", "label": "C" },
            { "text": "char c4 = 0102; printf(\"%c\",c4);", "label": "D" }
        ],
        "question": "Which of the following statements has a different result from the other statements?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 20,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "printf(\"Il\");", "label": "A" },
            { "text": "printf(\"abc\");", "label": "B" },
            { "text": "printf(\"%%\");", "label": "C" },
            { "text": "printf(\"\\n\");", "label": "D" }
        ],
        "question": "Which of the following statements is invalid?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 21,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "do{ statements; } while(condition) ;", "label": "A" },
            { "text": "do while(condition) { statements;}", "label": "B" },
            { "text": "do{ statements; } while (condition)", "label": "C" },
            { "text": "do{ statements; } while (condition) ;", "label": "D" }
        ],
        "question": "Which of the following is the correct syntax of the do-while statement?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 22,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "(condition) ? True_Value : False_Value", "label": "A" },
            { "text": "for ( InitBlock; Condition; Task2) Task1;", "label": "B" },
            { "text": "do{ statements;} while (condition) ;", "label": "C" },
            { "text": "while (condition){ statements; }", "label": "D" }
        ],
        "question": "Which of the following is an incorrect iteration construct?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 23,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "int fputc( int c, FILE *fp );", "label": "A" },
            { "text": "int fputs( const char *s, FILE *fp );", "label": "B" },
            { "text": "int fgetc( FILE *fp );", "label": "C" },
            { "text": "char *fgets( char *buf, int n, FILE *fp );", "label": "D" }
        ],
        "question": "Which function writes the character value of the argument c to the output stream referenced by fp?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 24,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "condition ? expression1 : expression2", "label": "A" },
            { "text": "condition ? expression1, expression2", "label": "B" },
            { "text": "condition : expression1 ? expression2", "label": "C" },
            { "text": "expression1 : condition ? expression2", "label": "D" }
        ],
        "question": "What is the syntax of the conditional operator in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 25,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "int average( double, double);", "label": "A" },
            { "text": "double average( double, double);", "label": "B" },
            { "text": "char average( double, double);", "label": "C" },
            { "text": "void average( double, double);", "label": "D" }
        ],
        "question": "The function which will compute the average of two real numbers should be prototyped as:",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 26,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "double", "label": "A" },
            { "text": "int", "label": "B" },
            { "text": "long double", "label": "C" },
            { "text": "float", "label": "D" }
        ],
        "question": "The pow() function in the math.h library is used to calculate the value of a number raised to a specified power. What is the return value type of the pow() function?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 27,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "while (condition) { statements; }", "label": "A" },
            { "text": "(condition){ statements ;}", "label": "B" },
            { "text": "while (condition) { statements ;}", "label": "C" },
            { "text": "{ statements } while (condition);", "label": "D" }
        ],
        "question": "Which of the following is the correct syntax of the while statement?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 28,
        "type": "multiple",
        "points": 2,
        "correct": ["B", "C"],
        "options": [
            { "text": "FILE *f = fwrite(\"output.txt\", \"a\" );", "label": "A" },
            { "text": "FILE *f = fopen(\"output.txt\", \"a\" );", "label": "B" },
            { "text": "FILE *f = fopen(\"output.txt\", \"a+\");", "label": "C" },
            { "text": "FILE *f = fopen(\"output.txt\", \"w+\");", "label": "D" },
            { "text": "FILE *f = fopen(\"output.txt\", \"w\" );", "label": "E" }
        ],
        "question": "What commands are used to write data appended to the end of the file? (Choose 2 answers)",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 29,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "ptr = realloc( ptr, 5 * sizeof(int) );", "label": "A" },
            { "text": "realloc( ptr, 5 * sizeof(int) );", "label": "B" },
            { "text": "ptr += malloc( 5* sizeof( int));", "label": "C" },
            { "text": "realloc( ptr, 20);", "label": "D" },
            { "text": "ptr = realloc( ptr, 20);", "label": "E" }
        ],
        "question": "int *ptr = malloc( sizeof( int) ); To reallocate ptr to be an array of 5 elements, which of the following statements generates an error?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 30,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "printf(\"Hello, World!\");", "label": "A" },
            { "text": "cout << \"Hello, World!\" << endl;", "label": "B" },
            { "text": "System.out.println(\"Hello, World!\");", "label": "C" },
            { "text": "echo \"Hello, World!\";", "label": "D" }
        ],
        "question": "What is the correct syntax to output \"Hello, World!\" in C/C++?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 31,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "FILE *f = fwrite(\"test.bin\", \"b\" );", "label": "A" },
            { "text": "FILE *f = fopen(\"test.bin\", \"w\");", "label": "B" },
            { "text": "FILE *f = fopen(\"test.bin\", \"wb\" );", "label": "C" },
            { "text": "FILE *f = fwriteb(\"test.bin\" );", "label": "D" },
            { "text": "FILE *f = fopen(\"test.bin\", \"bwr\" );", "label": "E" }
        ],
        "question": "What is a proper method of opening a file for writing as binary file?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 32,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1254", "label": "A" },
            { "text": "1158", "label": "B" },
            { "text": "1159", "label": "C" },
            { "text": "1257", "label": "D" }
        ],
        "question": "A one dimensional array A has indices 1 ... 100. Each element is a string and takes up three byte. The starting address of the array A[1] is 1110 decimal. The address of A[49] is ____",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 33,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "0b01100010", "label": "A" },
            { "text": "0b10100010", "label": "B" },
            { "text": "0b10010010", "label": "C" },
            { "text": "0b10110010", "label": "D" }
        ],
        "question": "What is the binary representation of 0xA2?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 34,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "0", "label": "B" },
            { "text": "-1", "label": "C" }
        ],
        "question": "The strcmp() compares two strings character by character. If the strings are equal, the function returns ...",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 35,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "0", "label": "B" },
            { "text": "-1", "label": "C" }
        ],
        "question": "What is the result of the statement strcmp(\"abcdef\",\"abdc\")?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 36,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "True", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "0", "label": "C" },
            { "text": "-1", "label": "D" }
        ],
        "question": "If the two strings have the same value, then strcmp() function returns ____",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 37,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "-1", "label": "C" },
            { "text": "<0", "label": "D" },
            { "text": ">0", "label": "E" }
        ],
        "question": "Given two character strings s1=\"C\" and s2=\"C and C++\", the function strcmp(s1, s2) will return the value ____",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 38,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "3", "label": "D" }
        ],
        "question": "Given the following code snippet: int a[10] = {1, 2, 3}; What is the value of a[3]?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 39,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "3", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "0", "label": "D" }
        ],
        "question": "What is the result of the expression 10 % 3?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 40,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "0", "label": "B" },
            { "text": "-1", "label": "C" },
            { "text": "2", "label": "D" }
        ],
        "question": "What is the return value of the strcmp(\"abc\",\"Abcdef\") function?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 41,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "2", "label": "B" },
            { "text": "3", "label": "C" },
            { "text": "4", "label": "D" }
        ],
        "question": "What will be the output of the C program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20122657.png",
        "explanation": ""
    },
    {
        "id": 42,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "4", "label": "B" },
            { "text": "5", "label": "C" },
            { "text": "0", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20122853.png",
        "explanation": ""
    },
    {
        "id": 43,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "3", "label": "A" },
            { "text": "2", "label": "B" },
            { "text": "2.5", "label": "C" },
            { "text": "2.6", "label": "D" }
        ],
        "question": "What is the value of ceil(2.55) from the math.h library?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 44,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "14", "label": "A" },
            { "text": "15", "label": "B" },
            { "text": "16", "label": "C" },
            { "text": "20", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20123047.png",
        "explanation": ""
    },
    {
        "id": 45,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "4", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "8", "label": "D" }
        ],
        "question": "Suppose there is a function in C as follows: (ở dưới) What is the value of z after executing the statement z=g(2,0)? ",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20123220.png",
        "explanation": ""
    },
    {
        "id": 46,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "9", "label": "A" },
            { "text": "10", "label": "B" },
            { "text": "8", "label": "C" },
            { "text": "It depends on the contents of the array", "label": "D" }
        ],
        "question": "What is the maximum index of the last character in a character array initialized with a size is 10?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 47,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "10", "label": "C" },
            { "text": "11", "label": "D" }
        ],
        "question": "What is the result of the expression !1?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 48,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "2", "label": "A" },
            { "text": "8", "label": "B" },
            { "text": "16", "label": "C" },
            { "text": "6", "label": "D" }
        ],
        "question": "What will be the output of the C program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20123431.png",
        "explanation": ""
    },
    {
        "id": 49,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "4-1", "label": "A" },
            { "text": "0 1", "label": "B" },
            { "text": "1 0", "label": "C" },
            { "text": "0 2", "label": "D" }
        ],
        "question": "What will the following program print?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20123611.png",
        "explanation": ""
    },
    {
        "id": 50,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "9", "label": "A" },
            { "text": "8", "label": "B" },
            { "text": "12", "label": "C" },
            { "text": "10", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20123709.png",
        "explanation": ""
    },
    {
        "id": 51,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "5", "label": "A" },
            { "text": "22", "label": "B" },
            { "text": "18", "label": "C" },
            { "text": "25", "label": "D" },
            { "text": "28", "label": "E" }
        ],
        "question": "What is the result of the \"printf(\"%d\", 0x11 | 010);\" command?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 52,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "3", "label": "A" },
            { "text": "13", "label": "B" },
            { "text": "19", "label": "C" },
            { "text": "25", "label": "D" },
            { "text": "27", "label": "E" }
        ],
        "question": "In the sample code int a = 0x10 | 011; the variable a will contain the value (in decimal number system):",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 53,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "5", "label": "A" },
            { "text": "4", "label": "B" },
            { "text": "9", "label": "C" },
            { "text": "12", "label": "D" }
        ],
        "question": "Assume we have the following code: (ở dưới) What is the result of the following expression: ++*p?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20124215.png",
        "explanation": "i = 4; p trỏ đến i ⇒ *p chính là giá trị của i, tức là 4; ++*p nghĩa là tăng giá trị mà p trỏ tới lên 1. Nên i trở thành 5. → Kết quả biểu thức là 5."
    },
    {
        "id": 54,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "10", "label": "C" },
            { "text": "100", "label": "D" }
        ],
        "question": "Assume we have a snippet code in C. The output will be:",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20124402.png",
        "explanation": ""
    },
    {
        "id": 55,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "i=2", "label": "A" },
            { "text": "i=0", "label": "B" },
            { "text": "j=3", "label": "C" },
            { "text": "j=1", "label": "D" }
        ],
        "question": "What will be the output of the C program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20124621.png",
        "explanation": ""
    },
    {
        "id": 56,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "11,11", "label": "A" },
            { "text": "1,1", "label": "B" },
            { "text": "0,0", "label": "C" },
            { "text": "0,1", "label": "D" }
        ],
        "question": "What will be the output of the following program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20125216.png",
        "explanation": ""
    },
    {
        "id": 57,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "22", "label": "A" },
            { "text": "10", "label": "B" },
            { "text": "12", "label": "C" },
            { "text": "21", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20125539.png",
        "explanation": ""
    },
    {
        "id": 58,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "16", "label": "A" },
            { "text": "28", "label": "B" },
            { "text": "37", "label": "C" },
            { "text": "32", "label": "D" },
            { "text": "-28", "label": "E" }
        ],
        "question": "What is the value of z after the \"int a = 8, b = 6, c = 4, b++ * ++c + -- a;\" command?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 59,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "78", "label": "A" },
            { "text": "76", "label": "B" },
            { "text": "74", "label": "C" },
            { "text": "72", "label": "D" }
        ],
        "question": "What is the result when converting 0101010 in binary system to decimal system?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 60,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "101", "label": "A" },
            { "text": "102", "label": "B" },
            { "text": "0", "label": "C" },
            { "text": "Address of i", "label": "D" }
        ],
        "question": "What will be the output of the following program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20125802.png",
        "explanation": ""
    },
    {
        "id": 61,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1264", "label": "A" },
            { "text": "1200", "label": "B" },
            { "text": "1208", "label": "C" },
            { "text": "1209", "label": "D" }
        ],
        "question": "Assume we have the following codes: (ở dưới) Suppose that a double occupies the memory block of 8 bytes, and the address of d is 1200. What is the result of the following expression: p + 8?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20125940.png",
        "explanation": ""
    },
    {
        "id": 62,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "105", "label": "A" },
            { "text": "150", "label": "B" },
            { "text": "120", "label": "C" },
            { "text": "210", "label": "D" }
        ],
        "question": "What will be the output of the following C code?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130101.png",
        "explanation": "(14(14-1))/2=105"
    },
    {
        "id": 63,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "130", "label": "A" },
            { "text": "-130", "label": "B" },
            { "text": "126", "label": "C" },
            { "text": "-126", "label": "D" }
        ],
        "question": "What will be the output of the following C code?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130209.png",
        "explanation": ""
    },
    {
        "id": 64,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "2 3", "label": "A" },
            { "text": "3 2", "label": "B" },
            { "text": "3 7", "label": "C" },
            { "text": "2 6356728", "label": "D" }
        ],
        "question": "What will be the output of the following C code?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130318.png",
        "explanation": ""
    },
    {
        "id": 65,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0 5", "label": "A" },
            { "text": "5 10", "label": "B" },
            { "text": "10 5", "label": "C" },
            { "text": "0 0", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130431.png",
        "explanation": ""
    },
    {
        "id": 66,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "10 5", "label": "A" },
            { "text": "5 10", "label": "B" },
            { "text": "5 5", "label": "C" },
            { "text": "10 10", "label": "D" }
        ],
        "question": "What will be the output of the following code snippet:",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130534.png",
        "explanation": ""
    },
    {
        "id": 67,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "15 10 5", "label": "A" },
            { "text": "15 5 10", "label": "B" },
            { "text": "10 15 15", "label": "C" },
            { "text": "10 10 5", "label": "D" }
        ],
        "question": "What will be the output of the following code snippet:",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130758.png",
        "explanation": ""
    },
    {
        "id": 68,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1 11 10", "label": "A" },
            { "text": "10 11 1", "label": "B" },
            { "text": "10 11 10", "label": "C" },
            { "text": "1 1 10", "label": "D" }
        ],
        "question": "What will be the output of the following C code?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20130920.png",
        "explanation": ""
    },
    {
        "id": 69,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "8 9", "label": "A" },
            { "text": "9 8", "label": "B" },
            { "text": "8 8", "label": "C" },
            { "text": "9 9", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20131240.png",
        "explanation": ""
    },
    {
        "id": 70,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "10,10", "label": "A" },
            { "text": "10,11", "label": "B" },
            { "text": "11,10", "label": "C" },
            { "text": "11,11", "label": "D" }
        ],
        "question": "What will be the output of the following C code?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20131428.png",
        "explanation": ""
    },
    {
        "id": 71,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Compiler error", "label": "A" },
            { "text": "22", "label": "B" },
            { "text": "21", "label": "C" },
            { "text": "20", "label": "D" }
        ],
        "question": "What will be the output of the following program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20131652.png",
        "explanation": ""
    },
    {
        "id": 72,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "4 13", "label": "A" },
            { "text": "5 12", "label": "B" },
            { "text": "4 12", "label": "C" },
            { "text": "5 13", "label": "D" },
            { "text": "1 1", "label": "E" }
        ],
        "question": "What is the result of the \"printf(\"%d %d\", 12&5,12|5);\" command?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 73,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "102, 102", "label": "A" },
            { "text": "100, 102", "label": "B" },
            { "text": "100, 100", "label": "C" },
            { "text": "102, 100", "label": "D" }
        ],
        "question": "What will be the output of the following program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20131841.png",
        "explanation": ""
    },
    {
        "id": 74,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1;18;120", "label": "A" },
            { "text": "10;19;60", "label": "B" },
            { "text": "1;20;60", "label": "C" },
            { "text": "10; 19;120", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20131957.png",
        "explanation": ""
    },
    {
        "id": 75,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "-20;90;8", "label": "A" },
            { "text": "70;90;80", "label": "B" },
            { "text": "150;80;8", "label": "C" },
            { "text": "150;90;80", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20135533.png",
        "explanation": ""
    },
    {
        "id": 76,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "97;98;99;100", "label": "A" },
            { "text": "65;66;67;68", "label": "B" },
            { "text": "65;98;67;100", "label": "C" },
            { "text": "98;67;100;0", "label": "D" }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20135623.png",
        "explanation": ""
    },
    {
        "id": 77,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "10 8 6 4 2", "label": "A" },
            { "text": "10 8 6 4 2 0", "label": "B" },
            { "text": "10 8 6 4 2 0 -2 -4", "label": "C" },
            { "text": "10 9 8 7 6 5 4 3 2", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20135800.png",
        "explanation": ""
    },
    {
        "id": 78,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0 1 1 2 3 3", "label": "A" },
            { "text": "0.5 1.0 1.5 2.5 3.0 3.5", "label": "B" },
            { "text": "1 1 2 3 4", "label": "C" },
            { "text": "0 1 1 2 2 3", "label": "D" }
        ],
        "question": "What is the result displayed on the screen of the following program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20135931.png",
        "explanation": ""
    },
    {
        "id": 79,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Compiler error", "label": "A" },
            { "text": "1.000000", "label": "B" },
            { "text": "1.500000", "label": "C" },
            { "text": "1.0", "label": "D" },
            { "text": "1.5", "label": "E" },
            { "text": "1", "label": "F" }
        ],
        "question": "What does the following code print?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20140123.png",
        "explanation": "a % b lỗi ở đây vì % áp dụng cho số nguyên, còn số thực dùng fmod(a, b)"
    },
    {
        "id": 80,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "0.000000", "label": "A" },
            { "text": "2.000000", "label": "B" },
            { "text": "2.500000", "label": "C" },
            { "text": "Garbage value", "label": "D" }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20140216.png",
        "explanation": ""
    },
    {
        "id": 81,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "2.5", "label": "A" },
            { "text": "2", "label": "B" },
            { "text": "2.500000", "label": "C" },
            { "text": "2.000000", "label": "D" }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20140345.png",
        "explanation": ""
    },
    {
        "id": 82,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "2", "label": "B" },
            { "text": "Compiler error.", "label": "C" },
            { "text": "4", "label": "D" }
        ],
        "question": "What will be the output of the C program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20140514.png",
        "explanation": "Vì chưa truyền đối số vào i"
    },
    {
        "id": 83,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "0", "label": "B" },
            { "text": "Loop infinitely", "label": "C" },
            { "text": "Compile time error", "label": "D" }
        ],
        "question": "How many times will the do-while loop execute the code if the condition is false?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 84,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Compile time error", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "return 1:return 2", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20140722.png",
        "explanation": "Return là lệch, k phải biếu thức trong toán tử 3 ngôi"
    },
    {
        "id": 85,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "2", "label": "A" },
            { "text": "3", "label": "B" },
            { "text": "4", "label": "C" },
            { "text": "An error will be raised.", "label": "D" }
        ],
        "question": "What does the following program display?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20140814.png",
        "explanation": ""
    },
    {
        "id": 86,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "2", "label": "A" },
            { "text": "5", "label": "B" },
            { "text": "Compilation error.", "label": "C" },
            { "text": "3", "label": "D" }
        ],
        "question": "What will be the output of the C program?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20141022.png",
        "explanation": ""
    },
    {
        "id": 87,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Compile time error", "label": "A" },
            { "text": "6", "label": "B" },
            { "text": "4", "label": "C" },
            { "text": "5", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20141146.png",
        "explanation": ""
    },
    {
        "id": 88,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Compile error", "label": "A" },
            { "text": "5", "label": "B" },
            { "text": "NULL", "label": "C" },
            { "text": "6", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20141349.png",
        "explanation": ""
    },
    {
        "id": 89,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "5", "label": "A" },
            { "text": "Run time error", "label": "B" },
            { "text": "6", "label": "C" },
            { "text": "Junk", "label": "D" }
        ],
        "question": "What will be the output of the following C code?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20141507.png",
        "explanation": ""
    },
    {
        "id": 90,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "10", "label": "A" },
            { "text": "5", "label": "B" },
            { "text": "15", "label": "C" },
            { "text": "Compiler error", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20141618.png",
        "explanation": ""
    },
    {
        "id": 91,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "10", "label": "A" },
            { "text": "20", "label": "B" },
            { "text": " ' '", "label": "C" },
            { "text": "Undefined", "label": "D" }
        ],
        "question": "What is the output of the following code if the user enters the value \"20\"?",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-11-05%20141743.png",
        "explanation": ""
    }
];
