import  { List }  from './List';
import  { Form }  from './Form';
import { LANGUAGES } from "./const/languages";

import React from 'react';
import {useEffect,useState} from 'react';


function App() {
  const [tab, setTab] = useState('list');
  const [langs,setLangs] = useState(LANGUAGES);
  const addLang = (lang) => {
    //langs.push(lang)　これだとuseEffectが走らない set で値が変更されたことを明示してあげる必要があるのか？？
    setLangs([...langs, lang]);
    setTab('list');
  }

  useEffect(() => {
    console.log('useEffect');
  },[langs])

  return (
    <div>
      <header>
        <ul>
            <li onClick={() => setTab('list')}>リスト</li>
            <li onClick={() => setTab('form')}>フォーム</li>
        </ul>  
      </header>
      <hr />
      {
        tab === 'list' ? <List title ={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
