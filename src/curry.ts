export type Curried1<A, RET> = {
  (): Curried1<A, RET>;
  (a: A): RET;
};

export type Curried2<A, B, RET> = {
  (): Curried2<A, B, RET>;
  (a: A): Curried1<B, RET>;
  (a: A, b: B): RET;
};

export type Curried3<A, B, C, RET> = {
  (): Curried3<A, B, C, RET>;
  (a: A): Curried2<B, C, RET>;
  (a: A, b: B): Curried1<C, RET>;
  (a: A, b: B, c: C): RET;
};

export type Curried4<A, B, C, D, RET> = {
  (): Curried4<A, B, C, D, RET>;
  (a: A): Curried3<B, C, D, RET>;
  (a: A, b: B): Curried2<C, D, RET>;
  (a: A, b: B, c: C): Curried1<D, RET>;
  (a: A, b: B, c: C, d: D): RET;
};

export type Curried5<A, B, C, D, E, RET> = {
  (): Curried5<A, B, C, D, E, RET>;
  (a: A): Curried4<B, C, D, E, RET>;
  (a: A, b: B): Curried3<C, D, E, RET>;
  (a: A, b: B, c: C): Curried2<D, E, RET>;
  (a: A, b: B, c: C, d: D): Curried1<E, RET>;
  (a: A, b: B, c: C, d: D, e: E): RET;
};

export type CurryN = {
  <A, B, C, D, E, RET>(arity: 1, fn: (a: A) => RET): Curried1<A, RET>;
  <A, B, C, D, E, RET>(arity: 2, fn: (a: A, b: B) => RET): Curried2<A, B, RET>;
  <A, B, C, D, E, RET>(arity: 3, fn: (a: A, b: B, c: C) => RET): Curried3<
    A,
    B,
    C,
    RET
  >;
  <A, B, C, D, E, RET>(arity: 4, fn: (a: A, b: B, c: C, d: D) => RET): Curried4<
    A,
    B,
    C,
    D,
    RET
  >;
  <A, B, C, D, E, RET>(
    arity: 5,
    fn: (a: A, b: B, c: C, d: D, e: E) => RET,
  ): Curried5<A, B, C, D, E, RET>;
};

export type Curry = {
  <A, RET>(fn: (a: A) => RET): Curried1<A, RET>;
  <A, B, RET>(fn: (a: A, b: B) => RET): Curried2<A, B, RET>;
  <A, B, C, RET>(fn: (a: A, b: B, c: C) => RET): Curried3<A, B, C, RET>;
  <A, B, C, D, RET>(fn: (a: A, b: B, c: C, d: D) => RET): Curried4<
    A,
    B,
    C,
    D,
    RET
  >;
  <A, B, C, D, E, RET>(fn: (a: A, b: B, c: C, d: D, e: E) => RET): Curried5<
    A,
    B,
    C,
    D,
    E,
    RET
  >;
};

const curryN: CurryN = <ARGS extends Array<any>>(
  arity: 1 | 2 | 3 | 4 | 5,
  fn: (...args: ARGS) => any,
) => {
  const hasAllArgs = (args: Array<any>): args is ARGS => args.length >= arity;
  const curriedFn = (...args: Array<any>) => {
    if (hasAllArgs(args)) {
      return fn(...args);
    }
    return (...moreArgs: Array<any>) => curriedFn(...args, ...moreArgs);
  };
  return curriedFn;
};

const curry: Curry = <ARGS extends Array<any>, RETURN>(
  fn: (...args: ARGS) => RETURN,
) => {
  return curryN(fn.length as any, fn as any);
};

export {curryN};
export default curry;
