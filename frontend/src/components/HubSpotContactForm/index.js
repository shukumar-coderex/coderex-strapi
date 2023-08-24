import React, {useEffect} from 'react';
import styles from './style';

const HubSpotContactForm = () => {
    useEffect( () => {
        const script = document.createElement( 'script' );
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild( script );

        script.addEventListener( 'load', () => {
            // @TS-ignore
            if ( window.hbspt ) {
                // @TS-ignore
                window.hbspt.forms.create( {
                    region: 'na1',
                    portalId: '22363508',
                    formId: 'f36d90ab-d789-4d38-ac3f-43d492fae9c7',
                    target: '#hubspotForm',
                    css: '.hs-input{background: red;}'
                } );
            }
        } );
    }, [] );

    return (
        <>
            <div id="hubspotForm"></div>
            <style jsx>{styles}</style>

        </>
    );

};

export default HubSpotContactForm;
