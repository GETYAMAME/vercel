import  { List }  from './List';
import React from 'react';
import {useState} from 'react';


function App() {
  const [description,setDescription] = useState('クリック前の表示');

  const changeDescription = () => {
    setDescription('変えたよ')
  }

  return (
    <div>
      { description }
      <List title ="取扱い言語一覧"/>
      <button onClick={changeDescription}>ボタン</button>
    </div>
  );
}

export default App;
