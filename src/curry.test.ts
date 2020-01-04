import curry, {curryN} from './curry';

describe('curryN', () => {
  test('curries a function with $n params', () => {
    const sum = (a: number, b: number) => a + b;
    expect(sum(1, 1)).toBe(2);
    const curriedSum = curryN(2, sum);
    const add1 = curriedSum(1);
    expect(add1(1)).toBe(2);
    expect(add1(2)).toBe(3);
    expect(add1(5)).toBe(6);
  });
});

describe('curry', () => {
  test('curries any function based on function.length', () => {
    const joinThree = (a: number, b: number, c: number) => [a, b, c].join(';');
    expect(joinThree(1, 2, 3)).toBe('1;2;3');
    const curriedJoinThree = curry(joinThree);
    expect(typeof curriedJoinThree()).toBe('function');
    expect(typeof curriedJoinThree(1)).toBe('function');
    expect(typeof curriedJoinThree(1, 2)).toBe('function');
    expect(curriedJoinThree(1, 2, 3)).toBe('1;2;3');
  });
});
