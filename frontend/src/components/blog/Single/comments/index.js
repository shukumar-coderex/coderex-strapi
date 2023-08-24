
import React, { Fragment, useState, setState } from 'react';
import styles from './style';
import moment from 'moment';
import {sanitize} from '../../../../utils/miscellaneous';
import CommentForm from './CommentForm';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const Comments = ( {postComments, postID} ) => {

	let [ showComments, setShowComments ] = useState( false );
	let [ replyForm, setReplyForm ] = useState( {} );

    let handleReply = ( commentID, postId, event ) => {
        event.preventDefault();
        this.setState( {
            replyForm: {[commentID]: true}
        } );
    };
    let cancelreply = ( event ) => {
        event.preventDefault();
        this.setState( {
            replyForm: {}
        } );
    };

	let comments = [];
	[ ...postComments ].reverse().map( ( comment, index ) => {
		if ( '0' == comment.parentDatabaseId ) {
			comments = {
				...comments,
				[comment.databaseId]: comment

			};
		} else {
			let replies = comments[comment.parentDatabaseId].replies ? comments[comment.parentDatabaseId].replies : [];
			comments = {
				...comments,
				[comment.parentDatabaseId]: {
					...comments[comment.parentDatabaseId],
					'replies': replies
				}
			};
		}
	} );


	return (
		<div>
			<div className="comments-wrapper" id="blog-comment-wrapper">
				<h2 className="comment-count">
					{1 <= postComments.length &&
					<span>
						<span>{`${postComments.length} Comment${1 < postComments.length ? 's' : ''}`}, {' '}</span>
						{0 < postComments.length && <span className="show-all-comment" onClick={( e ) => setShowComments( ! showComments )}>  See all Comments</span>}
					</span>
					}
					{0 < ! postComments.length && <span className="no-comment"> No Comments</span>}
				</h2>

				<ul style={{display: `${showComments ? 'block' : 'none'}`}}>
					{Object.keys( comments ).reverse().map( ( comment, index ) => {
						return (
							<li className="comment parent" key={index}>
								<article className="comment-body">
									<footer className="comment-meta">
										<div className="comment-author vcard">
											<img alt="" src={comments[comment]?.author?.node?.avatar?.url} /> <b className="fn">{comments[comment]?.author?.node?.name}</b>
											<span className="says">says:</span>
										</div>
										<div className="comment-metadata">
											<span className="date">{moment( comments[comment].date ).fromNow()}</span>
										</div>
									</footer>
									<div className="comment-content" dangerouslySetInnerHTML={{__html: sanitize( comments[comment].content ?? {} )}}/>

									<div className="reply">
										<a
											rel="nofollow"
											className="comment-reply-link"
											onClick={( e ) => setReplyForm( {...replyForm, [index]: true} )}
										>
											Reply
											<i className="fa fa-reply"></i>
										</a>
									</div>
									{replyForm[index] &&
										<CommentForm
											postId={postID}
											replyForm={true}
											parent={comments[comment]}
											onClick={( e ) => setReplyForm( {...replyForm, [index]: false} )}
										/>
									}
								</article>
								{comments[comment].replies &&
									<ul className="children">
										{comments[comment]?.replies.nodes.reverse().map( ( childComment, index2 ) => {
											return (
												<li className="comment" key={index2}>
													<article className="comment-body">
														<footer className="comment-meta">
														<div className="comment-author vcard">
															<img alt="" src={childComment.author?.node?.avatar?.url} /> <b className="fn">{childComment?.author?.node?.name}</b>
															<span className="says">says:</span>
														</div>
														<div className="comment-metadata">
															<span className="date">{moment( childComment.date ).fromNow()}</span>
														</div>
														</footer>
														<div className="comment-content" dangerouslySetInnerHTML={{__html: sanitize( childComment.content ?? {} )}}/>
														<div className="reply">
															<a
																rel="nofollow"
																className="comment-reply-link"
																href=""
																onClick={( e ) => setReplyForm( {...replyForm, [index2]: false} )}
															>Reply</a>
														</div>
													</article>
												</li>
											);
										} )}
									</ul>
								}
							</li>
						);
					} )}
				</ul>
			</div>

			<CommentForm
			 	postId = {postID}
				replyForm ={true}
			/>

			<style jsx>
				{styles}
			</style>
		</div>
	);
};

export default Comments;
