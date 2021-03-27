import { Layout } from "./../../components/layout";
import { Subscribe } from "./../../components/subscribe/subscribe";
import { Head } from "next/head";
import { Container } from "react-bootstrap";
import { PostList } from "./../../components/post-list/post-list";
import axios from "axios";
import classes from '../../styles/tag.module.scss';
import { useRouter } from 'next/router';

function CategoryPage({ data }) {
  const { posts } = data;
  const router = useRouter();
  const { tag } = router.query;
  return (
    <Layout>
      <Container>
        <h1 className={classes.pageHeading}>
          Posts on <span>{tag}</span>
        </h1>
        {posts && <PostList posts={posts} />}
      </Container>
      <Subscribe />
    </Layout>
  );
}

export default CategoryPage;

export async function getServerSideProps(context) {
  let data;
  const response = await axios.get(
    process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts/tag/" + context.params.tag
  );
  if (response.status === 200) {
    return {
      props: {
        data: response.data,
      },
    };
  } else {
    return {
      props: {
        data: [],
      },
    };
  }
}
