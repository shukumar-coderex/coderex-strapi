import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import {HeaderFooter} from "../get-menus";
import SeoFragment from "../fragments/seo";
import AnalyticsFragment from "../fragments/analytics";

export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
      ${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
		seo {
			...SeoFragment
		}
	  }
	}
	${MenuFragment}
`;



export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
		status
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;


export const GET_HOME_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
	id
	title
	content
	slug
	uri
	seo {
        ...SeoFragment
    }
	home {
		hero {
		  description
		  backgroundImage {
			sourceUrl
		  }
		  buttonText
		  buttonUrl {
			url
		  }
		  images {
			image1 {
			  sourceUrl
			}
			image2 {
			  sourceUrl
			}
			image3 {
			  sourceUrl
			}
		  }
		  heading
		}


		introduction {
		  image {
			sourceUrl
		  }
		  description
		  heading
		  buttonText
		  buttonUrl {
			url
		  }
		}

		coderexWorkProcess {
		  heading
		  stepOneTitle
		  stepTwoTitle
		  stepThreeTitle
		  buttonText
		  buttonLink {
			url
		  }
		}


		benefits {
		  heading
		  image {
			sourceUrl
		  }
		  singleBenefit {
			icon {
			  sourceUrl
			}
			title
			description
		  }
		  buttonText
		  buttonLink {
			target
			url
		  }
		}

		ourFeatures {
		  heading
		  description
		  features {
			heading
			description
			image {
			  sourceUrl
			}
		  }
		  buttonText
		  buttonLink {
			url
		  }
		}

		clientShowcase {
		  sectionTitle
		  clients {
			clientLogo {
			  sourceUrl
			}
		  }
		}

		testimonial {
		  heading
		  testimonials {
			videoUrl
			authorName
			authorImage {
			  sourceUrl
			}
		  }
		}

		coderexAim {
		  leftImage {
			sourceUrl
		  }
		  rightImage {
			sourceUrl
		  }
		  heading
		  description
		  buttonText
		  buttonLink {
			url
		  }
		}

		caseStudySlider {
		  title
		  description
		  sliderContent {
			image {
			  sourceUrl
			}
			title
			description
			buttonText
			buttonLink {
			  url
			}
		  }
		}
		
		pricing {
		  description
		  heading 
		  pricePackage1Title
		  pricePackage2Title
		  enablePriceSwitcher
		  singlePricing {
		
			popularPlan
			planTitle
			time
			features {
			  featureTitle
			}
			price
			duration
			buttonText
			buttonLink {
			 url
			}
			planImage {
			  sourceUrl
			}
		  }
		  juniorDeveloper {
			time
			price
			popularPlan
			planTitle
			planImage {
			 sourceUrl
			}
		
			features {
			 featureTitle
			}
			duration
			buttonText
			buttonLink {
			 url
			}
		  }
		}
		providedServices {
		  heading
		  subHeading
		  image {
			sourceUrl
		  }
		  serviceList {
			serviceTitle
		  }
		  buttonText
		  buttonLink {
			target
			url
		  }
		}

	  }
  	}
	}
	${MenuFragment}
	${SeoFragment}
`;


export const GET_ABOUT_PAGE = gql`
	query GET_PAGE($uri: String) {
	${HeaderFooter}
	page: pageBy(uri: $uri) {
		id
		title
		content
		slug
		uri
		seo {
			...SeoFragment
		}
		about {
			heroSection {
			heading
			welcomeImage {
				sourceUrl
			}
			}
			overviewSection {
			buttonText
			buttonLink {
				target
				title
				url
			}
			verticalText
			description
			heading
			}
			features {
			featureDetails1 {
				featureTitle
				featureDescription
				fieldGroupName
			}
			featureDetails2 {
				featureTitle
				featureDescription
				fieldGroupName
			}
			image {
				sourceUrl
			}
			}
			team {
			heading
			teamMember {
				memberImage {
				sourceUrl
				}
				name
				position
				socialLinks {
				socialProfileUrl {
					target
					title
					url
				}
				socialProfleType
				}
			}
			}
			career {
			heading
			buttonLink {
				target
				title
				url
			}
			buttonText
			description
			leftImage {
				sourceUrl
			}
			middleLargeImage {
				sourceUrl
			}
			rightImage {
				sourceUrl
			}
			}
			givingBack {
			heading
			description
			givingBack1 {
				givingBackLogo {
				sourceUrl
				title
				uri
				}
				givingBackTitle
				link {
				target
				title
				url
				}
			}
			givingBack2 {
				fieldGroupName
				givingBackLogo {
				sourceUrl
				uri
				title
				}
				givingBackTitle
				link {
				target
				title
				url
				}
			}
			givingBack3 {
				fieldGroupName
				givingBackLogo {
				sourceUrl
				title
				uri
				}
				givingBackTitle
				link {
				target
				title
				url
				}
			}
			givingBack4 {
				fieldGroupName
				givingBackLogo {
				sourceUrl
				title
				uri
				}
				givingBackTitle
				link {
				target
				title
				url
				}
			}
			}
		}
	}
	}
	${MenuFragment}
	${SeoFragment}
`;


export const GET_SERVICES_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
	page: pageBy(uri: $uri) {
		id
		title
		content
		slug
		uri
		seo {
			...SeoFragment
		}
		service {
			heroSection {
			heading
			welcomeImage {
				sourceUrl
			}
			}

			serviceOverviewSection {
			heading
			mainHeading
			description
			buttonText
			buttonLink {
				url
			}
			}

			serviceList {
			image {
				sourceUrl
			}
			buttonText
			bottomText
			buttonLink{
				url
			}
			heading
			subHeading
			serviceList {
				serviceTitle
			}
			}

			services {
			image {
				sourceUrl
			}
			heading
			description
			detailsButtonText
			detailsButtonLink {
				url
			}
			contactLinkText
			contactLink {
				url
			}
			}

			typesOfServices {
			heading
			subHeading
			buttonText
			buttonLink{
				url
			}
			topLeftImage {
				sourceUrl
			}
			topRightImage {
				sourceUrl
			}
			majorServices{
				buleBackgroundEnable
				serviceIcon{
				sourceUrl
				}
				serviceTitle
				serviceDescription
			}
			}

			pricing {
			description
			heading 
			pricePackage1Title
			pricePackage2Title
			enablePriceSwitcher
			singlePricing {
			
				popularPlan
				planTitle
				time
				features {
				featureTitle
				}
				price
				duration
				buttonText
				buttonLink {
				url
				}
				planImage {
				sourceUrl
				}
			}
			juniorDeveloper {
				time
				price
				popularPlan
				planTitle
				planImage {
				sourceUrl
				}
			
				features {
				featureTitle
				}
				duration
				buttonText
				buttonLink {
				url
				}
			}
			}
		}

	}
	}
	${MenuFragment}
	${SeoFragment}
`;


export const GET_CONTACTUS_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
	id
	title
	content
	slug
	uri
	seo {
		...SeoFragment
	}
	contactUs {
		heading
		description
		image {
		  sourceUrl
		}
	}
   }
}
${MenuFragment}
${SeoFragment}
`;
export const GET_PORTFOLIO_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
	id
	title
	content
	slug
	uri
	seo {
		...SeoFragment
	}
	portfolio {
		heroSection {
		  heading
		  description
		  topImage{
			sourceUrl
		  }
		  bottomImage{
			sourceUrl
		  }
		}

		overview {
		  title
		  description
		  buttonText
		  buttonLink {
			url
		  }
		  siteDemoImage {
			sourceUrl
		  }
		}

		project {
		  image {
			sourceUrl
		  }
		  title
		  projectLink {
			url
		  }
		  tags
		}

	  }
	
   }
}
${MenuFragment}
${SeoFragment}
`;
export const GET_JOINUS_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
	id
	title
	content
	slug
	uri
	seo {
		...SeoFragment
	}
	careerPage {
		careerBanner {
		  title
		  description
		  buttonText
		  buttonLink{
			url
		  }
		  backgroundImage {
			sourceUrl
		  }
		  image {
			sourceUrl
		  }
		}

		coderexFacts {
		  backgroundImage {
			sourceUrl
		  }
		  singleFacts {
			icon {
			  sourceUrl
			}
			title
			number
		  }
		}

		aboutCoderex{
		  image{
			sourceUrl
		  }
		  title
		  description
		  buttonLink{
			url
		  }
		  buttonText
		}

		coderexOverview {
		  backgroundImage {
			sourceUrl
		  }
		  image{
			sourceUrl
		  }
		  sectionTitle
		  overviewTitle
		  overviewDescription
		  buttonText
		  buttonLink{
			url
		  }
		}

		servicesAndProducts {
		  services {
			title
			description
			singleClient {
			  image {
				sourceUrl
			  }
			}
		  }
		  products {
			title
			description
			image{
			  sourceUrl
			}
		  }
		}

		workApproach {
		  backgroundImage {
			sourceUrl
		  }
		  singleApproach {
			sectionTitle
			sectionDescription
			approachImage {
			  sourceUrl
			}
		  }
		}

		perksBenefits {
		  sectionTitle
		  sectionDescription
		  singleBenefit {
			title
			icon {
			  sourceUrl
			}
			backgroundColor
		  }
		}

		coderexFamily {
		  sectionTitle
		  sectionDescription
		  featureImage {
			sourceUrl
		  }
		}

		jobSection {
		  sectionId
		  backgroundImage {
			sourceUrl
		  }
		  sectionTitle
		  sectionDescription
		  singleJob {
			jobTitle
			jobDescription
			vacancy
			jobType
			experience
			buttonText
			buttonLink {
			  url
			}
		  }
		  noJobTitle
		}

	}
   }
}
${MenuFragment}
${SeoFragment}
`;




export const GET_PRIVACY_POLICY_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
	id
	title
	content
	slug
	uri
	seo {
		...SeoFragment
	}
	privacyPolicy {
        content
        hero {
          title
          backgroundImage{
            sourceUrl
            }
        }
    }

  }
}
${MenuFragment}
${SeoFragment}
`;
export const GET_FAQS_PAGE = gql`
query GET_PAGE($uri: String) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
	id
	title
	content
	slug
	uri
	seo {
		...SeoFragment
	}
	faqs {
		hero {
		  backgroundImage {
			sourceUrl
		  }
		  title
		}
		contentArea {
		  title
		  description
		}
	  }

  }
}
${MenuFragment}
${SeoFragment}
`;


/**
 * Get post slugs.
 *
 */
 export const GET_PAGE_SLUGS = gql`
 query GET_PAGE_SLUGS {
  posts: posts(last: 1) {
    nodes {
      id
      slug
    }
  }
 }
 `;