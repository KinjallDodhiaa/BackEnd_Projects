import React from 'react';
import { useParams } from 'react-router-dom';

const Posts = (props) => {

    const {id} = useParams();

    const foundPost = props.showPostDetails.find((post) => id == post.id);


    return (
        <div className='container'>
            {foundPost ? foundPost : null}
            
        </div>
    );
};

export default Posts;