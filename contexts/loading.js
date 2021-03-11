import { createContext, useState } from 'react';

const store = createContext();
const { Provider } = store;

function LoadingProvider({ children }) {
  const [load, setLoad] = useState(false);

  return (
    <Provider
      value={{
        load,
        setLoad
      }}>
      {children}
    </Provider>
  );
}

const LoadingContext = {
  store,
  LoadingProvider
};

export default LoadingContext;
