/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from './post-body.module.scss'
import { AboutAuthor } from './../about-author/about-author';

export const PostBody = ({ body, author }) => {
  
  return (
    <div className={classes.bodyContainer}>
      <Container className={classes.container}>
        <Row>
          <Col className={classes.bodyColumn} sm={!2} md={8}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Col>
          {
            author && <AboutAuthor author={author}/>
          }
        </Row>
      </Container>
    </div>
  );
};