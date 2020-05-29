import React from 'react'
import Lottie from 'react-lottie'
import * as twitterLike from './TwitterHeart.json'
import * as heart from './beating-heart.json'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heart.default,
    renderSettings: {
        preserveAspectRati: 'xMidYMid slice'
    }
}

export const Loading = () => {
    return (
        <div style={{ marginTop: '10px' }}>
            <Lottie options={defaultOptions} height={120} width={120} />
        </div>
    )
}
