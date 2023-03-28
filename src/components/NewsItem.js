

const NewsItem = ({title, urlToImage, description, url}) => {
    return (
        <div className="news">
            <h2> <a href={url}> { title}</a> </h2>
            <img className="img" src={urlToImage} alt={title} />
            <p> {description}</p>
            
            
    </div>
    
        )

}

export default NewsItem;