import React from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { PostsContext } from '../providers/PostsProvider';

// const Posts = ({ posts, onCreate, onRemove }) => {
const Posts = () => {
  return (
    <section className="Posts">
      {/* <AddPost onCreate={onCreate} /> */}
      <AddPost />
      <PostsContext.Consumer>
        {posts => posts.map(post => <Post {...post} key={post.col_id} />)}
      </PostsContext.Consumer>
      {/* {posts.map(post => <Post {...post} key={post.col_id} onRemove={onRemove} />)} */}
    </section>
  )
}

export default Posts;
