export default {
  equivalencies: {
    '!': ['\uff01'],
    '.': ['\u0964', '\u104b', '\u3002'],
    '?': ['\uff1f'],
    '\u2026': ['\u0e2f', '\u0eaf', '\u1801'],
  },
  redundancies: {
    '!': ['!', '?', '.'],
    '.': ['.', '!'],
    '?': ['?', '.', '!', '\u2026'],
    '\u2026': ['\u2026', '.', '!'],
  },
} as const;