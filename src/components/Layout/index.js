import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col p-4 lg:p-6 justify-between min-h-screen">
      <div className="p-4 lg:p-6 absolute w-screen top-0 left-0 z-10">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
