import React, { Component } from "react";


// ----------SCSS--------------
import "./BlogPage.scss";
// ----------SCSS--------------


//---------IMPORTED COMPONENTS--------------
import BlogCard from "../../Components/BlogCard/BlogCard.js";
//---------IMPORTED COMPONENTS--------------



class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="blogPage-container">
      <BlogCard />
    </div>;
  }
}

export default BlogPage;
