import React, { Component, Fragment } from 'react';
import { Store } from 'react-notifications-component';
import { NotificationManager} from 'react-notifications';


import WPAPI from 'wpapi';


const wp = new WPAPI( { endpoint: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL } );


class CommentForm extends Component {

    state = {

        'name': '',

        'email': '',

        'comment': '',

        'showComments': '',

        'commentSubmit': '',

        'isReply': false,

        'replyForm': {}

    }


    createNotification ( type, message ) {
		switch ( type ) {
			case 'info':
				NotificationManager.info( message, 3000 );
				break;
			case 'success':
				NotificationManager.success( 'Thank you!', message, 3000 );
				break;
			case 'warning':
				NotificationManager.warning( 'Warning', message, 3000 );
				break;
			case 'error':
				NotificationManager.error( 'Error message!', message, 5000, () => {
			} );
			break;
		}
	};


    /**

     * Post comment

     * @param {*} event

     */

    handleSubmit ( event ) {
        event.preventDefault();
        let that = this;
        if ( this.props.replyForm ) {
            wp.comments().create( {
                post: this.props.postId,
                parent: this.props.parent.databaseId,
                authorEmail: this.state.email,
                authorName: this.state.name,
                content: this.state.comment
            } ).then( function( createdComment ) {
                that.createNotification( 'success', 'You comment has been submitted for admin approval' );
            } ).catch( function( err ) {
                that.createNotification( 'error', 'Something went wrong. Try again later' );
            } );
        } else {
            wp.comments().create( {
                post: this.props.postId,
                authorEmail: this.state.email,
                authorName: this.state.name,
                content: this.state.comment
            } ).then( function( createdComment ) {
                that.createNotification( 'success', 'You comment has been submitted for admin approval' );
            } ).catch( function( err ) {
                that.createNotification( 'error', 'Something went wrong. Try again later' );
            } );
        }
    }

    render() {
        const {postId, replyForm, parent} = this.props;
        return (
            <div>
                <div className="comment-respond">

                    <h3 className="comment-reply-title">Leave a {`${replyForm ? 'Reply' : 'Comment'}`}
                        {replyForm && <small><a
                            rel="nofollow"
                            id="cancel-comment-reply-link"
                            href=""
                            onClick={this.props.onClick}
                        >Cancel reply</a></small>}
                    </h3>

                    <form onSubmit={this.handleSubmit.bind( this )} className="comment-form">

                        <p className="comment-notes">

                            <span id="email-notes">Your email address will not be published.</span> Required fields are marked

                            <span className="required">*</span>

                        </p>


                        <p className="comment-form-comment">

                            <label htmlFor="comment">Comment</label>

                            <textarea

                                id="comment"

                                name="comment"

                                placeholder="Tell Us Your Idea"

                                value={this.state.comment}

                                onChange={( event ) => {
this.setState( {'comment': event.target.value} );
}}

                                required="required"

                            />

                        </p>


                        <p className="comment-form-author">

                            <label htmlFor="author">Name <span className="required">*</span></label>

                            <input

                                id="author"

                                name="author"

                                type="text"

                                value={this.state.name}

                                onChange={( event ) => {
this.setState( {'name': event.target.value} );
}}

                                placeholder="Name*"

                                required="required"

                            />

                        </p>


                        <p className="comment-form-email">

                            <label htmlFor="email">Email <span className="required">*</span></label>

                            <input

                                id="email"

                                name="email"

                                type="email"

                                value={this.state.email}

                                onChange={( event ) => {
this.setState( {'email': event.target.value} );
}}

                                placeholder="Email*"

                                required="required"

                            />

                        </p>


                        <p className="form-submit">

                            <span className="cr-btn-default contact-btn svg-btn-effect" >

                                <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />

                                <svg>

                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>

                                </svg>

                            </span>

                            {/* <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" /> */}

                            <input type="hidden" name="comment_post_ID" value="25" id="comment_post_ID" />

                            <input type="hidden" name="comment_parent" id="comment_parent" value="0" />

                        </p>

                    </form>
                </div>

                <style jsx global>{`

                    
                    .comment-respond {

                        margin-top: 70px;

                    }

                    .blog-details .comment-respond .comment-reply-title {

                        font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));

                        line-height: 1.1;

                        letter-spacing: -2px;

                        font-family: 'Circular Std Bold';

                        margin-bottom: 5px;

                    }

                    .comment-respond .comment-reply-title small {

                        display: none;

                    }

                    .comment-respond .comment-form {

                        display: flex;

                        flex-flow: row wrap;

                    }

                    .comment-respond .comment-form .comment-notes {

                        margin-bottom: 40px;

                    }

                    .comment-respond .comment-form label {

                        display: none;

                    }

                    .comment-respond .comment-form textarea,

                    .comment-respond .comment-form input[type="number"],

                    .comment-respond .comment-form input[type="url"],

                    .comment-respond .comment-form input[type="email"],

                    .comment-respond .comment-form input[type="text"] {

                        height: 50px;

                        background: transparent;

                        color: #23252d;

                        font-size: 20px;

                        padding: 9px 0px;

                        border-radius: 0;

                        font-family: 'Didact Gothic', sans-serif;

                        border: none;

                        border-bottom: 1px solid #e8e9ef;

                    }

                    .comment-respond .comment-form textarea:focus,

                    .comment-respond .comment-form input[type="number"]:focus,

                    .comment-respond .comment-form input[type="url"]:focus,

                    .comment-respond .comment-form input[type="email"]:focus,

                    .comment-respond .comment-form input[type="text"]:focus {

                        border-bottom-color: #00b4ff;

                    }

                    .comment-respond .comment-form textarea::-webkit-input-placeholder,

                    .comment-respond .comment-form input[type="number"]::-webkit-input-placeholder,

                    .comment-respond .comment-form input[type="url"]::-webkit-input-placeholder,

                    .comment-respond .comment-form input[type="email"]::-webkit-input-placeholder,

                    .comment-respond .comment-form input[type="text"]::-webkit-input-placeholder {

                        color: #23252d;

                    }

                    .comment-respond .comment-form textarea::-moz-placeholder,

                    .comment-respond .comment-form input[type="number"]::-moz-placeholder,

                    .comment-respond .comment-form input[type="url"]::-moz-placeholder,

                    .comment-respond .comment-form input[type="email"]::-moz-placeholder,

                    .comment-respond .comment-form input[type="text"]::-moz-placeholder {

                        color: #23252d;

                    }

                    .comment-respond .comment-form textarea:-ms-input-placeholder,

                    .comment-respond .comment-form input[type="number"]:-ms-input-placeholder,

                    .comment-respond .comment-form input[type="url"]:-ms-input-placeholder,

                    .comment-respond .comment-form input[type="email"]:-ms-input-placeholder,

                    .comment-respond .comment-form input[type="text"]:-ms-input-placeholder {

                        color: #23252d;

                    }

                    .comment-respond .comment-form textarea:-moz-placeholder,

                    .comment-respond .comment-form input[type="number"]:-moz-placeholder,

                    .comment-respond .comment-form input[type="url"]:-moz-placeholder,

                    .comment-respond .comment-form input[type="email"]:-moz-placeholder,

                    .comment-respond .comment-form input[type="text"]:-moz-placeholder {

                        color: #23252d;

                    }

                    .comment-respond .comment-form textarea {

                        min-height: 120px;

                    }

                    .comment-respond .comment-form .comment-form-comment {

                        order: 4;

                        width: 100%;

                        margin-top: 30px;

                        margin-bottom: 50px;

                    }

                    .comment-respond .comment-form .comment-form-author {

                        order: 1;

                        width: calc(50% - 15px);

                        margin-right: 15px;

                    }

                    .comment-respond .comment-form .comment-form-email {

                        order: 2;

                        width: calc(50% - 15px);

                        margin-left: 15px;

                    }

                    .comment-respond .comment-form .comment-form-url {

                        order: 3;

                        width: 100%;

                        display: none;

                    }

                    .comment-respond .comment-form .form-submit {

                        order: 5;

                        width: 100%;

                        text-align: center;

                        margin-bottom: 0;

                    }

                    .comment-respond .comment-form .form-submit .svg-btn-effect {

                        padding: 0 10px;

                    }

                    .comment-respond .comment-form .form-submit .svg-btn-effect:hover svg rect {

                        stroke-dasharray: 128,566;

                    }

                    .comment-respond .comment-form .form-submit .submit {

                        width: 100%;

                        padding: 0 40px;

                        background: transparent;

                        color: #333;

                        border: none;

                    }

                    
                    @media (max-width: 991px) {

                        .comment-respond .comment-form textarea,

                        .comment-respond .comment-form input[type="number"],

                        .comment-respond .comment-form input[type="url"],

                        .comment-respond .comment-form input[type="email"],

                        .comment-respond .comment-form input[type="text"] {

                            font-size: 18px;

                        }

                    
                    }

                    @media (max-width: 767px) {

                        .comment-respond .comment-form .comment-form-author {

                            width: 100%;

                            margin-right: 0;

                        }

                        .comment-respond .comment-form .comment-form-email {

                            width: 100%;

                            margin-left: 0;

                        }

                    
                    }


                `}</style>

            </div>

        );

    }

}
export default CommentForm;
