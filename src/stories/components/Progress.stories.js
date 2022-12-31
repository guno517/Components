import Progress from '../../components/Progress';
import { useState } from 'react';

export default {
  title: 'Component/Progress',
  component: Progress,
};

export const Default = (args) => {
  const [value, setValue] = useState(20);
  return (
    <div>
      <button onClick={() => setValue(value + 10)}>
        change value
      </button>
      <Progress value={value} />
    </div>
  );
};
