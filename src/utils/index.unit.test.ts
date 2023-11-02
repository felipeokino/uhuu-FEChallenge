import { removeExtension, formatImageUrl } from '.';

test.each([
  [ 'abc.jpg', 'abc' ],
  [ 'abc.svg', 'abc' ],
  [ 'abc.png', 'abc' ],
  [ 'abcjpg.jpg', 'abcjpg' ],
  [ 'abcjpg', 'abcjpg' ]
])(
  'given %p as arguments, returns %p',
  (firstArg: string, expectedResult: string) => {
    const result = removeExtension(firstArg);
    expect(result).toEqual(expectedResult);
  }
);

test.each([
  [ 'abc.jpg', 'https://image.tmdb.org/t/p/original/abc.svg' ],
  [ 'abcjpg', 'https://image.tmdb.org/t/p/original/abcjpg.svg' ],
  [ 'abc.png', 'https://image.tmdb.org/t/p/original/abc.svg' ],
  [ 'abc.svg', 'https://image.tmdb.org/t/p/original/abc.svg' ]
])(
  'given %p as arguments, returns %p',
  (firstArg: string, expectedResult: string) => {
    const result = formatImageUrl(firstArg);
    expect(result).toEqual(expectedResult);
  }
);

