
import React, { useState, useEffect } from 'react';
import { getSigns } from '../service/api'

export const SelectTimeFrame = ({ onTimeFrameSelected }) => {

    return (
        <>
            <h5>Select a timeframe</h5>

            <div className="grid" style={{ padding: '10px' }}>
                {['yesterday', 'today', 'tomorrow'].map((timeframe, i) => {
                    return <button className="timeframe" key={timeframe} onClick={() => onTimeFrameSelected(timeframe)}>{timeframe}</button>
                })}
            </div>
        </>
    )
}