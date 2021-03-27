import Head from "next/head";
import { Layout } from "../components/layout";
import { TextBox } from "../components/textbox/textbox";
import styles from "../styles/Home.module.scss";
import { TextArea } from '../components/textarea/textarea';
import { Subscribe } from "../components/subscribe/subscribe";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.content}>

        </div>
        <Subscribe />
      </div>
    </Layout>
  );
}
