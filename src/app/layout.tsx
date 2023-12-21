import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio'
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Navbar />
        <main className="app">

          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;