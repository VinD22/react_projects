import React, { useState, useEffect } from 'react';
import { getSigns } from '../service/api'

export const SelectSign = ({ onSignSelected, selected }) => {

    const [signs, setSigns] = useState([])


    useEffect(() => {
        getSigns().then(setSigns)
    }, [])

    return (
        <>
            <h5>Choose your sign</h5>
            {selected}
            <div className="grid" style={{ padding: '10px' }}>
                {signs.map((sign, i) => {
                    return <button className="sign" key={i} onClick={() => onSignSelected(sign)}>{sign}</button>
                })}
            </div>
        </>
    )
}