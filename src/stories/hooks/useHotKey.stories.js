import { useState } from 'react';
import useHotKey from '../../hooks/useHotKey';

export default {
  title: 'Hook/useHotKey',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const hotkeys = [
    {
      global: true,
      combo: 'ctrl+shift+k', //
      onKeyDown: (e) => {
        alert('ctrl+shift+k');
      },
    },
    {
      combo: 'esc', // ctrl+shift+k 도 가능
      onKeyDown: (e) => {
        alert('esc');
        setValue('');
      },
    },
  ];

  const { handleKeyDown } = useHotKey(hotkeys);

  return (
    <div>
      <div>hotkeys 테스트</div>
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
