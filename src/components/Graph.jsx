import React from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'

const Graph = (props) => {
    return (
        <>
            <LineChart
                width={props.width}
                height={props.height}
                data={props.content}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#00ff00" />
            </LineChart>
        </>
    )
}

export default Graph