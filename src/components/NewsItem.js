import React,{Component} from 'react';
class NewsItem extends Component
{
  render()
  {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return(
      <div>
            <div className="card border border-dark bg-dark" style={{color:'white'}}>
                <img src={imageUrl?imageUrl:"https://www.aljazeera.com/wp-content/uploads/2025/03/image-1743337742.jpg?resize=1920%2C1080&quality=80"} className="card-img-top" alt="..." style={{height:'17rem'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">Source: {source}</p>
                    <p className="card-text">Author: {author?author:"Unknown"} </p>
                    <p className="card-text">On: {new Date(date).toGMTString()}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}
export default NewsItem;