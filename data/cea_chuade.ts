import { Question } from '../types';

export const ceaChuadeData: Question[] = [
    {
        "id": 1,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "6 bits", "label": "A" },
            { "text": "7 bits", "label": "B" },
            { "text": "8 bits", "label": "C" },
            { "text": "9 bits", "label": "D" },
            { "text": "5 bits", "label": "E" }
        ],
        "question": "How many check bits are needed if the Hamming error correction code is used to detect single bit error in a 128-bit data word?",
        "image_url": "",
        "explanation": "công thức Trong mã Hamming, với r là số bit kiểm tra. Ta tăng dần r đến khi bất đẳng thức đúng thì đó là số bit cần thiết."
    },
    {
        "id": 2,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "11 bits", "label": "A" },
            { "text": "12 bits", "label": "B" },
            { "text": "13 bits", "label": "C" },
            { "text": "14 bits", "label": "D" },
            { "text": "15 bits", "label": "E" }
        ],
        "question": "How many check bits are needed for a Hamming error correction code to detect single-error correction in a 1KByte data word?",
        "image_url": "",
        "explanation": "2^r≥m+r+1. Nếu dữ liệu là 8 bit → cần 4 bit kiểm tra (vì 2^4=16≥8+4+1=13)."
    },
    {
        "id": 3,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "128 bytes", "label": "A" },
            { "text": "256 bytes", "label": "B" },
            { "text": "512 bytes", "label": "C" },
            { "text": "1024 bytes", "label": "D" },
            { "text": "4096 bytes", "label": "E" }
        ],
        "question": "How many bytes of data does each sector in the Winchester hard drive disk have?",
        "image_url": "",
        "explanation": "   512 là kích thước tiêu chuẩn công nghiệp nhé"
    },
    {
        "id": 4,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "4 MegaByte", "label": "A" },
            { "text": "8 MegaByte", "label": "B" },
            { "text": "16 MegaByte", "label": "C" },
            { "text": "32 MegaByte", "label": "D" }
        ],
        "question": "A byte addressable microprocessor has 24 bit address. What is maximum memory capacity?\r\n",
        "image_url": "",
        "explanation": "24 bit địa chỉ là 2^24. Vì hệ thống byte addressable, số địa chỉ hóa tương ứng số byte nên là Chuyển đổi byte sang MB(megabyte) để tìm dung lượng bộ nhớ tối đa: 1 MB=2^20 bytes. => Dung lượng bộ nhớ max = 2^24/2^20 = 16 MB."
    },
    {
        "id": 5,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "16 GB", "label": "A" },
            { "text": "16 MB", "label": "B" },
            { "text": "16 Gbits", "label": "C" },
            { "text": "16 Mbits", "label": "D" }
        ],
        "question": "What is the maximum addressable memory of a 32-bit microprocessor with 24 bit address?",
        "image_url": "",
        "explanation": "Địa chỉ 32 bit → số ô nhớ tối đa là 2^32 byte = 4 GB bộ nhớ địa chỉ được."
    },
    {
        "id": 6,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "200 GBytes", "label": "A" },
            { "text": "400 GBytes", "label": "B" },
            { "text": "600 GBytes", "label": "C" },
            { "text": "800 GBytes", "label": "D" },
            { "text": "None of the mentioned", "label": "E" }
        ],
        "question": "Consider a 5 drive, 200 GBytes-per drive RAID array. What is the available data storage capacity for each for the RAID levels 5?\r\n",
        "image_url": "",
        "explanation": "   (5-1)x200"
    },
    {
        "id": 7,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "400 GBytes", "label": "A" },
            { "text": "200 GBytes", "label": "B" },
            { "text": "300 GBytes", "label": "C" },
            { "text": "500 GBytes ", "label": "D" }
        ],
        "question": "Consider a 5 drive, 100 GBytes-per drive RAID array. What is the available data storage capacity for each for the RAID levels 5?",
        "image_url": "",
        "explanation": "   (5-1)x100"
    },
    {
        "id": 8,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "6", "label": "A" },
            { "text": "7", "label": "B" },
            { "text": "8", "label": "C" },
            { "text": "9", "label": "D" }
        ],
        "question": "In the direct mapping method from 256MB main memory with 512KB cache, what is the number of bits for the TAG element in the address?",
        "image_url": "",
        "explanation": "256MB / 64KB = 4096 → có 4096 khối bộ nhớ chính ánh xạ đến 1 dòng cache duy nhất."
    },
    {
        "id": 9,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "4", "label": "A" },
            { "text": "5", "label": "B" },
            { "text": "6", "label": "C" },
            { "text": "7", "label": "D" }
        ],
        "question": "In error correcting code( single ECC), how many bits are used to correct one bit in 8-bit data?",
        "image_url": "",
        "explanation": "log2(8) + 1"
    },
    {
        "id": 10,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "0000 1010", "label": "A" },
            { "text": "0000 0101", "label": "B" },
            { "text": "1111 0101", "label": "C" },
            { "text": "1111 1010", "label": "D" }
        ],
        "question": "Consider an expression: NOT (1111 1010). What is the result of this expression?",
        "image_url": "",
        "explanation": "   NOT: 0 -> 1, 1 -> 0"
    },
    {
        "id": 11,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "1000 0000", "label": "A" },
            { "text": "1111 1010", "label": "B" },
            { "text": "1001 1010", "label": "C" },
            { "text": "1001 0101", "label": "D" }
        ],
        "question": "Consider an expression: 1000 0000 OR 1111 1010. What is the result of this expression?",
        "image_url": "",
        "explanation": "Phép OR: chỉ cần một bit = 1 là kết quả = 1."
    },
    {
        "id": 12,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1000 0000", "label": "A" },
            { "text": "1111 0000", "label": "B" },
            { "text": "1001 1010", "label": "C" },
            { "text": "1001 0101", "label": "D" }
        ],
        "question": "Consider an expression: 1000 0000 AND 1111 1010. What is the result of this expression?",
        "image_url": "",
        "explanation": "Phép AND: chỉ khi cả hai bit = 1 mới ra 1."
    },
    {
        "id": 13,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "11101101", "label": "A" },
            { "text": "10000001", "label": "B" },
            { "text": "01101100", "label": "C" },
            { "text": "10101100", "label": "D" }
        ],
        "question": "What is result of 10100101 xor 11001001?",
        "image_url": "",
        "explanation": "Phép XOR: nếu 2 bit khác nhau → 1, giống nhau → 0."
    },
    {
        "id": 14,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "1101 1011", "label": "A" },
            { "text": "0001 0110", "label": "B" },
            { "text": "1010 1001", "label": "C" },
            { "text": "1100 1101", "label": "D" }
        ],
        "question": "(R1) = 0111 0110, (R2) = 1101 1111, the result of (R1) XOR (R2) is:",
        "image_url": "",
        "explanation": "XOR khác → 1, giống → 0."
    },
    {
        "id": 15,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "0110 1011", "label": "A" },
            { "text": "1010 1101", "label": "B" },
            { "text": "0110 1101", "label": "C" },
            { "text": "1101 0110", "label": "D" },
            { "text": "1101 0100", "label": "E" }
        ],
        "question": "What is result left rotate of 1011 0101 by 2 bits?",
        "image_url": "",
        "explanation": "Dịch trái 2 bit rồi đưa 2 bit 10 vào cuối"
    },
    {
        "id": 16,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0010 1100", "label": "A" },
            { "text": "0101 1000", "label": "B" },
            { "text": "0100 1100", "label": "C" },
            { "text": "0011 0000", "label": "D" }
        ],
        "question": "What is result logical right shift of 1011 0000 by 2 bit?",
        "image_url": "",
        "explanation": "Dịch phải logic: điền 0 vào bên trái."
    },
    {
        "id": 17,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0110 0000", "label": "A" },
            { "text": "1100 0000", "label": "B" },
            { "text": "0000 0110", "label": "C" },
            { "text": "0000 0011", "label": "D" }
        ],
        "question": "What is the output of Left Shift Operator << on (00011000<<2)?",
        "image_url": "",
        "explanation": "Đẩy trái 2 bit: 00 là 011000 và 2 bit 00 được thêm vào đầu bên phải."
    },
    {
        "id": 18,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0001 0010", "label": "A" },
            { "text": "1001 0010", "label": "B" },
            { "text": "0000 1101", "label": "C" },
            { "text": "1001 1101", "label": "D" }
        ],
        "question": "Express an integer number +18 (using 8-bits length) in twos complement representation.",
        "image_url": "",
        "explanation": "18/2=10010, vì 8-bits nên thêm 3 số 0 ở đầu"
    },
    {
        "id": 19,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "0001 0010", "label": "A" },
            { "text": "1001 0010", "label": "B" },
            { "text": "1111 0010", "label": "C" },
            { "text": "0111 0010", "label": "D" }
        ],
        "question": "If you have an integer number +18 in sign magnitude representation, which is 0001 0010, what is the correct option for -18?",
        "image_url": "",
        "explanation": "Bit đầu là bit dấu (0 = dương), còn lại là trị tuyệt đối."
    },
    {
        "id": 20,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "100000", "label": "A" },
            { "text": "100100", "label": "B" },
            { "text": "111000", "label": "C" },
            { "text": "101010", "label": "D" }
        ],
        "question": "Convert the 64 from decimal to their binary number equivalents.",
        "image_url": "",
        "explanation": "64=2^6 → dạng nhị phân là 1000000."
    },
    {
        "id": 21,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "0110", "label": "A" },
            { "text": "0111", "label": "B" },
            { "text": "1110", "label": "C" },
            { "text": "0101", "label": "D" },
            { "text": "None of the mentioned", "label": "E" }
        ],
        "question": "Using Hamming Code with one error correction to store an 12-bit word in memory, the stored word 111001001101 consists of 8 bits data and 4 bits parity check. What are the parity bits?",
        "image_url": "",
        "explanation": "Dùng công thức: 2^r≥m+r+1. Nếu m = 7 → r = 4 là nhỏ nhất thoả mãn (16 ≥ 12)."
    },
    {
        "id": 22,
        "type": "single",
        "points": 1,
        "correct": ["E"],
        "options": [
            { "text": "1,1,1,0", "label": "A" },
            { "text": "1,1,1,1", "label": "B" },
            { "text": "1,0,1,0", "label": "C" },
            { "text": "0,1,1,0", "label": "D" },
            { "text": "1,1,0,0", "label": "E" }
        ],
        "question": "For the following Boolean expressions: AB + AB' and the truth table A B B' output: 1 0 1 ?; 1 1 0 ?; 0 0 1 ?; 0 1 0 ? . Choose the correct option to replace at \"?\" (order top to bottom)",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-10-29%20224917.png",
        "explanation": "CT: AB+AB′=A(B+B′), theo định luật bù: B+B′=1 -> A(B+B′)=A(1)=A"
    },
    {
        "id": 23,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "Undefined", "label": "C" },
            { "text": "2", "label": "D" }
        ],
        "question": "What is the output of a NOT gate when the input is 0?",
        "image_url": "",
        "explanation": "1 → 0, 0 → 1. → Kết quả = 0."
    },
    {
        "id": 24,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "Undefined", "label": "D" },
            { "text": "#NA", "label": "E" }
        ],
        "question": "When both inputs are 0, what is the result of a NOR gate?",
        "image_url": "",
        "explanation": "Phép AND chỉ ra 1 khi cả hai = 1. → 0 và 0 → 0."
    },
    {
        "id": 25,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "0", "label": "A" },
            { "text": "1", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "Undefined", "label": "D" },
            { "text": "#NA", "label": "E" }
        ],
        "question": "When both inputs are 1, what is the result of a NAND gate?",
        "image_url": "",
        "explanation": "1 AND 1 = 1 → vì cả hai đều đúng."
    },
    {
        "id": 26,
        "type": "single",
        "points": 1,
        "correct": ["D"],
        "options": [
            { "text": "5", "label": "A" },
            { "text": "6", "label": "B" },
            { "text": "7", "label": "C" },
            { "text": "8", "label": "D" },
            { "text": "9", "label": "E" }
        ],
        "question": "A set-associative cache consists of 64 lines, divided into four-line sets. 2^19 words main memory contains 4K blocks of 128 words each. How many bits are there in the tag field of the cache?",
        "image_url": "",
        "explanation": "Số set = 64 / 4 = 16 set."
    },
    {
        "id": 27,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "3", "label": "A" },
            { "text": "4", "label": "B" },
            { "text": "5", "label": "C" },
            { "text": "6", "label": "D" },
            { "text": "7", "label": "E" }
        ],
        "question": "Consider a machine with a byte addressable main memory of 2^16 bytes and block size of 8 bytes. Assume that a direct mapped cache consisting of 32 lines is used with this machine. How many bits are there in the line field of the cache?",
        "image_url": "",
        "explanation": "Vì 2^20=1MB2^{20} = 1MB220=1MB, cần 20 bit địa chỉ."
    },
    {
        "id": 28,
        "type": "single",
        "points": 1,
        "correct": ["E"],
        "options": [
            { "text": "6", "label": "A" },
            { "text": "7", "label": "B" },
            { "text": "8", "label": "C" },
            { "text": "9", "label": "D" },
            { "text": "10", "label": "E" }
        ],
        "question": "The instruction, which adds 1 to the value in a memory location, has five stages: fetch opcode (four cycles), fetch operand address (three cycles), fetch operand (three cycles), add 1 to operand (three cycles), and store operand (three cycles). An interrupt sends request at beginning of fetch operand stage. How many cycles does the processor enter the interrupt processing cycle?",
        "image_url": "",
        "explanation": "Lệnh INC (increment) dùng để cộng 1 vào thanh ghi."
    },
    {
        "id": 29,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "6", "label": "A" },
            { "text": "7", "label": "B" },
            { "text": "8", "label": "C" },
            { "text": "9", "label": "D" },
            { "text": "5", "label": "E" }
        ],
        "question": "The instruction, which adds 1 to the value in a memory location, has five stages: fetch opcode (2 bus cycles), fetch operand address (2 bus cycles), fetch operand (2 bus cycles), add 1 to operand (1 bus cycle), and store operand (3 bus cycles). An interrupt sends request at beginning of fetch operand address stage. How many cycles does the processor enter the interrupt processing cycle?",
        "image_url": "",
        "explanation": "Tương tự — INC là lệnh tăng 1 đơn vị cho giá trị trong thanh ghi."
    },
    {
        "id": 30,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "4", "label": "A" },
            { "text": "3", "label": "B" },
            { "text": "2", "label": "C" },
            { "text": "No distinction", "label": "D" }
        ],
        "question": "In the concept of Register Windows, how many register groups are there?",
        "image_url": "",
        "explanation": "4 nhóm chính: Global Registers, Input Registers, Local Registers, Output registers"
    },
    {
        "id": 31,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "2", "label": "A" },
            { "text": "3", "label": "B" },
            { "text": "4", "label": "C" },
            { "text": "5", "label": "D" }
        ],
        "question": "How many common classifications of parallel systems are there as proposed by Flynn?",
        "image_url": "",
        "explanation": "SISD (Single Instruction, Single Data): Một luồng lệnh và một luồng dữ liệu.\r\nSIMD (Single Instruction, Multiple Data): Một luồng lệnh nhưng nhiều luồng dữ liệu.\r\nMISD (Multiple Instruction, Single Data): Nhiều luồng lệnh nhưng một luồng dữ liệu.\r\nMIMD (Multiple Instruction, Multiple Data): Nhiều luồng lệnh và nhiều luồng dữ liệu."
    },
    {
        "id": 32,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "8", "label": "A" },
            { "text": "16", "label": "B" },
            { "text": "4", "label": "C" },
            { "text": "12", "label": "D" }
        ],
        "question": "How many general-purpose registers are there in the Microprocessor Register Organizations of Intel 80386-Pentinum 4?",
        "image_url": "",
        "explanation": "8085 có 6 thanh ghi đa dụng (B, C, D, E, H, L), mỗi cái 8 bit."
    },
    {
        "id": 33,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "8 rows", "label": "A" },
            { "text": "3 rows", "label": "B" },
            { "text": "6 rows", "label": "C" },
            { "text": "12 rows", "label": "D" }
        ],
        "question": "If you have a boolean function with 3 variables, how many rows are there in the truth table?",
        "image_url": "",
        "explanation": "Tốc độ CPU phụ thuộc vào tần số xung nhịp (clock speed), độ dài đường ống lệnh (pipeline), và hiệu quả bộ nhớ cache. Tần số cao, pipeline sâu, cache lớn → CPU chạy nhanh hơn."
    },
    {
        "id": 34,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "307%", "label": "A" },
            { "text": "297%", "label": "B" },
            { "text": "317%", "label": "C" },
            { "text": "327%", "label": "D" }
        ],
        "question": "Follow the Amdahl's law for multiprocessors, if only 10% of the code is inherently serial (f = 0.9), running the program on a multicore system with 4 processors, a performance gain (speedup factor) would be _____.",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-10-29%20224438.png",
        "explanation": "1/((1-f)+(f/n)=1/((1-0,9)+(0,9/4)=3,08 = 308 khoảng 307%"
    },
    {
        "id": 35,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "333%", "label": "A" },
            { "text": "303%", "label": "B" },
            { "text": "313%", "label": "C" },
            { "text": "323%", "label": "D" }
        ],
        "question": "Follow the Amdahl's law for multiprocessors, if only 20% of the code is inherently serial (f = 0.8), running the program on a multicore system with 8 processors, a performance gain (speedup factor) would be ____.",
        "image_url": "",
        "explanation": "Tavg=h×Tcache+(1−h)×(Tcache+Tmain)= 0.9×10 + 0.1×(10+100) = 19ns. → Hiểu nôm na: 90% truy cập nhanh, 10% phải “vòng xuống RAM”."
    },
    {
        "id": 36,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "MIPS rate = 285.7", "label": "A" },
            { "text": "MIPS rate = 275.7", "label": "B" },
            { "text": "MIPS rate = 265.7", "label": "C" },
            { "text": "MIPS rate = 295.7", "label": "D" }
        ],
        "question": "A benchmark program is running on a 400 MHz processor. The executed program consists of 500 instruction executions, with the following instruction mix and clock cycle count in Table below:\r\nInstruction type Instruction count Cycles per Instruction\r\nArithmetic 300 1\r\nData transfer 100 2\r\nControl transfer 100 2\r\nCalculate MIPS rate for this case.",
        "image_url": "",
        "explanation": "Tổng số chu kỳ += instruction x Cycles per = 700\r\nThời gian thực thi = chu kỳ/ tần số(400x10^6)\r\nMIPS rate= tổng số lệnh(500)/ thời gian thực thi"
    },
    {
        "id": 37,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "7, 17, 27, 37, …", "label": "A" },
            { "text": "0, 1, 2, 3, 4, 5, 6, 7, …", "label": "B" },
            { "text": "0,7, 17, 27, 37, …", "label": "C" },
            { "text": "0, 7, 77, 777, …", "label": "D" }
        ],
        "question": "In one-cache system using direct mapping technique, with the cache containing 10 lines, which memory block's data can be transfered to the cache line 7?",
        "image_url": "",
        "explanation": "Cache line = (Block address) mod (Number of cache lines)"
    },
    {
        "id": 38,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "14/8/4", "label": "A" },
            { "text": "16/6/4", "label": "B" },
            { "text": "12/10/4", "label": "C" },
            { "text": "15/7/4", "label": "D" },
            { "text": "13/9/4", "label": "E" }
        ],
        "question": "A two-way set-associative cache has lines of 16 bytes and a total size of 8 Kbytes. The 64-Mbyte main memory is byte addressable. What are the values of Tag, Set and Byte offset fields?",
        "image_url": "",
        "explanation": "Mỗi khi CPU đọc 1 lệnh, PC tăng theo số byte của lệnh. → 2000H + 3 = 2003H."
    },
    {
        "id": 39,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "1;0;0", "label": "A" },
            { "text": "0;1;0", "label": "B" },
            { "text": "0;0;1", "label": "C" },
            { "text": "1;0;1", "label": "D" }
        ],
        "question": "The use of Hamming code on 4-bit words (M = 4) is illustrated in the below Venn diagrams. With three intersecting circles, there are seven compartments. We assign the 4 data bits to the inner compartments. The remaining compartments are filled with what are called parity bits. Each parity bit is chosen so that the total number of 1s in its circle is even. Choose the correct value of the corresponding parity bit in circles A, B, C.",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-10-29%20225512.png",
        "explanation": "ALU là khối tính toán trung tâm, thực hiện các phép toán số học (cộng, trừ, nhân, chia) và logic (AND, OR, XOR…)."
    },
    {
        "id": 40,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "A + B'", "label": "A" },
            { "text": "A' + B'", "label": "B" },
            { "text": "A + B", "label": "C" },
            { "text": "A' + B", "label": "D" }
        ],
        "question": "Simplify the following Boolean expression: AB + A'B' + AB'",
        "image_url": "",
        "explanation": "Đó là Accumulator (thanh ghi tích lũy) – nơi chứa kết quả tạm thời trong quá trình thực hiện phép toán."
    },
    {
        "id": 41,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "F = A + B'C'", "label": "A" },
            { "text": "F = A' + BC", "label": "B" },
            { "text": "F = A + BC", "label": "C" },
            { "text": "F = A' + B'C'", "label": "D" }
        ],
        "question": "Which of the following Boolean expressions is equivalent to F = (A + B')(C' + A + B)",
        "image_url": "",
        "explanation": "Pipeline hoạt động nối tiếp → chỉ nhanh bằng giai đoạn chậm nhất. → Giai đoạn chậm làm nghẽn cổ chai, giảm hiệu năng toàn hệ thống."
    },
    {
        "id": 42,
        "type": "single",
        "points": 1,
        "correct": ["A"],
        "options": [
            { "text": "F = A'C + BC", "label": "A" },
            { "text": "F = AC + BC", "label": "B" },
            { "text": "F = AC + B'C", "label": "C" },
            { "text": "F = A'C + B'C", "label": "D" }
        ],
        "question": "Which of the following Boolean expressions is equivalent to F = BC + A'B'C?",
        "image_url": "",
        "explanation": "Cache lưu tạm dữ liệu thường dùng, giúp CPU truy cập nhanh hơn mà không cần xuống RAM.\r\n→ Giảm thời gian truy xuất, tăng tốc xử lý."
    },
    {
        "id": 43,
        "type": "single",
        "points": 1,
        "correct": ["B"],
        "options": [
            {
                "text": "(A + B + C')(A' + B' + C)(A'+ B' + C')(A+ B'+ C)(A+ B' + C')",
                "label": "A"
            },
            {
                "text": "(A + B + C)(A + B' + C)(A' + B' + C')(A + B + C')(A' + B' + C')",
                "label": "B"
            },
            {
                "text": "(A + B + C)(A + B' + C')(A' + B' + C)(A + B' + C')(A + B' + C)",
                "label": "C"
            },
            {
                "text": "(A' + B + C')(A'+ B' + C)(A + B' + C)(A + B' + C')(A' + B' + C)",
                "label": "D"
            }
        ],
        "question": "Convert the following SOP expression to an equivalent POS expression: ABC' + A'B'C + AB'C'",
        "image_url": "",
        "explanation": "ROM là bộ nhớ chỉ đọc (Read Only) – dữ liệu không mất khi tắt máy. RAM là bộ nhớ tạm, mất dữ liệu khi mất điện."
    },
    {
        "id": 44,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            {
                "text": "(A + B + C)(A + B' + C)(A'+ B + C')(A' + B' + C)",
                "label": "A"
            },
            {
                "text": "(A + B + C')(A + B' + C)(A' + B + C)(A' + B' + C)",
                "label": "B"
            },
            {
                "text": "(A + B + C)(A + B' + C')(A' + B +C)(A'+ B' + C)",
                "label": "C"
            },
            {
                "text": "(A' + B + C')(A' + B' + C)(A + B' + C)(A + B + C')",
                "label": "D"
            }
        ],
        "question": "Convert the following SOP expression to an equivalent POS expression: ABC + A'BC' + AB'C + A'B'C",
        "image_url": "",
        "explanation": "BIOS nằm trong ROM (hoặc flash ROM). → Vì ROM giữ dữ liệu ngay cả khi tắt nguồn."
    },
    {
        "id": 45,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "F(A,B,C,D) = A'B+CD+BD+B'C'D", "label": "A" },
            { "text": "F(A,B,C,D) = A'B+C'D+BD+B'C'D", "label": "B" },
            { "text": "F(A,B,C,D) = A'B+CD+BD+B'C'D'", "label": "C" },
            { "text": "F(A,B,C,D) = A'B+CD+BD+B'C'D", "label": "D" }
        ],
        "question": "From Karnaugh maps below. Derive a simplify Boolean expression",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-10-29%20230115.png",
        "explanation": "Block lớn → tăng khả năng trúng (hit), nhưng tốn băng thông và dễ gây lãng phí dữ liệu không cần thiết. → Cần cân bằng giữa tốc độ và hiệu quả bộ nhớ."
    },
    {
        "id": 46,
        "type": "single",
        "points": 1,
        "correct": ["C"],
        "options": [
            { "text": "F = A'B'D' + AC'D + ABD", "label": "A" },
            { "text": "F = A'B'D + AC'D + ABD", "label": "B" },
            { "text": "F = A'B'D + AC'D' + ABD", "label": "C" },
            { "text": "F = A'B'D + A'C'D + ABD", "label": "D" }
        ],
        "question": "Write the Boolean expression for each of the logic circuits.",
        "image_url": "https://zgecljmkyuhcmiwxyczn.supabase.co/storage/v1/object/public/quiz-images/Screenshot%202025-10-29%20230248.png",
        "explanation": "Virtual memory cho phép chạy chương trình lớn hơn dung lượng RAM thực tế bằng cách hoán đổi dữ liệu giữa RAM và ổ đĩa. → Giúp máy tính chạy đa nhiệm mượt hơn, dù RAM nhỏ."
    }
];
