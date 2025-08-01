import React from 'react'
import "./Card.css"

const cards = (props) => {
    return (
        <div className='Card' style={{overflow: 'hidden'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqoeMMTMJcmC9CDSdDTk1oWcnKIq-TfDFfw&s" width="380" alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default cards