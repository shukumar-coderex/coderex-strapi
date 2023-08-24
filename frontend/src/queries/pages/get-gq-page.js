import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
query GET_PAGE($uri: String) {
  page: pageBy(uri: $uri) {
	id
	title
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
	  }
  	}
	}
`;