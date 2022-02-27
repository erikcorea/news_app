import React, { useState, useEffect } from 'react';


export default function News() {
	const [news, setNews] = useState();
	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setNews(resJson))
			.catch(console.error);
	}, []);

  return (
    <div>
        {console.log(news)}
        <div>
			<h1 id='trending-news'>Trending News:</h1>
			<section className='container'>
				{console.log(news)}
				{news?.articles.map((article) => (
					<div
						key={article.title}
						className='card'
						style={{ backgroundImage: `url(${article.urlToImage})` }}>
						<div className='card-title'>
							<a
								href={article.url}
								style={{ textDecoration: 'none', color: 'white' }}>
								<h5>{article.title}</h5>
							</a>
						</div>
					</div>
				))}
			</section>
		</div>
    </div>
  )
}
