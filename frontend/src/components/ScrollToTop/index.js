import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';


class ScrollToTop extends Component {
    componentDidMount() {
        $( window ).scroll( function () {
            if ( 200 < $( this ).scrollTop() ) {
                $( '.scroll-top' ).fadeIn();
                $( '.scroll-top' ).removeClass( 'not-visible' );
            } else {
                $( '.scroll-top' ).fadeOut();
            }
        } );
        $( '.scroll-top' ).on( 'click', function ( event ) {
            event.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: 0
            }, 500 );
        } );
    }

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <div className="scroll-top not-visible">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
                </div>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    
                `}</style>
            </Fragment>
        );
    }
}

export default ScrollToTop;

