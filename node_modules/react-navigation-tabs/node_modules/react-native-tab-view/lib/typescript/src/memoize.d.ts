export default function memoize<Result, Deps extends ReadonlyArray<any>>(callback: (...deps: Deps) => Result): (...dependencies: Deps) => Result;
