import React, {useState} from "react";

const Counter = () => {
    //宣言
    const [count, setCount] = useState(0);
    //更新関数
    const countUp = () => {
        setCount(
            (prevState) => {
                return prevState + 1
            }
        );
    };
    const countDown = () => {
        setCount(
            (prevState) => {
                return prevState - 1
            }
        );
    };
    //余談
    const up = 'Count Up';
    const down = 'Count Down';
    return (
        <React.Fragment>
            <p>現在のカウントは:  {count}</p>
            <button onClick={countUp}>{up}</button>
            <button onClick={countDown}>{down}</button>
        </React.Fragment>
    )
}

export default Counter;