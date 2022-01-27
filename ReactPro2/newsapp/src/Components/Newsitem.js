import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, time, author } = this.props;
    return (
      <div>
        <div className="card my-4 box-shadow py-3 py-sm-0">
          <img
            src={
              !imageurl
                ? "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
                : imageurl
            }
            className="card-img-top"
            alt=""
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              className="btn btn-dark btn-sm"
              target="_blank"
            >
              Read More
            </a>
            <p className="card-text my-2 mx-1">
              <small className="text-muted ">
                By {author?author:"Unknown"} on {new Date(time).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
