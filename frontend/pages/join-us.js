import $ from 'jquery';
import { Component } from 'react';
import Layout from '../src/components/layout';
import { GET_JOINUS_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slug';
import client from '../src/apollo/client';
import CareerHero from '../src/components/CareerHero';
import CoderexFacts from '../src/components/CoderexFacts';
import AboutCoderex from '../src/components/AboutCoderex';
import JoinCoderex from '../src/components/JoinCoderex';
import ServiceClients from '../src/components/ServiceClients';
import WorkApproach from '../src/components/WorkApproach';
import PerksBenefits from '../src/components/PerksBenefits';
import Family from '../src/components/Family';
import JobSection from '../src/components/JobSection';
import CallToAction from '../src/components/CallToAction';

export default class teamPage extends Component {
  componentDidMount() {
    $( '.goto-jobs' ).on( 'click', function () {
      $( 'html, body' ).animate(
        {
          scrollTop: $( '#coderex-jobs' ).offset().top,
        },
        1000
      );
    } );
  }
  render() {
    const { data} = this.props,

    {siteCta} = data,
      {
        careerBanner,
        coderexFacts,
        aboutCoderex,
        coderexOverview,
        servicesAndProducts,
        workApproach,
        perksBenefits,
        coderexFamily,
        jobSection,
      } = data.page.careerPage;

    return (
      <Layout data={data} containerClassNames='join-us'>
        <CareerHero content={careerBanner} />
        <CoderexFacts content={coderexFacts} />
        <AboutCoderex content={aboutCoderex} />
        <JoinCoderex content={coderexOverview} />
        <ServiceClients content={servicesAndProducts} />
        <WorkApproach content={workApproach} />
        <PerksBenefits content={perksBenefits} />
        <Family content={coderexFamily} />
        <JobSection content={jobSection} />
        <CallToAction cta={siteCta} />
      </Layout>
    );
  }
}

export async function getStaticProps() {
  const { data, errors } = await client.query( {
    query: GET_JOINUS_PAGE,
    variables: {
      uri: '/join-us',
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
