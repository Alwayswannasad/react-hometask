// Types
import * as t from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    t.FILL_POSTS,
        payload: posts,
    };
};
export const newPost = (createdPost) => {
    return {
        type:    t.CREATE_POST,
        payload: createdPost,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: t.FETCH_POST_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: t.CREATE_POST_ASYNC,
    });

    const response = await api.create.fetch(comment);
    const result = await response.json();

    dispatch(newPost(result.data));
};
