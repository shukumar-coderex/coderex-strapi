
import { gql } from '@apollo/client'
import MenuFragment from '../fragments/menus'
import SeoFragment from "../fragments/seo";
import {HeaderFooter} from "../get-menus";
import ImageFragment from "../fragments/image";

/**
 * Get Posts
 *
 */
export const GET_POSTS = gql`
 query GET_POSTS( $uri: String, $perPage: Int, $offset: Int ) {
  ${HeaderFooter}
  page: pageBy(uri: $uri) {
    id
    title
    content
    slug
    uri
    featuredImage {
      node {
        ...ImageFragment
      }
    }
    seo {
        ...SeoFragment
    }
  }
  featuredPost: post(id: "cG9zdDo1NTI4") {
    id
    title
    excerpt
    slug
    featuredImage {
      node {
        ...ImageFragment
      }
    }
    categories {
      nodes {
        name
        id
        categoryId
        slug
      }
    }
  }
  posts: posts(where: { offsetPagination: { size: $perPage, offset: $offset }}) {
    edges {
      node {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            ...ImageFragment
          }
        }
        categories {
          nodes {
            name
            id
            categoryId
            slug
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
 }
 ${MenuFragment}
 ${ImageFragment}
 ${SeoFragment}
 `;

export const GET_TOTAL_POSTS_COUNT = gql`
  query GET_TOTAL_POSTS_COUNT {
  postsCount: posts {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`

/**
 * Get post slugs.
 *
 */
export const GET_POST_SLUGS = gql`
 query GET_POST_SLUGS {
  posts: posts(last: 1) {
    nodes {
      id
      slug
    }
  }
 }
 `;



export const GET_CATEGORY_SLUGS = gql`
query GET_POST_SLUGS {
  categories: categories(last: 1) {
    nodes {
      id
      slug
      posts{
        nodes{
          slug
        }
      }
    }
  }
 }
 `;
