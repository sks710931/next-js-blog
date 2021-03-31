import Head from "next/head";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";
import { Subscribe } from "../components/subscribe/subscribe";
import { Slider } from "./../components/slider/slider";
import { Container } from "react-bootstrap";
import axios from "axios";
import { PostItem } from "../components/post-item/post-item";
import { PostList } from "../components/post-list/post-list";

export default function Home({ posts }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>
            Shivam Singh's Blog | A fullstack javacript developer from
            Bengaluru,India
          </title>
          <meta
            name="description"
            content="Fullstack Developer and Blogger based in Bengaluru India, currently focusing on Angular, React, Vue, Node and .NET Technologies"
          />
          <meta
            property="og:title"
            content="Fullstack Developer and Blogger based in Bengaluru India, currently focusing on Angular, React, Vue, Node and .NET Technologies"
          />
          <meta property="og:image" content="/logo.png" />
          <link rel="icon" href="/favicon.ico" />
          <script data-ad-client="ca-pub-5306253231496448" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>

        <div className={styles.content}>
          <Container className={styles.container}>
            <Slider />
          </Container>
          <Container>
            <PostList posts={posts} />
          </Container>
        </div>
        <Subscribe />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let data;
  const response = await axios.get(
    process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts"
  );
  if (response.status === 200) {
    return {
      props: {
        posts: response.data,
      },
    };
  } else {
    return {
      props: {
        posts: [],
      },
    };
  }
}
