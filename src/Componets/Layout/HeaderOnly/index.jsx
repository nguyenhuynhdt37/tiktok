import Header from '~/Componets/Layout/Componets/Header';
import React from 'react';

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default HeaderOnly;
