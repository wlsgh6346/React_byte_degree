import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/posts";
import PostList from '../components/PostList';

function PostListContainer() {
    const { data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(getPosts());
    }, [dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <PostList posts={data} />
}

export default PostListContainer;