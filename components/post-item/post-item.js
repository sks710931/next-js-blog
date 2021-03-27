import { Col } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import Link from "next/link";
import { parseDate } from "../../utils/parse-date";
import classes from "./post-item.module.scss";
export const PostItem = ({ post }) => {
  const {
    title,
    subTitle,
    author,
    tags,
    slug,
    publishedAt,
    readTime,
    postImage,
  } = post;

  return (
    <Col className={classes.postContainer} sm={12} md={6}>
      <div className={classes.postBox}>
        <Link href={`/posts/${slug}`}>
          <a>
            <img className={classes.thumbnail} src={postImage} alt={title} />
          </a>
        </Link>
        <div className={classes.body}>
          <div className={classes.heading}>
            <Link href={`/posts/${slug}`}>
              <a>
                <h3>{title}</h3>
              </a>
            </Link>
          </div>
          <div className={classes.meta}>
            <div className={`${classes.flexChild} ${classes.author}`}>
              <Link href={`/about`}>
                <a>
                  <img
                    className={classes.authorImage}
                    src={author.authorImage}
                    alt={author.authorName}
                  />
                </a>
              </Link>
              <Link href={`/about`}>
                <a>
                  <span className={classes.authorName}>
                    {author.authorName}
                  </span>
                </a>
              </Link>
            </div>
            <div className={`${classes.flexChild}`}>
              <span className={classes.postDate}>{parseDate(publishedAt)}</span>
            </div>
            <div className={`${classes.flexChild} ${classes.readTime}`}>
              <span>{`${readTime} min read`}</span>
            </div>
          </div>
          <div className={classes.description}>
            <span>{subTitle}</span>
          </div>
          <div className={classes.actions}>
            <Link href={`/posts/${slug}`}>
              <a>
                <span>Read More</span>
                <Icon>arrow_forward</Icon>
              </a>
            </Link>
          </div>
        </div>
        {tags && (
          <div className={classes.topTag} style={{ backgroundColor: `green` }}>
            <Link href={`/category/${tags[1].tagName}`}>
              <a>
                <span>{tags[1].tagName}</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Col>
  );
};
