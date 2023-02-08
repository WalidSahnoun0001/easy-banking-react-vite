import React from 'react'
import './why.css'

function Why() {

    const features = [
        {id: 1, title: "Online Banking", content: "Our Modern web and mobile applications allow you to keep track of your finances wherever you are in the world.", img: '/images/icon-online.svg'},
        {id: 2, title: "Simple Budgeting", content: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.", img: '/images/icon-budgeting.svg'},
        {id: 3, title: "Fast Onboarding", content: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.", img: '/images/icon-onboarding.svg'},
        {id: 4, title: "Open API", content: "Manage your savings, investements, pension and much more from one account. Tracking your money has never beeen easier.", img: '/images/icon-api.svg'}
    ]

  return (
    <section className="why">
        <div className="big-box">
          <div className="header">
          <h2>Why choose Easybank?</h2>
            <p>
                We leverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.
            </p>
          </div>
            <div className="boxes">
                {
                    features.map(feature => (
                    <div className="box" key={feature.id}>
                        <figure>
                            <img src={feature.img} alt="" />
                        </figure>
                        <h3>{feature.title}</h3>
                        <p>{feature.content}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Why