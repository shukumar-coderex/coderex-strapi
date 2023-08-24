import parse from 'html-react-parser';
import { GET_FAQS_PAGE } from '../src/queries/pages/get-page';
import client from '../src/apollo/client';
import { handleRedirectsAndReturnData } from '../src/utils/slug';
import FaqsHero from '../src/components/FaqsHero';
import FaqsContent from '../src/components/FaqsContent';
import Layout from '../src/components/layout';
import CallToAction from '../src/components/CallToAction';

export default function About( { data } ) {
  let { page, siteCta } = data,
    { hero, contentArea } = page.faqs;
  return (
    <Layout data={data}>
      <FaqsHero content={hero} />
      <FaqsContent content={contentArea} />
      <CallToAction cta={siteCta}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, errors } = await client.query( {
    query: GET_FAQS_PAGE,
    variables: {
      uri: '/faqs',
    },
  } );

  const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
  return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}
