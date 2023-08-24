import client from '../../src/apollo/client';
import Layout from '../../src/components/layout';
import { isEmpty } from 'lodash';
import HomeHero from '../../src/components/HomeHero';
import { GET_HOME_PAGE } from '../../src/queries/pages/get-page';
import { GET_PAGE_SLUGS } from '../../src/queries/pages/get-page';
import { GET_PORTFOLIO } from '../../src/queries/portfolio/get-portfolio';
import { FALLBACK, handleRedirectsAndReturnData } from '../../src/utils/slug';
import CaseStudyHero from '../../src/components/CaseStudyHero';
import CaseStudyOverview from '../../src/components/CaseStudyOverview';
import CaseStudyLaptopView from '../../src/components/CaseStudyLaptopView';
import CaseStudyWebsiteOverview from '../../src/components/CaseStudyWebsiteOverview';
import CaseStudyCompare from '../../src/components/CaseStudyCompare';
import CaseStudyMobileView from '../../src/components/CaseStudyMobileView';
import CaseStudySpecialFeature from '../../src/components/CaseStudySpecialFeature';
import CaseStudyHighlight from '../../src/components/CaseStudyHighlight';
import CaseStudyOptimization from '../../src/components/CaseStudyOptimization';
import CaseStudyBrand from '../../src/components/CaseStudyBrand';
import RelatedProject from '../../src/components/RelatedProject';
import CallToAction from '../../src/components/CallToAction';

export default function Home( { data } ) {
  let { page, siteCta, socialLinks} = data,
    { caseStudy } = page?.template || {};
  return (
    <Layout data={data}>
      <CaseStudyHero content={caseStudy?.heroSection} socialLinks={socialLinks} />
      <CaseStudyOverview content={caseStudy?.caseStudyOverview} />
      <CaseStudyLaptopView content={caseStudy?.laptopView} />
      <CaseStudyWebsiteOverview content={caseStudy?.websiteOverview} />
      <CaseStudyCompare content={caseStudy?.websiteCompare} />
      <CaseStudyMobileView content={caseStudy?.mobileView} />
      <CaseStudySpecialFeature content={caseStudy?.specialFeature} />
      <CaseStudyHighlight content={caseStudy?.sectionHighlight} />
      <CaseStudyOptimization content={caseStudy?.optimization} />
      <CaseStudyBrand content={caseStudy?.branding} />
      <RelatedProject content={caseStudy?.relatedProject} />
      <CallToAction cta={siteCta} />
    </Layout>
  );
}

export async function getStaticProps( { params } ) {
  const { data, errors } = await client.query( {
    query: GET_PORTFOLIO,
    variables: {
      uri: `portfolio/${params?.portfolioSlug }` ?? '/',
    },
  } );
  const defaultProps = {
    props: {
      data: data || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
  return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}

/**
 * Since the page name 'does not' use catch-all routes,
 * for example [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 * For example, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export async function getStaticPaths() {
  const { data } = await client.query( {
    query: GET_PAGE_SLUGS,
  } );

  const pathsData = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map( ( post ) => {
      if ( ! isEmpty( post?.slug ) ) {
        pathsData.push( { params: { portfolioSlug: post?.slug } } );
      }
    } );

  return {
    paths: pathsData,
    fallback: FALLBACK,
  };
}

