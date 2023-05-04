import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleCount = (operation) => {
        switch (operation) {
            case "dec":
                if (count == 0) { return }
                setCount(count => count - 1)
                break
            case "add":
                setCount(count => count + 1)
                break
        }
    }

    return (
        <div>
            <section>
                <p onClick={() => handleCount("dec")}>-</p>
                <p>{count}</p>
                <p onClick={() => handleCount("add")}>+</p>
            </section>
        </div>
    )
}

export default Counter