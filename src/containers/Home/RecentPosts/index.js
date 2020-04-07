import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
    return (
        <div style={props.style}>
            <Card style={{ marginBottom: '20px' }}>
                <div className="postImageWrapper">
                    <img src={require('../../../blogPostImages/AllMight.jpg')} alt="theres a picture here" />
                </div>

                <div style={{ textAlign: 'center' }}>

                    <span>Featured</span>

                    <h2>Why Did I Ever Start a Blog?!</h2>

                    <span>posted on July 10, 2020 by Pryde </span>

                    <p>Hello World. Why would I ever start a blog though? I tend to have a bunch ideas that I may or may not execute, but this is something I would like to do AND get good at. My focus is the actual content and engagement... </p>

                    <button>Read More</button>

                </div>




            </Card>
        </div>
    )

}

export default RecentPosts