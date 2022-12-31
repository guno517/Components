import Menu from '../domain/Menu';

const DefaultTemplate = ({ children }) => {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default DefaultTemplate;
