import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import GlobalStyle from './Styles/globalStyle';
import { LoadingProvider } from './containers/Loading/LoadingContext';




 ReactDOM.render( <LoadingProvider> <Routes/> <GlobalStyle/>  </LoadingProvider>, document.getElementById('root'));
 
 
