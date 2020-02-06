import React, { useContext } from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { PostsContext } from '../providers/PostsProvider';

// const Posts = ({ posts, onCreate, onRemove }) => {
const Posts = () => {
  const posts = useContext(PostsContext)
  return (
    <section className="Posts">
      <AddPost />
      {posts.map(post => < Post {...post} key={post.col_id} />)}
      {/* <AddPost onCreate={onCreate} /> */}
      
      {/* <PostsContext.Consumer>
        {posts => posts.map(post => < Post {...post} key={post.col_id} />)}
      </PostsContext.Consumer> */}
      {/* {posts.map(post => <Post {...post} key={post.col_id} onRemove={onRemove} />)} */}
    </section>
  )
}

export default Posts;
