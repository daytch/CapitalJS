import React from 'react';
import Header from './layouts/headers';
import Footer from './layouts/footers';

function Application(props) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Application;