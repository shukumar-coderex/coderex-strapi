import React, {useState} from 'react';
import Image from 'next/future/image';
import { GET_CONTACTUS_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slug';
import client from '../src/apollo/client';
import Layout from '../src/components/layout';
import HubSpotContactForm from '../src/components/HubSpotContactForm';
import parse from 'html-react-parser';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';
import Head from 'next/head';


export default function ContactUs( { data } ) {

  const [ contactFields, setContactFields ] = useState( {
		email: '',
		name: '',
		budget: '',
		companyName: '',
		message: '',
	} );

  const createNotification = ( type, message ) => {
    switch ( type ) {
      case 'info':
        NotificationManager.info( message, 3000 );
        break;
      case 'success':
        NotificationManager.success( message, 'Thank you.', 3000 );
        break;
      case 'warning':
        NotificationManager.warning( message, 'Warning', 3000 );
        break;
      case 'error':
        NotificationManager.error( message, 'Error message', 5000, () => {
      } );
      break;
    }
  };


  const handleOnChange = ( event ) => {
		setContactFields( { ...contactFields, [event.target.name]: event.target.value } );
	};

  const handleFormSubmit = ( event ) => {
    event.preventDefault();
    return axios( {
      data: {
        formId: 2,
        contactData: [
          {id: 5, value: email},
          {id: 6, value: name},
          {id: 7, value: companyName},
          {id: 8, value: budget},
          {id: 9, value: message},
        ]
      },
      method: 'post',
      url: '/api/contact'
    } )
      .then( ( data ) => {
        const {success} = data?.data ?? {};
        if ( success ) {
          setContactFields( {
            email: '',
            name: '',
            budget: '',
            companyName: '',
            message: '',
          } );
          createNotification( 'success', 'Your message has been successfully sent. We will be in contact with you soon.' );
        }
      } )
      .catch( () => {
        this.createNotification( 'error', 'Something is wrong. Please try again later.' );
      } );
  };

  const { page } = data;
  const acf = page.contactUs;
  const { email, name, budget, companyName, message } = contactFields;
  return (
    <Layout data={data}>
      <Head>
        <script defer async charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
      </Head>
      <section className="cr-contact pos-relative">

        <div className="overlay contact-illustration">
          {acf && (
            <Image width='952' height='679'
              src={acf.image.sourceUrl}
              className="img-fluid"
              alt="illustration img"
            />
          )}
        </div>
        <div className="cr-container">
          <div className="cr-row">
            <div className="cr-col">
            <div className="contact-content">
              {acf && (
                <h1 className="circular-700 pos-relative">
                  {parse( acf.heading )}
                </h1>
              )}
              {acf && (
                <div className="description">{parse( acf.description )}</div>
              )}
              <HubSpotContactForm/>
            </div>
              {/* <div className="contact-content">
                {acf && (
                  <h1 className="circular-700 pos-relative">
                    {parse( acf.heading )}
                  </h1>
                )}
                {acf && (
                  <div className="description">{parse( acf.description )}</div>
                )}

                <form onSubmit={handleFormSubmit}>
                  <div className="groups">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div className="groups">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div className="groups">
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div className="groups">
                    <select
                      name="budget"
                      onChange={handleOnChange}
                      value={budget}
                      required
                    >
                      <option value="">What Is Your Budget?</option>
                      <option value="3000">$1,500 -- $3,000</option>
                      <option value="7000">$3,000 -- $7,000</option>
                      <option value="15000">$7,000 -- $15,000</option>
                      <option value="more">$15,000 or More</option>
                    </select>
                  </div>
                  <div className="groups">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={handleOnChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="cr-btn-default contact-btn svg-btn-effect"
                  >
                    <svg>
                      <rect
                        x="2"
                        y="2"
                        rx="30"
                        fill="none"
                        width="98%"
                        height="56"
                      ></rect>
                    </svg>
                    <span>Send Message</span>
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .cr-contact .contact-illustration {

            background: #00146b;
        
            width: 50%;
        
            display: flex;
        
            justify-content: flex-end;
        
            align-items: flex-end;
        
            box-shadow: 0 2px 0 #00146b;
        
        }
        
        .cr-contact .contact-illustration img {
        
            width: 100%;
        
        }
        
        .cr-contact .contact-content {
        
            max-width: 700px;
        
            padding-left: 100px;
        
            width: 100%;
        
            padding-top: 180px;
        
            padding-bottom: 90px;
        
            margin-left: auto;
        
        }
        
        .cr-contact .contact-content h1 {
        
            margin-bottom: 5px;
        
            margin-left: -7px;
        
        }
        
        .cr-contact .contact-content h1:before {
        
            content: "";
        
            position: absolute;
        
            left: -174px;
        
            top: 45px;
        
            width: 134px;
        
            height: 2px;
        
            background: #00b4ff;
        
        }
        
        .cr-contact .contact-content .description {
        
            margin-bottom: 45px;
        
        }
        
        .cr-contact .contact-content .groups {
        
            margin-bottom: 30px;
        
        }
        
        .cr-contact .contact-content .groups textarea,
        
        .cr-contact .contact-content .groups input {
        
            font-family: "Didact Gothic", sans-serif;
        
            -webkit-transition: all 0.5s ease;
        
            -moz-transition: all 0.5s ease;
        
            -ms-transition: all 0.5s ease;
        
            -o-transition: all 0.5s ease;
        
            transition: all 0.5s ease;
        
        }
        
        .cr-contact .contact-content .groups textarea::-webkit-input-placeholder,
        
        .cr-contact .contact-content .groups input::-webkit-input-placeholder {
        
            color: #23252d;
        
        }
        
        .cr-contact .contact-content .groups textarea::-moz-placeholder,
        
        .cr-contact .contact-content .groups input::-moz-placeholder {
        
            color: #23252d;
        
        }
        
        .cr-contact .contact-content .groups textarea:-ms-input-placeholder,
        
        .cr-contact .contact-content .groups input:-ms-input-placeholder {
        
            color: #23252d;
        
        }
        
        .cr-contact .contact-content .groups textarea:-moz-placeholder,
        
        .cr-contact .contact-content .groups input:-moz-placeholder {
        
            color: #23252d;
        
        }
        
        
        .cr-contact .contact-content .groups textarea:focus,
        
        .cr-contact .contact-content .groups input:focus {
        
            background: transparent;
        
        }
        
        .cr-contact .contact-content button.cr-btn-default {
        
            background: transparent;
        
            border: none;
        
            width: 201px;
        
            padding: 0 15px;
        
            margin-left: auto;
        
            display: block;
        
        }
        
        
        
        
        @media (max-width: 1500px) {
        
            .cr-contact {
        
                margin-bottom: 0;
        
            }
        
        }
        
        
        @media (max-width: 1300px) {
        
            .cr-contact .contact-content {
        
                max-width: 600px;
        
            }
        
            .cr-contact .contact-content h1:before {
        
                left: -146px;
        
                top: 33px;
        
            }
        
        }
        
        
        @media (max-width: 1199px) {
        
            .cr-contact .contact-content {
        
                max-width: 500px;
        
            }
        
        }
        
        
        @media (max-width: 991px) {
        
            .cr-contact .contact-illustration {
        
                width: 100%;
        
                display: block;
        
                position: relative;
        
                height: auto;
        
                padding-top: 120px;
        
            }
        
            .cr-contact .contact-content {
        
                max-width: 600px;
        
                padding-top: 90px;
        
                text-align: center;
        
                margin: 0 auto;
        
                padding-left: 0;
        
            }
        
            .cr-contact .contact-content h1:before {
        
                display: none;
        
            }
        
            .cr-contact .contact-content button.cr-btn-default {
        
                margin-right: auto;
        
            }
        
        
        }
      
        .contact-us .cr-header .toggle-bar {
          box-shadow: 0.156px 0.988px 2px 0px rgba(3, 22, 109, 0.12);
        }
        section.cr-cta {
          display: none !important;
        }
        .cr-contact .contact-content .description p {
          font-size: 26px;
          line-height: 46px;
        }
        @media (max-width: 767px) {
          .cr-contact .contact-content .description p {
            font-size: 20px;
            line-height: 34px;
          }
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, errors } = await client.query( {
    query: GET_CONTACTUS_PAGE,
    variables: {
      uri: '/contact-us',
    },
  } );

  const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
  return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}
