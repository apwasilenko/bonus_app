import React from 'react';
import Postitem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список заказов</h1>
      {posts.map(post =>
        <Postitem post={post} key={post.id} />
      )}
    </div>
  );
};

export default PostList;