import { useRouter } from "next/router";
import axios from "axios";
import { Layout } from "../../components/layout";
import classes from "../../styles/post.module.scss";
import Head from "next/head";
import { DiscussionEmbed } from "disqus-react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { parseDate } from "./../../utils/parse-date";
import { useEffect, useState } from "react";
import { PostBody } from './../../components/post-body/post-body';
import { Subscribe } from './../../components/subscribe/subscribe';

const PostPage = ({ post, body }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.href);
  });
  return (
    <Layout>
      <Head>
        <title>{`${post.title} | Shivam Singh's Blog`}</title>
        <meta name="description" content={post.subTitle} />
        <meta
          property="og:title"
          content={`${post.title} | Shivam Singh's Blog`}
        />
        <meta property="og:image" content={post.postImage} />
      </Head>
      <div className={classes.postHeader}>
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <h1 className={classes.postTitle}>{post.title}</h1>
              <p className={classes.postSubTitle}>{post.subTitle}</p>
            </Col>
            <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm={12} md={5}>
              <img
                className={classes.postImage}
                src={post.postImage}
                alt={post.title}
              />
            </Col>
            <Col className={classes.metaContainer} sm={12} md={6}>
              <div className={classes.metaRow}>
                {post &&
                  post.tags &&
                  post.tags.map((tag, index) => (
                    <Link key={index} href={`/category/${tag.tagName}`}>
                      <a><span  className={classes.tags}>{tag.tagName}</span></a>
                    </Link>
                  ))}
              </div>
              <div className={classes.metaRow}>
                {post && post.publishedAt && (
                  <span className={classes.metaSpan}>
                    {parseDate(post.publishedAt)}
                  </span>
                )}
                <span
                  className={classes.metaSpan}
                >{`${post.readTime} minute read`}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {body && body.body && post && post.author && (
        <PostBody body={body.body} author={post.author} />
      )}
      <Container>
        <Row>
          <Col sm={12}>
            {post && post.id && (
              <DiscussionEmbed
                shortname="blog-shivam-singh-com"
                config={{
                  url: location,
                  identifier: post.id.toString(),
                  title: post.title, //e.g. for Traditional Chinese (Taiwan)
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Subscribe />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  let data;
  const response = await axios.get(
    process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts/" + context.params.slug
  );
  if (response.status === 200) {
    const postBodyResponse = await axios.get(
      process.env.NEXT_PUBLIC_ENDPOINT_URL +
        "/posts/body/" +
        response.data.postBodyId
    );
    if (postBodyResponse.status === 200) {
      return {
        props: {
          post: response.data,
          body: postBodyResponse.data,
        },
      };
    }
  } else {
    return {
      props: {
        post: undefined,
        body: undefined,
      },
    };
  }
}

export default PostPage;
