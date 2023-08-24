import React, { Component } from 'react';
import Link from 'next/link';
import styles from './style';
import Image from '../../components/image';
import {sanitize} from '../../utils/miscellaneous';


class RelatedPost extends Component {

    render() {
        const {categories} = this.props,
            relatedPostsCategory = categories[0],
            relatedPosts        = relatedPostsCategory?.posts?.nodes ?? [];

        return (
            <div className="single related-posts">
                <section className="blog-list">
                    <div className="overlay"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2 className="circular-700 color-fff">Related posts</h2>
                                </div>

                                <div className="post-wrapper">
                                    {relatedPosts.map( ( post, index ) => {
                                        return (
                                            <div className="single-post" key={index}>
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
                                                            categories.map( ( term, index ) => {
                                                                return (
                                                                    <Link
                                                                        as={`/category/${term.slug}`}
                                                                        href={'/category/[slug]'}
                                                                        key={index}
                                                                    >
                                                                        <a>{ ( index ? '' : '' ) + term.name }<span> ,</span></a>
                                                                    </Link>
                                                                );
                                                            } )
                                                        }
                                                    </p>
                                                    <Link href={`/posts/${post?.slug}/`}>
                                                        <a className='title circular-700'>
                                                            <h2 dangerouslySetInnerHTML={{__html: sanitize( post?.title ?? '' )}}/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    } )}

                                </div>
                                {/* <--/post-wrapper--> */}
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>
            </div>
        );
    }
}

export default RelatedPost;

