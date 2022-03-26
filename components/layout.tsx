import Meta from './meta';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Meta />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
