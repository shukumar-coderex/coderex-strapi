import { GET_PRIVACY_POLICY_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slug';
import client from '../src/apollo/client';
import PrivacyPolicyHero from '../src/components/PrivacyPolicyHero';
import PrivacyPolicyContent from '../src/components/PrivacyPolicyContent';
import Layout from '../src/components/layout';
import CallToAction from '../src/components/CallToAction';

export default function About( {data} ) {
    const {page, siteCta, socialLinks} = data,
    {content, hero} = page.privacyPolicy;

  return (
    <Layout data={data}>
      <PrivacyPolicyHero content={hero} social= {socialLinks}/>
      <PrivacyPolicyContent content={content} />
      <CallToAction cta={siteCta} />
    </Layout>
  );
}

export async function getStaticProps() {
    const { data, errors } = await client.query( {
      query: GET_PRIVACY_POLICY_PAGE,
      variables: {
        uri: '/privacy-policy',
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


