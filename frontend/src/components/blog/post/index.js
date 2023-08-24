
import React, {Fragment} from 'react';
import Link from 'next/link';
import Image from '../../image';
import {sanitize} from '../../../utils/miscellaneous';

const Post = ( {post} ) => {

	return (
		<Fragment>
			<figure>
				<Link
					as={`/posts/${post.slug}`}
					href={'/posts/[slug]'}
				>
					<Image { ...post?.featuredImage?.node } width="100%" height="100%" layout='fill' title={post?.title ?? ''}/>
				</Link>
			</figure>
			<div className="post-title">
				<p className="category">
					{
						post?.categories?.nodes.map( ( term, index ) => {
							return (
								<Link
									as={`/category/${term.slug}`}
									href={'/category/[slug]'}
									key={index}
								>
									<a key={index}>{ ( index ? '' : '' ) + term.name }<span> ,</span></a>
								</Link>

							);
						} )
					}
				</p>
				<Link href={`/posts/${post?.slug}/`}>
					<a className='blog-title'>
						<h2 dangerouslySetInnerHTML={{__html: sanitize( post?.title ?? '' )}}/>
					</a>
				</Link>
			</div>
		</Fragment>
	);
};

export default Post;
