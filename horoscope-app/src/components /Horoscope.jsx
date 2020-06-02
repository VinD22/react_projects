import React, { useState, useEffect } from 'react'
import { getHoroscope } from '../service/api';

export const Horoscope = ({ timeFrame, sign }) => {

    const [horoscope, setHoroscope] = useState([]);

    useEffect(() => {
        getHoroscope(sign, timeFrame).then(setHoroscope)
    }, [sign, timeFrame])


    return (
        <div>
            <h2>{timeFrame} : {sign}  </h2>
            <p>
                {horoscope}
            </p>
            <br />
            <br />
        </div>
    )
}
