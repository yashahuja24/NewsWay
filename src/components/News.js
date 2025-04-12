import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
class News extends Component {
  static defaultProps={
    category:"general"
  };
  static propTypes={
    category: PropTypes.string,
    text: PropTypes.string
  };
  constructor() {
    super();
    this.state = {
      articles:[],
      page:1,
      loading:false,
      totalResults:0,
    };
  }
  async componentDidUpdate(prevProps){
    if(prevProps.text !== this.props.text) {
      this.setState({page:1});
      await this.updateNews();
    }
  }
  async updateNews()
  {
    let url=``;
    this.props.setProgress(5);
    if (this.props.text && this.props.text.trim()!=="") {
      url=`https://newsapi.org/v2/everything?q=${this.props.text}&language=en&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=18`;
    } else {
      url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=18`;
    }
    this.setState({loading:true});
    let data=await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
      page:this.state.page
    });
    this.props.setProgress(100);
  };
  async componentDidMount(){
    await this.updateNews();
  }
  handleprev=async()=>{
    let url=``;
    this.props.setProgress(5);
    if (this.props.text && this.props.text.trim() !== "") {
      url = `https://newsapi.org/v2/everything?q=${this.props.text}&language=en&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=18`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=18`;
    }
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
      page:this.state.page-1
    });
    this.props.setProgress(100);
  };
  handlenext=async()=>{
    let url=``;
    this.props.setProgress(5);
    if (this.props.text && this.props.text.trim() !== "") {
      url = `https://newsapi.org/v2/everything?q=${this.props.text}&language=en&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=18`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=18`;
    }
    this.setState({loading: true });
    let data=await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
      page:this.state.page+1
    });
    this.props.setProgress(100);
  };
  render(){
    return (
      <div className="container my-3 mt-5 pt-3">
        <div>
          {/* uppercase function used here */}
          <h1>Latest news on NewsWay - {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h1>
          {this.state.loading && <Spinner />}
            <div className="row">
              {
              !this.state.loading &&
              this.state.articles &&
              this.state.articles.length > 0 ? (
                this.state.articles.map((element, index) => (
                  <div className="col-md-4 my-2" key={index}>
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 40) : "No title"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : "No description"
                      }
                      imageUrl={element.urlToImage ? element.urlToImage : "null"}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
              </div>
                ))
              ) : (
                <div className="container text-center">
                  <h1>No articles found</h1>
                </div>
              )
              }
              </div>
          </div>
        <div className="container my-3">
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page<=1}
              className="btn btn-dark"
              onClick={this.handleprev}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page>=Math.ceil(this.state.totalResults/18)
              }
              className="btn btn-dark"
              onClick={this.handlenext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
        </div>
    );
  }
}
export default News;
