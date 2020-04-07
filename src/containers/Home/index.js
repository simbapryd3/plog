import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';


const ImageGallary = props => (
    <div className="gallaryPost" style={props.gallaryStyle}>
        {/* <div className="mainImageWrapper">
            <img src={require('../../blogPostImages/notes.jpg')} alt="" />
        </div>


        <div className="mainImageWrapper2">
            <img src={require('../../blogPostImages/peace.jpg')} alt="" />
        </div> */}

    </div>
);

const Home = props => {
    const gallaryHeight = .5;
    const gallaryStyle = {
        height: gallaryHeight + 'rem',
        overflow: 'hidden'
    }
    const imgAr = blogData.data.map(post => post.blogImage)

    return (
        <div>
            <Card>
                <ImageGallary
                    gallaryStyle={gallaryStyle}
                    imagesArray={imgAr}
                />
            </Card>
            <Layout>
                <RecentPosts style={{ width: '70%' }} />
            </Layout>
        </div>
    );
}

export default Home;