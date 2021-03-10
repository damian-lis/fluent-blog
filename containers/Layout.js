import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <main className="min-h-screen">{children}</main>
      </div>
      <Footer />
    </>
  );
};
