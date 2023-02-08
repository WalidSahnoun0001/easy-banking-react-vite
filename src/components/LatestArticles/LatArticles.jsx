import React from 'react'
import './lat-articles.css'

function LatArticles() {

    const articles = [
        {id: 1, title: "Receive money in any currency with no fees", content: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive in a single...", author: "Claire Robinson", img: './images/image-plane.jpg'},
        {id: 2, title: "Treat yourself without worrying about money", content: "Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...", author: "Wilson Hutton", img: './images/image-plane.jpg'},
        {id: 3, title: "Take your Easybank card wherever you go", content: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...", author: "Wilson Hutton", img: './images/image-plane.jpg'},
        {id: 4, title: "Our invite-only Beta accounts are now live!", content: "After a lot of hard word by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...", author: "Claire Robinson", img: './images/image-confetti.jpg'}
    ]

  return (
    <section className="latest-articles">
       <div className="latest-articles-box">
        <h2>Latest Articles</h2>
            <div className="articles">
                {
                    articles.map(article => (
                        <article key={article.id}>
                            <figure>
                                <img src={article.img} alt="" />
                            </figure>
                           <div className="content">
                            <h6>By {article.author}</h6>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                           </div>
                        </article>
                    ))
                }
            </div>
       </div>
    </section>
  )
}

export default LatArticles