import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  articles = [];
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
    time: "",
  };

  constructor(props) {
    super(props);

    console.log("News constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,

      country: "us",
      totalResults: 0,
    };
    let str = this.props.category;
    document.title = `${this.capetaliseFirstLetter(str)}-NahMeh News`;
  }

  capetaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed876a4e02f248398a6046085da7dbe3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pasredData = await data.json();
    this.setState({
      articles: this.state.articles.concat(pasredData.articles),
      totalResults: pasredData.totalResults,
      loading: false,
    });
  };

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed876a4e02f248398a6046085da7dbe3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pasredData = await data.json();
    this.setState({
      articles: pasredData.articles,
      totalResults: pasredData.totalResults,
      loading: false,
    });
    console.log(`total results are ${this.state.totalResults}`);
  }
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center" style={{ margin: "35px 0px" }}>
            Top HeadLines on {this.capetaliseFirstLetter(this.props.category)}
          </h3>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            scrollableTarget="scrollableDiv"
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <Newsitem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageurl={element.title ? element.urlToImage : ""}
                        newsurl={element.url ? element.url : ""}
                        author={element.author ? element.author : ""}
                        time={element.publishedAt ? element.publishedAt : ""}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
