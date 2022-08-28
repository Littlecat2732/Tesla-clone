import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/en.json';
import tw from './assets/zh-TW.json';

const resources = {
    en: {
        translation: en,
    },
    'zh-TW': {
        translation: tw,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-TW',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;