import React, {Fragment} from 'react';
import Head from 'next/head';
import Page404 from '../src/components/Page404';


export default function FourOhFour() {
  return (
    <Fragment>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="utf-8" />
          <title>No page found - Code Rex</title>
      </Head>
      <Page404/>
    </Fragment>
  );
}
