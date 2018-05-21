import React from 'react';
import './SocialCard.css';
import Cover from '../../components/Cover/Cover';
import Description from '../../components/Description/Description';
import Ratings from '../../components/Ratings/Ratings';

class SocialCard extends React.Component{

    state = {
        likes: 20,
        liked: false,
        comments: 2,
        commented: false,
        shares: 5,
        shared: false,
    }
    
    onLikeHandler = () => {
        if(!this.state.liked){
            this.setState((prevState) => {
                return {likes: prevState.likes + 1, liked: true}
            })
        }
        else{
            this.setState((prevState) => {
                return {likes: prevState.likes - 1, liked: false}
            })
        }
    }

    onCommentHandler = () => {
        if(!this.state.commented){
            this.setState((prevState) => {
                return {comments: prevState.comments + 1, commented: true}
            })
        }
    }

    onShareHandler = () => {
        if(!this.state.shared){
            this.setState((prevState) => {
                return {shares: prevState.shares + 1, shared: true}
            })
        }
    }


    render(){
        return (
            <div className="SocialCard">
                <Cover writer='Akhand Mishra'/>
                <Description
                    title="React and Firebase is all I need"
                    description="A guide on how to use React and Firebase to build minimal web apps" />
                <Ratings
                    likes={this.state.likes}
                    isLiked={this.state.liked}
                    isCommented={this.state.commented}
                    isShared={this.state.shared}
                    comments={this.state.comments}
                    shares={this.state.shares}
                    liked={this.onLikeHandler}
                    commented={this.onCommentHandler}
                    shared={this.onShareHandler}/>   
            </div>
        );
    }
}

export default SocialCard;