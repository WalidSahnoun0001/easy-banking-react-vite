import React from 'react'
import './hero.css'

function Hero({open}) {
  return (
    <section className={`hero ${open? 'ready': ''}`}>
        <div className="content">
            <h4>Next generation digital banking</h4>
            <p>
                Take your financial life online. Your Easybank account
                will be a one-stop-shop for spending. saving, budgeting, investing.
                and much more.
            </p>
            <div className="request-invite">
                <button>Request Invite</button>
            </div>
        </div>
        <figure>
            <img src="./images/image-mockups.png" alt="" />
        </figure>
    </section>
  )
}

export default Hero