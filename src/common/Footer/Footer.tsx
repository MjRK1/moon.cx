import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-info__community-info">
          <div className="community-info__title">
            Our community
          </div>
          <div className="community-info__networks-list">
            <div className="networks-list__xtwitter-icon">
              <i className="moon-cx moon-cx-xwitter" />
            </div>
            <div className="networks-list__telegram-icon">
              <i className="moon-cx moon-cx-telegram" />
            </div>
          </div>
        </div>
        <div className="footer-info__app-info">
          <div className="app-info__title">
            App
          </div>
          <div
            className="app-info__trade-link"
            onClick={() => navigate('/trade')}
          >
            Trade
          </div>
          <div
            className="app-info__pools-link"
            onClick={() => navigate('/pools')}
          >
            Pools
          </div>
        </div>
        <div className="footer-info__developers-info">
          <div className="developers-info__info-title">
            Developers
          </div>
          <div className="developers-info__links">
            <div className="developers-info__listing-link">
              Listing
            </div>
            <div className="developers-info__listing-link">
              Github
            </div>
            <div className="developers-info__listing-link">
              Documentation
            </div>
          </div>
        </div>
      </div>
      <div className="footer-locale">
        <div className="footer-locale__locale-buttons">
          <div className="footer-locale__icon">
            <i className="moon-cx moon-cx-locale" />
          </div>
          <div className="footer-locale__current-lang">
            EN
          </div>
        </div>
      </div>
    </div>
  );
};
