import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import LocizeEditor from 'locize-editor';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule,I18nextProvider } from 'react-i18next';


i18n
  .use(LocizeBackend)
  .use(LocizeEditor)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    appendNamespaceToCIMode: true,
    saveMissing: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,
    keySeparator: '### not used ###', // we use content as keys

    backend: {
      projectId: '07f4122b-cda6-44b5-a85b-fb6c1827e9dd', // <-- replace with your projectId
      apiKey: '7e8694c0-b6ad-44cf-94ac-ddb85a149cae',
      referenceLng: 'en'
    },

    interpolation: {
      //escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    },

    react: {
      wait: true
    }
  });


export default i18n;
