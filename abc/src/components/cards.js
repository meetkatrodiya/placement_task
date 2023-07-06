import React from 'react'
import './card.css'

const Cards = (props) => {
    
  return (
    <div>
        <div class="container">
            <div class="card">
                <div class="image">
                    <img src={props.user.avatar} alt="image" />
                </div>
                <div class="content">
                    <h3>{props.user.first_name} {props.user.last_name}</h3>

                    <h5 class="email">{props.user.email}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;