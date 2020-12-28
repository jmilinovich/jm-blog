import React from 'react';
import { PostData } from '../loader';
import { format } from 'fecha';

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <a
      className={'postcard'}
      href={`/${post.path}`}
      style={{
        textDecoration: 'inherit',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '400px',
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          borderRadius: '2px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          // marginBottom:48
        }}
      >
        {post.thumbnailPhoto && (
          <div
            style={{
              background: `url(${post.thumbnailPhoto}) no-repeat center center`,
              backgroundSize: 'cover',
              width: '100%',
              flex: 1,
            }}
          />
        )}
        <div
          style={{
            // padding: '15px 10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* {post.author && ( */}
            <p 
              style ={{
                fontSize:14,
                opacity:'0.6',
                marginBottom:8,
                marginTop:24
              }}>
              {post.author} | {post.datePublished ? format(new Date(post.datePublished), 'MMMM Do, YYYY') : ''}
            </p>
          {/* )} */}
          {post.title && (
            <h2 className="card-title"
              style={{
                margin: '0px 0px 6px 0px',
                padding: '0',
                fontSize: '27px',
                fontWeight: 600,
              }}
            >
              {post.title}
            </h2>
          )}
          {post.subtitle && (
            <p className="card-subtitle"
              style={{
                margin: '0px',
                padding: '0px',
                fontSize: '20px',
                color: '#111',
                opacity: '0.8',
                fontFamily:'Georgia' 
              }}
            >
              {post.subtitle}
            </p>
          )}
          <div className='blog-arrow' style={{textAlign:'right', marginTop:6, fontSize:24}}>→</div>
          <div style={{ flex: 1 }}> </div>
        </div>
      </div>
    </a>
  );
};
