import React from 'react';
import { motion } from 'motion/react';
import { Button } from 'commonComponents/Button';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
  const navigator = useNavigate();
  const navigationTabs = [
    {
      id: 1,
      name: 'trade',
      title: 'Trade',
      path: '/trade'
    },
    {
      id: 2,
      name: 'pools',
      title: 'Pools',
      path: '/pools'
    },
    {
      id: 3,
      name: 'github',
      title: 'Github',
      path: '/github'
    },
    {
      id: 4,
      name: 'documentation',
      title: 'Documentation',
      path: '/documentation'
    },

  ];

  return (
    <div className="header">
      <div className="header__logo">
        <div className="logo-icon">
          <i className="moon-cx moon-cx-moon-icon" />
        </div>
        <div className="logo-title">
          Moon.cx
        </div>
      </div>
      <div className="header__header-navigation">
        {navigationTabs.map((tab) => (
          <motion.div
            key={tab.id}
            className="header-navigation__navigation-tab"
            onClick={() => navigator(tab.path)}
          >
            <div
              className={cn('navigation-tab__title', {
                "navigation-tab__title--active": window.location.pathname === tab.path
              })}
            >
              {tab?.title}
            </div>
            {window.location.pathname === tab.path && (
              <motion.div layoutId="underline" layout className="navigation-tab__active-underline" />
            )}
            {window.location.pathname !== tab.path && (
              <div className="navigation-tab__inactive-underline" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="header__header-connect-wallet">
        <div className="header-connect-wallet__locale">
          <i className="moon-cx moon-cx-locale" />
        </div>
        <Button
          className="header-connect-wallet__connect-wallet-btn"
          theme="connect"
        >
          <div className="connect-wallet-btn__icon">
            <i className="moon-cx moon-cx-connect-wallet" />
          </div>
          <div className="connect-wallet-btn__title">
            Connect Wallet
          </div>
        </Button>
      </div>
    </div>
  );
};
