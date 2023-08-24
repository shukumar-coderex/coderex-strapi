import client from '../../src/apollo/client';
import Layout from '../../src/components/layout';
import { PER_PAGE_FIRST, totalPagesCount } from '../../src/utils/pagination';
import Pagination from '../../src/components/blog/pagination';
import Posts from '../../src/components/blog/posts';
import FeaturedPost from '../../src/components/blog/featuredPosts';
import CallToAction from '../../src/components/CallToAction';
import {handleRedirectsAndReturnData} from '../../src/utils/slug';
import {GET_POSTS} from '../../src/queries/posts/get-posts';


const Blog = ( { data } ) => {
	const pagesCount 	= totalPagesCount( data?.posts?.pageInfo?.offsetPagination?.total ?? 0 ),
		featuredPost 	= data?.featuredPost ?? {},
		siteCta			= data?.siteCta;
		
	return (
		<Layout data={data} containerClassNames='blog'>
			<FeaturedPost featuredPost={featuredPost} socialLinks={data?.socialLinks}/>
			<Posts posts={data?.posts?.edges.slice() ?? []}/>
			<Pagination pagesCount={pagesCount} postName="blog" />
			<CallToAction cta={siteCta} />
		</Layout>
	);
};

export default Blog;

export async function getStaticProps() {
	const { data, errors } = await client.query( {
		query: GET_POSTS,
		variables: {
			uri: '/blog',
			perPage: PER_PAGE_FIRST,
			offset: 1,
		},
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
