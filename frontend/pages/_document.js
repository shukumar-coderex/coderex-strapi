import Document, { Head, Main, NextScript, Html } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          {/* Start of HubSpot Embed Code */}
          <script id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/22363508.js"></script>
          {/* End of HubSpot Embed Code */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
