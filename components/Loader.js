import { useContext, useEffect, useState } from 'react';
import LoadingContext from 'contexts/loading';

export default () => {
  const { load } = useContext(LoadingContext.store);
  const [showInfo, setShowInfo] = useState(false);
  let timeoutIndex;
  const time = 2000;

  useEffect(() => {
    if (load) {
      document.body.style.overflow = 'hidden';
      timeoutIndex = setTimeout(() => {
        setShowInfo(true);
      }, time);
    } else {
      setShowInfo(false);
      clearTimeout(timeoutIndex);
      document.body.style.overflow = 'auto';
    }
  }, [load]);

  return (
    load && (
      <div className=" flex flex-col justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-60 fixed z-20 overflow-hidden">
        <div className="object-center loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        <p className="mt-4 text-lg leading-relaxed text-white">Wczytuję artykuł...</p>
        {showInfo && (
          <p className="px-5 text-center mt-1 text-lg leading-relaxed text-white">
            Strona ładuje się dłuzej niz zwyklę... Prosimy o cierpliwość!
          </p>
        )}
      </div>
    )
  );
};
