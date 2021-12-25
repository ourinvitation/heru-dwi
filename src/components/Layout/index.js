import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/agung-hana.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, untuk membentuk rumah tangga. Kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Agung ❤️ Hana Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Pernikahan Agung & Hana" />
        <meta property="og:url" content="https://bit.ly/AgungHana2021" />
        <meta property="og:site_name" content="Pernikahan Agung & Hana" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="Pernikahan Agung & Hana" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:url" content="https://bit.ly/AgungHana2021" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idindrakusuma" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
