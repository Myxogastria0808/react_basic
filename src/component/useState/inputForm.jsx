import React, {useState} from "react";

const InputForm = () => {
    //宣言
    const [name, setName] = useState('')
    //更新関数の作成
    const handleName = (event) =>  {
        //evenetは、イベントを取得してくる
        //target.valueは、その要素の現在の値
        setName(event.target.value);
    };
    return (
        <React.Fragment>
            <input 
                onChange={(event) => handleName(event)}
                type={'text'}
                value={name}
            />
            <p>{name}</p>
        </React.Fragment>
    );
};

export default InputForm;