import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const HeaderFooter = `
  header: getHeader {
    favicon
    siteLogoUrl
    siteTagLine
    siteTitle
    blogLogoUrl
  }
  analytics: getAnalytics {
    goggleAnalytics
    facebookPixel
  }
  headerMenus: menuItems(where: {location: HEADER_MENU, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
              ...MenuFragment
            }
          }
        }
      }
    }
  }
  footerMenus: menuItems(where: {location: FOOTER_MENU, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
  footer: getFooter {
    copyrightText
    sidebarOne
    sidebarTwo
  }
  socialMenus: menuItems(where: {location: SOCIAL_MENU, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
  siteCta: getCtaData {
    ctaHeadingText
    ctaButtonText
    ctaButtonLink
    ctaImage
  }
  
  socialLinks: getSocialLinks {
    facebook
    twitter
    linkedin
    behance
    dribbble
  }

  globalData: getSiteGlobalData {
    address
    email
  }

`

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`
