import React, { useState } from 'react';
import Form from './Form';
import ElencoArticles from './ElencoArticles';

const Main = () => {
  return (
    <>
      <main>
        <Form />
        <ElencoArticles />
      </main>
    </>
  );
};

export default Main;
