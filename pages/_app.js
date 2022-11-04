import { UserContext } from '../context/UserContext'
import '../styles/globals.css';
import '../styles/tailwind.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// const store = configureStore(reducers, compose(applyMiddleware(thunk)));

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
    // </Provider>
  )
}

export default MyApp
