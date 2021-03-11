import LoadingContext from 'contexts/loading';
import 'styles/tailwind.css';
import 'styles/index.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

function MyApp({ Component, pageProps }) {
  return (
    <LoadingContext.LoadingProvider>
      <Component {...pageProps} />
    </LoadingContext.LoadingProvider>
  );
}

export default MyApp;
