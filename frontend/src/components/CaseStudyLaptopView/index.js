import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyLaptopView extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="laptop-view pos-relative">
                    <div className="overlay"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="img-area">
                                    {content &&
                                        <img src={content.sourceUrl} alt="laptop view image"  />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .laptop-view .img-area img {
                        display: block;
                        margin: 0 auto;
                        transform: translateY(26px);
                    }
                    
                    @media (max-width: 1300px) {
                        .laptop-view .img-area img {
                            transform: translateY(22px);
                        }
                    }
                    
                    @media (max-width: 991px) {
                        .laptop-view .img-area img {
                            transform: translateY(14px);
                        }
                    }
                    
                    @media (max-width: 575px) {
                        .laptop-view .img-area img {
                            transform: translateY(11px);
                        }
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyLaptopView;

