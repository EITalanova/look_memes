import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
      <Header>
        {children}
      </Header>;
  )
};

export default Layout;
