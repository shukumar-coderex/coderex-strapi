import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class ServiceClients extends Component {


    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="service__clients__feature pos-relative">
                    <div className="overlay"></div>
                        <div className="cr-container">
                            <div className="cr-row">
                                <div className="cr-col">
                                    <div className="service__clients__content">
                                        <div className="service__clients__text">
                                            <h4>{parse( content.services.title )}</h4>
                                            <p>{parse( content.services.description )}</p>
                                            <div className="service__clients__box">
                                                {content.services.singleClient.length && content.services.singleClient.map( ( item, index ) => {
                                                    return (
                                                        <div className="service__clients__box-img" key={index}>
                                                            {item.image &&
                                                                <div className="team__work__img">
                                                                    <Image width='100' height='43' src={parse( item.image.sourceUrl )} alt="client image" />
                                                                </div>
                                                            }
                                                        </div>
                                                    );
                                                } )}

                                            </div>

                                        </div>

                                        <div className="service__clients__text service__clients__img">
                                            <h4>{parse( content.products.title )}</h4>
                                            <p>{parse( content.products.description )}</p>
                                            {content.products.image &&
                                                <div className="team__work__img">
                                                   <Image width='556' height='345' src={parse( content.products.image.sourceUrl )} alt="product image" />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                  
                `}</style>

            </Fragment>
        );
    }
}

export default ServiceClients;

