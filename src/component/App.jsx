import React from "react";
import './App.css';
import {Article, InputForm, Counter ,Toggle, MainTitle, Time, CallApi} from './index';

const App = () => {
    return (
      <React.Fragment>
          <MainTitle title='InputForm' />
          <InputForm />
          <MainTitle title='Counter' />
          <Counter />
          <MainTitle title='Toggle' />
          <Toggle />
          <MainTitle title='useEffect' />
          <Time />
          <MainTitle title='fetvh API' />
          <CallApi />
          <MainTitle title='Article' />
          <Article title='Hello1' content='I`m fine!' />
          <Article title='Hello2' content='I`m fine!' />
          <Article title='Good Evening' content='You`re fine!' />
      </React.Fragment>
    );
};

export default App;
