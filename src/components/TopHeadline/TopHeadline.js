import React, {useEffect,useState} from 'react';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-07-25&sortBy=publishedAt&apiKey=7d13fae055264b1886380a42085c5290';
        fetch(url)
        .then(res=>res.json())
        .then(data => setArticles(data.articles))

    },[])
    return (
        <div>
            <h1>Top Headlines : {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;