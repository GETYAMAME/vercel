import  { List }  from './List';
import  { Form }  from './Form';

import React from 'react';
import {useState} from 'react';


function App() {
  const [tab, setTab] = useState('list')

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
        tab === 'list' ? <List title ="取扱い言語一覧"/> : <Form />
      }
    </div>
  );
}

export default App;
