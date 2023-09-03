import React, { useState } from "react";
import {PublishButton, ChangeState, Content, Title} from './index';

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () => {
        setIsPublished(true);
    };
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <ChangeState />
            <PublishButton isPublished={isPublished} onClick={publishArticle}/>
        </div>
    );
};

//onClickに関数を渡すときの注意
//OKなパターン
//<PublishButton isPublished={isPublished} onClick={publishArticle}/>
//<PublishButton isPublished={isPublished} onClick={() => publishArticle()}/>
//NGなパターン
//無限レンダリングが発生し、エラーとなる
////<PublishButton isPublished={isPublished} onClick={publishArticle()}/>


export default Article;