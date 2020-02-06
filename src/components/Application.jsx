import React, { Component } from 'react';
import { firestore, auth, createUserProfileDocument } from '../firebase'; 
import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';
import Authentication from './Authentication'
class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null
  componentDidMount = async () => {
    // const snapshot = await firestore.collection('posts').get();
    // const posts = snapshot.docs.map(collectIdsAndDocs);
    // this.setState({ posts })

    //give me a function to call everytime the data changes
    this.unsubscribeFromFirestore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    })

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      console.log(user);
      this.setState({ user });
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  }

  // handleCreate = async post => {
    // const { posts } = this.state;

    // const docRef = await firestore.collection('posts').add(post);
    // const doc = await docRef.get();
    // const newPost = collectIdsAndDocs(doc);
    // this.setState({ posts: [newPost, ...posts] });

    // Firestore will handle updating thus not needing state
    // The datastore will tell the app that everything has changed
    // firestore.collection('posts').add(post);

  // };

  // handleRemove = async col_id => {
    // const allPosts = this.state.posts;
    // await firestore.collection("posts").doc(`${col_id}`).delete();
    // const posts = allPosts.filter(post => post.col_id !== col_id);
    // this.setState({ posts });

    // The datastore will tell the app that everything has changed
    // firestore.collection("posts").doc(`${col_id}`).delete();
  // }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        {/* <Posts posts={posts} onCreate={this.handleCreate} onRemove={this.handleRemove} /> */}
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
