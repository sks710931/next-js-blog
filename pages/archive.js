import { Layout } from "../components/layout";
import { Subscribe } from "../components/subscribe/subscribe";
import classes from "../styles/archive.module.scss";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { months } from "./../data/month";
import axios from "axios";
import Icon from "@material-ui/core/Icon";
import { parseDate } from "./../utils/parse-date";
import Link from "next/link";

export default function ArchivePage({ data }) {
  const { years } = data;
  return (
    <Layout>
      <div className={classes.content}>
        <Container className={classes.container}>
          <Row>
            <Col>
              <h3 className={classes.heading}>Blog Archive</h3>
              <Accordion defaultActiveKey="0">
                {years &&
                  years.map((year) =>
                    year.months.map(
                      (month) =>
                        month.posts.length > 0 && (
                          <Card className={classes.card}>
                            <Accordion.Toggle
                              className={classes.cardHeader}
                              as={Card.Header}
                              eventKey={`${year.year}${month.month}`}
                            >
                              <div className={classes.monthHeader}>
                                <Icon>arrow_right</Icon>

                                <span>
                                  {`${months[month.month - 1]} ${year.year}`}
                                </span>
                                <span className={classes.count}>{`  (${month.posts.length} Posts)`}</span>
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse
                              eventKey={`${year.year}${month.month}`}
                            >
                              <Card.Body className={classes.cardBody}>
                                {month.posts.map((post) => (
                                  <div className={classes.row}>
                                    <span className={classes.date}>
                                      {parseDate(post.publishedAt)}
                                    </span>
                                    <Link href={`/posts/${post.slug}`}>
                                      <a>
                                        <span className={classes.title}>
                                          {post.title}
                                        </span>
                                      </a>
                                    </Link>
                                  </div>
                                ))}
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )
                    )
                  )}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <Subscribe />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let data;
  const response = await axios.get(
    process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts/archive"
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
        data: undefined,
      },
    };
  }
}
