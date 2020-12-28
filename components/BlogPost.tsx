import Head from 'next/head';
import React from 'react';
import { format } from 'fecha';

import { Markdown } from './Markdown';
import { PostData } from '../loader';

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle, datePublished, author, authorTitle, authorPhoto, bannerPhoto } = post;

  const authorData = (
    <div>
      <span>{author ? author : ''}, {authorTitle ? authorTitle : ''} </span>
      <br />
      <span style={{ opacity: 0.6 }}>
        {datePublished ? format(new Date(datePublished), 'MMMM Do, YYYY') : ''}
      </span>
    </div>
  );

  return (
    <div className="container">
      <Head>
        <title>{title}</title>

        {/* Twitter */}
        <meta name="twitter:creator" content="@useaesthetic" />
        <meta name="twitter:site" content="@useaesthetic" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={bannerPhoto} />


        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content={bannerPhoto} key="ogimage" />
        <meta property="og:site_name" content="Aesthetic Blog" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={subtitle} key="ogdesc" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="post-wrap"
        style={{
          // display: 'flex',
          // flexDirection: 'row',
          // justifyContent: 'center',
          // width: '100%',
          // padding: '0px 4vw',
          width: '100%', 
          maxWidth: '600px',
          margin:'auto',
          marginBottom:'130px',
        }}
      >
        
          <div className="post-header-wrap" style={{ margin: '0px 0px 36px 0px' }}>
            <div 
              style={{
                  marginBottom:36, 
                  height:275, 
                  width:'100%', 
                  backgroundImage: `url(${bannerPhoto})`,
                  backgroundSize: 'cover',
                  overflow:'hidden',
                  borderRadius:2,
                  marginTop:12
                }}
              >
              {/* <img style={{width:'100%', borderRadius:'2px'}} /> */}
            </div>
            {title && (
              <h1 className="post-title"
                style={{
                  fontSize: '62px',
                  marginBottom:0,
                  lineHeight:1.15
                }}
              >
                {title}
              </h1>
            )}
            
            {subtitle && (
              <h2 className="post-subtitle"
                style={{
                  margin: '16px 0px',
                  padding: 0,
                  lineHeight:'1.4',
                  border: 'none',
                  opacity: '0.3',
                  fontSize: '32px',
                }}
              >
                {subtitle}
              </h2>
            )}
            <hr
              style={{
                height: '1px',
                color: '#eee',
                opacity: 0.5,
                margin: '24px 0px',
              }}
            />

            <div
              style={{
                margin: '0px',
                padding: '0px',
              }}
            >
              <div 
                style={{
                  display:'flex',
                  justifyContent:'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    margin: '0px',
                    padding: '0px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    
                  }}
                >
                  <img className="post-author-photo"
                    src={authorPhoto}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '100px',
                      margin: '0px 12px 0px 0px',
                      border: '2px solid #ece23c',
                      padding:'4px',
                      cursor: 'default !important',
                    }}
                  />
                  <div className="post-author-data">{authorData}</div>
                </div>
                <div>
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-via="useaesthetic" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script>
                </div>
              </div>
            </div>
          </div>

          <Markdown source={post.content} />
        </div>
    </div>
  );
};
