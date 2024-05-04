import React, { ReactNode } from 'react';
import Navigation from '../Navigation'; // Make sure you have a Navbar component
// import Footer from './Footer';  // Make sure you have a Footer component

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
      {/*<Footer />*/}
    </>
  );
};

export default Layout;
