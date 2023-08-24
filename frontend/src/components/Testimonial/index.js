import React, { Component, Fragment } from 'react';
import styles from './style';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player';
import Image from 'next/future/image';

class Testimonial extends Component {
  state = {
    videoUrl: '',
    showmodal: false,
  };
  constructor() {
    super();
    this.openModal = this.openModal.bind( this );
    this.toggleModal = this.toggleModal.bind( this );
  }


  toggleModal( e ) {
    let classLists = e.target.classList;
    if ( ! classLists.contains( 'w-vulcan--background' ) ) {
      if ( this.state.showmodal ) {
        this.setState( {
          showmodal: false,
          videoUrl: '',
        } );
      }
    }
  }

  openModal( videoUrl ) {
    this.setState( {
      videoUrl: videoUrl,
      showmodal: true
    } );
  }

  render() {
    const { content } = this.props;
    return (
      <Fragment>
        <div className={`testimonial-modal ${this.state.showmodal ? 'show' : ''}`}>
          <div className="testimonial-modal-wrapper">
          <span className="close-video" onClick={( e ) => this.toggleModal( e )}>✕</span>
            <ReactPlayer
              ref={this.ref}
              className="storyPlayer__reactPlayer"
              controls={true}
              url={this.state.videoUrl}
              playing
            />
          </div>
        </div>


        <section className="cr-testimonial section-padding pos-relative">
          <div className="overlay1 crx crx-animated"></div>
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <h2 className="section-title crx crx-animated">
                  {parse( content.heading )}
                </h2>
                <div className="testimonial-wrapper">
                  {content.testimonials &&
                    content.testimonials.map( ( testimonialItem, index ) => {
                      let authorImg = testimonialItem.authorImage ?
                        testimonialItem.authorImage.sourceUrl :
                        '/images/testimonial-author-placeholder.png';
                      return (
                        <div
                          className={`single-testimonial testimonial${
                            index + 1
                          } pos-relative crx crx-animated`}
                          key={testimonialItem.videoUrl}
                        >
                          <Image
                            layout='raw'
                            width='500'
                            height='500'
                            src={authorImg}
                            className="img-fluid"
                            alt="author img"
                          />
                          <div className="content">
                            <span>{parse( testimonialItem.authorName )}</span>
                            {testimonialItem.videoUrl && (
                              <a
                                className="testimonial-video"
                                onClick={() => {
                                  this.openModal( testimonialItem.videoUrl );
                                }}
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="play"
                                  className="svg-inline--fa fa-play fa-w-14"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                                  ></path>
                                </svg>
                              </a>
                            )}
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

        <style jsx global>{`
          .cr-testimonial .testimonial-wrapper .single-testimonial img {
            width: 100%;
          }
          @media (max-width: 767px) {
            .testimonial-modal .testimonial-modal-wrapper .player-wrapper {
              width: 510px !important;
              height: 290px !important;
            }
          }
          @media (max-width: 575px) {
            .testimonial-modal .testimonial-modal-wrapper .player-wrapper {
              width: 290px !important;
              height: 162px !important;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Testimonial;
