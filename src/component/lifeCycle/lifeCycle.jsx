import React, {useEffect, useState} from "react";

//Reactの3種類のライフサイクル
//Mounting ... コンポーネントが配置される
//Updating ... コンポーネントが変更される
//Unmounting ... コンポーネントが破棄される

//useEffect() ... レンダリング時に引き起こされる処理

const Time = () => {
    //useState()で現在の状態を取得
    const [time, setTime] = useState([]);

    //更新関数をuseEffectのsetInetrvalを用いて、1秒ごとに更新する
    //useEffectの第2引数は、副作用が引き起こされるオブジェクトの中から、観察する者を指定する
    useEffect(() => {
        setInterval(() => {
            //インスタンス化
            const now = new Date();
            //取得
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const date = now.getDate();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            //更新関数
            setTime(year +  '年' + ' ' + month + '月'  + ' ' + date + '日' + ' ' + hours + ':' + minutes + ':' + seconds);
            //ログで確認
            console.log(time);
        }, 1000);
        
        //クリーンアップ関数
        //useEffectの状態が変わるごとに呼び出される！
        return () => {
            console.log('clean up!');
        }
    }, [time]);

    return (
        <h4>{time}</h4>
    );

};

export default Time;