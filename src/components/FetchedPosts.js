import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedPosts } from '../redux/actions';
import { Loader } from './Loader';

import Post from './Post';


export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return ( 
            <button 
                className="btn btn-primary"
                onClick={() => dispatch(fetchedPosts())}
                >
                Загрузить
            </button>
        )
    }
    return posts.map( post => {
        return <Post post={post} key={post.id} />
    });
}