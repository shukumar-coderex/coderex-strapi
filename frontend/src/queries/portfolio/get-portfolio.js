import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import {HeaderFooter} from "../get-menus";
import SeoFragment from "../fragments/seo";
import ImageFragment from "../fragments/image";



export const GET_PORTFOLIO = gql`
  query GET_PORTFOLIO($uri: String) {
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
        template {
        ... on Template_CaseStudy {
            templateName
            caseStudy {
              heroSection {
                backgroundImage {
                 sourceUrl
                }
                siteScreenshot {
                 sourceUrl
                }
                heading
                linkText
                link {
                 url
                }
                shortDescription
              }

              caseStudyOverview {
                caseStudyTask {
                  title
                  tasks {
                    task
                  }
                }
                overviewTitle
                overviewDetails
              }

              laptopView {
                sourceUrl
              }

              websiteOverview {
                title
                description
                pageScreenshot {
                  image {
                    sourceUrl
                  }
                }
              }


              websiteCompare {
                description
                heading
                oldWebsiteImage {
                  sourceUrl
                }
                newWebsiteImage {
                  sourceUrl
                }
              }


              mobileView {
                mobileViewImage {
                  image {
                    sourceUrl
                  }
                }
              }


              specialFeature {
                title
                description
              }


              sectionHighlight {
                backgroundImage {
                  sourceUrl
                }
                sectionImage {
                  sourceUrl
                }
                mockupView {
                  sourceUrl
                }
              }


              optimization {
                heading
                description
                image {
                  sourceUrl
                }
              }


              branding {
                typography {
                  title
                  image {
                    sourceUrl
                  }
                  fontFamily {
                    name
                    sampleImage {
                      sourceUrl
                    }
                  }
                }
                color {
                  title
                  color {
                    backgroundColor
                    textColor
                  }
                }

                completeViewImage{
                  sourceUrl
                }
              }

              relatedProject {
                heading
                project {
                  title
                  tags
                  projectLink {
                    url
                  }
                  image {
                    sourceUrl
                  }
                }
              }


            }
        }
        }
    }
  }
  ${MenuFragment}
  ${SeoFragment}
`;
