import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'common/Footer';
import { Header } from 'common/Header';

export const RouteLayout = () => {
  return (
    <div className="route-layout">
      <header>
        <Header />
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
