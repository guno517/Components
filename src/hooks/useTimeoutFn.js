// 1. 함수 호출을 통한 벙법
// 2. 컴포넌트가 로딩 된 후 바로 실행되는 방법

import { useCallback, useEffect, useRef } from 'react';

const useTimeoutFn = (fn, ms) => {
  const timeoutId = useRef();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]); // 안하면 timeout이 남아서 무언가? 실행될수있다

  return [run, clear];
};

export default useTimeoutFn;
