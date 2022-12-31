import { useCallback, useRef, useState } from 'react';

const useRafState = (initailState) => {
  const frame = useRef(0);
  const [state, setState] = useState(initailState);

  const setRafState = useCallback((value) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  return [state, setRafState];
};

export default useRafState;
