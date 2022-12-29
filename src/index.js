import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// * Translations
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import trans_es from './translations/es.json';
import trans_en from './translations/en.json';
import trans_personal from './translations/personal.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: trans_en,
      personal: trans_personal
    },
    es: {
      global: trans_es
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
