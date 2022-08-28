import React, { useState } from 'react'
import '../i18n';
import { useTranslation } from 'react-i18next';
import './Header.css';
import CloseIcon from "@mui/icons-material/Close";

function Header() {
    const { t, i18n, ready } = useTranslation();
    const [openMenu, setOpenMenu] = useState(false);

    if (!ready) return ('loading translations...');

    return (
        <div className='Header_Container'>
            <a href="/#">
                <img src='/images/logo.svg' alt="Tesla logo" />
            </a>
            <div className='Header_Menu'>
                {
                    Object.keys(t('header.menu', { returnObjects: true })).map((value, id) => (
                        <div key={id}>
                            <a href="/#">{t('header.menu.option' + id)}</a>
                        </div>
                    ))
                }
            </div>
            <div className='Header_RightMenu'>
                {
                    Object.keys(t('header.rightmenu', { returnObjects: true })).map((value, id) => (
                        id === 2 ? (
                            <div key={id}
                                onClick={() => { setOpenMenu(true) }}>
                                <a href="/#">{t('header.rightmenu.option' + id)}</a>
                            </div>
                        ) : (
                            <div key={id}>
                                <a href="/#">{t('header.rightmenu.option' + id)}</a>
                            </div>
                        )
                    ))
                }
            </div>

            {openMenu &&
                <div className='Header_Nav'>
                    <div className='Header_Item'>
                        <CloseIcon className='Header_CloseIcon' onClick={() => { setOpenMenu(false) }} />
                        {
                            Object.keys(t('header.nav', { returnObjects: true })).map((value, id) => (
                                <div key={id}>
                                    <a href="/#">{t('header.nav.option' + id)}</a>
                                </div>
                            ))
                        }
                        <div onClick={() => i18n.changeLanguage("zh-TW")}>繁體中文</div>
                        <div onClick={() => i18n.changeLanguage("en")}>English</div>
                    </div>
                </div>
            }
        </div >
    );
};

export default Header;