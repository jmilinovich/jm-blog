import Head from 'next/head';

import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';

const Home = (props: { post: string; posts: PostData[] }) => {
  return (
    <div>
      <Head>
        <title>Aesthetic Blog</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:creator" content="@useaesthetic" />
        <meta name="twitter:site" content="@useaesthetic" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="The Aesthetic Blog" />
        <meta name="twitter:description" content="Learnings from the forefront of design automation" />
        <meta name="twitter:image" content="https://blog.aesthetic.com/aesthetic-mark.png" />


        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://blog.aesthetic.com/aesthetic-mark.png" key="ogimage" />
        <meta property="og:site_name" content="Aesthetic Blog" key="ogsitename" />
        <meta property="og:title" content="The Aesthetic Blog" key="ogtitle" />
        <meta property="og:description" content="Learnings from the forefront of design automation" key="ogdesc" />

      </Head>

      <div className="container blog-wrap" style={{
        marginBottom:'140px',
        maxWidth:'600px',
      }}
      >
        <h1 
          style={{ 
            textAlign: 'left',
            marginBottom: 16,
            color:'rgba(0, 0, 0, 0.3)'
          }}>
            Blog</h1>
        <div>
          {props.posts.map((post, j) => {
            // return (
            //   <>
            //   <a href={post.path} target="_blank">
            //     {post.title}
            //   </a>
            //   </>
            // );
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  return { props: { posts } };
};
