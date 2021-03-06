import React from "react";
import { useParams, useHistory } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import "./PostPage.css";

const PostDeletePage = () => {
  const { post_id } = useParams();
  const history = useHistory();

  /**
   * using WebAPi, HTMLFormElement
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  */
  const fDeletePost = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch(`http://localhost:5000/api/v1/posts/delete/${post_id}`, {
        method: "DELETE"
      });
      const response = await result.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    history.goBack();

  }

  const fGoBack = async () => {
    history.goBack();
  }

  return (
    <MainLayout>
      <div className="PostDeletePage">
        <div className="container">

          <div className="main__head">Post a new reply</div>
          <div style={{backgroundColor: "#ece8e1", padding: "10px"}}>
            <p>Are you sure you want to delete this post?</p>
            <button onClick={fDeletePost}>Yes</button>
            <button onClick={fGoBack}>No</button>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default PostDeletePage;