import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'
import en from './locales/en.json';
import az from './locales/az.json';

i18n.use(initReactI18next).init({
    resource: {
        en: {
            translation: en,
        },
        az: {
            translation: az,
        },
    },
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;