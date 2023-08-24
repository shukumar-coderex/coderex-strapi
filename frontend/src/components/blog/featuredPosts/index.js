import SocialLink from '../../SocialLink';
import Link from 'next/link';
import {sanitize} from '../../../utils/miscellaneous';


const FeaturedPost = ( {featuredPost, socialLinks} ) => {
	return (
        <section className="inner-page-banner blog-banner pos-relative" style={{backgroundImage: `url(${featuredPost?.featuredImage?.node?.sourceUrl})`}}>
            <div className="overlay">
                <h1 className="main-title">The Blog</h1>
            </div>
            <div className="overlay2"></div>
            <SocialLink socialLinks={socialLinks}/>

            <div className="cr-container">
                <div className="cr-row">
                    <div className="cr-col">
                        <div className="banner-content align-col-left-bottom">
                            <h1 className="main-title">The Blog</h1>
                            <div className="sub-title-wrapper">
                                <p className="category">
                                    {
                                        featuredPost?.categories?.nodes.map( ( term, index ) => {
                                            return (
                                                // <Link
                                                //     as={`/category/${term.slug}`}
                                                //     href={'/category/[slug]'}
                                                //     key={index}
                                                // >
                                                    <a key={index}>{ ( index ? '' : '' ) + term.name }<span> ,</span></a>
                                                // </Link>
                                            );
                                        } )
                                    }
                                </p>
                                <Link
                                    as={`/posts/${featuredPost?.slug}`}
                                    href={`/posts/${featuredPost?.slug}/`}
                                >
                                    <a>
                                        <h2 className="sub-title circular-700" dangerouslySetInnerHTML={{__html: sanitize( featuredPost?.title ?? '' )}} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .blog-banner .cr-social-link {
                    z-index: 3; 
                }
                .blog-banner .cr-social-link li a {
                    background: #00146b!important;
                    color: #fff!important; 
                }
                .blog-banner .cr-social-link li a:hover {
                    background: #00b4ff!important; 
                }

                .blog-banner {
                    padding-left: 18.5%; 
                }

                .blog-banner .overlay {
                    background-color: #fff;
                    width: 18.5%;
                    z-index: 1; 
                }
                .blog-banner .overlay2 {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    background: rgba(0, 20, 107, 0.8);
                    z-index: 0; 
                }
                .blog-paging .inner-page-banner .overlay{
                    background: rgba(0, 20, 107, 0.8);
                }

                .blog-banner .main-title {
                    font-size: calc(35px + (90 - 35) * ((100vw - 320px) / (1920 - 320)));
                    line-height: 1.1;
                    position: absolute;
                    z-index: 2;
                    left: -52px;
                    top: 330px;
                    text-transform: capitalize;
                    -webkit-transform-origin: center center;
                    -moz-transform-origin: center center;
                    -ms-transform-origin: center center;
                    -o-transform-origin: center center;
                    transform-origin: center center;
                    -webkit-transform: rotate(-90deg);
                    -moz-transform: rotate(-90deg);
                    -ms-transform: rotate(-90deg);
                    -o-transform: rotate(-90deg);
                    transform: rotate(-90deg); 
                }
                .blog-banner .main-title:before {
                    content: "";
                    width: 500px;
                    height: 2px;
                    background: #e9edf4;
                    position: absolute;
                    bottom: 84px;
                    right: -30px;
                    -webkit-transform-origin: right;
                    -moz-transform-origin: right;
                    -ms-transform-origin: right;
                    -o-transform-origin: right;
                    transform-origin: right;
                    -webkit-transform: rotate(-90deg);
                    -moz-transform: rotate(-90deg);
                    -ms-transform: rotate(-90deg);
                    -o-transform: rotate(-90deg);
                    transform: rotate(-90deg); 
                }
                        
                .blog .blog-banner .banner-content {
                    height: 100vh;
                    min-height: 800px;
                    padding-bottom: 62px; 
                }
                .blog-banner .banner-content h2 {
                    max-width: 100%;
                    opacity: 1;
                    visibility: visible;
                    -webkit-transform: inherit;
                    -moz-transform: inherit;
                    -ms-transform: inherit;
                    -o-transform: inherit;
                    transform: inherit; 
                }
                .blog-banner .banner-content h1.main-title {
                    display: none; 
                }
                .blog-banner .banner-content .sub-title {
                    font-size: calc(28px + (50 - 28) * ((100vw - 320px) / (1920 - 320)));
                    line-height: 1.2;
                    letter-spacing: normal;
                    margin-top: 6px; 
                }
                .blog-banner .banner-content .sub-title-wrapper {
                    max-width: 1120px;
                    position: relative;
                    z-index: 3; 
                }
                .blog-banner .banner-content .sub-title-wrapper .tag {
                    line-height: 0.5px; 
                    font-size: 16px;
                }
                .blog-banner .banner-content .sub-title-wrapper .tag:hover {
                    color: #00b4ff; 
                }
                .blog-banner .banner-content .sub-title-wrapper .sub-title a {
                    color: #fff; 
                }
                .blog-banner .banner-content .sub-title-wrapper .sub-title a:hover {
                    color: #00b4ff; 
                }

                @media (max-width: 1199px) {
                    .blog img.blog-logo {
                        display: none!important;
                    }
                    .blog img.custom-logo-link {
                        display: block!important;
                    }
                    .blog-banner .cr-social-link {
                        text-align: center;
                    }
                    .blog-banner .cr-social-link li a {
                        background: #fff!important;
                        color: #00146b!important; 
                    }
                    .blog-banner .cr-social-link li a:hover {
                        background: #00b4ff!important;
                        color: #fff!important; 
                    }
                                            
                }


                @media (min-width: 2066px) {
                    .blog-banner .overlay {
                        width: 27%;
                    }
                    .blog-banner .main-title {
                        left: 224px;
                        font-size: 90px;
                    }
                }
                
                @media screen and (max-width: 2065px) and (min-width: 1922px) {
                    .blog-banner .overlay {
                        width: 20%;
                    }
                    .blog-banner .main-title {
                        left: 4px;
                        font-size: 90px;
                    }
                } 
                
                
                @media (max-width: 1700px) {
                    .blog-banner .main-title {
                        left: -72px; 
                    } 
                    .blog-banner .main-title:before {
                        width: 400px; 
                    }
                    .blog-banner .banner-content .sub-title-wrapper {
                        padding-left: 63px;
                    }
                }
                
                @media (max-width: 1500px) {
                    .blog-banner .main-title {
                        left: -20px;
                        min-width: 310px; 
                    } 
                    .blog-banner .main-title:before {
                        width: 250px;
                        bottom: 64px; 
                    } 
                }


                @media (max-width: 1199px) {
                    .blog-banner {
                        padding-left: 0;
                        background-position: center center; 
                    } 
                    .blog-banner .banner-content .sub-title-wrapper {
                        padding-left: 0;
                    }
                    .blog-banner .overlay {
                        display: none; 
                    } 
                    .blog-banner .cr-social-link li a {
                        background: #fff;
                        color: #00146b; 
                    }
                    .blog-banner .cr-social-link li a svg path {
                        fill: #00146b; 
                    }
                    .blog-banner .cr-social-link li a:hover {
                        background: #00b4ff;
                        color: #fff; 
                    }
                    .blog-banner .cr-social-link li a:hover svg path{
                        fill: #fff;
                    }
                
                    .blog-banner .banner-content {
                        padding-bottom: 82px;
                        justify-content: center;
                        padding-top: 90px;
                        text-align: center; 
                    }
                    .blog-banner .banner-content h1.main-title {
                        -webkit-transform: inherit;
                        -moz-transform: inherit;
                        -ms-transform: inherit;
                        -o-transform: inherit;
                        transform: inherit;
                        position: relative;
                        top: inherit;
                        left: inherit;
                        color: #fff;
                        margin-bottom: 70px;
                        display: block; 
                    }
                    .blog-banner .banner-content h1.main-title:before {
                        display: none; 
                    }
                    .blog-banner .banner-content .sub-title-wrapper .tag {
                        line-height: 1px;
                        font-size: 18px; 
                    }
                
                }
            
            `}</style>
        </section>
	);
};

export default FeaturedPost;

