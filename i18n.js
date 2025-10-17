module.exports = {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localePath: './src/locales', // Add './' prefix
    pages: {
        '*': ['common']
    },
    loadLocaleFrom: (lang, ns) => {
        return import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default)
    },
    logger: true, // Enable logging to debug
    loggerEnvironment: 'development',
};