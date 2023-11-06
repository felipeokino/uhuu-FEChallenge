import { removeExtension, formatImageUrl, transformDateToSimpleMonth } from '.';

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
  [ 'abc.jpg', 'https://image.tmdb.org/t/p/original/abc.jpg' ],
  [ 'abcjpg', 'https://image.tmdb.org/t/p/original/abcjpg.jpg' ],
  [ 'abc.png', 'https://image.tmdb.org/t/p/original/abc.jpg' ],
  [ 'abc.svg', 'https://image.tmdb.org/t/p/original/abc.jpg' ]
])(
  'given %p as arguments, returns %p',
  (firstArg: string, expectedResult: string) => {
    const result = formatImageUrl(firstArg);
    expect(result).toEqual(expectedResult);
  }
);

test.each([
  [ '2019-12-01', '01 DEZ 2019' ],
  [ '2019-11-01', '01 NOV 2019' ],
  [ '2019-10-01', '01 OUT 2019' ],
  [ '2019-09-01', '01 SET 2019' ],
  [ '2019-08-01', '01 AGO 2019' ],
  [ '2019-07-01', '01 JUL 2019' ],
  [ '2019-06-01', '01 JUN 2019' ],
  [ '2019-05-01', '01 MAI 2019' ],
  [ '2019-04-01', '01 ABR 2019' ],
  [ '2019-03-01', '01 MAR 2019' ],
  [ '2019-02-01', '01 FEV 2019' ],
  [ '2019-01-01', '01 JAN 2019' ],
])(
  'given %p as arguments, returns %p',
  (firstArg: string, expectedResult: string) => {
    const result = transformDateToSimpleMonth(firstArg);
    expect(result).toEqual(expectedResult);
  }
);

