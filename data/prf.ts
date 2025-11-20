import { Question } from '../types';

export const prfData: Question[] = [
    {
        "id": 1,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "0, h",
                "label": "A"
            },
            {
                "text": "5, 0",
                "label": "B"
            },
            {
                "text": "5,",
                "label": "C"
            },
            {
                "text": "5, w",
                "label": "D"
            }
        ],
        "question": "What is the result displayed on the screen of the following program?\n#include<stdio.h>\n#include<ctype.h>\nint main()\nchar a[] = \"hello world\";\nint i = 0;\nwhile (!isspace(a[i]))\nprintf(\"%d, %c\", i, a[i-1]);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 2,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "=",
                "label": "A"
            },
            {
                "text": "II",
                "label": "B"
            },
            {
                "text": "==",
                "label": "C"
            },
            {
                "text": "1=",
                "label": "D"
            }
        ],
        "question": "Which of these is NOT a relational or logical operator?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 3,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Compile time error",
                "label": "A"
            },
            {
                "text": "Run time error",
                "label": "B"
            },
            {
                "text": "Input erroг",
                "label": "C"
            },
            {
                "text": "Linking error",
                "label": "D"
            }
        ],
        "question": "Errors that occur due to syntax errors belong to which of the following?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 4,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "loop",
                "label": "A"
            },
            {
                "text": "Infinite loop",
                "label": "B"
            },
            {
                "text": "loop loop loop",
                "label": "C"
            },
            {
                "text": "loop loop",
                "label": "D"
            }
        ],
        "question": "What will be the output of the C program?\nint i = 5, j = 8;\nwhile(++i <-j)\nprintf(\"loop\");\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 5,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Return type, function name, parameters, and function body",
                "label": "A"
            },
            {
                "text": "Return type, function name, return value, and function body",
                "label": "B"
            },
            {
                "text": "Return type, function name, parameters, and return value",
                "label": "C"
            },
            {
                "text": "Return value, function name, parameters, and function body",
                "label": "D"
            }
        ],
        "question": "What is the correct order of the main components in the function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 6,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The sum of diagonal elements in the matrix",
                "label": "A"
            },
            {
                "text": "The sum of all elements in the matrix",
                "label": "B"
            },
            {
                "text": "The sum of non-diagonal elements in the matrix",
                "label": "C"
            },
            {
                "text": "The sum of elements below the main diagonal in the matrix",
                "label": "D"
            }
        ],
        "question": "Consider a 3x3 matrix mat as shown below. The code snippet is executed to calculate a value. Which of the following options correctly describes the value of the sum after executing\nint sum = 0;\nfor (int i = 0; i < 3; i++)\nsum += matrix[00:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 7,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "float fun(float *p);",
                "label": "A"
            },
            {
                "text": "float fun(float *p);",
                "label": "B"
            },
            {
                "text": "float fun(double *p);",
                "label": "C"
            },
            {
                "text": "float\" fun(int \"p);",
                "label": "D"
            }
        ],
        "question": "Which of the following statements correctly declares a function that receives a float pointer p returns a float pointer?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 8,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "130",
                "label": "A"
            },
            {
                "text": "-130",
                "label": "B"
            },
            {
                "text": "126",
                "label": "C"
            },
            {
                "text": "-126",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following C code?\n#include <stdio.h>\nvoid main() {\nchar result = 125:\nresult = result + 5;\nprintf(\"%d\", result);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 9,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "105",
                "label": "A"
            },
            {
                "text": "150",
                "label": "B"
            },
            {
                "text": "120",
                "label": "C"
            },
            {
                "text": "210",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following C code?\n#include <stdio.h>\nvoid main()\n{\nint total=0;\nfor(int s=1; s<15; s++)\ntotal=total+s;\nprintf(\"%d\", total);\n}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 10,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "1 byte",
                "label": "A"
            },
            {
                "text": "2 bytes",
                "label": "B"
            },
            {
                "text": "4 bytes",
                "label": "C"
            },
            {
                "text": "8 bytes",
                "label": "D"
            }
        ],
        "question": "How many bytes to represent float data type in c?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 11,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Pointers are containers for storing data values, like numbers and characters",
                "label": "A"
            },
            {
                "text": "If one variable contains the address of another variable, the first variable is said to point t variable",
                "label": "B"
            },
            {
                "text": "A pointer provides an indirect method of accessing the value of a data item",
                "label": "C"
            },
            {
                "text": "Pointers can point to variables of other fundamental data types like int, char, or double or like arrays or structures",
                "label": "D"
            }
        ],
        "question": "What is incorrect about pointer?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 12,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "Address bus",
                "label": "A"
            },
            {
                "text": "Signal bus",
                "label": "B"
            },
            {
                "text": "Control bus",
                "label": "C"
            },
            {
                "text": "Data bus",
                "label": "D"
            }
        ],
        "question": "Which is not a type of bus in a computer?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 13,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "4me2",
                "label": "A"
            },
            {
                "text": "Primes",
                "label": "B"
            },
            {
                "text": "Max",
                "label": "C"
            },
            {
                "text": "PI NUMBER",
                "label": "D"
            }
        ],
        "question": "Which of the following identifiers is invalid?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 14,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "continue",
                "label": "A"
            },
            {
                "text": "goto",
                "label": "B"
            },
            {
                "text": "return",
                "label": "C"
            },
            {
                "text": "break",
                "label": "D"
            }
        ],
        "question": "Which of the following statements is used to move to the next loop without executing the ren loop?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 15,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "It improves code portability",
                "label": "A"
            },
            {
                "text": "It makes the code shorter",
                "label": "B"
            },
            {
                "text": "It prevents the use of symbolic names",
                "label": "C"
            },
            {
                "text": "It increases code complexity",
                "label": "D"
            }
        ],
        "question": "What benefit does #define offer when dealing with magic values in code?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 16,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "A lowercase letter",
                "label": "A"
            },
            {
                "text": "An uppercase letter",
                "label": "B"
            },
            {
                "text": "A digit",
                "label": "C"
            },
            {
                "text": "A punctuation character",
                "label": "D"
            }
        ],
        "question": "The function islower() returns a non-zero value if a character is:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 17,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "To reset the file pointer to the beginning of the file.",
                "label": "A"
            },
            {
                "text": "To read the entire file into memory.",
                "label": "B"
            },
            {
                "text": "To close the file",
                "label": "C"
            },
            {
                "text": "To move the file pointer to the end of the file.",
                "label": "D"
            }
        ],
        "question": "What is the rewind () function used for?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 18,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "Algorithm: a way to find out a solution",
                "label": "A"
            },
            {
                "text": "Data: Values are used to describe information. So, information can be called as the mear",
                "label": "B"
            },
            {
                "text": "Solution: A situation in which something is hidden",
                "label": "C"
            },
            {
                "text": "Information: Knowledge about something",
                "label": "D"
            }
        ],
        "question": "What is the incorrect definition?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 19,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "OneThreeFour",
                "label": "A"
            },
            {
                "text": "One Two ThreeFour",
                "label": "B"
            },
            {
                "text": "One",
                "label": "C"
            },
            {
                "text": "TwoOneThreeFour",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include <stdio.h>\nint main()\nint a=1;\nswitch (a) {\ncase 2: printf (\"Two\");\ncase 1: printf (\"One\");\ncase 3: printf (\"Three\");\ncase 4: printf (\"Four\");\n} retum 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 20,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "reoremore",
                "label": "A"
            },
            {
                "text": "more",
                "label": "B"
            },
            {
                "text": "ereoremore",
                "label": "C"
            },
            {
                "text": "eoremore",
                "label": "D"
            },
            {
                "text": "oremore",
                "label": "E"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nchar mess \"more\";\nchar *ptr\nptr mess strlen(mess);\nwhile(ptr>mess)\nprintf(\"%s\", -ptr);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 21,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Hi",
                "label": "A"
            },
            {
                "text": "How are you",
                "label": "B"
            },
            {
                "text": "Hello",
                "label": "C"
            },
            {
                "text": "HiHello",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following C code?\n#include <stdio.h>\nvoid main()\n{\nint x = 0:\nif (x == 0)\nprintf(\"Hi\");\nelse\nprintf(\"How are you\");\nprintf(\"Hello\");\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 22,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "A positive value",
                "label": "B"
            },
            {
                "text": "A negative value",
                "label": "C"
            },
            {
                "text": "NAN",
                "label": "D"
            }
        ],
        "question": "What is the value of variable a after executing the following lines of codes:\nint a = 0;\nchar line1 = \"Hi\";\nchar line2 \"Hello\";\na=strcmp(line1, line2);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 23,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "Infinite loop",
                "label": "A"
            },
            {
                "text": "Compile time error",
                "label": "B"
            },
            {
                "text": "Yes Yes Yes Yes",
                "label": "C"
            },
            {
                "text": "Yes",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include <stdio.h>\nint main()\nint x=7;\nfor(x>3)\nprintf(\"Yes\");\nx-\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 24,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "exit(0)",
                "label": "A"
            },
            {
                "text": "abort()",
                "label": "B"
            },
            {
                "text": "break",
                "label": "C"
            },
            {
                "text": "terminate",
                "label": "D"
            }
        ],
        "question": "The statement for(;;) does indeed represent an infinite loop, as it lacks the conditions that v loop to terminate naturally. However, an infinite loop can still be terminated by using_____________\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 25,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "strlen()",
                "label": "A"
            },
            {
                "text": "lenstr()",
                "label": "B"
            },
            {
                "text": "stmien()",
                "label": "C"
            },
            {
                "text": "strlength()",
                "label": "D"
            }
        ],
        "question": "What function is used to find the length of a string in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 26,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "100",
                "label": "A"
            },
            {
                "text": "0",
                "label": "B"
            },
            {
                "text": "101",
                "label": "C"
            },
            {
                "text": "Compile error",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code snippet?\n#include<stdio.h>\nint main()\n{\nconst int \"pint a=100;\np=&a\nprintf(\"%d\", \"p);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 27,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The case label is the real number",
                "label": "A"
            },
            {
                "text": "Missing \"break\" command",
                "label": "B"
            },
            {
                "text": "Missing \"default\" command",
                "label": "C"
            },
            {
                "text": "The variable name is wrong",
                "label": "D"
            }
        ],
        "question": "Why the following code is wrong?\n#include<stdio.h>\nint main()\nint choicescanf(\"%d\", &choice);\nswitch(choice)\n(case 1.5: printf(\"You choice 1.5\");\ncase 2.3: printf(\"You choice 2.3\");\n}\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 28,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "To make our programs longer, we use higher-level languages.",
                "label": "A"
            },
            {
                "text": "Program code in a high level language can not run, it must be translated to binary code (r before running.",
                "label": "B"
            },
            {
                "text": "C is based on a view of structured programming.",
                "label": "C"
            },
            {
                "text": "Programs that perform relatively simple tasks and are written in assembly language cont of statements.",
                "label": "D"
            }
        ],
        "question": "Which of the following statements is incorrect?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 29,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "If a file is opened for reading, it is required that the file must exist",
                "label": "A"
            },
            {
                "text": "If a file is opened for writing, it is required that the file must exist",
                "label": "B"
            },
            {
                "text": "If a file opened for writing already exits, its content will be overwritten",
                "label": "C"
            },
            {
                "text": "None of the others",
                "label": "D"
            }
        ],
        "question": "Which of the following statements is INCORRECT?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 30,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The program must have at least one function.",
                "label": "A"
            },
            {
                "text": "The program does not require any function.",
                "label": "B"
            },
            {
                "text": "Input data",
                "label": "C"
            },
            {
                "text": "Output data",
                "label": "D"
            }
        ],
        "question": "What is required in each C program?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 31,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "int a[5] = \\{0\\}",
                "label": "A"
            },
            {
                "text": "ta[5] = [0, 0, 0, 0, 0]",
                "label": "B"
            },
            {
                "text": "int a[5] = (0, 0, 0, 0, 0)",
                "label": "C"
            },
            {
                "text": "int a[5];",
                "label": "D"
            }
        ],
        "question": "Which of the following code snippets can be used to create an array with all elements initialized to zero in the C language?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 32,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The process of accessing elements in an array sequentially.",
                "label": "A"
            },
            {
                "text": "The process of searching for a specific element in an array.",
                "label": "B"
            },
            {
                "text": "The process of resizing the array during runtime.",
                "label": "C"
            },
            {
                "text": "The process of inserting elements into an array.",
                "label": "D"
            }
        ],
        "question": "In the context of arrays in the C language, what does traversal refer to?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 33,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "putc(s)",
                "label": "A"
            },
            {
                "text": "puts(s)",
                "label": "B"
            },
            {
                "text": "printf(s)",
                "label": "C"
            },
            {
                "text": "printf(\"%s\",s)",
                "label": "D"
            },
            {
                "text": "printf(\"%s\", &s)",
                "label": "E"
            }
        ],
        "question": "What is incorrect when output a string?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 34,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "333",
                "label": "A"
            },
            {
                "text": "111",
                "label": "B"
            },
            {
                "text": "222",
                "label": "C"
            },
            {
                "text": "Compile error",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following program?\nint main()\nint i=1:\nint *p = &i;\nint **k = &p;\n+=2:\nprintf(\"%d%d%d\", \"p, * k, (*k));\ngetchar();\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 35,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "To move the file position indicator to a specific location.",
                "label": "A"
            },
            {
                "text": "To close a file.",
                "label": "B"
            },
            {
                "text": "To read characters from a file.",
                "label": "C"
            },
            {
                "text": "To write characters to a file",
                "label": "D"
            }
        ],
        "question": "What is the fseek() function used for?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 36,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "It is a bitwise operator OR",
                "label": "A"
            },
            {
                "text": "It is a logical operator AND",
                "label": "B"
            },
            {
                "text": "It is a bitwise operator AND",
                "label": "C"
            },
            {
                "text": "It is a logical operator OR",
                "label": "D"
            }
        ],
        "question": "In C, what is the purpose of operator?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 37,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "400 bytes and 400 bytes",
                "label": "A"
            },
            {
                "text": "400 bytes and 100 bytes",
                "label": "B"
            },
            {
                "text": "100 bytes and 800 bytes",
                "label": "C"
            },
            {
                "text": "100 bytes and 400 bytes",
                "label": "D"
            }
        ],
        "question": "What are the sizes of the memory blocks allocated for d and e?\nint size = 100;\nfloat *d malloc(size)\nfloate calloc(size, sizeof(float));\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 38,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "strcat()",
                "label": "A"
            },
            {
                "text": "stroomb()",
                "label": "B"
            },
            {
                "text": "strmerge()",
                "label": "C"
            },
            {
                "text": "strconnect()",
                "label": "D"
            }
        ],
        "question": "Which function is used to concatenate two strings in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 39,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "True",
                "label": "A"
            },
            {
                "text": "1",
                "label": "B"
            },
            {
                "text": "0",
                "label": "C"
            },
            {
                "text": "-1",
                "label": "D"
            }
        ],
        "question": "If the two strings have the same value, then stromp() function returns\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 40,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "To skip the rest of the code inside the loop and move to the next iteration.",
                "label": "A"
            },
            {
                "text": "To jump to the beginning of the loop.",
                "label": "B"
            },
            {
                "text": "To exit the entire program.",
                "label": "C"
            },
            {
                "text": "The way increment/decrement variable in the loop",
                "label": "D"
            }
        ],
        "question": "What is the purpose of the continue statement in a loop?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 41,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Compile time error",
                "label": "A"
            },
            {
                "text": "6",
                "label": "B"
            },
            {
                "text": "4",
                "label": "C"
            },
            {
                "text": "5",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include<stdio.h>\nint main()\nconst int a=5;\nif(a>3)\na++\nbreak;\nelsea\nprintf(\"%d\",a);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 42,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "The address of variable a",
                "label": "A"
            },
            {
                "text": "The address of the pointer pa",
                "label": "B"
            },
            {
                "text": "The address of the double pointer ppa",
                "label": "C"
            },
            {
                "text": "10",
                "label": "D"
            }
        ],
        "question": "What is the result displayed on the screen of the following program?\n#include <stdio.h>\nvoid level2(int* ppa)\nprintf(\"%d\\n\", **ppa);\nvoid level1(int pa)\nlevel2(&pa);\nmain()\nint a = 10;\nlevell(&a);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 43,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "ctype.h",
                "label": "A"
            },
            {
                "text": "stdlib.h",
                "label": "B"
            },
            {
                "text": "math.h",
                "label": "C"
            },
            {
                "text": "conio.h",
                "label": "D"
            },
            {
                "text": "iostream.h",
                "label": "E"
            }
        ],
        "question": "Which library contains the function rand() to generate pseudo random integers?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 44,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "89",
                "label": "A"
            },
            {
                "text": "98",
                "label": "B"
            },
            {
                "text": "88",
                "label": "C"
            },
            {
                "text": "99",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code snippet?\n#include <stdio.h>\nint x = 9;\nvoid someFunction() ( int x = 8:\nprintf(\"%d\", x);}\nint main() (someFunction();\nprintf(\"%d\", x);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 45,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "A \"for\" loop is used for iterating over a sequence of elements, while a \"while\" loop is used block of code repeatedly as long as a condition is true.",
                "label": "A"
            },
            {
                "text": "A \"for\" loop is primarily used for conditional statements, while a \"while\" loop is designed f processing",
                "label": "B"
            },
            {
                "text": "The use of \"for\" and \"while\" loops is interchangeable; there is no substantial difference be",
                "label": "C"
            },
            {
                "text": "A \"for\" loop is exclusively used with arrays, while a \"while\" loop is used with numerical ca",
                "label": "D"
            }
        ],
        "question": "How does a \"for\" loop differ from a \"while\" loop in C programming?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 46,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Arrays provide constant-time access to elements.",
                "label": "A"
            },
            {
                "text": "Arrays allow for dynamic resizing during runtime.",
                "label": "B"
            },
            {
                "text": "Arrays can store elements of different data types.",
                "label": "C"
            },
            {
                "text": "Arrays automatically adjust their size based on the number of elements.",
                "label": "D"
            }
        ],
        "question": "Choose the correct statement related to the array.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 47,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "int 1student_ID;",
                "label": "A"
            },
            {
                "text": "int Student_ID1;",
                "label": "B"
            },
            {
                "text": "int Ages,",
                "label": "C"
            },
            {
                "text": "int long:",
                "label": "D"
            }
        ],
        "question": "Which of the following is a valid variable definition?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 48,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "int minus(int a, int b) (return (a - b):)",
                "label": "A"
            },
            {
                "text": "int minus (int a, b) (return (a - b););",
                "label": "B"
            },
            {
                "text": "int minus (int a, int b) {return (a - b);}",
                "label": "C"
            },
            {
                "text": "int minus (int a, b) (return (ab);}",
                "label": "D"
            }
        ],
        "question": "Which is the correct function definition that will run without errors?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 49,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The program will skip the if-else block and continue with the next statement.",
                "label": "A"
            },
            {
                "text": "The program will raise an error",
                "label": "B"
            },
            {
                "text": "The else if block will be executed.",
                "label": "C"
            },
            {
                "text": "The program will terminate abruptly.",
                "label": "D"
            }
        ],
        "question": "In a C program, what happens if none of the conditions in an if-else statement are true?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 50,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "n",
                "label": "A"
            },
            {
                "text": "2n+1",
                "label": "B"
            },
            {
                "text": "n-1",
                "label": "C"
            },
            {
                "text": "n+1",
                "label": "D"
            }
        ],
        "question": "In linear search, if the size of the array is n and the expected value does NOT exist in the arr. comparisons will be made between the searching item and elements in the arrayу?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 51,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "int a3,",
                "label": "A"
            },
            {
                "text": "int a 3",
                "label": "B"
            },
            {
                "text": "int 3_a,",
                "label": "C"
            },
            {
                "text": "int 3a",
                "label": "D"
            }
        ],
        "question": "Which of the following is not a valid variable name declaration?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 52,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Copies content of str1 into str2",
                "label": "A"
            },
            {
                "text": "Compares str1 with str2",
                "label": "B"
            },
            {
                "text": "Retrieves the length of str1",
                "label": "C"
            },
            {
                "text": "Assign str2 to an empty string",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code snippet?\nchar str1 = \"Hello\", char str2[10];\nstrcpy(str2, str1);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 53,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "int average(double, double);",
                "label": "A"
            },
            {
                "text": "double average(double, double);",
                "label": "B"
            },
            {
                "text": "char average(double, double);",
                "label": "C"
            },
            {
                "text": "void average(double, double);",
                "label": "D"
            }
        ],
        "question": "The function which will compute the average of two real numbers should be prototyped as:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 54,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "The comment mark will be removed. The content of the comments will be compiled line b",
                "label": "A"
            },
            {
                "text": "The comment is treated as an array of characters.",
                "label": "B"
            },
            {
                "text": "Comments are removed in the pre-processing step.",
                "label": "C"
            },
            {
                "text": "Each comment is compiled as a statement that does nothing.",
                "label": "D"
            }
        ],
        "question": "During the compilation process, what will be done with comments?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 55,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "void printSum(int a, int b);",
                "label": "A"
            },
            {
                "text": "int printSum(int a, int b);",
                "label": "B"
            },
            {
                "text": "int printSum(int a, b);",
                "label": "C"
            },
            {
                "text": "int printSum(int a, int b)",
                "label": "D"
            }
        ],
        "question": "What is incorrect about function prototype?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 56,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "getchar()",
                "label": "A"
            },
            {
                "text": "fscanf()",
                "label": "B"
            },
            {
                "text": "fgets()",
                "label": "C"
            },
            {
                "text": "getc()",
                "label": "D"
            }
        ],
        "question": "Which function is used to read a single character from the standard input in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 57,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "2",
                "label": "B"
            },
            {
                "text": "3",
                "label": "C"
            },
            {
                "text": "4",
                "label": "D"
            },
            {
                "text": "5",
                "label": "E"
            }
        ],
        "question": "What value will x contain when the sample code below is executed?\nint x = 3,\nif(x ==2); x = 0\nif(x ==3)x++\nelse x += 2;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 58,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "17",
                "label": "A"
            },
            {
                "text": "14",
                "label": "B"
            },
            {
                "text": "8",
                "label": "C"
            },
            {
                "text": "An arbitrary value",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint i, a[10] [1, 1, 2, 3), sum = 0;\nfor (i=2;i<10;i++)\nsum += a[i]\na[i-2] a[i-1];\nprintf(\"%d\", sum);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 59,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "48",
                "label": "A"
            },
            {
                "text": "49",
                "label": "B"
            },
            {
                "text": "50",
                "label": "C"
            },
            {
                "text": "None of the others",
                "label": "D"
            }
        ],
        "question": "What will be the output of this code fragment?\nint sub[50], i;\nfor (i=0;i<=48; i++);\nsub[i] = 1;\nprintf (\"%d\", sub[i]);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 60,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "while",
                "label": "A"
            },
            {
                "text": "for",
                "label": "B"
            },
            {
                "text": "do while",
                "label": "C"
            }
        ],
        "question": "What kind of loop that executes its body at least once?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 61,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "It refers to \"fixed-program computers\"",
                "label": "A"
            },
            {
                "text": "It refers to \"stored-program computers\"",
                "label": "B"
            },
            {
                "text": "It takes a lot of time and effort to reconfigure the computer to perform a new task",
                "label": "C"
            },
            {
                "text": "It separates the storage and treatment of CPU instructions and data",
                "label": "D"
            }
        ],
        "question": "Which of the following stater tents is correct regarding the Von Neumann architecture?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 62,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "3",
                "label": "A"
            },
            {
                "text": "15",
                "label": "B"
            },
            {
                "text": "12",
                "label": "C"
            },
            {
                "text": "1",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nmain(){\nint a[5]={1, 2, 3, 4, 5);\nint i, sum = 0;\nfor (i=0; i < 5; i++) {\nif(i==2) break;\nsum += a[i];\nprintf(\"%d\", sum);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 63,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "1",
                "label": "B"
            },
            {
                "text": "4",
                "label": "C"
            },
            {
                "text": "5",
                "label": "D"
            },
            {
                "text": "6",
                "label": "E"
            }
        ],
        "question": "What will be printed when the sample code below is executed?\nint x = 0;\nfor (;;) (\nif (x++ == 4)\nbreak;\ncontinue,\n{\nprintf(\"%d\\n\", x);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 64,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "True",
                "label": "A"
            },
            {
                "text": "False",
                "label": "B"
            }
        ],
        "question": "Function strlen() is for finding the number of characters in a string\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 65,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "p=&a",
                "label": "A"
            },
            {
                "text": "b=p",
                "label": "B"
            },
            {
                "text": "b=*p+a++;",
                "label": "C"
            },
            {
                "text": "a=b;",
                "label": "D"
            }
        ],
        "question": "Which statement of the following code result in an error if a and b are declared as integer variables and pas a pointer variable pointing to an integer and the value of a = 220.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 66,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "255",
                "label": "A"
            },
            {
                "text": "256",
                "label": "B"
            },
            {
                "text": "127",
                "label": "C"
            },
            {
                "text": "128",
                "label": "D"
            }
        ],
        "question": "What is the maximum value of an unsigned char?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 67,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "ptr +3=10;",
                "label": "A"
            },
            {
                "text": "*ptr[3]=10,",
                "label": "B"
            },
            {
                "text": "\"(ptr + 3) = 10;",
                "label": "C"
            },
            {
                "text": "(*ptr)[3]=10,",
                "label": "D"
            },
            {
                "text": "(ptr[3]) = 10;",
                "label": "E"
            }
        ],
        "question": "Consider the code:\nint x[]={1, 2, 3, 4, 5);\nint uint *ptr=x;\nfor(u = 0; u < 5; u++) {\nprintf(\"%d\", x[u]);\nprintf(\"\\n\");\nWhich one of the following statements could replace the ???? in the code above to cause the string 1-2-3-10-5-to be printed when the code is executed?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 68,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "235",
                "label": "A"
            },
            {
                "text": "233",
                "label": "B"
            },
            {
                "text": "435",
                "label": "C"
            },
            {
                "text": "433",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint a = 4, b, c\nb=--a\nca-\nprintf(\"%d%d%d\", a, b,c);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 69,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "xyz",
                "label": "A"
            },
            {
                "text": "x = y^z",
                "label": "B"
            },
            {
                "text": "x=y->z",
                "label": "C"
            },
            {
                "text": "All of the others",
                "label": "D"
            }
        ],
        "question": "Given x, y, z are of floating-point type, which of the following C expressions is INCORRECT?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 70,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "stdio.h",
                "label": "A"
            },
            {
                "text": "stdlib.h",
                "label": "B"
            },
            {
                "text": "conio.h",
                "label": "C"
            },
            {
                "text": "ctype.h",
                "label": "D"
            }
        ],
        "question": "Which of the following header files contains function prototypes isdigit(int), isspace(int)?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 71,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "65 65",
                "label": "A"
            },
            {
                "text": "30 35",
                "label": "B"
            },
            {
                "text": "60 65",
                "label": "C"
            },
            {
                "text": "60 60",
                "label": "D"
            },
            {
                "text": "25 30",
                "label": "E"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include<stdio.h>\nvoid main()\n(int i,j=25;\nint *pi, \"pj = &j;\n*pj = j +5;\ni=*pj+5;\npi=pj\n*pi=i+1;\nprintf(\"%d %d\", \"pi, \"pj);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 72,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "2",
                "label": "A"
            },
            {
                "text": "8",
                "label": "B"
            },
            {
                "text": "32",
                "label": "C"
            },
            {
                "text": "4",
                "label": "D"
            }
        ],
        "question": "In C, declare an int (data type) variable take________ bytes in main memory.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 73,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "A positive integer",
                "label": "B"
            },
            {
                "text": "A negative integer",
                "label": "C"
            },
            {
                "text": "Nothing (no output)",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following code fragment?\n#include <stdio.h> \n#include <string.h> \nint main()\nchar str1[]= \"bca\";\nchar str2 \"bcd\";\nprintf(\"%d\", strcmp(str1, str2));\n}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 74,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "bcdef",
                "label": "A"
            },
            {
                "text": "abcde",
                "label": "B"
            },
            {
                "text": "98 99 100 101 102",
                "label": "C"
            },
            {
                "text": "cdefg",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code snippet?\n#include <stdio.h>\nint main() {\nchar char_array[] = ['a', 'b', 'c', 'd', 'e');\nint array_size = sizeof(char_array)/ sizeof(char);\nfor (int i = 0; i < array_size; i++) {\nchar_array[i] = char_array[i] + 1;\nfor (int i = 0; i < array_size; i++) {\nprintf(\"%c\", char_array[i]);}\nreturn 0;}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 75,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "Accepts only spaces, lower case letters (in the range between 'a' and 'z') upper case letters (in the range between 'A' and 'Z') and digits (in the range '0' to '9')",
                "label": "A"
            },
            {
                "text": "Accepts only lower case letters (in the range between 'a' and 'z') upper case letters (in the range between 'A' and 'Z') and digits (in the range '0' to '9')",
                "label": "B"
            },
            {
                "text": "Accepts any characters excepts lower case letters (in the range between 'a' and 'z') upper case letters (in the range between 'A' and 'Z') and digits (in the range '0' to '9')",
                "label": "C"
            }
        ],
        "question": "char name[31],\nscanf(\"%[a-zA-Z0-9]\", name);\nWhich is the correct statement about the above code?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 76,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "10",
                "label": "A"
            },
            {
                "text": "11",
                "label": "B"
            },
            {
                "text": "20",
                "label": "C"
            },
            {
                "text": "21",
                "label": "D"
            },
            {
                "text": "Error",
                "label": "E"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nmain()\nint x = 0;\nwhile(x <= 10)\nfor(1)\nif(++x%100)\nbreak;\nprintf(\"%d\\n\", x);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 77,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "ABC",
                "label": "A"
            },
            {
                "text": "ABCDC.",
                "label": "B"
            },
            {
                "text": "Nothing (no output)",
                "label": "C"
            },
            {
                "text": "A",
                "label": "D"
            }
        ],
        "question": "What is the output when the s ample code below is executed?\nint i\nfor(i=1;i<4;j++)\nswitch(i)\n( case 1: printf(\"%c \"A\");break,\ncase 2: printf(\"%c\",'B');break:\ncase 3: printf(\"%0 \"'C');break;\ncase 4. printf(\"%c\",\"D');\n}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 78,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "61",
                "label": "A"
            },
            {
                "text": "60",
                "label": "B"
            },
            {
                "text": "59",
                "label": "C"
            },
            {
                "text": "1",
                "label": "D"
            },
            {
                "text": "58",
                "label": "E"
            }
        ],
        "question": "How many times will the following loops be executed?\nint c=1;\nwhile ((c> 0 && (c < 60))\nc++\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 79,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "Interpreters translate and execute each high level statement, one at a time",
                "label": "A"
            },
            {
                "text": "Interpreters execute the corresponding set of machine language statements immediately upon translation.",
                "label": "B"
            },
            {
                "text": "Compilers translate the entire set of high level statements into a set of machine language statements without executing any of the statements",
                "label": "C"
            },
            {
                "text": "Compilers do not produce a separate executable file",
                "label": "D"
            }
        ],
        "question": "Which of the following statements is INCORRECT about interpreters and compilers?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 80,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "1",
                "label": "B"
            },
            {
                "text": "void",
                "label": "C"
            },
            {
                "text": "nothing",
                "label": "D"
            }
        ],
        "question": "Given the following C statements:\n#include <stdio.h>\n#include <stdlib.h>\nint main(int argc, char *argv[]) {\nreturn (blank A)\nIf a C-program completes executing successfully, what value should the function main returned to fill in blank A of above program?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 81,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "9",
                "label": "A"
            },
            {
                "text": "10",
                "label": "B"
            },
            {
                "text": "11",
                "label": "C"
            },
            {
                "text": "Compile error",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint inc(int i) {\nreturn (i++);)\nint main()(int i = inc(10):\nprintf(\"%d\\n\",-1);\nreturn(0);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 82,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "1+ rand()%10",
                "label": "A"
            },
            {
                "text": "rand()%10",
                "label": "B"
            },
            {
                "text": "1+rand()%11",
                "label": "C"
            },
            {
                "text": "rand()%11",
                "label": "D"
            }
        ],
        "question": "Which of the following statement would create a random number in the range of [1, 10] (inclusive)?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 83,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Sorry",
                "label": "A"
            },
            {
                "text": "Hello",
                "label": "B"
            },
            {
                "text": "compiler error",
                "label": "C"
            },
            {
                "text": "Nothing",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint a=13, b=20\nif(a== 15 || b<30)\nprintf(\"Hello\");\nelse\nprintf(\"Sorry\");\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 84,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "stdio.h",
                "label": "A"
            },
            {
                "text": "studio h",
                "label": "B"
            },
            {
                "text": "stdio.c",
                "label": "C"
            },
            {
                "text": "studio.c",
                "label": "D"
            }
        ],
        "question": "Which library you need to include into your program in order to use printf function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 85,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "100 100",
                "label": "A"
            },
            {
                "text": "200 100",
                "label": "B"
            },
            {
                "text": "200 200",
                "label": "C"
            },
            {
                "text": "100 200",
                "label": "D"
            },
            {
                "text": "compiler error",
                "label": "E"
            }
        ],
        "question": "What is the output when the s ample code below is executed?\nint a[26],t\na[0]=100;\na[25]-200\nt-a[25]\na[25]=a[0];\na=t\nprintf(\"%d %d\", a[0],a[25]);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 86,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "int",
                "label": "A"
            },
            {
                "text": "char",
                "label": "B"
            },
            {
                "text": "float",
                "label": "C"
            },
            {
                "text": "double",
                "label": "D"
            }
        ],
        "question": "Which of the following data type occupied 1 byte?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 87,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "y= (int) (x + 0.5);",
                "label": "A"
            },
            {
                "text": "y=int (x+0.5);",
                "label": "B"
            },
            {
                "text": "y=(int) x +0.5,",
                "label": "C"
            },
            {
                "text": "y= (int) ((int) x +0.5",
                "label": "D"
            }
        ],
        "question": "We want to round off value of <, a float, to an int value. The correct way to do so would be:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 88,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "time.h",
                "label": "A"
            },
            {
                "text": "math.h",
                "label": "B"
            },
            {
                "text": "system.h",
                "label": "C"
            },
            {
                "text": "stdlib.h",
                "label": "D"
            }
        ],
        "question": "Which one of the followings is not in the C standard library?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 89,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "124124",
                "label": "A"
            },
            {
                "text": "142241",
                "label": "B"
            },
            {
                "text": "144221",
                "label": "C"
            },
            {
                "text": "112244",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following program?\n#include <stdio.h>\nint main(void)\nint ref[] = {1, 2, 4);\nint *ptr\nint index;\nfor (index = 0, ptr = ref, index < 3; index++, ptr++)\nprintf(\"%d %d\", ref[index], *ptr);\nreturn 0:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 90,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "10",
                "label": "A"
            },
            {
                "text": "20",
                "label": "B"
            },
            {
                "text": "30",
                "label": "C"
            },
            {
                "text": "60",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint index, sum;\nindex = sum = 0;\nwhile(index++ <3)\nsum + 10 index,\nprintf(\"%d\", sum);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 91,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "20",
                "label": "A"
            },
            {
                "text": "23",
                "label": "B"
            },
            {
                "text": "1",
                "label": "C"
            },
            {
                "text": "21",
                "label": "D"
            },
            {
                "text": "19",
                "label": "E"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint i, x=0;\nfor(i=1; i<10; ++i){\nif(i%2== 1)\nx=x+1\nelse x-\nprintf(\"%d\",x);}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 92,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "34",
                "label": "A"
            },
            {
                "text": "3 16",
                "label": "B"
            },
            {
                "text": "9 4",
                "label": "C"
            },
            {
                "text": "9 16",
                "label": "D"
            },
            {
                "text": "4 9",
                "label": "E"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nvoid foo(int *p, int q)\n(int main() (int p=3,q=4;\nfoo(&p, q);\nprintf(\"%d %d\",p,q);\nprintf(\"\\n\");\nreturn 0.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 93,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "Call doFunc();",
                "label": "A"
            },
            {
                "text": "doFunc();",
                "label": "B"
            },
            {
                "text": "include doFunc();",
                "label": "C"
            },
            {
                "text": "None of the other choices",
                "label": "D"
            }
        ],
        "question": "Which of the following is used to call a function named as doFunc()\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 94,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "We can not do that",
                "label": "A"
            },
            {
                "text": "We use the stringcopy function",
                "label": "B"
            },
            {
                "text": "We use the stropy function",
                "label": "C"
            },
            {
                "text": "We use the stromp function",
                "label": "D"
            }
        ],
        "question": "For string type in C, we can not use assignment operator directly. So how do we assign the value of one string to another?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 95,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "stropy",
                "label": "A"
            },
            {
                "text": "strcmp",
                "label": "B"
            },
            {
                "text": "strcat",
                "label": "C"
            },
            {
                "text": "None of the other choices",
                "label": "D"
            }
        ],
        "question": "Which of the following can be used to append one string at the end of another?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 96,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "putchar('a')",
                "label": "A"
            },
            {
                "text": "putchar(65);",
                "label": "B"
            },
            {
                "text": "None of the others",
                "label": "C"
            }
        ],
        "question": "Which code line is incorrect?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 97,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "1 55 0",
                "label": "A"
            },
            {
                "text": "1 55 1",
                "label": "B"
            },
            {
                "text": "1 35 1",
                "label": "C"
            },
            {
                "text": "0 55 0",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\nint s=35\nprintf(\"%d %d %d\",s ==35, s+20, s > 40);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 98,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "class aClass {public int x),",
                "label": "A"
            },
            {
                "text": "/ A comment */",
                "label": "B"
            },
            {
                "text": "char x=12,",
                "label": "C"
            },
            {
                "text": "int d = 10;",
                "label": "D"
            }
        ],
        "question": "Which is not valid in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 99,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "a|b|c|d|",
                "label": "A"
            },
            {
                "text": "a|b|c|d",
                "label": "B"
            },
            {
                "text": "a b c d",
                "label": "C"
            },
            {
                "text": "a,b,c,d",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following program?\n#include<stdio.h>\n#include <string.h>\nvoid show(char str[])\nint len = strlen(str),\nfor(int i=0;i<len;i++)\nprintf(\"%c\", str[i]);\nint main()\nchar str[] = \"abcd\";\nshow(str);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 100,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "for (Init1, Init2, Condition, Task1, Task2);",
                "label": "A"
            },
            {
                "text": "for (Init1, Condition, Task 1);",
                "label": "B"
            },
            {
                "text": "for (Condition, Init1, Init2; Task1);",
                "label": "C"
            },
            {
                "text": "for (Init1; Init2; Condition, Task2)",
                "label": "D"
            }
        ],
        "question": "Which of the following is the correct syntax of the for statement?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 101,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "int",
                "label": "A"
            },
            {
                "text": "char",
                "label": "B"
            },
            {
                "text": "void",
                "label": "C"
            },
            {
                "text": "string",
                "label": "D"
            }
        ],
        "question": "What is the return type of the putchar function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 102,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "-20,90,8",
                "label": "A"
            },
            {
                "text": "70:90:80",
                "label": "B"
            },
            {
                "text": "150,80,8",
                "label": "C"
            },
            {
                "text": "150,90,80",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include<stdio.h>\nint main()\nint a=70,b=90,c=80\nif(al=b)(\na-=b;\nc/-10\n1else\na+=c\nprintf(\"%d,%d,%d\",a,b,c),\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 103,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "78",
                "label": "A"
            },
            {
                "text": "76",
                "label": "B"
            },
            {
                "text": "74",
                "label": "C"
            },
            {
                "text": "72",
                "label": "D"
            }
        ],
        "question": "What is the result when converting 01001010 in binary system to decimal system?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 104,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "++",
                "label": "A"
            },
            {
                "text": "+=",
                "label": "B"
            },
            {
                "text": "*",
                "label": "C"
            },
            {
                "text": "+",
                "label": "D"
            }
        ],
        "question": "Which of the following operators has the highest priority?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 105,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "1",
                "label": "B"
            },
            {
                "text": "2",
                "label": "C"
            },
            {
                "text": "3",
                "label": "D"
            }
        ],
        "question": "Given the following code snippet\nint a[10] = [1, 2, 3);\nWhat is the value of a[3]?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 106,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "1",
                "label": "B"
            },
            {
                "text": "10",
                "label": "C"
            },
            {
                "text": "100",
                "label": "D"
            }
        ],
        "question": "Assume we have a snippet code in C:\nint main() {\nint *p = NULL\nprintf(\"%d\",p);\ngetchar();\nreturn 0;\nThe output will be:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 107,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "XOR two bit sequences.",
                "label": "A"
            },
            {
                "text": "OR two bit sequences.",
                "label": "B"
            },
            {
                "text": "AND two bit sequences.",
                "label": "C"
            },
            {
                "text": "SHIFT UP a bit sequences.",
                "label": "D"
            },
            {
                "text": "NOT a bit sequences",
                "label": "E"
            },
            {
                "text": "Calculate the exponential value, for example 2^3=8.",
                "label": "F"
            }
        ],
        "question": "The operator in the C programming language is used to\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 108,
        "type": "single",
        "points": 1,
        "correct": [
            "B",
            "E"
        ],
        "options": [
            {
                "text": "scanf(\"%s\", s);",
                "label": "A"
            },
            {
                "text": "scanf(\"%[\"\\n\"]\", s),",
                "label": "B"
            },
            {
                "text": "getc(s);",
                "label": "C"
            },
            {
                "text": "gets(s)",
                "label": "D"
            },
            {
                "text": "scanf(s);",
                "label": "E"
            }
        ],
        "question": "What is incorrect when input a string? choose 2 answer\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 109,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "char arr[] = \"Hello\",",
                "label": "A"
            },
            {
                "text": "char arr[] = ['H', 'e', T, 'T, 'o','/e'];",
                "label": "B"
            },
            {
                "text": "Char[] arr = \"Hello\";",
                "label": "C"
            },
            {
                "text": "Char[] arr = ('H', 'e', 'T, 'T', 'o','/0');",
                "label": "D"
            }
        ],
        "question": "How can you initialize a character array in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 110,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "(1,8,2,7,9)",
                "label": "A"
            },
            {
                "text": "(8, 1, 2, 7, 9)",
                "label": "B"
            },
            {
                "text": "(1, 2, 8, 7, 9)",
                "label": "C"
            },
            {
                "text": "(1, 2, 7, 8, 9)",
                "label": "D"
            }
        ],
        "question": "Consider the following array of integers: (8, 1, 2, 7, 9)\nWhat will be the state of the array after one pass of selection sort?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 111,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "5",
                "label": "A"
            },
            {
                "text": "Run time error",
                "label": "B"
            },
            {
                "text": "6",
                "label": "C"
            },
            {
                "text": "Junk",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following C code?\n#include <stdio.h>\nvoid main()\nint k = 5;\nint *p=&k;\nint **m=&p\n**m=6\nprintf(\"%d\\n\", k);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 112,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Bring the pointer fp back to the beginning of the file",
                "label": "A"
            },
            {
                "text": "Assign to the pointer fp the address 0x00 (NULL)",
                "label": "B"
            },
            {
                "text": "Bring the pointer fp to the end of the file",
                "label": "C"
            },
            {
                "text": "Bring the pointer fp back to the beginning of the current line",
                "label": "D"
            }
        ],
        "question": "What does the statement rewind(fp) do?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 113,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "c",
                "label": "A"
            },
            {
                "text": "C",
                "label": "B"
            },
            {
                "text": "'c' or 'C' (depending on IDE)",
                "label": "C"
            },
            {
                "text": "Compilation error",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following code?\nprintf(\"%c\", tolower('c'));\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 114,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "%lf",
                "label": "A"
            },
            {
                "text": "%d",
                "label": "B"
            },
            {
                "text": "%c",
                "label": "C"
            },
            {
                "text": "%f",
                "label": "D"
            }
        ],
        "question": "Which format specifier is used to print the value of a double variable?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 115,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "One-dimensional array",
                "label": "A"
            },
            {
                "text": "Two-dimensional array",
                "label": "B"
            },
            {
                "text": "Every kind of array",
                "label": "C"
            },
            {
                "text": "All of the others",
                "label": "D"
            }
        ],
        "question": "Binary search can be applied to which type of the below data structure in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 116,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "Runtime error",
                "label": "A"
            },
            {
                "text": "Ad",
                "label": "B"
            },
            {
                "text": "Compiler error",
                "label": "C"
            },
            {
                "text": "AbCdEfdEf",
                "label": "D"
            },
            {
                "text": "AbC",
                "label": "E"
            },
            {
                "text": "dEf",
                "label": "F"
            }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:\nchar all \"AbCdEf;\nchar s=a\nfor (;\ns: s+=3)\nprintf(\"%s\", s);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 117,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "10",
                "label": "A"
            },
            {
                "text": "20",
                "label": "B"
            },
            {
                "text": "\"",
                "label": "C"
            },
            {
                "text": "Undefined",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code if the user enters the value \"20\"?\nint n\nchar c;\nscanf(\"%d\", &n);\nc = getchar();\nprintf(\"%d\",c);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 118,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "char c1 = 'B', printf(\"%c\",c1);",
                "label": "A"
            },
            {
                "text": "char c2<unknown>66; printf(\"%c\",c2);",
                "label": "B"
            },
            {
                "text": "char c3<unknown>x42; printf(\"%c\",c3),",
                "label": "C"
            },
            {
                "text": "char c4<unknown>102, printf(\"%c\",04);",
                "label": "D"
            }
        ],
        "question": "Which of the following statements has a different result from the other statements?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 119,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "while (condition) (statements; }",
                "label": "A"
            },
            {
                "text": "(condition) (statements :)",
                "label": "B"
            },
            {
                "text": "while (condition) { statements };",
                "label": "C"
            },
            {
                "text": "(statements) while (condition);",
                "label": "D"
            }
        ],
        "question": "Which of the following is the correct syntax of the while statement?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 120,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "compilation errors",
                "label": "A"
            },
            {
                "text": "runtime errors",
                "label": "B"
            },
            {
                "text": "logic or semantic errors",
                "label": "C"
            },
            {
                "text": "interpreter errors",
                "label": "D"
            }
        ],
        "question": "When a C program compiles without any errors or warnings, it means that the syntax of the program is correct, and the compiler successfully translates the code into machine-readable instructions. However, a program can still produce incorrect results if there are in the code.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 121,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "All variables must be declared before we use them in C program.",
                "label": "A"
            },
            {
                "text": "To declare a variable you specify its name and data type it can store.",
                "label": "B"
            },
            {
                "text": "All variable are always stored on the stack.",
                "label": "C"
            },
            {
                "text": "Reading a value from keyboard or other device with a OUT statement",
                "label": "D"
            },
            {
                "text": "The scope of a variable is the range of program staternents that can't access that variable",
                "label": "E"
            }
        ],
        "question": "How to declare a variable in C language?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 122,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "Calculates the sum of the absolute value of all odd elements in the array a of size n.",
                "label": "A"
            },
            {
                "text": "Calculates the sum of all odd elements in the array a of size n.",
                "label": "B"
            },
            {
                "text": "Calculates the sum of all even elements in the array a of size n.",
                "label": "C"
            },
            {
                "text": "Calculates the sum of squares of all elements in the array a of size n.",
                "label": "D"
            }
        ],
        "question": "Consider the following code:\nint func(int a, int n)\n{\nint S = 0;\nfor(int i = 0; i < n; i++) {\nS=S+(a[i] % 2)*a[i];\nreturn S;\nWhat does the above code snippet do?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 123,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "10",
                "label": "A"
            },
            {
                "text": "Compiler error",
                "label": "B"
            },
            {
                "text": "Runtime error",
                "label": "C"
            },
            {
                "text": "Garbage value",
                "label": "D"
            }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:\nint a[] = {1,2,3,4);\nint i=0, s=0,\nfor (; a[i]; ++i)\ns += a[i]\nprintf(\"%d\", s);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 124,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "inti (double) 123.5;",
                "label": "A"
            },
            {
                "text": "doublet double(2)",
                "label": "B"
            },
            {
                "text": "doublet (double) 2;",
                "label": "C"
            },
            {
                "text": "double t = (int) 2.7;",
                "label": "D"
            }
        ],
        "question": "Which implicit type casting is used in the following codes in C programming?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 125,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "+=",
                "label": "A"
            },
            {
                "text": "+",
                "label": "B"
            },
            {
                "text": "++",
                "label": "C"
            },
            {
                "text": "-",
                "label": "D"
            }
        ],
        "question": "Which of the following operators has the lowest priority?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 126,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Read data from the file.",
                "label": "A"
            },
            {
                "text": "Print to the screen.",
                "label": "B"
            },
            {
                "text": "Read data from the keyboard.",
                "label": "C"
            },
            {
                "text": "Open a file",
                "label": "D"
            },
            {
                "text": "se a file",
                "label": "E"
            },
            {
                "text": "Print to file.",
                "label": "F"
            }
        ],
        "question": "What is the purpose of the fscanf() function in the C programming language?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 127,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "8 bytes",
                "label": "A"
            },
            {
                "text": "4 bytes",
                "label": "B"
            },
            {
                "text": "2 bytes",
                "label": "C"
            },
            {
                "text": "16 bytes",
                "label": "D"
            }
        ],
        "question": "What will be the maximum size of a double variable?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 128,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "3",
                "label": "A"
            },
            {
                "text": "2",
                "label": "B"
            },
            {
                "text": "2.5",
                "label": "C"
            },
            {
                "text": "2.6",
                "label": "D"
            }
        ],
        "question": "What is the value of ceil(2.55) from the math.h library?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 129,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "It is the function where the program's execution starts.",
                "label": "A"
            },
            {
                "text": "Every program has exactly one main function.",
                "label": "B"
            },
            {
                "text": "The main function always returns an integer value or void.",
                "label": "C"
            },
            {
                "text": "All answers are correct.",
                "label": "D"
            }
        ],
        "question": "What is the main() function in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 130,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "5",
                "label": "A"
            },
            {
                "text": "4",
                "label": "B"
            },
            {
                "text": "9",
                "label": "C"
            },
            {
                "text": "12",
                "label": "D"
            }
        ],
        "question": "Assume we have the following code:\nint i=4\nint *p = &i\nWhat is the result of the following expression: ++*p?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 131,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "3",
                "label": "B"
            },
            {
                "text": "2",
                "label": "C"
            },
            {
                "text": "0",
                "label": "D"
            }
        ],
        "question": "What is the result of the expression 10% 3?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 132,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Hello\nThis is a sample text file.",
                "label": "A"
            },
            {
                "text": "Hello",
                "label": "B"
            },
            {
                "text": "This is a sample text file.",
                "label": "C"
            },
            {
                "text": "This is a sample text file.\nHello",
                "label": "D"
            }
        ],
        "question": "Consider the following code snippet that reads and prints the contents of a text file named \"data.txt\"\n#include <stdio.h>\nint main() {\nFILE *file_ptr;\nchar ch;\nfile_ptr = fopen(\"data.txt\", \"r\");\nif (file_ptr == NULL) {\nprintf(\"Unable to open the file \\n\");\nreturn 1;\n}\nwhile ((ch = fgetc(file_ptr)) != EOF) {\nprintf(\"%c\", ch);\n}\nfclose(file_ptr);\nreturn 0;\n}\nThis is a sample text file.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 133,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "stdlib.h, randomize()",
                "label": "A"
            },
            {
                "text": "stdlib.h, reset()",
                "label": "B"
            },
            {
                "text": "time.h, randomize()",
                "label": "C"
            },
            {
                "text": "time.h, srand()",
                "label": "D"
            }
        ],
        "question": "To avoid the generated random number sequence being identical after the program is run again and again, we need to use the_______ library and the __________function before using the rand() function.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 134,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Dennis Richie",
                "label": "A"
            },
            {
                "text": "Bjame Stroustrup",
                "label": "B"
            },
            {
                "text": "Brian Kernighan",
                "label": "C"
            },
            {
                "text": "Niklaus Wirth",
                "label": "D"
            }
        ],
        "question": "Who is the inventor of the C programming language?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 135,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Compilation involves converting source code to machine code, while interpretation involves executing code line by line",
                "label": "A"
            },
            {
                "text": "Compilation and interpretation are two terms that are used interchangeably",
                "label": "B"
            },
            {
                "text": "Algorithm is another term for interpretation in programming languages.",
                "label": "C"
            },
            {
                "text": "IDE tools are responsible for both compilation and interpretation processes.",
                "label": "D"
            }
        ],
        "question": "How does compilation differ from interpretation in he context of C programming languelle?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 136,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "A compiler",
                "label": "A"
            },
            {
                "text": "A text editor",
                "label": "B"
            },
            {
                "text": "A file",
                "label": "C"
            },
            {
                "text": "A program",
                "label": "D"
            }
        ],
        "question": "What translates a C source file into machine language so that the computer can execute it?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 137,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "78",
                "label": "A"
            },
            {
                "text": "76",
                "label": "B"
            },
            {
                "text": "74",
                "label": "C"
            },
            {
                "text": "72",
                "label": "D"
            }
        ],
        "question": "What is the result when converting 01001010 in binary system to decimal system?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 138,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "2",
                "label": "A"
            },
            {
                "text": "3",
                "label": "B"
            },
            {
                "text": "4",
                "label": "C"
            },
            {
                "text": "An error will be raised.",
                "label": "D"
            }
        ],
        "question": "What does the following program display?\n#include <stdio.h>\nint main(){\nint x[]={1, 2, 3, 4, 5);\nint y = 3;\nprintf(\"%d\", x[y]);\nreturn 0;}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 139,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Throughout the entire program",
                "label": "A"
            },
            {
                "text": "Only within the function where it's declared",
                "label": "B"
            },
            {
                "text": "Only within the block where it's declared",
                "label": "C"
            },
            {
                "text": "Within the structure where it's defined",
                "label": "D"
            }
        ],
        "question": "What is the scope of a global variable in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 140,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "To include external JavaScript files",
                "label": "A"
            },
            {
                "text": "To define localization bundles",
                "label": "B"
            },
            {
                "text": "To format numbers",
                "label": "C"
            },
            {
                "text": "To handle user sessions",
                "label": "D"
            }
        ],
        "question": "In JSTL, what is the purpose of the <fmt:bundle> tag?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 141,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "0",
                "label": "B"
            },
            {
                "text": "-1",
                "label": "C"
            }
        ],
        "question": "The strcmp() compares two strings character by character. If the strings are equal, the function returns...\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 142,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "97,98,99,100",
                "label": "A"
            },
            {
                "text": "65,66,67,68",
                "label": "B"
            },
            {
                "text": "65:98:67,100",
                "label": "C"
            },
            {
                "text": "98,67:100:0",
                "label": "D"
            }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:\nchar s[] = \"AbCd\";\nprintf(\"%d,%d,%d,%d\", s[1], s[2], s[3], s[4]);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 143,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "#define is a preprocessor command often used to introduce named constants",
                "label": "A"
            },
            {
                "text": "double and goto are keyword for declaring data type.",
                "label": "B"
            },
            {
                "text": "return 0; is normally the last statement in main()",
                "label": "C"
            },
            {
                "text": "The file stdio.h is the library where the compiler finds scanf()",
                "label": "D"
            }
        ],
        "question": "Which is incorrect statement in C programming?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 144,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "Hi-Hi-Hi-Hi-Hello-Hello-Hello-Hi-",
                "label": "A"
            },
            {
                "text": "Hi-Hi-Hi-Hi-Hi-Hello-Hello-Hello-",
                "label": "B"
            },
            {
                "text": "Hi-Hello-Hello-Hello-Hello-Hi-",
                "label": "C"
            },
            {
                "text": "Hi-Hello-Hello-Hello-Hi-",
                "label": "D"
            }
        ],
        "question": "Choose the best comment about the output of the following C code:\n#include <stdio.h>\nvoid main() {\nint i = 0;\nwhile (i < 5) {\ni++;\nprintf(\"Hi-\");\nwhile (i < 4){\n}\n++!\n}}\nprintf(\"Hello-\");\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 145,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "No error, output is 1111",
                "label": "A"
            },
            {
                "text": "No error, output is 1",
                "label": "B"
            },
            {
                "text": "Compile time error, no break statements",
                "label": "C"
            },
            {
                "text": "Compile time error, case label outside switch statement",
                "label": "D"
            }
        ],
        "question": "Choose the best comment about the output of the following C code:\n#include <stdio.h>\nint main(){\na = 1;\nint\nswitch (a)\ncase 1:\nprintf(\"%d\", a);\ncase 2:\nprintf(\"%d\", a);\ncase 3:\nprintf(\"%d\", a);\nreturn 0;}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 146,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "16",
                "label": "A"
            },
            {
                "text": "28",
                "label": "B"
            },
            {
                "text": "37",
                "label": "C"
            },
            {
                "text": "32",
                "label": "D"
            },
            {
                "text": "-28",
                "label": "E"
            }
        ],
        "question": "What is the value of z after the \"int a = 8, b = 6, c<unknown>, b++++c+ --a;\" command?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 147,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "a is an positive number.",
                "label": "A"
            },
            {
                "text": "a is an negative number.",
                "label": "B"
            },
            {
                "text": "a is zero.",
                "label": "C"
            },
            {
                "text": "An error will be raised",
                "label": "D"
            }
        ],
        "question": "What will the following program output?\n#include <stdio.h>\nint main() {\nint a = -5;\nif (a%2 == 0)\nprintf(\"a is an positive number.\");\nelse if (a == 0)\nprintf(\"a is zero.\");\nelse\nprintf(\"a is an negative number.\");\nreturn 0;}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 148,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "No the output",
                "label": "A"
            },
            {
                "text": "True",
                "label": "B"
            },
            {
                "text": "False",
                "label": "C"
            },
            {
                "text": "Compile time error",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include <stdio.h>\nint main(){\nint n 50, m= 60;\nif (n > 50)\nif (m > 50)\nprintf(\"True\");\nelse\nprintf(\"False\");\nreturn 0;\n}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 149,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Runs and prints \"Non-zero\".",
                "label": "A"
            },
            {
                "text": "Compiler error.",
                "label": "B"
            },
            {
                "text": "Runs but prints nothing.",
                "label": "C"
            },
            {
                "text": "Runs and prints garbage value.",
                "label": "D"
            },
            {
                "text": "Runs and prints \"Zero\".",
                "label": "E"
            },
            {
                "text": "Runtime error.",
                "label": "F"
            }
        ],
        "question": "What does the following code print?\nint x = 10;\nif (x = 0)\nprintf(\"Zero\");\nelse\nprintf(\"Non-zero\");\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 150,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "It is used to decide whether the part of the code will be executed or not based on the specified condition.",
                "label": "A"
            },
            {
                "text": "It allows you to repeat a block of code a specified number of times.",
                "label": "B"
            },
            {
                "text": "It is used to define a function in a programming language.",
                "label": "C"
            },
            {
                "text": "It is used to declare variables and assign values to them.",
                "label": "D"
            }
        ],
        "question": "What is the purpose of an if-else statement in programming?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 151,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "It is executed after each iteration of the loop to update loop control variables.",
                "label": "A"
            },
            {
                "text": "It determines when the loop should stop.",
                "label": "B"
            },
            {
                "text": "It is executed before the loop starts and used to initialize loop control variables.",
                "label": "C"
            },
            {
                "text": "It specifies the condition to be checked.",
                "label": "D"
            }
        ],
        "question": "What is the purpose of the increment or decrement expression in a for loop?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 152,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "OneOneOneOne",
                "label": "A"
            },
            {
                "text": "OneTwoOneOne",
                "label": "B"
            },
            {
                "text": "OneTwoTwoTwo",
                "label": "C"
            },
            {
                "text": "TwoTwoTwoOne",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include<stdio.h>\nint main(){\nint x=10,i;\nfor(i=0;i<x;i+=3){\nprintf(\"One\");\ncontinue;\nprintf(\"Two\");\n}\nreturn 0;\n}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 153,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "A\nBB\nCCC\nDDDD",
                "label": "A"
            },
            {
                "text": "AAAAA\nBBBB\nCCC\nDD",
                "label": "B"
            },
            {
                "text": "A\nAB\nABC\nABCD\nABCDE",
                "label": "C"
            },
            {
                "text": "A\nAA\nAAA\nAAAA\nAAAAA",
                "label": "D"
            }
        ],
        "question": "Consider the following program. What will be printed to the screen?\n#include<stdio.h>\nint main(){\nchar i, j;\nfor (i = 'A'; i < 'E'; i++) {\nfor (j = 'A'; j <= i; j++){\nprintf(\"%c\", i);}\nprintf(\"\\n\");}\nreturn 0;}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 154,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "is_prime()",
                "label": "A"
            },
            {
                "text": "#include()",
                "label": "B"
            },
            {
                "text": "int()",
                "label": "C"
            },
            {
                "text": "if()",
                "label": "D"
            },
            {
                "text": "return() E",
                "label": "E"
            },
            {
                "text": "2ndElement()",
                "label": "F"
            }
        ],
        "question": "Which is a function in C language?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 155,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "That is 8 hours and 5 minutes",
                "label": "A"
            },
            {
                "text": "That is 0 hours and 0 minutes",
                "label": "B"
            },
            {
                "text": "That is 1 hours and 25 minutes",
                "label": "C"
            },
            {
                "text": "That is 0 hours and 85 minutes",
                "label": "D"
            }
        ],
        "question": "Consider the following program and answer the following questions.\n#include<stdio.h>\nvoid hours_and_minutes(int total, int& phrs, int& pmin) {\npmin total % 60;\nphrs total/60;\n}\nmain()\n{ int tmin, hr = 0, min = 0;\nprintf(\"Enter total minutes for videotape: \");\nhours_and_minutes(tmin, hr, min);\nprintf(\"That is %d hours and %d minutes\\n\", hr, min);\n}\nscanf(\"%d\", &tmin);\nWhat is the result displayed to the screen if the user inputs 85\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 156,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "t=0, p = 4 t = 2, 1 = 6.000000",
                "label": "A"
            },
            {
                "text": "t = 0 0, p = 4 t = 2 p = 5",
                "label": "B"
            },
            {
                "text": "t = 0 p = 4 t = 2<unknown>.500000",
                "label": "C"
            },
            {
                "text": "t=0 p = 4 t = 2 p = 4",
                "label": "D"
            }
        ],
        "question": "Consider the following program and answer the following questions.\n#include<stdio.h>\nvoid updatePosition(int *time, float position, float v) {\nif (( position <5) && ( position > -5))\n*position += v;\nelse position += -0.1 (*position);\n*time += 1;\n}\nmain() {\nfloat y = 4 v = 1 int t = 0:\nprintf(\"t=%d, p = %f\\n\", t, p);\nupdatePosition(&t, &p, v);\nupdatePosition(&t, &p, v);\nprintf(\"t=%d, p = %f\\n\", t, p);\n}\nWhat is the result displayed to the screen?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 157,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "2",
                "label": "B"
            },
            {
                "text": "Compiler error.",
                "label": "C"
            },
            {
                "text": "4",
                "label": "D"
            }
        ],
        "question": "What will be the output of the C program?\n#include<stdio.h>\nvoid myFunction(int i){\nprintf(\"%d\", i);\n} int main()\n{\n}\nmyFunction();\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 158,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "The getchar() function is defined in the <stdio.h> header file.",
                "label": "A"
            },
            {
                "text": "getchar() gets a string from stdin.",
                "label": "B"
            },
            {
                "text": "getchar() retrieves a single character from the standard input stream buffer without translating the input.",
                "label": "C"
            },
            {
                "text": "getchar() gets a character (an unsigned char) from stdin.",
                "label": "D"
            }
        ],
        "question": "What is incorrect about getchar() function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 159,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "Print string out to screen",
                "label": "A"
            },
            {
                "text": "Receive a string entered from the keyboard",
                "label": "B"
            },
            {
                "text": "Remove characters are entered from keyboard",
                "label": "C"
            },
            {
                "text": "Remove characters are remained in the keyboard buffer",
                "label": "D"
            }
        ],
        "question": "What is the function of \"fflush(stdin);\" command?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 160,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "One of the sections of a program in an object file or in memory, which contains executable instructions.",
                "label": "A"
            },
            {
                "text": "Common Variables All functions can access them",
                "label": "B"
            },
            {
                "text": "Dynamic allocated data through explicit statements for memory allocation",
                "label": "C"
            },
            {
                "text": "Variables are defined in functions. They will exist only when the function is executed and they will be removed when the function completes the execution",
                "label": "D"
            }
        ],
        "question": "What is correct about the heap?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 161,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "2 3",
                "label": "A"
            },
            {
                "text": "3 2",
                "label": "B"
            },
            {
                "text": "3 7",
                "label": "C"
            },
            {
                "text": "2 6356728",
                "label": "D"
            }
        ],
        "question": "What will be the output of the C program?\nint arr[5] = {2, 3, 5, 4, 7);\nint *ptr = (&arr + 1);\nprintf(\"%d %d\\n\", (arr + 1), (ptr-1));\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 162,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "2",
                "label": "B"
            },
            {
                "text": "3",
                "label": "C"
            },
            {
                "text": "4",
                "label": "D"
            }
        ],
        "question": "What will be the output of the C program?\nchar temp;\nchar arr[10] = (1, 2, 3, 4, 5, 6, 7, 8);\ntemp = (arr + 1)[2];\nprintf(\"%d\\n\", temp);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 163,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Pointer",
                "label": "A"
            },
            {
                "text": "Address",
                "label": "B"
            },
            {
                "text": "Integer",
                "label": "C"
            },
            {
                "text": "Byte",
                "label": "D"
            }
        ],
        "question": "In C programming, a variable is frequently used to store the address of another variable. What is the name of this variable?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 164,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "int a = (int )malloc(5 sizeof(int));",
                "label": "A"
            },
            {
                "text": "int a[5];",
                "label": "B"
            },
            {
                "text": "int a[5][5];",
                "label": "C"
            },
            {
                "text": "free(a);",
                "label": "D"
            }
        ],
        "question": "What represents dynamic allocation in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 165,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "101",
                "label": "A"
            },
            {
                "text": "102",
                "label": "B"
            },
            {
                "text": "0",
                "label": "C"
            },
            {
                "text": "Address of i",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following program?\nint main(){\nint i = 101:\nint *p = &i;\nprintf(\"%d\\n\", \"p++);\nreturn 0;}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 166,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Compile error",
                "label": "A"
            },
            {
                "text": "5",
                "label": "B"
            },
            {
                "text": "NULL",
                "label": "C"
            },
            {
                "text": "6",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code snippet?\nvoid main()\n{\nint const p = 5;\nprintf(\"%d\", ++( p));\ngetchar();\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 167,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The function returns the number of items of the argument list successfully filled.",
                "label": "A"
            },
            {
                "text": "The function returns the total number of items in the argument list.",
                "label": "B"
            },
            {
                "text": "The function returns the number of items that were not successfully filled.",
                "label": "C"
            },
            {
                "text": "The function does not return any value.",
                "label": "D"
            }
        ],
        "question": "What does the return value of the scanf function indicate when it is used to read items from the argument list?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 168,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "0",
                "label": "B"
            },
            {
                "text": "-1",
                "label": "C"
            },
            {
                "text": "2",
                "label": "D"
            }
        ],
        "question": "What is the return value of the strcmp(\"abc\", \"Abcdef\") function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 169,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Writing formatted data to a file.",
                "label": "A"
            },
            {
                "text": "Reading formatted data from a file.",
                "label": "B"
            },
            {
                "text": "Appending formatted data to a file.",
                "label": "C"
            },
            {
                "text": "Closing a file.",
                "label": "D"
            }
        ],
        "question": "In C programming language, what is the function fprintf() used for?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 170,
        "type": "single",
        "points": 1,
        "correct": [
            "A",
            "D"
        ],
        "options": [
            {
                "text": "printf()",
                "label": "A"
            },
            {
                "text": "putc()",
                "label": "B"
            },
            {
                "text": "gets()",
                "label": "C"
            },
            {
                "text": "puts()",
                "label": "D"
            },
            {
                "text": "getc()",
                "label": "E"
            }
        ],
        "question": "What functions to output strings? (Select all that apply)\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 171,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Checking the return value of fopen()",
                "label": "A"
            },
            {
                "text": "Using ferror()",
                "label": "B"
            },
            {
                "text": "Using feof()",
                "label": "C"
            },
            {
                "text": "Using fprintf()",
                "label": "D"
            }
        ],
        "question": "How can you check if a file was successfully opened for writing in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 172,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "fprintf",
                "label": "A"
            },
            {
                "text": "fwritef",
                "label": "B"
            },
            {
                "text": "fsendf",
                "label": "C"
            },
            {
                "text": "fputs",
                "label": "D"
            }
        ],
        "question": "What function is used to send formatted output to a file?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 173,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "As an array of characters",
                "label": "A"
            },
            {
                "text": "As an array of strings",
                "label": "B"
            },
            {
                "text": "As individual characters",
                "label": "C"
            },
            {
                "text": "As integers referencing ASCII values",
                "label": "D"
            }
        ],
        "question": "How are strings typically represented in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 174,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "Compare two s1 strings and s2 string",
                "label": "A"
            },
            {
                "text": "Copy s2 string to s1 string",
                "label": "B"
            },
            {
                "text": "Copy s1 string to s2 string",
                "label": "C"
            },
            {
                "text": "Concatenate string s2 to the end of s1",
                "label": "D"
            },
            {
                "text": "Find the address of a substring",
                "label": "E"
            }
        ],
        "question": "What is correct about strcpy(s1, s2) function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 175,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "10 5",
                "label": "A"
            },
            {
                "text": "5 10",
                "label": "B"
            },
            {
                "text": "5 5",
                "label": "C"
            },
            {
                "text": "10 10",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following code snippet:\n#include <stdlib.h>\n#include <stdio.h>\nint main() {\nint a = 5;\n{\n}\nint a = 10;\nprintf(\"%d \", a);\n}\nprintf(\"%d\", a);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 176,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "Compile time error",
                "label": "A"
            },
            {
                "text": "10 3 3",
                "label": "B"
            },
            {
                "text": "10.3",
                "label": "C"
            },
            {
                "text": "10 3 somegarbage value",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following C code?\n#include <stdio.h>\nvoid main(){}\nint i=10, j3, k = 3;\nprintf(\"%d %d\", i, j, k);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 177,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "Bubble sort, Linear sort",
                "label": "A"
            },
            {
                "text": "Binary sort, Linear sort",
                "label": "B"
            },
            {
                "text": "Selection sort, Bubble sort",
                "label": "C"
            },
            {
                "text": "Binary sort, Selection sort",
                "label": "D"
            }
        ],
        "question": "What algorithm should be used to sort the elements in the array?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 178,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "Compare two strings",
                "label": "A"
            },
            {
                "text": "Returns the pointer to the first occurrence of the given substring in the main string",
                "label": "B"
            },
            {
                "text": "Concatenate source string to the end of destination string",
                "label": "C"
            },
            {
                "text": "Copy source string to destination string",
                "label": "D"
            }
        ],
        "question": "Which of the following statements about the strstr() function in C is true?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 179,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Global variables have a wider scope and can be accessed from any function, while local variables are limited to their function's scope.",
                "label": "A"
            },
            {
                "text": "Global variables are initialized automatically to zero, while local variables require explicit initialization.",
                "label": "B"
            },
            {
                "text": "Local variables cannot be modified after initialization, while global variables allow modification at any time.",
                "label": "C"
            },
            {
                "text": "Global variables can only be used within the main function, while local variables can be used throughout the program.",
                "label": "D"
            }
        ],
        "question": "What is the primary difference between global variables and local variables in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 180,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Bitwise AND",
                "label": "A"
            },
            {
                "text": "Bitwise OR",
                "label": "B"
            },
            {
                "text": "Logical AND",
                "label": "C"
            },
            {
                "text": "Logical OR",
                "label": "D"
            }
        ],
        "question": "What is the & operator?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 181,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "The loop will always execute at least once.",
                "label": "A"
            },
            {
                "text": "The condition is checked after each iteration.",
                "label": "B"
            },
            {
                "text": "The loop will never execute if the condition is initially false.",
                "label": "C"
            },
            {
                "text": "The loop requires an increment statement inside the body",
                "label": "D"
            }
        ],
        "question": "Which of the following is TRUE about the while loop in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 182,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "10 8 6 4 2",
                "label": "A"
            },
            {
                "text": "10 8 6 4 2 0",
                "label": "B"
            },
            {
                "text": "10 8 6 4 2 0-2-4",
                "label": "C"
            },
            {
                "text": "10 9 8 7 6 5 4 3 2",
                "label": "D"
            }
        ],
        "question": "What is the output when the sample code below is executed?\n#include <stdio.h>\nint main() {\nint i = 10:\nprintf(\"%d\", i);\ni--2\ndo {\n}} while (i >= 1);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 183,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Modularity",
                "label": "A"
            },
            {
                "text": "Repeat",
                "label": "B"
            },
            {
                "text": "Select",
                "label": "C"
            },
            {
                "text": "Sequentially",
                "label": "D"
            }
        ],
        "question": "What technique in programming to solve this complex problem is to break the program into a series of smaller programs?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 184,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "infinite loop",
                "label": "A"
            },
            {
                "text": "01234",
                "label": "B"
            },
            {
                "text": "543210",
                "label": "C"
            },
            {
                "text": "No output",
                "label": "D"
            },
            {
                "text": "Compiler error",
                "label": "E"
            },
            {
                "text": "0",
                "label": "F"
            }
        ],
        "question": "What does the following code print?\nint i = 0;\nwhile (i < 5) {\nprintf(\"%d\", i);}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 185,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "double",
                "label": "A"
            },
            {
                "text": "int",
                "label": "B"
            },
            {
                "text": "long double",
                "label": "C"
            },
            {
                "text": "float",
                "label": "D"
            }
        ],
        "question": "The pow() function in the math.h library is used to calculate the value of a number raised to a specified power.\nWhat is the return value type of the pow() function?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 186,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Generating random integer.",
                "label": "A"
            },
            {
                "text": "Generating random integer from min to max.",
                "label": "B"
            },
            {
                "text": "Generating random float from min to max.",
                "label": "C"
            },
            {
                "text": "Generating random float.",
                "label": "D"
            },
            {
                "text": "Generating random double.",
                "label": "E"
            },
            {
                "text": "Generating random double from min to max.",
                "label": "F"
            }
        ],
        "question": "The rand() function in C is used for:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 187,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "The number of elements in arr",
                "label": "A"
            },
            {
                "text": "The size of arr in bytes",
                "label": "B"
            },
            {
                "text": "The number of bytes occupied by each element in arr",
                "label": "C"
            },
            {
                "text": "The total size of arr in bytes",
                "label": "D"
            }
        ],
        "question": "What does the expression sizeof(arr) / sizeof(arr[0]) evaluate to, where arr is an array?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 188,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "0.000000",
                "label": "A"
            },
            {
                "text": "2.000000",
                "label": "B"
            },
            {
                "text": "2.500000",
                "label": "C"
            },
            {
                "text": "Garbage value",
                "label": "D"
            }
        ],
        "question": "What is the results will be displayed on the screen after executing the following code:\nint a[]={1,2,3,4);\nint i, s;\nfor (i=0; i<4; ++i)\ns += a[i];\nprintf(\"%f\", s/4.0);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 189,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "Runtime error.",
                "label": "A"
            },
            {
                "text": "Compiler error.",
                "label": "B"
            },
            {
                "text": "x = 5 y = 10",
                "label": "C"
            },
            {
                "text": "x = 10 y = 5",
                "label": "D"
            },
            {
                "text": "x = 10 y = 10",
                "label": "E"
            },
            {
                "text": "x = 5 y = 5",
                "label": "F"
            }
        ],
        "question": "What does the following code print?\n#include <stdio.h>\nvoid swap(int a, int *b) {\nint temp = a;\n*b = temp;\nint main() {\nintx = 5\na = *b;\n}\n}\nint y = 10;\nswap(x, y);\nprintf(\"x=%d, y = %d\\n\", x, y);\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 190,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "int *p;",
                "label": "A"
            },
            {
                "text": "int p\";",
                "label": "B"
            },
            {
                "text": "int +p;",
                "label": "C"
            },
            {
                "text": "int Sp;",
                "label": "D"
            }
        ],
        "question": "Choose the correct statement for declaring a pointer variable to an integer variable.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 191,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "It moved to the end of the sorted part",
                "label": "A"
            },
            {
                "text": "It moved to the beginning of the sorted part",
                "label": "B"
            },
            {
                "text": "It stays in its position",
                "label": "C"
            },
            {
                "text": "It removed from the array",
                "label": "D"
            }
        ],
        "question": "In bubble sort, after each pass of sorting in ascending, where is the largest element in the unsorted part of the array?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 192,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "1264",
                "label": "A"
            },
            {
                "text": "1200",
                "label": "B"
            },
            {
                "text": "1208",
                "label": "C"
            },
            {
                "text": "1209",
                "label": "D"
            }
        ],
        "question": "Assume we have the following codes:\ndouble d=9;\ndouble *p = &d;\nSuppose that a double occupies the memory block of 8 bytes, and the address of d is 1200. What is the result\nof the following expression: p + 8?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 193,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Increments",
                "label": "A"
            },
            {
                "text": "Square root",
                "label": "B"
            },
            {
                "text": "Division",
                "label": "C"
            },
            {
                "text": "Multiplication",
                "label": "D"
            }
        ],
        "question": "Which of the following operators can be applied to the pointer variable(s)?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 194,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "True",
                "label": "A"
            },
            {
                "text": "False",
                "label": "B"
            }
        ],
        "question": "The fopen function is used to open a file. Is the following true or false?\n\"r\" - tells fopen you will be reading data from the file. If no such file exists, fopen will fail.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 195,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "5 bytes",
                "label": "A"
            },
            {
                "text": "6 bytes",
                "label": "B"
            },
            {
                "text": "4 bytes",
                "label": "C"
            },
            {
                "text": "10 bytes",
                "label": "D"
            }
        ],
        "question": "What is the maximum size required to store the string \"Hello\" in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 196,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "0b01100010",
                "label": "A"
            },
            {
                "text": "Ob10100010",
                "label": "B"
            },
            {
                "text": "0b10010010",
                "label": "C"
            },
            {
                "text": "0b10110010",
                "label": "D"
            }
        ],
        "question": "What is the binary representation of 0xA2?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 197,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "0",
                "label": "B"
            },
            {
                "text": "-1",
                "label": "C"
            }
        ],
        "question": "What is the result of the statement strcmp(\"abcdef\", \"abdc\")?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 198,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "1",
                "label": "B"
            },
            {
                "text": "-1",
                "label": "C"
            },
            {
                "text": "<0",
                "label": "D"
            },
            {
                "text": "20",
                "label": "E"
            }
        ],
        "question": "Given two character strings s1=\"C\" and s2=\"C and C++\", the function strcmp(s1, s2) will return the value_______\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 199,
        "type": "single",
        "points": 1,
        "correct": [
            "C"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "15",
                "label": "B"
            },
            {
                "text": "Compilation error.",
                "label": "C"
            },
            {
                "text": "Runtime error.",
                "label": "D"
            }
        ],
        "question": "What will be the output of the C program?\nint 2 var 15,\nprintf(\"%d\", 2_var);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 200,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "5ha",
                "label": "A"
            },
            {
                "text": "ha",
                "label": "B"
            },
            {
                "text": "dha",
                "label": "C"
            },
            {
                "text": "7",
                "label": "D"
            }
        ],
        "question": "What will be the output of the C program?\nint a = 5;\nprintf(\"%dha\"+2,a);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 201,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "Compile time error",
                "label": "A"
            },
            {
                "text": "Loop infinitely",
                "label": "B"
            },
            {
                "text": "No Output will be printed",
                "label": "C"
            },
            {
                "text": "The loop will not work",
                "label": "D"
            }
        ],
        "question": "What will happen if the while loop does NOT the loop's condition?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 202,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "break",
                "label": "A"
            },
            {
                "text": "goto",
                "label": "B"
            },
            {
                "text": "continue",
                "label": "C"
            },
            {
                "text": "while",
                "label": "D"
            }
        ],
        "question": "Which of the following statements is used to stop the select or loop statement?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 203,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "0",
                "label": "A"
            },
            {
                "text": "4",
                "label": "B"
            },
            {
                "text": "2",
                "label": "C"
            },
            {
                "text": "8",
                "label": "D"
            }
        ],
        "question": "Suppose there is a function in C as follows:\ndouble g (double x, double y){\nreturn (x-2)*(x-2) + y*y;\n}\nWhat is the value of z after executing the statement z=g(2,0)?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 204,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "clearbuffer()",
                "label": "A"
            },
            {
                "text": "cleanbuffer()",
                "label": "B"
            },
            {
                "text": "flushall(in)",
                "label": "C"
            },
            {
                "text": "fflush(stdin)",
                "label": "D"
            }
        ],
        "question": "The correct function to remove characters that remain in the keyboard buffer in C programming is\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 205,
        "type": "single",
        "points": 1,
        "correct": [
            "B"
        ],
        "options": [
            {
                "text": "stdio.h",
                "label": "A"
            },
            {
                "text": "stdlib.h",
                "label": "B"
            },
            {
                "text": "ctype.h",
                "label": "C"
            },
            {
                "text": "conio.h",
                "label": "D"
            }
        ],
        "question": "To generate a random integer, you need to declare the_______ library and then you can use the rand() function.\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 206,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "float* ptr;",
                "label": "A"
            },
            {
                "text": "float ptr,",
                "label": "B"
            },
            {
                "text": "*float ptr;",
                "label": "C"
            },
            {
                "text": "float ptr;",
                "label": "D"
            }
        ],
        "question": "Choose the correct statement for declaring a float pointer:\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 207,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Both the number of rows and columns must be specified.",
                "label": "A"
            },
            {
                "text": "The number of columns must be specified.",
                "label": "B"
            },
            {
                "text": "The number of rows must be specified.",
                "label": "C"
            },
            {
                "text": "The number of rows and columns can be determined dynamically at runtime.",
                "label": "D"
            }
        ],
        "question": "Which of the following is true regarding the declaration of a two-dimensional array in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 208,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "While",
                "label": "A"
            },
            {
                "text": "Do while",
                "label": "B"
            },
            {
                "text": "For",
                "label": "C"
            },
            {
                "text": "Repeat until",
                "label": "D"
            }
        ],
        "question": "What is not a loop in C programming language?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 209,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "Bubble sort",
                "label": "A"
            },
            {
                "text": "Selection sort",
                "label": "B"
            },
            {
                "text": "Binary sort",
                "label": "C"
            },
            {
                "text": "None of the others",
                "label": "D"
            }
        ],
        "question": "Which sorting algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 210,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "1",
                "label": "A"
            },
            {
                "text": "4",
                "label": "B"
            },
            {
                "text": "5",
                "label": "C"
            },
            {
                "text": "0",
                "label": "D"
            }
        ],
        "question": "What is the output of the following code snippet?\nvoid main(){\nint x = 4:\nint *p = &x;\nint *k = p++;\nint r = p-k;\nprintf(\"%d\", r);}\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 211,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "11.11",
                "label": "A"
            },
            {
                "text": "0,0",
                "label": "B"
            },
            {
                "text": "1,1",
                "label": "C"
            },
            {
                "text": "0,1",
                "label": "D"
            }
        ],
        "question": "What will be the output of the following program?\nvoid func(int *p){\nint j=11;\n*p = j\n}\nint main()\n{\nint i = 1;\nint *p = &i;\nfunc(p);\nprintf(\"%d,%d\", i, \"p);\ngetchar();\nreturn 0;\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 212,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "printf('\\\\');",
                "label": "A"
            },
            {
                "text": "printf(\"abc\");",
                "label": "B"
            },
            {
                "text": "printf(\"%%\");",
                "label": "C"
            },
            {
                "text": "printf(\"\\n\");",
                "label": "D"
            }
        ],
        "question": "Which of the following statements is invalid?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 213,
        "type": "single",
        "points": 1,
        "correct": [
            "D"
        ],
        "options": [
            {
                "text": "scanf will expect two integers inputted by user and write them to variables a and b.",
                "label": "A"
            },
            {
                "text": "scanf will expect two floating-point numbers inputted by user and write them to variables a and b.",
                "label": "B"
            },
            {
                "text": "scanf will expect two integers inputted by user separated by a comma, and write the first integer to variable a, the comma to variable b.",
                "label": "C"
            },
            {
                "text": "scanf will expect two integers inputted by user separated by a comma, and write the first integer to variablea, the second integer to variable b.",
                "label": "D"
            }
        ],
        "question": "Choose the correct statement about the following statement:\nscanf(\"%d %d\", &a, &b);\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 214,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "'\\0'",
                "label": "A"
            },
            {
                "text": "'\\n'",
                "label": "B"
            },
            {
                "text": "''",
                "label": "C"
            },
            {
                "text": "''",
                "label": "D"
            }
        ],
        "question": "Which character is commonly used to mark the end of a string in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 215,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "'\\0'",
                "label": "A"
            },
            {
                "text": "'\\n'",
                "label": "B"
            },
            {
                "text": "''\\t'",
                "label": "C"
            },
            {
                "text": "''\\'",
                "label": "D"
            }
        ],
        "question": "Which character is commonly used to mark the end of a string in C?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 216,
        "type": "single",
        "points": 1,
        "correct": [
            "A"
        ],
        "options": [
            {
                "text": "fgets()",
                "label": "A"
            },
            {
                "text": "gets()",
                "label": "B"
            },
            {
                "text": "readLine()",
                "label": "C"
            },
            {
                "text": "scanLine()",
                "label": "D"
            }
        ],
        "question": "To read an entire line from a file in C, which function is commonly used?\n",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 217,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "fopen(\"file.txt\", \"r\")", "label": "A" },
            { "text": "open(\"file.txt\", \"w\")", "label": "B" },
            { "text": "fopen(\"file.txt\", \"w\")", "label": "C" },
            { "text": "open(\"file.txt\", \"r\")", "label": "D" }
        ],
        "question": "Which function is used to open a file for reading in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 218,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "It prevents the function from modifying the parameter's value", "label": "A" },
            { "text": "It ensures the parameter is passed by reference", "label": "B" },
            { "text": "It restricts the parameter's scope to the function", "label": "C" },
            { "text": "It specifies that the parameter should be initialized", "label": "D" }
        ],
        "question": "What is the primary use of the const keyword when used with function parameters in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 219,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "2 bytes", "label": "A" },
            { "text": "1 byte", "label": "B" },
            { "text": "8 bytes", "label": "C" },
            { "text": "4 bytes", "label": "D" }
        ],
        "question": "What is the size of a float variable in byte?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 220,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0 1 1 2 3 3", "label": "A" },
            { "text": "0.5 1.0 1.5 2.5 3.0 3.5", "label": "B" },
            { "text": "1 1 2 3 3 4", "label": "C" },
            { "text": "0 1 1 2 2 3", "label": "D" }
        ],
        "question": "What is the result displayed on the screen of the following program?\ninclude <stdio.h> # int main(void){\nint a[] = {1, 2, 3, 5, 6, 7);\nfor (int i = 0; i < 6; ++i)\nprintf(\"%3d\", a[i]/2);\nreturn 0;}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 221,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "copy strings", "label": "A" },
            { "text": "contcatenate (joins) two strings", "label": "B" },
            { "text": "compare two strings", "label": "C" }
        ],
        "question": "The strcpy() function in C programming is used to",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 222,
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
        "question": "What is the result of the \"printf(\"%d %d\", 1285, 12/5);\" command?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 223,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "Identification", "label": "A" },
            { "text": "Name", "label": "B" },
            { "text": "Declaration", "label": "C" },
            { "text": "Definition", "label": "D" }
        ],
        "question": "What term is commonly used to specify both the type and name of a variable or constant in a C programminglanguage?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 224,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "string a,", "label": "A" },
            { "text": "float a 3e2;", "label": "B" },
            { "text": "int a", "label": "C" },
            { "text": "float *a;", "label": "D" },
            { "text": "char* a;", "label": "E" }
        ],
        "question": "Which of the following declaration is not supported by C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 225,
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
        "question": "In the sample code int a = 0x10 | 011;\nthe variable a will contain the value (in decimal number system)__________",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 226,
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
        "id": 227,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1; 18; 120", "label": "A" },
            { "text": "10; 19; 60", "label": "B" },
            { "text": "1:20 60", "label": "C" },
            { "text": "10, 19, 120", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?\n#include<stdio.h>\nint main(){\nint a=10,b=20,c=30;\nwhile(a>1)\n{\nif(b%2!=0)\na/=10;\nc*=2;\nb-\n}\n}\nprintf(\"%d %d %d\",a,b,c);\nreturn 0;",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 228,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Compile time error", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "return 1:return2", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?\n#include <stdio.h>\nint main(){}\n20 > 30? return 1: return 2;",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 229,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "The way the condition is checked.", "label": "A" },
            { "text": "They are essentially the same.", "label": "B" },
            { "text": "The type of tasks they can perform.", "label": "C" },
            { "text": "The variable in loop construct", "label": "D" }
        ],
        "question": "What is the difference between a while loop and a do-while loop?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 230,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "22", "label": "A" },
            { "text": "10", "label": "B" },
            { "text": "12", "label": "C" },
            { "text": "21", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?\n#include <stdio.h>\nint num(int a, int b){\nint sum;\nsum = a + b;\nreturn sum;\n}\nint main()\nint a, b, result;\n{ a = 10;\nb= 12: \n}\nresult = num(a, b);\nprintf(\"%d\", result);\nreturn 0;",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 231,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "(1, 2, 4, 5, 5)", "label": "A" },
            { "text": "{1, 2, 4, 5)", "label": "B" },
            { "text": "(1, 3, 4, 5)", "label": "C" },
            { "text": "(1, 2, 3, 4)", "label": "D" }
        ],
        "question": "Which of the following correctly represents the updated array after the execution of the below code?\nint a[](1, 2, 3, 4, 5);\nfor (i=2; i < 4; i++){\na[i] = a[i + 1];\n}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 232,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "The sum of squares of all elements in the array a.", "label": "A" },
            { "text": "The sum of all even elements in the array a.", "label": "B" },
            { "text": "The sum of all odd elements in the array a.", "label": "C" },
            { "text": "The sum of all elements in the array a", "label": "D" }
        ],
        "question": "Consider an array a with n elements. The code snippet above is executed to calculate the value s.\nWhich of the following options correctly describes the value of s after executing the code snippet?\nint a[MAX_SIZE];\nint s = 0;\nfor (int i = 0; i < n; i++)\ns = s + a[i]a[i];",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 233,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "mat[5][5]", "label": "A" },
            { "text": "mat[5][6]", "label": "B" },
            { "text": "mat[6][5]", "label": "C" },
            { "text": "mat[-1][-1]", "label": "D" }
        ],
        "question": "Given a matrix named mat with dimensions 6x6, what is the correct way to access the element in the last row and last column?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 234,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "102, 102", "label": "A" },
            { "text": "100, 102", "label": "B" },
            { "text": "100, 100", "label": "C" },
            { "text": "102, 100", "label": "D" }
        ],
        "question": "What will be the output of the following program?\nint main(){\nint i = 100;\nint *p = &i;\n*p +=2;\nprintf(\"%d, %d\", i, \"p);\ngotchar();\nreturn 0;\n}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 235,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "getchar(), scanf()", "label": "A" },
            { "text": "getchar(), fgets()", "label": "B" },
            { "text": "scanf(), fgetc()", "label": "C" },
            { "text": "fgets(), fgetc()", "label": "D" }
        ],
        "question": "Which of the following functions provide buffered input facilities on the standard input stream?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 236,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "fputs()", "label": "A" },
            { "text": "fscanf()", "label": "B" },
            { "text": "fgets()", "label": "C" },
            { "text": "fopen()", "label": "D" }
        ],
        "question": "Which function is used to write a string to a file in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 237,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "fgets", "label": "A" },
            { "text": "fgetc", "label": "B" },
            { "text": "fputs", "label": "C" },
            { "text": "fpusc", "label": "D" }
        ],
        "question": "What function is used to read a line from the specified stream and store it in the string pointed from a file?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 238,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Data", "label": "A" },
            { "text": "Information", "label": "B" },
            { "text": "Algorithm", "label": "C" },
            { "text": "Computer program", "label": "D" }
        ],
        "question": "Values used to describe information in programming are typically referred to as \"",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 239,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "const", "label": "A" },
            { "text": "define", "label": "B" },
            { "text": "constant", "label": "C" },
            { "text": "named", "label": "D" }
        ],
        "question": "Which keyword is used to define a named constant in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 240,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "It returns the size of a variable in bytes", "label": "A" },
            { "text": "It returns the value of a variable", "label": "B" },
            { "text": "It declares the size of an array", "label": "C" },
            { "text": "It calculates the sum of two numbers", "label": "D" }
        ],
        "question": "What is the purpose of the sizeof operator in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 241,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "\\n", "label": "A" },
            { "text": "\\t", "label": "B" },
            { "text": "\\f", "label": "C" },
            { "text": "\\b", "label": "D" }
        ],
        "question": "Which of the following symbols is used to force the cursor to change its position to the beginning of the next line on the screen?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 242,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "(condition)? True_Value: False_Value", "label": "A" },
            { "text": "for (InitBlock; Condition; Task2) Task1;", "label": "B" },
            { "text": "do statements:} while (condition);", "label": "C" },
            { "text": "while (condition) { statements; }", "label": "D" }
        ],
        "question": "Which of the following is an incorrect iteration construct?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 243,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "a and b do not change values.", "label": "A" },
            { "text": "cannot execute the swap(a,b) function.", "label": "B" },
            { "text": "a has the old value of b, and b has the new value of t.", "label": "C" },
            { "text": "a and b change values for each other,", "label": "D" }
        ],
        "question": "Assume we have a function such as: void swap(int a, int b){ int t = a;\na=b: b=t;\nWhat i What is the problem with a and b after executing the swap (a, b) function?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 244,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "There is error", "label": "A" },
            { "text": "This causes a run-time error", "label": "B" },
            { "text": "This is system dependent", "label": "C" },
            { "text": "There is a conversion from double to int", "label": "D" }
        ],
        "question": "What happens when the return statement has a double expression and the function return type is int?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 245,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "/ Comments /", "label": "A" },
            { "text": "Comment **", "label": "B" },
            { "text": "/ Comment */", "label": "C" },
            { "text": "(Comment)", "label": "D" }
        ],
        "question": "In C programming, comments are used to add explanatory text that is ignored by the compiler.\nWhich is a correct type of comment?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 246,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "-6 and 5.", "label": "A" },
            { "text": "-5 and 5.", "label": "B" },
            { "text": "-6 and 6.", "label": "C" },
            { "text": "-5 and 6.", "label": "D" }
        ],
        "question": "What is the result of floor(-5.9) and floor(5.9)?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 247,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "A variable stores anything", "label": "A" },
            { "text": "A variable stores address of another variable or a variable stores address of the dynamically allocated memory", "label": "B" },
            { "text": "An address in the memory", "label": "C" },
            { "text": "A variable stores any number", "label": "D" }
        ],
        "question": "What is a pointer in C programming?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 248,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Allocate memory and initialize it to zero", "label": "A" },
            { "text": "Free memory allocated", "label": "B" },
            { "text": "Deallocate memory", "label": "C" },
            { "text": "Copy memory from one location to another", "label": "D" }
        ],
        "question": "What is the purpose of the calloc function in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 249,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "ptr realloc(ptr, 5* sizeof(int));", "label": "A" },
            { "text": "realloc(ptr, 5* sizeof(int));", "label": "B" },
            { "text": "ptr += malloc(5*sizeof(int));", "label": "C" },
            { "text": "realloc(ptr, 20);", "label": "D" },
            { "text": "ptr realloc(ptr, 20);", "label": "E" }
        ],
        "question": "int *ptr malloc(sizeof(int));\nTo reallocate ptr to be an array of 5 elements, which of the following statements generates an error?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 250,
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
        "id": 251,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "\"a\"", "label": "A" },
            { "text": "\"append+\"", "label": "B" },
            { "text": "\"r+\"", "label": "C" },
            { "text": "\"w+\"", "label": "D" }
        ],
        "question": "Which mode is only used to append data to a file?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 252,
        "type": "single",
        "points": 1,
        "correct": ["E"],
        "options": [
            { "text": "Decimal number system (Base-10).", "label": "A" },
            { "text": "Binary number system (Base-2).", "label": "B" },
            { "text": "Octal number system (Base-8).", "label": "C" },
            { "text": "Hexadecimal number system (Base-16).", "label": "D" },
            { "text": "All answers are correct.", "label": "E" }
        ],
        "question": "In computers, what are the basic number systems and their corresponding bases used?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 253,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "True", "label": "A" },
            { "text": "False", "label": "B" }
        ],
        "question": "scanf() function does not return any value",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 254,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "1 and 3 are illegal", "label": "A" },
            { "text": "2 and 3 are illegal", "label": "B" },
            { "text": "1 and 2 are illegal", "label": "C" },
            { "text": "2 is illegal", "label": "D" }
        ],
        "question": "Given the following declarations:\nint *pa;\nint a[3] = {1, 2, 3};\nWhich of the following expressions are illegal?\n1. pa = a;\n2. a = pa;\n3. pa++;",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 255,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "n = 50", "label": "A" },
            { "text": "Depends on user's input", "label": "B" },
            { "text": "n=49", "label": "C" },
            { "text": "Must be less than 50", "label": "D" }
        ],
        "question": "Given the below code\nchar str[50];\ngets(str);\nint n = strlen(str);\nWhich option is TRUE about n?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 256,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "scanf(48/50-CAP", "label": "A" },
            { "text": "scanf(\"%s\", &s);", "label": "B" },
            { "text": "gets(s);", "label": "C" },
            { "text": "scanf(\"%[^]\", s);", "label": "D" }
        ],
        "question": "If s is a string variable, which of the following can be used to read the whole string \"Hello World\"?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 257,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "start()", "label": "A" },
            { "text": "system()", "label": "B" },
            { "text": "main()", "label": "C" },
            { "text": "program()", "label": "D" }
        ],
        "question": "What is the only function all C programs must contain?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 258,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1", "label": "A" },
            { "text": "-1", "label": "B" },
            { "text": "-1.25", "label": "C" },
            { "text": "1.25", "label": "D" }
        ],
        "question": "What is the output of the following program?\nvoid main(){\nprintf(\"%d\",-5/-4);\n}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 259,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "The variable b can be accessed only inside the inner block where it's declared.", "label": "A" },
            { "text": "The variable b can be accessed anywhere within main() after its declaration.", "label": "B" },
            { "text": "Both variables a and b can be accessed inside the inner block.", "label": "C" },
            { "text": "The variable b can be accessed globally throughout the program.", "label": "D" }
        ],
        "question": "Given the following code snippet:\n#include <stdio.h>\nint main() {\nint a = 5:{\nint b = 10;\nprintf(\"%d \", a);}\n // Uncommenting the line of code below will be a compilation error.\n// printf(\"%d\", b);\nreturn 0;\n}\nWhich of the following best describes the scope of a variable declared inside a block in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 260,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "Changing from one form of representation to another", "label": "A" },
            { "text": "A category of data that represents individual, non-complex elements such as integers, floating-point numbers, and characters", "label": "B" },
            { "text": "Performing operations and expressions on data", "label": "C" },
            { "text": "Storing a collection of elements accessible by an index or a key", "label": "D" }
        ],
        "question": "Choose the correct definition for \"Simple data types\" in C programming.",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 261,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1 byte", "label": "A" },
            { "text": "2 bytes", "label": "B" },
            { "text": "4 bytes", "label": "C" },
            { "text": "It depends on the system", "label": "D" }
        ],
        "question": "What is the size of the char data type in bytes?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 262,
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
        "id": 263,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "strchr()", "label": "A" },
            { "text": "strrchr()", "label": "B" },
            { "text": "strstr()", "label": "C" },
            { "text": "strnset()", "label": "D" }
        ],
        "question": "Which of the following function is used to find the first occurrence of a given string in another string?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 264,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "condition? expression1 expression2", "label": "A" },
            { "text": "condition? expression1, expression2", "label": "B" },
            { "text": "condition: expression1? expression2", "label": "C" },
            { "text": "expression1: condition? expression2", "label": "D" }
        ],
        "question": "What is the syntax of the conditional operator in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 265,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "9", "label": "A" },
            { "text": "8", "label": "B" },
            { "text": "12", "label": "C" },
            { "text": "10", "label": "D" }
        ],
        "question": "What is the output when the sample code below is executed?\n#include<stdio.h>\nint main(){\nint x=10,i;\nfor(i=9;i<x;i+=3){\nprintf(\"%d\",i++);\nbreak;\nprintf(\"%d\",--i);\n}\nreturn 0;\n}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 266,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "10", "label": "A" },
            { "text": "5", "label": "B" },
            { "text": "15", "label": "C" },
            { "text": "Compiler error", "label": "D" }
        ],
        "question": "What is the output of the following code snippet?\n#include <stdio.h>\nint change(int a){}\na = 10;\nreturn a;\nvoid main(){\nint i=5;\ni = change(i);\nprintf(\"%d\", i);\n}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 267,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "int fclose(FILE *);", "label": "A" },
            { "text": "fclose(FILE);", "label": "B" },
            { "text": "FILE fclose();", "label": "C" },
            { "text": "FILE *fclose();", "label": "D" }
        ],
        "question": "What is the correct prototype for closing a file?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 268,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "file", "label": "A" },
            { "text": "FILE", "label": "B" },
            { "text": "FILES", "label": "C" },
            { "text": "None of the other choices", "label": "D" }
        ],
        "question": "The file pointers used in C program must be declared with data type as:",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 269,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "15.", "label": "A" },
            { "text": "14", "label": "B" },
            { "text": "16", "label": "C" },
            { "text": "13", "label": "D" }
        ],
        "question": "What is the output of the following code?\nint sum (in\nint main (){\nprintf(\" s = %d\\n\",sum (5));\nreturn(0);\n}\n int sum(int n){\nint s,i;\ns = 0;\nfor(i=1;i<=n;i++)\ns += i;\nreturn(s);\n}",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 270,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "double", "label": "A" },
            { "text": "float", "label": "B" },
            { "text": "int", "label": "C" },
            { "text": "long", "label": "D" }
        ],
        "question": "What is the returned type of the sqrt() function from the math.h library in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 271,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "It is visible only within the function where it's declared.", "label": "A" },
            { "text": "It is accessible throughout the entire program.", "label": "B" },
            { "text": "It can be accessed by any function within the same source file.", "label": "C" },
            { "text": "It is available globally but with restricted modification rights.", "label": "D" }
        ],
        "question": "Which of the following accurately describes the scope of a local variable in C?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 272,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "4", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "8", "label": "D" }
        ],
        "question": "What is the result of the expression sizeof(int) in Windows?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 273,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "Runtime error.", "label": "A" },
            { "text": "Logical error.", "label": "B" },
            { "text": "Compilation error.", "label": "C" },
            { "text": "No issue.", "label": "D" }
        ],
        "question": "What is the issue with the following code?\nchar str[1];\ngets(str);\nprintf(\"%s\", str);",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 274,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "2", "label": "A" },
            { "text": "8", "label": "B" },
            { "text": "16", "label": "C" },
            { "text": "6", "label": "D" }
        ],
        "question": "What will be the output of the C program?\nint a = 4, b = 2;\nprintf(\"a^b = %d\", a^b);",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 275,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "is a bitwise operator OR", "label": "A" },
            { "text": "It is a logical operator AND", "label": "B" },
            { "text": "It is a bitwise operator AND", "label": "C" },
            { "text": "It is a logical operator OR", "label": "D" }
        ],
        "question": "In C, what is the purpose of operator?\nA. Bitwise AND b) Bitwise ORc) Logical ANDd) Logical OR Bitwise ANDb) Bitwise ORc) Logical ANDd) Logical ORIt",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 276,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "It sequentially checks each element in the array.", "label": "A" },
            { "text": "It requires the array to be sorted.", "label": "B" },
            { "text": "It is faster than binary search.", "label": "C" },
            { "text": "It is the fastest way to find an element in the array", "label": "D" }
        ],
        "question": "Which of the following about linear search is true?",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 277,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Address", "label": "A" },
            { "text": "Pointer", "label": "B" },
            { "text": "Integer", "label": "C" },
            { "text": "Byte", "label": "D" }
        ],
        "question": "In C programming, when declaring a variable of a type integer, the computer stores it in a numbered storage location. [cite: 830] [cite_start]What is this numbered location called? [cite: 831]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 278,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "fgets()", "label": "A" },
            { "text": "fputs()", "label": "B" },
            { "text": "ftell()", "label": "C" },
            { "text": "fopen()", "label": "D" }
        ],
        "question": "Which function is used to read a string from a file in C? [cite: 833]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 279,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "Quick search, Selection search", "label": "A" },
            { "text": "Binary search Quick search", "label": "B" },
            { "text": "Binary search, Linear search", "label": "C" },
            { "text": "Linear search, Quick search", "label": "D" }
        ],
        "question": "Several algorithms commonly used for searching an element in an array are [cite: 835, 836]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 280,
        "type": "single",
        "points": 1,
        "correct": ["E"],
        "options": [
            { "text": "2", "label": "A" },
            { "text": "4", "label": "B" },
            { "text": "6", "label": "C" },
            { "text": "8", "label": "D" },
            { "text": "10", "label": "E" }
        ],
        "question": "int a[3][2][2] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}; [cite: 838][cite_start]\nWhat value does a [2] [0] [1] in the sample code above contain? [cite: 839]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 281,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "The program will cause a compilation error at line 8", "label": "A" },
            { "text": "The program crashes at runtime due to an undefined variable.", "label": "B" },
            { "text": "The variable's value becomes zero when accessed outside its scope.", "label": "C" },
            { "text": "The program displays the variable's last value even outside its scope.", "label": "D" }
        ],
        "question": "Given the following code snippet: \n#include <stdio.h> //Line 1\nvoid someFunction() {\nint localVar = 10;//Line 4\nprintf(\"%d\", localVar);//Line 5\n} \nint main() {//Line 6\nsomeFunction();//Line 7\n//Line 8\nprintf(\"%d\", localVar);//Line 9\nreturn 0;//Line 10\n}//Line 2//Line 3\nWhat happens when attempting to access a local variable outside its scope in C? [cite: 841, 842, 843, 844]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 282,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "Check the day of the week.", "label": "A" },
            { "text": "Sort an array ascending.", "label": "B" },
            { "text": "Sort an array descending.", "label": "C" },
            { "text": "Find the average value of a sequence.", "label": "D" }
        ],
        "question": "Real-world example of a switch statement in C is: [cite: 846, 847]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 283,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "It can only be used with integer or character type expressions.", "label": "A" },
            { "text": "It can be used with any data type.", "label": "B" },
            { "text": "It can only be used in functions.", "label": "C" },
            { "text": "It can only have one case statement inside.", "label": "D" }
        ],
        "question": "Which of the following about the switch case statement is true? [cite: 849, 850, 851]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 284,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1024", "label": "A" },
            { "text": "1020", "label": "B" },
            { "text": "1016", "label": "C" },
            { "text": "1012", "label": "D" }
        ],
        "question": "Assume we have the following code:\nint i=4\nint *p = &i;\nSuppose that an int occupies a memory block of 4 bytes, and the address of i is 1008. What is the result of the following expression: p + 4? [cite: 853, 854]",
        "image_url": "",
        "explanation": "1008 + (4*4) = 1024 [cite: 855]"
    },
    {
        "id": 285,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "123.11", "label": "A" },
            { "text": "123.12", "label": "B" },
            { "text": "123.13", "label": "C" },
            { "text": "123.10", "label": "D" }
        ],
        "question": "What is the output of the following snippet code? \nfloat n 123.1112F;\nprintf(\"%.2f\", n); [cite: 856]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 286,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "feof()", "label": "A" },
            { "text": "eof()", "label": "B" },
            { "text": "fscanf()", "label": "C" },
            { "text": "checkEOF()", "label": "D" }
        ],
        "question": "What function in C is used to check if the end of a file has been reached? [cite: 858, 859]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 287,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "constant expression is required", "label": "A" },
            { "text": "case statements are invalid", "label": "B" },
            { "text": "cases are not in a sequence", "label": "C" },
            { "text": "switch quantity not an integer", "label": "D" }
        ],
        "question": "Identify an error on compiling the code below:\nfloat i=1.5;\nswitch(i){\ncase 1: printf(\"Hello\");\ncase 0: printf(\"World\");\n} [cite: 861, 862]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 288,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "(1) connect to file, (2) open the file to write data, (3) write data to file, and (4) close the file.", "label": "A" },
            { "text": "(1) connect to file, (2) open the file to read data, (3) read from file, and (4) close the file.", "label": "B" },
            { "text": "(1) connect to file, (2) open the file to read and write data, (3) write data to file, and (4) close the file.", "label": "C" },
            { "text": "(1) connect to file, (2) write data to file, (3)open the file to write data, and (4) close the file.", "label": "D" }
        ],
        "question": "FILE *fp = NULL;\nfp = fopen(\"alpha.txt\", \"w\");\nif (fp != NULL) {\nfprintf(fp, \"%s\\n\", \"We are the world!\");\nfclose(fp);\n} else\nprintf(\"Failed to open file\\n\");\nThe above code is the correct structure to: [cite: 864, 865, 866, 867, 868]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 289,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "-4000", "label": "A" },
            { "text": "-400", "label": "B" },
            { "text": "-40", "label": "C" },
            { "text": "004", "label": "D" },
            { "text": "0004", "label": "E" }
        ],
        "question": "What number is equivalent to-4e^3 written in exponential notation? [cite: 870]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 290,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "an if statement", "label": "A" },
            { "text": "a for loop", "label": "B" },
            { "text": "a program", "label": "C" },
            { "text": "the main() function", "label": "D" }
        ],
        "question": "Using break statement we can exit from [cite: 872]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 291,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "Good, It works", "label": "A" },
            { "text": "What will happen?", "label": "B" },
            { "text": "Good, It works What will happen?", "label": "C" },
            { "text": "None of the other choices", "label": "D" }
        ],
        "question": "What is the output of the following code?\nvoid func1(int (*a)[10]){\nprintf(\"8/50 CAP works\");\n}\nvoid func2(int a[] [10]){\nprintf(\"What will happen?\");\n}\nint main() { \nint a[10][10];\nfunc1(a); \nfunc2(a);\nreturn 0;\n} [cite: 874, 875]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 292,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "It is a relational operator", "label": "A" },
            { "text": "If one of the conditional expressions return false, the outcome is false", "label": "B" },
            { "text": "Only if both the expressions evaluate to false, the outcome is false", "label": "C" },
            { "text": "This operator is used to combine two logical expressions which evaluate to true if both individual expressions are true.", "label": "D" }
        ],
        "question": "Which of the following statements are true with regards to the || operator? [cite: 877, 878, 879, 880]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 293,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "z = 0", "label": "A" },
            { "text": "z = 1", "label": "B" },
            { "text": "z = 1.5", "label": "C" },
            { "text": "z = 2", "label": "D" },
            { "text": "z=NULL", "label": "E" }
        ],
        "question": "What will print when the sample code below is executed?\nint i = 4\nint x = 6\ndouble z;\nz= x/i\nprintf(\"z=%.2f\\n\", z); [cite: 882, 883]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 294,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "The values of the elements of the array.", "label": "A" },
            { "text": "The number of elements of the array.", "label": "B" },
            { "text": "The address of the first element of the array", "label": "C" },
            { "text": "None of the above", "label": "D" }
        ],
        "question": "When you pass an array as an argument to a function, what will actually be passed? [cite: 885, 886, 887]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 295,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "sqr = 9", "label": "A" },
            { "text": "sqr = 25", "label": "B" },
            { "text": "The program exits without printing the square", "label": "C" },
            { "text": "It depends on whether the user enters 'Y' or not, being asked \"calculate square?\"", "label": "D" }
        ],
        "question": "What would happen if the user types in number 3 and presses Enter when running this program?\nmain() {\nint x = 5;\nchar c;\nprintf(\"Enter x = \");\nscanf(\"%d\", &x);\nprintf(\"Calculate square? (Y/N): \");\nc = getchar();\nif (c== 'Y' || c == 'y')\nprintf(\"sqr = %d\", x*x);\n} [cite: 889, 890, 891]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 296,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "if", "label": "A" },
            { "text": "else if", "label": "B" },
            { "text": "else", "label": "C" }
        ],
        "question": "Consider the following code:\nif (a == b)\nprintf (\"\\n The Numbers are equal\");\nelse if (a < b)\nprintf(\"\\n The Smaller Number is: %d\", a);\nelse\nprintf(\"\\n The Smaller Number is: %d\", b);\nIn the above code, if a 14 and b=9, then the clause is executed. [cite: 893, 894]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 297,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "+", "label": "A" },
            { "text": "-", "label": "B" },
            { "text": "==", "label": "C" },
            { "text": "*", "label": "D" }
        ],
        "question": "What is not the arithmetic operators? [cite: 896]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 298,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "4 MB", "label": "A" },
            { "text": "64 MB", "label": "B" },
            { "text": "8 MB", "label": "C" },
            { "text": "16 MB", "label": "D" }
        ],
        "question": "What is the maximum size of addressable primary memory on a 24-bit machine? [cite: 898, 899]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 299,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "void foo (char name[] [31], int a);", "label": "A" },
            { "text": "void foo (char name[][], int a);", "label": "B" },
            { "text": "void foo (char name[5][], int a);", "label": "C" }
        ],
        "question": "Which function prototype is declared correctly to pass an array of string to function? [cite: 901, 902]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 300,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "*", "label": "A" },
            { "text": "#", "label": "B" },
            { "text": "&", "label": "C" },
            { "text": "@", "label": "D" }
        ],
        "question": "The address operator is shown using the symbol. [cite: 904]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 301,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "Not including header files", "label": "A" },
            { "text": "Not assigning a pointer to memory address before using it.", "label": "B" },
            { "text": "main() cannot return int value.", "label": "C" },
            { "text": "+ operator cannot use with pointer.", "label": "D" }
        ],
        "question": "int main () {\nint *p;\np=p+1\nreturn(0);\n}\nWhich mistake made with the code above. [cite: 906, 907, 908]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 302,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "printf(\"\\%\");", "label": "A" },
            { "text": "printf(\"%%\");", "label": "B" },
            { "text": "printf(\"%\")", "label": "C" },
            { "text": "printf(\"%%%\")", "label": "D" }
        ],
        "question": "Which of the following statements prints % character? [cite: 910]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 303,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "13,6", "label": "A" },
            { "text": "13,7", "label": "B" },
            { "text": "13,0", "label": "C" },
            { "text": "13, 1", "label": "D" }
        ],
        "question": "What will be the output when the following code is executed\nint a=13, b;\nb=a%2;\nprintf(\"%d %d\",a,b); [cite: 912]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 304,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "YES", "label": "A" },
            { "text": "NO", "label": "B" }
        ],
        "question": "Is the following code legal?\nint a, b = 0;\na-b=6; [cite: 914]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 305,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "Yes", "label": "A" },
            { "text": "No", "label": "B" }
        ],
        "question": "Can I use code like this?\n((condition)?a: b) = some_expression; [cite: 916]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 306,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "Variables", "label": "A" },
            { "text": "Functions", "label": "B" },
            { "text": "Procedures", "label": "C" },
            { "text": "Constructs", "label": "D" },
            { "text": "Programs", "label": "E" }
        ],
        "question": "In designing a program, we subdivide the problem conceptually into a set of design units, so call modules. [cite: 918] [cite_start]What can be represented as a module in C language? [cite: 919]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 307,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "Array of 10 pointers", "label": "A" },
            { "text": "Pointers to the array of 10 elements", "label": "B" },
            { "text": "Array of 10 integer pointers", "label": "C" }
        ],
        "question": "What does the following declaration mean (If there are more than one correct answers, choose the best one) \nint *ptr[10]; [cite: 921, 922]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 308,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "append();", "label": "A" },
            { "text": "stringadd();", "label": "B" },
            { "text": "strcat();", "label": "C" },
            { "text": "stradd();", "label": "D" }
        ],
        "question": "Which of the following adds one string to the end of another? [cite: 924]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 309,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "User must enter a string until not blank", "label": "A" },
            { "text": "blank (or str=\"\");", "label": "B" },
            { "text": "str=\"\\n\"", "label": "C" }
        ],
        "question": "Given the below code:\nchar str[255]; \ngets(str);\nIf user enters blank(only enter)\nWhat is the value of str? [cite: 926, 927]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 310,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "TRUE", "label": "A" },
            { "text": "FALSE", "label": "B" },
            { "text": "Invalid expression", "label": "C" }
        ],
        "question": "Evaluate the following as true or false: !(1 &&0 || !1) [cite: 929]",
        "image_url": "",
        "explanation": ""
    },
    {
        "id": 311,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "3", "label": "D" },
            { "text": "4", "label": "E" }
        ],
        "question": "Referring to the sample code below, what value will the variable counter have when completed?\nint x = 3, counter = 0;\nwhile(x-1) { \n++counter;\nx--\n} [cite: 931, 932]",
        "image_url": "",
        "explanation": ""
    }
];