import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [];
  static defaultProps = { country: "us", pageSize: 5, category: "general" };
  constructor() {
    super();
    console.log("News constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      country: "us",
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed876a4e02f248398a6046085da7dbe3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pasredData = await data.json();
    this.setState({
      articles: pasredData.articles,
      totalResults: pasredData.totalResults,
    });
  }
  render() {
    const handleNextClick = async () => {
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        console.log("No News");
      } else {
        this.setState({ page: this.state.page + 1, loading: true });

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed876a4e02f248398a6046085da7dbe3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let pasredData = await data.json();
        this.setState({ articles: pasredData.articles, loading: false });
      }
    };

    const handlePreviousClick = async () => {
      this.setState({ page: this.state.page - 1 });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed876a4e02f248398a6046085da7dbe3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let pasredData = await data.json();
      this.setState({ articles: pasredData.articles });
    };
    return (
      <div className="container my-3">
        <h3 className="text-center" style={{ margin: "35px 0px" }}>
          Top HeadLines
        </h3>

        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageurl={element.title ? element.urlToImage : ""}
                  newsUrl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
