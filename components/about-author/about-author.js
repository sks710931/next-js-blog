import classes from "./about-author.module.scss";
import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

export const AboutAuthor = ({ author }) => {
  return (
    <Fragment>
      <Col className={classes.container} sm={12} md={4}>
        <span className={classes.smallSpan}>About The Author</span>
        <img
          className={classes.image}
          src={author.authorImage}
          alt={author.authorName}
        />
        <h3>
          <Link href={`/about`}>
            <a>{author.authorName}</a>
          </Link>
        </h3>
        <div className={classes.desc}>
          <p>
            Shivam is a FullStack JavaScript Developer currently based out in
            Bengaluru, India. He's a Google Developer Expert in Angular and Web
            Technologies. He speaks about and teaches Angular on his blog.
          </p>
        </div>
      </Col>
    </Fragment>
  );
};
