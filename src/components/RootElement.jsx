// src/components/root-element.js

import React, { Fragment } from 'react';
import { Script } from 'gatsby';

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script
        id="gtag-config"
        strategy="off-main-thread"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', '${process.env.GA_ID}', { send_page_view: false })`
        }}
      />
      <div>{children}</div>
    </Fragment>
  );
};

export default RootElement;