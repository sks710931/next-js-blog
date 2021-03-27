import Head from "next/head";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";
import { Subscribe } from "../components/subscribe/subscribe";
import { Slider } from './../components/slider/slider';
import { Container } from 'react-bootstrap';

export default function Home() {
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
        <Subscribe />
      </div>
    </Layout>
  );
}
