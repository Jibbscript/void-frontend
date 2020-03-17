import React from 'react';
import PostsContainer from './PostsContainer';
import NewPostFormComponent from './../components/NewPostFormComponent';
import LoginFormComponent from '../components/LoginFormComponent';

class MainContainer extends React.Component {

    state={
        loggedIn: true
    }


    // render header always
    // newpostformcomponent decides whether or not it will be shown
    // render dashboard container OR user profile container based on state
    // render footer always

    render(){
        return(
            <div>
                {!this.state.loggedIn ? <LoginFormComponent/> : 
                <div>
                    <NewPostFormComponent />
                    <PostsContainer />
                </div>}
            </div>
        )}

}

export default MainContainer;