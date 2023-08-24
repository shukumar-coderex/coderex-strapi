import { useRouter } from 'next/router';
import { getPageOffset, PER_PAGE_FIRST, PER_PAGE_REST } from '../../../src/utils/pagination';
import client from '../../../src/apollo/client';
import Layout from '../../../src/components/layout';
import Pagination from '../../../src/components/blog/pagination';
import Posts from '../../../src/components/blog/posts';
import {GET_POSTS, GET_TOTAL_POSTS_COUNT} from '../../../src/queries/posts/get-posts';
import {handleRedirectsAndReturnData} from '../../../src/utils/slug';
import CallToAction from '../../../src/components/CallToAction';

const Page = ( {data} ) => {
	const { posts, siteCta } = data;
	const router = useRouter();

	const { pageInfo } = posts ?? {};
	const totalPostsCount = pageInfo?.offsetPagination?.total ?? 0;

	const pagesCount = Math.ceil( ( totalPostsCount - PER_PAGE_FIRST ) / PER_PAGE_REST + 1 );

	// Redirecting to /blog if we are on page 1
	const pageNo = router?.query?.pageNo ?? 1;

	if ( 'undefined' !== typeof window && '1' === pageNo ) {
		router.push( '/blog' );
	}

	return (
		<Layout data={data} containerClassNames="blog blog-paging">
			<section className="inner-page-banner blog-single-banner pos-relative" style={{backgroundImage: `url(${data?.page?.featuredImage?.node?.sourceUrl})`}}>
				<div className="overlay"></div>
				<div className="cr-container">
					<div className="cr-row">
						<div className="cr-col">
							<div className="banner-content align-center-center">
								<h1 className="circular-700 color-fff crx crx-animated text-center">The Blog</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Posts posts={posts?.edges ?? []}/>
			<Pagination pagesCount={pagesCount} postName="blog" />
			<CallToAction cta={siteCta} />
		</Layout>
	);
};

export default Page;

export async function getStaticProps( { params } ) {
	//Note: pageNo is in string
	const { pageNo } = params || {};
	const offset = getPageOffset( pageNo );
	const variables = {
		uri: '/blog/',
		perPage: '1' === pageNo ? PER_PAGE_FIRST : PER_PAGE_REST,
		offset,
	};

	const { data, errors } = await client.query( {
		query: GET_POSTS,
		variables,
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		/**
         * Revalidate means that if a new request comes to server, then every 1 sec it will check
         * if the data is changed, if it is changed then it will update the
         * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
         */
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'posts' );
}

export async function getStaticPaths() {
	const { data } = await client.query( {
		query: GET_TOTAL_POSTS_COUNT,
	} );
	const totalPostsCount = data?.postsCount?.pageInfo?.offsetPagination?.total ?? 0;
	//* since the first page posts and other page posts will be different, we subtract the no of posts we'll show on first page and then divide the result with the no of posts we'll show on other pages and then will add 1 for the first page that we subtracted.
	const pagesCount = Math.ceil( ( totalPostsCount - PER_PAGE_FIRST ) / PER_PAGE_REST + 1 );
	const paths = new Array( pagesCount ).fill( '' ).map( ( _, index ) => ( {
		params: {
			pageNo: ( index + 1 ).toString(),
		},
	} ) );

	return {
		paths: [ ...paths ],
		fallback: false,
	};
}
