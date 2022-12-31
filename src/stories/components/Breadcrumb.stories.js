import Breadcrumb from '../../components/Breadcrumb';

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Lv1</Breadcrumb.Item>
      <Breadcrumb.Item>Lv2</Breadcrumb.Item>
    </Breadcrumb>
  );
};
