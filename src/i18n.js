// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        initImmediate: false, // 确保语言在初始化前设置完成
        backend: {
            // 修正路径以匹配 public/locles 下的语言文件
            loadPath: '/locles/{{lng}}.json',
        },
        lng: 'zh',
        fallbackLng: 'zh',
        keySeparator: false, // 允许使用整句作为 key，例如中文短语
        interpolation: {
            escapeValue: false,
        },
    });
// ✅ 当语言变化时，同步到 <html lang="">
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});


export default i18n;
