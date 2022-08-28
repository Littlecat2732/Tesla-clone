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

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

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
                    rightButton={t('main.section' + id + '.rightButton')}
                    leftButton={t('main.section' + id + '.leftButton')}
                />)
            )}
        </div>
    );
};

export default Tesla;