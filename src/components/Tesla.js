import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import '../i18n';
import Header from './Header';

function Tesla() {
    const { t, ready } = useTranslation();

    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        document.title = t('title');
        link.href = '/images/favicon.ico';
    }, [t]);

    if (!ready) return ('loading translations...');

    return (
        <div className='Tesla_Container'>
            <Header />
            {Object.keys(t('main', { returnObjects: true })).map((value, id) => (
                <Section
                    key={id}
                    bgImg={t('main.section' + id + '.bgImg')}
                    title={t('main.section' + id + '.title')}
                    description={t('main.section' + id + '.description')}
                />)
            )}
        </div>
    );
};

export default Tesla;