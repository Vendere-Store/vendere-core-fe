import React, {ReactNode} from 'react';
import Navigation from '../Navigation';  // Make sure you have a Navbar component
// import Footer from './Footer';  // Make sure you have a Footer component

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            {/*<Footer />*/}
        </>
    );
};

export default Layout;
