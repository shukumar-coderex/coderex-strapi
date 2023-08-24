import React, {Fragment} from 'react';
import {isEmpty, isArray} from 'lodash';
import Post from '../post';
import PropTypes from 'prop-types';
import styles from '../style';

const Posts = ( {posts} ) => {

	if ( isEmpty( posts ) && ! isArray( posts ) ) {
		return null;
	}

	return (
		<Fragment>
			<div className={'blog'}>
				<section className="blog-list">
					<div className="cr-container">
						<div className="cr-row">
							<div className="cr-col">
								<div className="post-wrapper">
									{posts &&
										posts.map( ( post, index ) => {
											return (
												<div key={`${post?.node?.id}-${index}` ?? ''} className="single-post">
													<Post post={post?.node}/>
												</div>
											);
										} )
									}
								</div>
							</div>
						</div>
					</div>
				</section>

				<style jsx>
					{styles}
				</style>

				{/* <div className="flex flex-wrap -mb-4">
					{
						posts.map( ( post, index ) => {
							return (
								<div key={`${post?.node?.id}-${index}` ?? ''} className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
									<Post post={post?.node}/>
								</div>
							);
						} )
					}
				</div> */}
			</div>

		</Fragment>
	);
};

Posts.propTypes = {
	posts: PropTypes.array
};

Posts.defaultProps = {
	posts: []
};

export default Posts;
