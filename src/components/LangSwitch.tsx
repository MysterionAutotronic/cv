import { useRouter } from 'next/router';

const LangSwitch = () => {
    const router = useRouter();
    const { asPath, locale } = router;
    const nextLocale = locale === 'de' ? 'en' : 'de';

    const switchLang = () => {
        router.push(asPath, asPath, { locale: nextLocale });
    };

    return (
        <button onClick={switchLang}>
        {nextLocale === 'de' ? 'Deutsch' : 'English'}
        </button>
    );
};

export default LangSwitch;
