import React, {useState} from "react";

const Toggle = () => {
    //宣言
    const [open, setOpen] = useState(false);
    //更新関数
    const toggle = () => {
        setOpen(
            (prevState) => {
                return !prevState
            }
        );
    };
    return (
        <button onClick={toggle}>
            {open ? 'OPEN' : 'CLOSE'}
        </button>
    );
};

export default Toggle;