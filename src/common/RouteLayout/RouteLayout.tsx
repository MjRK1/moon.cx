import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'common/Footer';

export const RouteLayout = () => {

  return (
    <div className="route-layout">
      Header
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}