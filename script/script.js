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

class VirtualKeyboard {
  constructor() {
    this.element = null;
    this.textarea = null;
    this.state = {
      isShiftLOn: false,
      isShiftROn: false,
      isCapsLkOn: false,
      case: 'lowCase',
      lang: 'en',
    };
    this.current = {
      element: null,
      code: null,
      event: null,
      letter: null,
    };
    this.previous = {
      element: null,
      code: null,
      event: null,
      letter: null,
    };
  }

  buildDocumentStructure(arr) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const title = document.createElement('p');
    title.innerText = 'irtual keyboard';
    title.classList.add('title');
    title.insertAdjacentHTML('afterBegin', '<span class="titleLetter"<i>v</i></span>');
    wrapper.appendChild(title);
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.setAttribute(
      'placeholder',
      'Клавиатура создана в операционной системе Windows. Для переключения языка используйте левыe Shift + Alt.',
    );
    textarea.setAttribute('rows', '5');
    textarea.setAttribute('cols', '50');
    this.textarea = textarea;
    wrapper.appendChild(this.textarea);
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i += 1) {
      const row = document.createElement('div');
      row.classList.add('keyboard__row', 'row');
      for (let j = 0; j < arr[i].length; j += 1) {
        const key = document.createElement('div');
        key.classList.add('keyboard__key', 'key', arr[i][j].className);
        const langRu = document.createElement('span');
        langRu.classList.add('ru', 'off');
        langRu.insertAdjacentHTML('afterBegin', `<span class="lowCase off"><i>${arr[i][j].ru.lowCase}</i></span>`);
        langRu.insertAdjacentHTML('beforeEnd', `<span class="upCase off"><i>${arr[i][j].ru.upCase}</i></span>`);
        langRu.insertAdjacentHTML(
          'beforeEnd',
          `<span class="capsLkUpCase off"><i>${
            arr[i][j].ru.capsLkUpCase || arr[i][j].ru.upCase
          }</i></span>`,
        );
        langRu.insertAdjacentHTML(
          'beforeEnd',
          `<span class="capsLkLowCase off"><i>${
            arr[i][j].ru.capsLkLowCase || arr[i][j].ru.lowCase
          }</i></span>`,
        );
        key.appendChild(langRu);
        const langEn = document.createElement('span');
        langEn.classList.add('en');
        langEn.insertAdjacentHTML('afterBegin', `<span class="lowCase"><i>${arr[i][j].en.lowCase}</i></span>`);
        langEn.insertAdjacentHTML('beforeEnd', `<span class="upCase off"><i>${arr[i][j].en.upCase}</i></span>`);
        langEn.insertAdjacentHTML(
          'beforeEnd',
          `<span class="capsLkUpCase off"><i>${
            arr[i][j].en.capsLkUpCase || arr[i][j].en.upCase
          }</i></span>`,
        );
        langEn.insertAdjacentHTML(
          'beforeEnd',
          `<span class="capsLkLowCase off"><i>${
            arr[i][j].en.capsLkLowCase || arr[i][j].en.lowCase
          }</i></span>`,
        );
        key.appendChild(langEn);
        row.appendChild(key);
      }
      fragment.appendChild(row);
    }
    this.element.appendChild(fragment);
    wrapper.appendChild(this.element);
    document.body.appendChild(wrapper);
  }

  addActiveState() {
    this.current.element.classList.add('active');
  }

  removeActiveState() {
    if (this.current.element) {
      this.current.element.classList.remove('active');
    }
    if (this.previous.element && this.previous.element.classList.contains('active')
    && (this.previous.code === 'CapsLock' || this.previous.code === 'ShiftLeft' || this.previous.code === 'ShiftRight')) {
      this.previous.element.classList.remove('active');
    }
  }

  toggleCase() {
    const keys = this.element.querySelectorAll(`div >.${this.state.lang}`);
    for (let i = 0; i < keys.length; i += 1) {
      if (!keys[i].querySelectorAll('span')[0].classList.contains('off')) {
        keys[i].querySelectorAll('span')[0].classList.add('off');
      }
      if (!keys[i].querySelectorAll('span')[1].classList.contains('off')) {
        keys[i].querySelectorAll('span')[1].classList.add('off');
      }
      if (!keys[i].querySelectorAll('span')[2].classList.contains('off')) {
        keys[i].querySelectorAll('span')[2].classList.add('off');
      }
      if (!keys[i].querySelectorAll('span')[3].classList.contains('off')) {
        keys[i].querySelectorAll('span')[3].classList.add('off');
      }
      if ((this.state.isShiftLOn || this.state.isShiftROn) && this.state.isCapsLkOn) {
        keys[i].querySelectorAll('span')[3].classList.remove('off');
        this.state.case = 'capsLkLowCase';
      } else if (this.state.isCapsLkOn) {
        keys[i].querySelectorAll('span')[2].classList.remove('off');
        this.state.case = 'capsLkUpCase';
      } else if (this.state.isShiftLOn || this.state.isShiftROn) {
        keys[i].querySelectorAll('span')[1].classList.remove('off');
        this.state.case = 'upCase';
      } else {
        keys[i].querySelectorAll('span')[0].classList.remove('off');
        this.state.case = 'lowCase';
      }
    }
  }

  toggleLang() {
    const switcher = () => {
      const keys = this.element.querySelectorAll(`div > .${this.state.lang}`);
      for (let i = 0; i < keys.length; i += 1) {
        keys[i].classList.toggle('off');
        keys[i].querySelectorAll(`span.${this.state.case}`)[0].classList.toggle('off');
      }
    };
    switcher();
    if (this.state.lang === 'en') {
      this.state.lang = 'ru';
    } else {
      this.state.lang = 'en';
    }
    localStorage.setItem('lang', this.state.lang);
    switcher();
  }

  implementKeyFunction() {
    let text = this.textarea.value;
    const startPos = this.textarea.selectionStart;
    const textConstructor = () => {
      if (startPos >= 0 && startPos <= text.length) {
        this.textarea.value = text.slice(0, startPos)
        + this.current.letter + text.slice(startPos, text.length);
        this.textarea.selectionStart = startPos + this.current.letter.length;
        this.textarea.selectionEnd = startPos + this.current.letter.length;
      } else {
        this.textarea.value += this.current.letter;
      }
    };
    if (specialKeys.includes(this.current.code)) {
      switch (this.current.code) {
        case 'Backspace':
          if (startPos > 0 && startPos <= text.length) {
            text = text.slice(0, startPos - 1) + text.slice(startPos, text.length);
            this.textarea.value = text;
            this.textarea.selectionStart = startPos - 1;
            this.textarea.selectionEnd = startPos - 1;
          }
          break;
        case 'Delete':
          if (startPos >= 0 && startPos <= text.length - 1) {
            text = text.slice(0, startPos) + text.slice(startPos + 1, text.length);
            this.textarea.value = text;
            this.textarea.selectionStart = startPos;
            this.textarea.selectionEnd = startPos;
          }
          break;
        case 'Tab':
          this.current.letter = '    ';
          textConstructor();
          break;
        case 'Enter':
          this.current.letter = '\n';
          textConstructor();
          break;
        case 'CapsLock':
          if (this.state.isCapsLkOn && !this.current.event.repeat) {
            this.removeActiveState();
            this.state.isCapsLkOn = false;
          } else {
            this.addActiveState();
            this.state.isCapsLkOn = true;
          }
          this.toggleCase();
          break;
        case 'ShiftLeft':
          this.addActiveState();
          this.state.isShiftLOn = true;
          this.toggleCase();
          break;
        case 'ShiftRight':
          this.addActiveState();
          this.state.isShiftROn = true;
          this.toggleCase();
          break;
        default:
          break;
      }
    } else {
      textConstructor();
    }
    if (this.current.event.shiftKey && this.current.event.altKey) {
      this.toggleLang();
    }
  }

  keyDownHandler(event) {
    event.preventDefault();
    this.current.event = event;
    this.current.code = event.code;
    [this.current.element] = this.element.getElementsByClassName(event.code);
    if (this.current.element) {
      this.current.letter = this.current.element.querySelectorAll('span:not(.off)')[1].textContent;
      this.implementKeyFunction();
      if (this.current.code === 'MetaLeft') {
        this.addActiveState();
      } else if (!(this.current.code === 'CapsLock' || this.current.code === 'ShiftLeft' || this.current.code === 'ShiftRight')) {
        this.addActiveState();
      }
    }
  }

  keyUpHandler(event) {
    const key = this.element.getElementsByClassName(event.code)[0];
    this.current.element = key.closest('div');
    if (event.code !== 'CapsLock') {
      this.removeActiveState();
    }
    if (event.code === 'ShiftLeft') {
      this.state.isShiftLOn = false;
      this.removeActiveState();
    } else if (event.code === 'ShiftRight') {
      this.state.isShiftROn = false;
      this.removeActiveState();
    }
    this.toggleCase();
  }

  mouseDownHandler(event) {
    if (event.target.tagName === 'I') {
      this.current.event = event;
      this.current.element = event.target.closest('div');
      [, , this.current.code] = this.current.element.classList;
      this.current.letter = event.target.textContent;
      this.implementKeyFunction();
    }

    if (this.current.code !== 'CapsLock') {
      this.addActiveState();
      this.previous = { ...this.current };
      event.preventDefault();
    }
  }

  mouseUpHandler(event) {
    this.current.event = event;
    this.current.element = event.target.closest('div');
    if (this.current.element.classList.contains('key')) {
      [, , this.current.code] = this.current.element.classList;
    } else {
      this.current = { ...this.previous };
    }

    if (this.current.element && this.current.code !== 'CapsLock') {
      this.removeActiveState();
      if (this.state.isShiftLOn && this.current.code === 'ShiftLeft') {
        this.state.isShiftLOn = false;
        this.toggleCase();
      }
      if (this.state.isShiftROn && this.current.code === 'ShiftRight') {
        this.state.isShiftROn = false;
        this.toggleCase();
      }
    }
  }

  initLanguage() {
    if (localStorage.lang === 'ru') {
      this.toggleLang();
    }
  }

  createKeyboard(arr) {
    this.buildDocumentStructure(arr);
    this.initLanguage();
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    this.element.addEventListener('mousedown', this.mouseDownHandler.bind(this));
  }
}

const keyboard = new VirtualKeyboard();
keyboard.createKeyboard(keysArr);
