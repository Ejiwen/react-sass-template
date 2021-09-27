import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Hello From Here</h1>
      {children}
      <h3 id="footer">Bay !!!</h3>
    </div>
  );
};

export default Layout;
