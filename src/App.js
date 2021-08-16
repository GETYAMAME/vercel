import  { List }  from './List';
import  { Form }  from './Form';
import { LANGUAGES } from "./const/languages";

import React from 'react';
import {useState} from 'react';


function App() {
  const [tab, setTab] = useState('list');
  const [langs,setLangs] = useState(LANGUAGES);
  const addLang = (lang) => {
    langs.push(lang)
    setLangs(langs);
    setTab('list');
  }
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
