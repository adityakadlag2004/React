import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;


  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capetaliseFirstLetter(props.category)} - NewsMonkey`;

  const capetaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let str = props.category;
  document.title = `${capetaliseFirstLetter(str)}-NahMeh News`;

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  return (
    <>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capetaliseFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
        > 
            <div className="container">
                 
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            </div> 
        </InfiniteScroll>

    </>
)
};

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
  time: "",
};

News.prototype = {
  country: PropTypes.string,
  pageSize: PropTypes.int,
  category: PropTypes.string,
  time: PropTypes.string,
};

export default News;
