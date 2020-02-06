import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import Application from './components/Application';
import UsersProvider from './providers/UsersProvider';
import PostsProvider from './providers/PostsProvider';

render (
  <UsersProvider>
    <PostsProvider>
      <Application />
    </PostsProvider>
  </UsersProvider>,
  document.getElementById('root')
);
