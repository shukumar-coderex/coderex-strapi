import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudySpecialFeature extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="special-feature">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="special-feature-content">
                                    <h4>{parse( content.title )}</h4>
                                    <div className="description">{parse( content.description )}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .special-feature .special-feature-content .description p {
                        color: #071e3d;
                        font-size: 26px;
                        line-height: 46px;
                    }
                    .special-feature .special-feature-content .description ul{
                        list-style: disc;
                        margin: 10px 0px 0px 22px;
                    }

                    @media (max-width: 1199px) {
                        .special-feature .special-feature-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }

                    @media (max-width: 767px) {
                        .special-feature .special-feature-content .description p {
                            text-align: left;
                        }
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudySpecialFeature;

