import React from 'react';
import './Ratings.css';
import like from '../../assets/like.svg';
import filledLike from '../../assets/filledLike.svg';
import comment from '../../assets/comment.svg';
import filledComment from '../../assets/filledComment.svg';
import share from '../../assets/forward.svg';
import filledShare from '../../assets/filledForward.svg';

const ratings = (props) => {

    let like_image = null, comment_image = null, share_image = null, like_font = null, comment_font = null, share_font = null;

    if (props.isLiked){
        like_image = filledLike;
        like_font = {
            color: '#D75A4A'
        }
    }
    else{
        like_image = like;
        like_font = {
            color: '#555'
        }
    }

    if (props.isCommented){
        comment_image = filledComment;
        comment_font = {
            color: '#52C165'
        }
    }
    else{
        comment_image = comment;
        comment_font = {
            color: '#555'
        }
    }

    if (props.isShared){
        share_image = filledShare;
        share_font = {
            color: '##7E7CCC'
        }
    }
    else{
        share_image = share;
        share_font = {
            color: '#555'
        }
    }

    return (
        <div className="ratings-container">
            <div className="rating">
                <img src={like_image} alt="Like" onClick={props.liked}/>
                <span style={like_font}>{props.likes}</span>
            </div>
            <div className="rating">
                <img src={comment_image} alt="Comment" onClick={props.commented}/>
                <span style={comment_font}>{props.comments}</span>
            </div>
            <div className="rating">
                <img src={share_image} alt="Share" onClick={props.shared}/>
                <span style={share_font}>{props.shares}</span>
            </div>
        </div>
    )
}

export default ratings;