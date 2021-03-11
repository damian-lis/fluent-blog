import LoadingContext from 'contexts/loading';
import 'styles/index.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
  return (
    <LoadingContext.LoadingProvider>
      <Component {...pageProps} />
    </LoadingContext.LoadingProvider>
  );
}

export default MyApp;
