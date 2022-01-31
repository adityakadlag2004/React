import React from "react";
import PropTypes from "prop-types";
const Newsitem = (props) => {
  
  return (
    <div>
      <div className="card my-4 box-shadow py-3 py-sm-0">
        <img src={props.imageurl} className="card-img-top" alt="" height={300} />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a
            rel="noreferrer"
            href={props.newsUrl}
            className="btn btn-dark btn-sm"
            target="_blank"
          >
            Read More
          </a>
          <p className="card-text my-2 mx-1">
            <small className="text-muted ">
              By {props.author ? props.author : "Unknown"} on {new Date(props.time).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

Newsitem.defaultProps = {
  title: "",
  description: "",
  imageurl:
    "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I=",
  newsUrl: "",
  time: "",
  author: "Aditya Kadlag",
};
Newsitem.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageurl: PropTypes.string,
  newsUrl: PropTypes.string,
  time: PropTypes.string,
  author: PropTypes.string,
};

export default Newsitem;
