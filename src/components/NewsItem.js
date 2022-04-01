import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem",height:"27rem",background:"#e3ea79"}}>
                    <img src={!imageUrl?"https://elitegymequipment.com/wp-content/uploads/2020/04/Life-Fitness-Bicep-Curl.jpg":imageUrl} style={{height:"10rem"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
