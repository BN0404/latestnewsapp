import { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [ articles, setArticles ] = useState([])
    
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7cf0863f30c3472985348140b5bc61fb')
            console.log(response);
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])

    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        description={article.description}
                    />
                    )
            })}
        </div>
    )
}

export default NewsList;