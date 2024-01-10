import '../../styles/global.css';
// import { Toaster } from 'react-hot-toast';
// import { wrapper } from 'src/redux/store';
// import { useEffect } from 'react';
// import { loadUserData } from 'src/redux/user/userActions';
// import { useStore } from 'react-redux';

function MyApp({ Component, pageProps }) {
  //   const store = useStore();

  //   useEffect(() => {
  //     loadUserData(store);
  //   }, []);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
