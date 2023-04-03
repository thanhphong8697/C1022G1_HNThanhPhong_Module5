import { useState} from "react";

function IncreaseCountTwo(){
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(counts => counts + 2)
    }
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => handleIncrease()}>
                Add 2
            </button>
        </>
    )
    
}
export default IncreaseCountTwo;