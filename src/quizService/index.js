// URL: https://www.examveda.com/computer-fundamentals/practice-mcq-question-on-computer-fundamental-miscellaneous/
const qBank = [
  {
    question:
      'A light sensitive device that converts drawing, printed text or other images into digital form is______   ',
    answers: ['Keyboard', 'Plotter', 'Scanner', 'OMR'],
    correct: 'Scanner',
    questionId: '099099',
  },
  {
    question:
      'Which protocol provides e-mail facility among different hosts______',
    answers: ['FTP', 'SMTP', 'TELNET', 'None of these'],
    correct: 'SMTP',
    questionId: '183452',
  },
  {
    question: 'The basic architecture of computer was developed by_____',
    answers: [
      'John Von Neumann',
      'Charles Babbage',
      'Blaise Pascal',
      'None of these',
    ],
    correct: 'John Von Neumann',
    questionId: '267908',
  },
  {
    question: 'In how many generations a computer can be classified______',
    answers: ['3', '4', '5', '6'],
    correct: '5',
    questionId: '333247',
  },
  {
    question: 'Fifth generation computers are based on_______',
    answers: [
      'Artificial Intelligence',
      'Programming Intelligence',
      'VVLSI',
      'None of these',
    ],
    correct: 'Artificial Intelligence',
    questionId: '496293',
  },
  {
    question:
      'Microprocessor was introduced in which generation of computer_______',
    answers: [
      'Second Generation',
      'Fourth Generation',
      'Both (A) and (B)',
      'Third Generation',
    ],
    correct: 'Fourth Generation',
    questionId: '588909',
  },
  {
    question: 'Which of the following memory is non-volatile______',
    answers: ['SRAM', 'DRAM', 'ROM', 'All of the above'],
    correct: 'ROM',
    questionId: '648452',
  },
  {
    question: 'GUI stands for______',
    answers: [
      'Graph Use Interface',
      'Graphical Universal Interface',
      'Graphical User Interface',
      'Graphical Unique Interface',
    ],
    correct: 'Graphical User Interface',
    questionId: '786649',
  },
  {
    question:
      'Any data or instruction entered into the memory of a computer is considered as________',
    answers: ['Storage', 'Output', 'Input', 'Information'],
    correct: 'Input',
    questionId: '839754',
  },
  {
    question:
      'Which one of the following is not an application software package______',
    answers: [
      'Red Hat Linux',
      'Microsoft Office',
      'Adobe Pagemaker',
      'Open Office',
    ],
    correct: 'Red Hat Linux',
    questionId: '98390',
  },
  {
    question: 'Which of the following statement is wrong_______',
    answers: [
      'Photoshop is a graphical design tool by Adobe',
      'Linux is free and open source software',
      'Linux is owned and sold by Microsoft',
      'Windows XP is an operating system',
    ],
    correct: 'Linux is owned and sold by Microsoft',
    questionId: '1071006',
  },
  {
    question: 'An error is also known as______',
    answers: ['Bug', 'Debug', 'Cursor', 'Icon'],
    correct: 'Bug',
    questionId: '1174154',
  },
  {
    question: 'Microsoft Word is an example of_______',
    answers: [
      'an operating system',
      'Processing device',
      'Application software',
      'an input device',
    ],
    correct: 'Application software',
    questionId: '1226535',
  },
  {
    question: 'Who invented the supercomputer_______',
    answers: [
      'Charles Babbage',
      ' JH Van Tassell',
      'Charles Ginsberg',
      'Seymour Cray',
    ],
    correct: 'Seymour Cray',
    questionId: '1310938',
  },
  {
    question:
      'Graphical pictures that represent an object like file, folder etc are_______',
    answers: ['Task bar', 'Windows', 'Icons', 'Desktop'],
    correct: 'Icons',
    questionId: '1436873',
  },
  {
    question:
      'The 0 and 1 in the binary numbering system are called Binary Digits or_______',
    answers: ['Bytes', 'Kilobytes', 'Decimal bytes', 'Bits'],
    correct: 'Bits',
    questionId: '1515110',
  },
  {
    question: 'The IC chip used in computers, is made of________',
    answers: ['Chomium', 'Iron Oxide', 'Silica', 'Silicon'],
    correct: 'Silicon',
    questionId: '1642728',
  },
  {
    question:
      'Which of the following operating systems is produced by IBM_______ ',
    answers: ['OS-2', 'Windows', 'DOS', 'UNIX'],
    correct: 'OS-2',
    questionId: '1747256',
  },
  {
    question:
      'The processor which performs arithmetical and logical operations is called______',
    answers: ['Control', 'ALU', 'Register', 'Cache Memory'],
    correct: 'ALU',
    questionId: '1822532',
  },
  {
    question: 'Which was an early mainframe computer_______',
    answers: ['UNIC', 'FUNTRIA', 'BRAINIA', 'ENIAC'],
    correct: 'ENIAC',
    questionId: '195075',
  },
  {
    question:
      'Which of the following was the first Intel processor introduced_______',
    answers: ['3080', '4004', '8080', '8086'],
    correct: '4004',
    questionId: '2019778',
  },
  {
    question: 'Which network protocol is used to send Email_______',
    answers: ['FTP', 'SSH', 'POP3', 'SMTP'],
    correct: 'SMTP',
    questionId: '2134343',
  },
  {
    question: 'When was the first e-mail sent_______',
    answers: ['1963', '1969', '1971', '1974'],
    correct: '1971',
    questionId: '2210799',
  },
  {
    question: 'Operating System is the most common type of _________ software.',
    answers: [
      'Communication',
      'Application',
      'System',
      'Word Processing Software',
    ],
    correct: 'System',
    questionId: '2379831',
  },
  {
    question: 'RAM chips________',
    answers: ['Licorice', 'Lollipop', 'Chocolate', 'Bubblegum'],
    correct: 'Licorice',
    questionId: '2426418',
  },
  {
    question: 'The operating system manages________',
    answers: [
      'Memory',
      'Processor',
      'Disk and I/O Devices',
      'All of the above',
    ],
    correct: 'All of the above',
    questionId: '2510086',
  },
  {
    question:
      'Which memory is non volatile and may be written only once_________',
    answers: ['RAM', 'EEPROM', 'EPROM', 'PROM'],
    correct: 'PROM',
    questionId: '2685745',
  },
  {
    question:
      'The memory which is programmed at the time it is manufactured is________',
    answers: ['RAM', 'ROM', 'PROM', 'EPROM'],
    correct: 'ROM',
    questionId: '2796884',
  },
  {
    question: 'Which of the following memory is volatile_____',
    answers: ['RAM', 'ROM', 'EPROM', 'PROM'],
    correct: 'RAM',
    questionId: '2838900',
  },
  {
    question: 'A kilobyte also referred to as KB, is equal to_____',
    answers: ['1000 bytes', '1024 bytes', '2048 bytes', '512 bytes'],
    correct: '1024 bytes',
    questionId: '298060',
  },
  {
    question:
      'Which of the following items is not used in Local Area Networks (LANs)_______',
    answers: ['Computers', 'Modem', 'Printer', 'Cable'],
    correct: 'Modem',
    questionId: '3096579',
  },
  {
    question: 'Computer Virus is a _______',
    answers: ['Hardware', 'Software', 'Bacteria', 'Freeware'],
    correct: 'Software',
    questionId: '3182461',
  },
  {
    question: 'The most advanced form of ROM is______',
    answers: ['PROM', 'RAM', 'EEPROM', 'Cache Memory'],
    correct: 'EEPROM',
    questionId: '3239112',
  },
  {
    question: 'Another term for Main Memory is______',
    answers: ['Hard Disk', 'ROM', 'Floppy Disk', 'RAM'],
    correct: 'RAM',
    questionId: '3318503',
  },
  {
    question: 'One MB is equal to_______',
    answers: ['1024 Byte', '1024 KB', '1000 KB', '1024 GB'],
    correct: '1024 KB',
    questionId: '3410327',
  },
  {
    question: 'Internet Explorer is a type of______',
    answers: ['Operating System', 'Browser', 'IP address', 'Compiler'],
    correct: 'Browser',
    questionId: '3542596',
  },
  {
    question: 'AVI format was developed by________',
    answers: ['IBM', 'Apple', 'Microsoft', 'Macromedia'],
    correct: 'Microsoft',
    questionId: '3667517',
  },
  {
    question: '______ is the high speed memory used in the computer.',
    answers: ['RAM', 'Hard Disk', 'Cache', 'BIOS'],
    correct: 'Cache',
    questionId: '3791672',
  },
  {
    question: 'A collection of 8 bits is called______',
    answers: ['Byte', 'Record', 'Word', 'Nibble'],
    correct: 'Byte',
    questionId: '3893585',
  },
  {
    question: 'The term memory applies to which one of the following',
    answers: ['Logic', 'Storage', 'Input Device', 'Output Device'],
    correct: 'Storage',
    questionId: '3913430',
  },
  {
    question: 'The device primarily used to provide hardcopy is the______',
    answers: ['CRT', 'Computer Console', 'Printer', 'Card Reader'],
    correct: 'Printer',
    questionId: '4049121',
  },
  {
    question:
      'Which of the following is the most powerful type of the computer________',
    answers: [
      'Mainframe',
      'Super conductor',
      'Micro computer',
      'Super computer',
    ],
    correct: 'Super computer',
    questionId: '4150746',
  },
  {
    question: 'A list of instructions used by a computer is called______',
    answers: ['Text', 'CPU', 'Program', 'Output'],
    correct: 'Program',
    questionId: '4235063',
  },
  {
    question:
      'The process of copying data from a memory location is called______',
    answers: ['Writing', 'Controlling', 'Booting', 'Reading'],
    correct: 'Reading',
    questionId: '4321002',
  },
  {
    question:
      'The process of putting data into a storage location is called_____',
    answers: ['Reading', 'Writing', 'Controlling', 'Hand Shaking'],
    correct: 'Writing',
    questionId: '4442286',
  },
  {
    question: 'You should save your computer from______',
    answers: [
      'Viruses',
      "Time bombs",
      'Worms',
      'All of the above',
    ],
    correct: 'All of the above',
    questionId: '4564430',
  },
  {
    question: 'Which of the following is program group______',
    answers: ['Accessories', 'Paint', 'Word', 'All of above'],
    correct: 'Accessories',
    questionId: '4630606',
  },
  {
    question:
      'Which is not application software_______',
    answers: ['Windows NT', 'Page Maker', 'WinWord XP', 'Photoshop'],
    correct: 'Windows NT',
    questionId: '4795960',
  },
  {
    question: 'The ________ program compresses large files into a smaller file',
    answers: ['WinZip', "WinShrink", 'WinStyle', 'None of above'],
    correct: 'WinZip',
    questionId: '4811162',
  },
  {
    question: 'Which of the following is an example of a real time operating system______',
    answers: ["Lynx", "MS DOS", 'Windows XP', "Process Control"],
    correct: "Arby's",
    questionId: '4982981',
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
