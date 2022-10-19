import React from 'react';
import Postitem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className='PostList'>
      <h1 style={{ textAlign: 'center' }}>Список заказов</h1>
      <div className='Spisok'>
        {posts.map(post =>
          <Postitem post={post} key={post.key} />
        )}
      </div>
    </div>
  );
};

export default PostList;