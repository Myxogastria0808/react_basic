import React, { useEffect, useState } from "react";

const CallApi = () => {
    //宣言
    const [id, setId] = useState('Myxogastria0808');
    const [name, setName] = useState('');
    //更新
    const inputId = () => {
        setId(id);
    };
    //更新関数
    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            setName(data.name);
            console.log(data.name);
        }).catch((error) => {
            console.log(error);
        })
    }, [id, name]);

    return (
        <React.Fragment>
            <h3>GitHubのユーザーIDを入力してください。</h3>
            <input 
                onChange={(event) => setId(event.target.value)}
                type={'text'}
                value={id}
            />
            <button onClick={inputId}>情報を取得！</button>
            <h3>{id}のユーザー名は、{name}です。</h3>
        </React.Fragment>
    );
};

export default CallApi;