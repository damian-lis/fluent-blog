import { useContext, useEffect } from 'react';
import LoadingContext from 'contexts/loading';

export default () => {
  const { load } = useContext(LoadingContext.store);

  useEffect(() => {
    if (load) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    load && (
      <div className=" flex flex-col justify-center items-center h-screen w-screen bg-blue-900 bg-opacity-60 absolute z-10 overflow-hidden">
        <div className="object-center loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        <p className="mt-4 text-lg leading-relaxed text-white">Wczytuję artykuł...</p>
      </div>
    )
  );
};
