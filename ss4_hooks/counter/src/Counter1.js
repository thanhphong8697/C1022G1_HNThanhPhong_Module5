import { useState} from "react";

function IncreaseCountOne(){
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(counts => counts +1)
    }
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => handleIncrease()}>
                Add 1
            </button>
        </>
    )
    
}
export default IncreaseCountOne;