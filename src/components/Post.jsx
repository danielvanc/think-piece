import React from 'react';
import { firestore } from '../firebase';
import moment from 'moment';


const Post = ({ col_id, title, content, User, createdAt, stars, comments, onRemove }) => {

  const postRef = firestore.collection("posts").doc(`${col_id}`)
  const remove = () => postRef.delete();

  const handleStar = (e) => postRef.update({ stars: stars +1 })

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {User.displayName}</p>
          <p>{moment(createdAt.toDate()).calendar()}</p>
        </div>
        <div>
          <button className="star" onClick={handleStar}>Star</button>
          {/* <button className="delete" onClick={() => onRemove(col_id)}>Delete</button> */}
          <button className="delete" onClick={remove}>Delete</button>
        </div>
      </div>
    </article>
  );
};

Post.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  User: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0,
};

export default Post;
