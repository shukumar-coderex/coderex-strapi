import client from '../../src/apollo/client';
import { GET_CATEGORY, GET_POST } from '../../src/queries/posts/get-post';
import { GET_CATEGORY_SLUGS } from '../../src/queries/posts/get-posts';
import { FALLBACK, handleRedirectsAndReturnData } from '../../src/utils/slug';
import { useRouter } from 'next/router';
import styles from '../../styles/blog';
import Link from 'next/link';
import parse from 'html-react-parser';
import Layout from '../../src/components/layout';
import {sanitize} from '../../src/utils/miscellaneous';

const Category = ( { data } ) => {
  const router = useRouter();
  const { category } = data;
  const { categoryImage, name, posts } = category;
  return (
	<Layout data={data} isCategory>
		<div className="blog category-list">
			<section
			className="inner-page-banner blog-single-banner pos-relative"
			style={{
				backgroundImage: `url(${
				'categoryImage' in categoryImage ? categoryImage.sourceUrl : ''
				})`,
			}}
			>
			<div className="overlay"></div>
			<div className="cr-container">
				<div className="cr-row">
				<div className="cr-col">
					<div className="banner-content align-center-center">
					<h1 className="circular-700 color-fff crx crx-animated text-center">
						{parse( name )}
					</h1>
					</div>
				</div>
				</div>
			</div>
			</section>
			<section className="blog-list">
			<div className="cr-container">
				<div className="cr-row">
				<div className="cr-col">
					<div className="post-wrapper">
					{posts.nodes.map( ( post, index ) => {
						const {
							title,
							excerpt,
							link,
							featuredImage,
							slug,
							author_name,
							date_gmt,
							categories,
						} = post;
						let actualPage = 'post';
						let post_image = featuredImage ?
							featuredImage.node.sourceUrl :
							'https://via.placeholder.com/768x512.png/09f/000/coderex-post-image?text=CodeRex+post+image';
						return (
						<div className="single-post" key={index}>
							{post_image && (
							<figure>
								<Link
									as={`/posts/${slug}`}
									href={'/posts/[slug]'}
								>
								<a>
									<img
									src={post_image}
									className="img-fluid"
									alt={
										featuredImage ? featuredImage.node.altText : 'coderex'
									}
									title={
										featuredImage ?
										featuredImage.node.title :
										'coderex'
									}
									/>
								</a>
								</Link>
							</figure>
							)}

							<div className="post-title">
							<p className="category">
								{categories.nodes &&
								categories.nodes.map( ( term, index ) => {
									const { slug, name } = term;
									return (
									<Link
										as={`/category/${term.slug}`}
										href={'/category/[slug]'}
										key={index}
									>
										<a>
										{( index ? ', ' : '' ) + parse( name )}{' '}
										</a>
									</Link>
									);
								} )}
							</p>

							<h1>
								<Link
									as={`/posts/${post.slug}`}
									href={'/posts/[slug]'}
								>
									<a className='title circular-700 blog-title'>
										<h2 dangerouslySetInnerHTML={{__html: sanitize( post?.title ?? '' )}}/>
									</a>
								</Link>
							</h1>
							</div>
						</div>
						);
					} )}
					</div>
				</div>
				</div>
			</div>
			</section>

			<style jsx>{styles}</style>
		</div>
	</Layout>
  );
};
export default Category;

export async function getStaticProps( { params } ) {
  const { data, errors } = await client.query( {
    query: GET_CATEGORY,
    variables: {
      id: params?.slug ?? '/',
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
  return handleRedirectsAndReturnData( defaultProps, data, errors, 'category' );
}

export async function getStaticPaths() {
  const { data } = await client.query( {
    query: GET_CATEGORY_SLUGS,
  } );

  const pathsData = [];

  data?.posts?.nodes &&
    data?.posts?.nodes.map( ( post ) => {
      if ( ! isEmpty( post?.slug ) ) {
        pathsData.push( { params: { slug: post?.slug } } );
      }
    } );

  return {
    paths: pathsData,
    fallback: FALLBACK,
  };
}
