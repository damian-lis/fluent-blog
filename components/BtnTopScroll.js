import { useEffect, useState } from 'react';

export default function BtnTopScroll() {
  const [isShow, setIsShow] = useState(false);
  const [isFooter, setIsFooter] = useState(false);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSetFooter = () =>
    window.innerHeight + window.scrollY + 25 >= document.body.offsetHeight
      ? setIsFooter(true)
      : setIsFooter(false);

  const handleShowScrollBtn = () => (window.scrollY > 200 ? setIsShow(true) : setIsShow(false));

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleSetFooter();
      handleShowScrollBtn();
    });
  }, []);

  return (
    <div
      className={` ${
        isShow ? (isFooter ? 'bottom-20' : 'bottom-10') : '-bottom-20'
      } transition-all  mx-auto fixed  w-full`}>
      <div className="relative  max-w-5xl mx-auto">
        <button
          onClick={handleScrollToTop}
          className="focus:outline-none bg-yellow-300 p-7 absolute right-5 bottom-0 h-3 w-3 rounded-full flex justify-center items-center  ml-auto text-2xl text-blue-900 bg-opacity-90 cursor-pointer">
          <i className="fas fa-arrow-up "></i>
        </button>
      </div>
    </div>
  );
}
