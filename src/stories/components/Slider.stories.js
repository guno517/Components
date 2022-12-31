import Slider from '../../components/Slider';
import Spacer from '../../components/Spacer';
import Icon from '../../components/Icon';
export default {
  title: 'Component/Slider',
  component: Slider,
  argTypes: {
    defaultValue: { defaultValue: 1, control: 'number' },
    min: { defaultValue: 1, control: 'number' },
    max: { defaultValue: 100, control: 'number' },
    step: { defaultValue: 0.1, control: 'number' },
    onChange: { action: 'onChange' },
  },
};

export const Default = (args) => {
  return <Slider {...args} />;
};

export const VolumeControl = () => {
  return (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ width: 100, display: 'inline-block' }} />
      <Icon name="volume-2" />
    </Spacer>
  );
};
