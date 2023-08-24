import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import {HeaderFooter} from "../get-menus";
import SeoFragment from "../fragments/seo";
import ImageFragment from "../fragments/image";
import CommentFieldsFragment from "../fragments/comment-fields";

export const GET_POST = gql`
	query GET_POST($uri: String) {
      ${HeaderFooter}
	  post: postBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
		databaseId
		seo {
        	...SeoFragment
    	}
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
			posts(first: 2) {
				nodes {
					id
					title
					slug
					uri
					featuredImage {
						node {
							...ImageFragment
						}
					}
				}
			}
          }
        }
		comments {
			nodes {
				...CommentFields
				replies {
					nodes {
						...CommentFields
						replies {
							nodes {
								...CommentFields
								replies {
									nodes {
									...CommentFields
									replies {
										nodes {
										...CommentFields
										}
									}
								}
							}
						}
					}
					}
				}
			}
		}
	  }
	}
	${MenuFragment}
	${ImageFragment}
	${CommentFieldsFragment}
	${SeoFragment}
`;

export const GET_POST_BY_ID = gql`
	query GET_POST_BY_ID($id: ID!) {
	  ${HeaderFooter}
	  post(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
		categories {
          nodes {
            name
            id
            categoryId
            slug
          }
        }
		status
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;



export const GET_CATEGORY = gql`
query GET_POST($id: ID!) {
	${HeaderFooter}
	category(id: $id, idType: SLUG){
		categoryImage {
			categoryImage{
			  sourceUrl
			}
		}
		name
		uri
	    seo {
			breadcrumbs {
				text
				url
			  }
			  title
			  metaDesc
			  metaRobotsNoindex
			  metaRobotsNofollow
			  opengraphAuthor
			  opengraphDescription
			  opengraphTitle
			  opengraphImage {
				sourceUrl
			  }
			  opengraphSiteName
			  opengraphPublishedTime
			  opengraphModifiedTime
			  twitterTitle
			  twitterDescription
			  twitterImage {
				sourceUrl
			  }
         
        }
		posts {
		  nodes {
			id
			slug
			title
			uri
			excerpt
			link
			featuredImage {
			  node {
				sourceUrl
                title
                altText
                sizes
			  }
			}
			author {
			  node {
				name
			  }
			}
			date
			categories {
				nodes {
				  slug
				  name
				}
			  }
		  }
		}
	  }
  }
  ${MenuFragment}
  
  
  
`;