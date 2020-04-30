import React from 'react'
import logo from "../logo.svg";

const LinkCard = props => {

    const linkImageStyle = {
        backgroundImage: 'url(https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)'
    }

    const mappedData = props.cards.map((card, i) => {
        return (
            <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle} />
                <div className="linkCardLink">
                    <h2><a href={card.linkHref} target="_external">{card.linkName}</a></h2>
                </div>

            </div>
        )
    })

    return (
        <>
            {mappedData}
        </>
    )
}

export default LinkCard; 
