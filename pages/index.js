import Head from "next/head";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";
import { Subscribe } from "../components/subscribe/subscribe";
import { Slider } from "./../components/slider/slider";
import { Container } from "react-bootstrap";
import axios from "axios";

export default function Home({ posts }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.content}>
          <Container className={styles.container}>
            <Slider />
          </Container>
        </div>
        {JSON.stringify(posts)}
        <Subscribe />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let data;
  const response = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts");
  if(response.status===200){
    return {
      props: {
        posts: response.data,
      },
    };
  }
  else{
    return {
      props: {
        posts: [],
      },
    };
  }
  
}
