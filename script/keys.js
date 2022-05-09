const specialKeys = [
  'Backspace',
  'Tab',
  'Enter',
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'AltLeft',
  'AltRight',
  'ControlLeft',
  'ControlRight',
  'MetaLeft',
  'Delete',
];

const keysArr = [
  [
    {
      className: 'Backquote',
      en: {
        capsLkUpCase: '`',
        lowCase: '`',
        upCase: '~',
        capsLkLowCase: '~',
      },
      ru: {
        capsLkUpCase: 'Ё',
        lowCase: 'ё',
        upCase: 'Ё',
        capsLkLowCase: 'ё',
      },
    },
    {
      className: 'Digit1',
      en: {
        capsLkUpCase: '1',
        lowCase: '1',
        upCase: '!',
        capsLkLowCase: '!',
      },
      ru: {
        capsLkUpCase: '1',
        lowCase: '1',
        upCase: '!',
        capsLkLowCase: '!',
      },
    },
    {
      className: 'Digit2',
      en: {
        capsLkUpCase: '2',
        lowCase: '2',
        upCase: '@',
        capsLkLowCase: '@',
      },
      ru: {
        capsLkUpCase: '2',
        lowCase: '2',
        upCase: '"',
        capsLkLowCase: '"',
      },
    },
    {
      className: 'Digit3',
      en: {
        capsLkUpCase: '3',
        lowCase: '3',
        upCase: '#',
        capsLkLowCase: '#',
      },
      ru: {
        capsLkUpCase: '3',
        lowCase: '3',
        upCase: '№',
        capsLkLowCase: '№',
      },
    },
    {
      className: 'Digit4',
      en: {
        capsLkUpCase: '4',
        lowCase: '4',
        upCase: '$',
        capsLkLowCase: '$',
      },
      ru: {
        capsLkUpCase: '4',
        lowCase: '4',
        upCase: ';',
        capsLkLowCase: ';',
      },
    },
    {
      className: 'Digit5',
      en: {
        capsLkUpCase: '5',
        lowCase: '5',
        upCase: '%',
        capsLkLowCase: '%',
      },
      ru: {
        capsLkUpCase: '5',
        lowCase: '5',
        upCase: '%',
        capsLkLowCase: '%',
      },
    },
    {
      className: 'Digit6',
      en: {
        capsLkUpCase: '6',
        lowCase: '6',
        upCase: '^',
        capsLkLowCase: '^',
      },
      ru: {
        capsLkUpCase: '6',
        lowCase: '6',
        upCase: ':',
        capsLkLowCase: ':',
      },
    },
    {
      className: 'Digit7',
      en: {
        capsLkUpCase: '7',
        lowCase: '7',
        upCase: '&',
        capsLkLowCase: '&',
      },
      ru: {
        capsLkUpCase: '7',
        lowCase: '7',
        upCase: '?',
        capsLkLowCase: '?',
      },
    },
    {
      className: 'Digit8',
      en: {
        capsLkUpCase: '8',
        lowCase: '8',
        upCase: '*',
        capsLkLowCase: '*',
      },
      ru: {
        capsLkUpCase: '8',
        lowCase: '8',
        upCase: '*',
        capsLkLowCase: '*',
      },
    },
    {
      className: 'Digit9',
      en: {
        capsLkUpCase: '9',
        lowCase: '9',
        upCase: '(',
        capsLkLowCase: '(',
      },
      ru: {
        capsLkUpCase: '9',
        lowCase: '9',
        upCase: '(',
        capsLkLowCase: '(',
      },
    },
    {
      className: 'Digit0',
      en: {
        capsLkUpCase: '0',
        lowCase: '0',
        upCase: ')',
        capsLkLowCase: ')',
      },
      ru: {
        capsLkUpCase: '0',
        lowCase: '0',
        upCase: ')',
        capsLkLowCase: ')',
      },
    },
    {
      className: 'Minus',
      en: {
        capsLkUpCase: '-',
        lowCase: '-',
        upCase: '_',
        capsLkLowCase: '_',
      },
      ru: {
        capsLkUpCase: '-',
        lowCase: '-',
        upCase: '_',
        capsLkLowCase: '_',
      },
    },
    {
      className: 'Equal',
      en: {
        capsLkUpCase: '=',
        lowCase: '=',
        upCase: '+',
        capsLkLowCase: '+',
      },
      ru: {
        capsLkUpCase: '=',
        lowCase: '=',
        upCase: '+',
        capsLkLowCase: '+',
      },
    },
    {
      className: 'Backspace',
      en: {
        lowCase: '🡄 Backspace',
        upCase: '🡄 Backspace',
      },
      ru: {
        lowCase: '🡄 Backspace',
        upCase: '🡄 Backspace',
      },
    },
  ],
  [
    {
      className: 'Tab',
      en: {
        lowCase: '⭾ Tab',
        upCase: '⭾ Tab',
      },
      ru: {
        lowCase: '⭾ Tab',
        upCase: '⭾ Tab',
      },
    },
    {
      className: 'KeyQ',
      en: {
        lowCase: 'q',
        upCase: 'Q',
      },
      ru: {
        lowCase: 'й',
        upCase: 'Й',
      },
    },
    {
      className: 'KeyW',
      en: {
        lowCase: 'w',
        upCase: 'W',
      },
      ru: {
        lowCase: 'ц',
        upCase: 'Ц',
      },
    },
    {
      className: 'KeyE',
      en: {
        lowCase: 'e',
        upCase: 'E',
      },
      ru: {
        lowCase: 'у',
        upCase: 'У',
      },
    },
    {
      className: 'KeyR',
      en: {
        lowCase: 'r',
        upCase: 'R',
      },
      ru: {
        lowCase: 'к',
        upCase: 'К',
      },
    },
    {
      className: 'KeyT',
      en: {
        lowCase: 't',
        upCase: 'T',
      },
      ru: {
        lowCase: 'е',
        upCase: 'Е',
      },
    },
    {
      className: 'KeyY',
      en: {
        lowCase: 'y',
        upCase: 'Y',
      },
      ru: {
        lowCase: 'н',
        upCase: 'Н',
      },
    },
    {
      className: 'KeyU',
      en: {
        lowCase: 'u',
        upCase: 'U',
      },
      ru: {
        lowCase: 'г',
        upCase: 'Г',
      },
    },
    {
      className: 'KeyI',
      en: {
        lowCase: 'i',
        upCase: 'I',
      },
      ru: {
        lowCase: 'ш',
        upCase: 'Ш',
      },
    },
    {
      className: 'KeyO',
      en: {
        lowCase: 'o',
        upCase: 'O',
      },
      ru: {
        lowCase: 'щ',
        upCase: 'Щ',
      },
    },
    {
      className: 'KeyP',
      en: {
        lowCase: 'p',
        upCase: 'P',
      },
      ru: {
        lowCase: 'з',
        upCase: 'З',
      },
    },
    {
      className: 'BracketLeft',
      en: {
        capsLkUpCase: '[',
        lowCase: '[',
        upCase: '{',
        capsLkLowCase: '{',
      },
      ru: {
        capsLkUpCase: 'Х',
        lowCase: 'х',
        upCase: 'Х',
        capsLkLowCase: 'х',
      },
    },
    {
      className: 'BracketRight',
      en: {
        capsLkUpCase: ']',
        lowCase: ']',
        upCase: '}',
        capsLkLowCase: '}',
      },
      ru: {
        capsLkUpCase: 'Ъ',
        lowCase: 'ъ',
        upCase: 'Ъ',
        capsLkLowCase: 'ъ',
      },
    },
    {
      className: 'Backslash',
      en: {
        capsLkUpCase: '\\',
        lowCase: '\\',
        upCase: '|',
        capsLkLowCase: '|',
      },
      ru: {
        capsLkUpCase: '\\',
        lowCase: '\\',
        upCase: '/',
        capsLkLowCase: '/',
      },
    },
    {
      className: 'Delete',
      en: {
        lowCase: '⌦ Del',
        upCase: '⌦ Del',
      },
      ru: {
        lowCase: '⌦ Del',
        upCase: '⌦ Del',
      },
    },
  ],
  [
    {
      className: 'CapsLock',
      en: {
        lowCase: '⇪ CapsLock',
        upCase: '⇪ CapsLock',
      },
      ru: {
        lowCase: '⇪ CapsLock',
        upCase: '⇪ CapsLock',
      },
    },
    {
      className: 'KeyA',
      en: {
        lowCase: 'a',
        upCase: 'A',
      },
      ru: {
        lowCase: 'ф',
        upCase: 'Ф',
      },
    },
    {
      className: 'KeyS',
      en: {
        lowCase: 's',
        upCase: 'S',
      },
      ru: {
        lowCase: 'ы',
        upCase: 'Ы',
      },
    },
    {
      className: 'KeyD',
      en: {
        lowCase: 'd',
        upCase: 'D',
      },
      ru: {
        lowCase: 'в',
        upCase: 'В',
      },
    },
    {
      className: 'KeyF',
      en: {
        lowCase: 'f',
        upCase: 'F',
      },
      ru: {
        lowCase: 'а',
        upCase: 'А',
      },
    },
    {
      className: 'KeyG',
      en: {
        lowCase: 'g',
        upCase: 'G',
      },
      ru: {
        lowCase: 'п',
        upCase: 'П',
      },
    },
    {
      className: 'KeyH',
      en: {
        lowCase: 'h',
        upCase: 'H',
      },
      ru: {
        lowCase: 'р',
        upCase: 'Р',
      },
    },
    {
      className: 'KeyJ',
      en: {
        lowCase: 'j',
        upCase: 'J',
      },
      ru: {
        lowCase: 'о',
        upCase: 'О',
      },
    },
    {
      className: 'KeyK',
      en: {
        lowCase: 'k',
        upCase: 'K',
      },
      ru: {
        lowCase: 'л',
        upCase: 'Л',
      },
    },
    {
      className: 'KeyL',
      en: {
        lowCase: 'l',
        upCase: 'L',
      },
      ru: {
        lowCase: 'д',
        upCase: 'Д',
      },
    },
    {
      className: 'Semicolon',
      en: {
        capsLkUpCase: ';',
        lowCase: ';',
        upCase: ':',
        capsLkLowCase: ':',
      },
      ru: {
        capsLkUpCase: 'Ж',
        lowCase: 'ж',
        upCase: 'Ж',
        capsLkLowCase: 'ж',
      },
    },
    {
      className: 'Quote',
      en: {
        capsLkUpCase: "'",
        lowCase: "'",
        upCase: '"',
        capsLkLowCase: '"',
      },
      ru: {
        capsLkUpCase: 'Э',
        lowCase: 'э',
        upCase: 'Э',
        capsLkLowCase: 'э',
      },
    },
    {
      className: 'Enter',
      en: {
        lowCase: '⏎ Enter',
        upCase: '⏎ Enter',
      },
      ru: {
        lowCase: '⏎ Enter',
        upCase: '⏎ Enter',
      },
    },
  ],
  [
    {
      className: 'ShiftLeft',
      en: {
        lowCase: '🡅 Shift',
        upCase: '🡅 Shift',
      },
      ru: {
        lowCase: '🡅 Shift',
        upCase: '🡅 Shift',
      },
    },
    {
      className: 'KeyZ',
      en: {
        lowCase: 'z',
        upCase: 'Z',
      },
      ru: {
        lowCase: 'я',
        upCase: 'Я',
      },
    },
    {
      className: 'KeyX',
      en: {
        lowCase: 'x',
        upCase: 'X',
      },
      ru: {
        lowCase: 'ч',
        upCase: 'Ч',
      },
    },
    {
      className: 'KeyC',
      en: {
        lowCase: 'c',
        upCase: 'C',
      },
      ru: {
        lowCase: 'с',
        upCase: 'С',
      },
    },
    {
      className: 'KeyV',
      en: {
        lowCase: 'v',
        upCase: 'V',
      },
      ru: {
        lowCase: 'м',
        upCase: 'М',
      },
    },
    {
      className: 'KeyB',
      en: {
        lowCase: 'b',
        upCase: 'B',
      },
      ru: {
        lowCase: 'и',
        upCase: 'И',
      },
    },
    {
      className: 'KeyN',
      en: {
        lowCase: 'n',
        upCase: 'N',
      },
      ru: {
        lowCase: 'т',
        upCase: 'Т',
      },
    },
    {
      className: 'KeyM',
      en: {
        lowCase: 'm',
        upCase: 'M',
      },
      ru: {
        lowCase: 'ь',
        upCase: 'Ь',
      },
    },
    {
      className: 'Comma',
      en: {
        capsLkUpCase: ',',
        lowCase: ',',
        upCase: '<',
        capsLkLowCase: '<',
      },
      ru: {
        capsLkUpCase: 'Б',
        lowCase: 'б',
        upCase: 'Б',
        capsLkLowCase: 'б',
      },
    },
    {
      className: 'Period',
      en: {
        capsLkUpCase: '.',
        lowCase: '.',
        upCase: '>',
        capsLkLowCase: '>',
      },
      ru: {
        capsLkUpCase: 'Ю',
        lowCase: 'ю',
        upCase: 'Ю',
        capsLkLowCase: 'ю',
      },
    },
    {
      className: 'Slash',
      en: {
        capsLkUpCase: '/',
        lowCase: '/',
        upCase: '?',
        capsLkLowCase: '?',
      },
      ru: {
        capsLkUpCase: '.',
        lowCase: '.',
        upCase: ',',
        capsLkLowCase: ',',
      },
    },
    {
      className: 'ArrowUp',
      en: {
        lowCase: '⇧',
        upCase: '⇧',
      },
      ru: {
        lowCase: '⇧',
        upCase: '⇧',
      },
    },
    {
      className: 'ShiftRight',
      en: {
        lowCase: '🡅 Shift',
        upCase: '🡅 Shift',
      },
      ru: {
        lowCase: '🡅 Shift',
        upCase: '🡅 Shift',
      },
    },
  ],
  [
    {
      className: 'ControlLeft',
      en: {
        lowCase: 'Ctrl',
        upCase: 'Ctrl',
      },
      ru: {
        lowCase: 'Ctrl',
        upCase: 'Ctrl',
      },
    },
    {
      className: 'MetaLeft',
      en: {
        lowCase: 'Win',
        upCase: 'Win',
      },
      ru: {
        lowCase: 'Win',
        upCase: 'Win',
      },
    },
    {
      className: 'AltLeft',
      en: {
        lowCase: 'Alt',
        upCase: 'Alt',
      },
      ru: {
        lowCase: 'Alt',
        upCase: 'Alt',
      },
    },
    {
      className: 'Space',
      en: {
        lowCase: ' ',
        upCase: ' ',
      },
      ru: {
        lowCase: ' ',
        upCase: ' ',
      },
    },
    {
      className: 'AltRight',
      en: {
        lowCase: 'Alt',
        upCase: 'Alt',
      },
      ru: {
        lowCase: 'Alt',
        upCase: 'Alt',
      },
    },
    {
      className: 'ArrowLeft',
      en: {
        lowCase: '⇦',
        upCase: '⇦',
      },
      ru: {
        lowCase: '⇦',
        upCase: '⇦',
      },
    },
    {
      className: 'ArrowDown',
      en: {
        lowCase: '⇩',
        upCase: '⇩',
      },
      ru: {
        lowCase: '⇩',
        upCase: '⇩',
      },
    },
    {
      className: 'ArrowRight',
      en: {
        lowCase: '⇨',
        upCase: '⇨',
      },
      ru: {
        lowCase: '⇨',
        upCase: '⇨',
      },
    },
    {
      className: 'ControlRight',
      en: {
        lowCase: 'Ctrl',
        upCase: 'Ctrl',
      },
      ru: {
        lowCase: 'Ctrl',
        upCase: 'Ctrl',
      },
    },
  ],
];
