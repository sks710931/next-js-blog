import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { PostItem } from "./../post-item/post-item";
import classes from "./post-list.module.scss";

export const PostList = ({posts}) => {
  const [slicedPosts, setSlicedPosts] = useState([]);
  const [sliceCounter, setSliceCounter] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
    const slice = allPosts.slice(sliceCounter, sliceCounter + 10);
    setSlicedPosts([...slicedPosts, ...slice]);
    setSliceCounter(sliceCounter + slice.length);
    if (slice.length + slicedPosts.length === allPosts.length) {
      setShowMore(false);
    }
  };
  useEffect(() => {
    
        setAllPosts(posts);
        if (posts.length > 10) {
          initializeSlicedPost(posts, 10);
          setShowMore(true);
        } else {
          setSlicedPosts(posts);
          setSliceCounter(posts.length);
        }
  }, []);

  const initializeSlicedPost = (data, size) => {
    setSlicedPosts(data.slice(0, size));
    setSliceCounter(size);
  };
  return (
    <div>
      <Row>
        {slicedPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Row>
      {showMore && (
        <div className={classes.footer}>
          <button onClick={showMoreHandler} className="btnPrimary">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

