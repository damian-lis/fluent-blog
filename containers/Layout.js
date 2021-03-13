import { Navbar, Footer, Loader, BtnTopScroll } from 'components';

export default ({ children }) => {
  return (
    <>
      <Loader />
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="h-16 bg-red-200"></div>
        <main className="min-h-screen ">{children}</main>
      </div>
      <Footer />
      <BtnTopScroll />
    </>
  );
};
