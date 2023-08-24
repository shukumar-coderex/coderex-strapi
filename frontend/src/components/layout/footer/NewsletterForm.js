import { useState } from 'react';
import { sanitize } from '../../../utils/miscellaneous';
import Loading from '../../loading';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';


const NewsletterForm = ( { status, message, onValidated } ) => {

  const [ error, setError ] = useState( null );
  const [ email, setEmail ] = useState( null );


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

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
   const handleFormSubmit = ( event ) => {
    event.preventDefault();
    return axios( {
      data: {
        formId: 3,
        contactData: [
          {id: 11, value: email}
        ]
      },
      method: 'post',
      url: '/api/contact'
    } )
      .then( ( data ) => {
        const {success} = data?.data ?? {};
        if ( success ) {
          setEmail( {
            email: ''
          } );
          createNotification( 'success', 'Thanks for subscribing.' );
        }
      } )
      .catch( () => {
        return false;
      } );
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError( null );
    // Number 13 is the "Enter" key on the keyboard
    if ( 13 === event.keyCode ) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = ( message ) => {
    if ( ! message ) {
      return null;
    }
    const result = message?.split( '-' ) ?? null;
    if ( '0' !== result?.[0]?.trim() ) {
      return sanitize( message );
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  };

  return (
    <div>
      <h3 className="mb-1 uppercase font-bold">Subscribe to newsletter</h3>
      <div className="flex newsletter-input-fields">
        <div className="mc-field-group">
          <input
            onChange={( event ) => setEmail( event?.target?.value ?? '' )}
            type="email"
            placeholder="Your email"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={( event ) => handleInputKeyEvent( event )}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="cursor-pointer	text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && ! error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize( message ) }} />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
