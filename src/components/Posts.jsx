import React from 'react'
import Post from './Post';
import AddPost from './AddPost';

const Posts = ({ posts, onCreate, onRemove }) => {
  return (
    <section className="Posts">
      {/* <AddPost onCreate={onCreate} /> */}
      <AddPost />
      {/* {posts.map(post => <Post {...post} key={post.col_id} onRemove={onRemove} />)} */}
      {posts.map(post => <Post {...post} key={post.col_id} />)}
    </section>
  )
}

export default Posts;
