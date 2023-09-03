//useStateを利用するときは、{useStateをimportしてくる]}
import React, { useState } from "react";

/* useStateの使いかた */
// 宣言
// const [現在の状態, 更新関数] = useState(初期値);
//※初期値や新しい値は、bool,str,number...何でもいい
// 更新
// setState(新しい値);

//ex
const ChangeState = () => {
    //宣言
    const [changeStatus, setChangeStatus] = useState('Not changed');
    //更新関数
    //更新関数は、必ずラップする!
    const setChangeStatusWrap = () => {
        setChangeStatus('changed');
    };
    return (
        <React.Fragment>
                <p>{changeStatus}</p>
                <button onClick={setChangeStatusWrap}>ChangeState</button>
        </React.Fragment>
    );
};

export default ChangeState;