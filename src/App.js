import  { List }  from './List';
import  { Form }  from './Form';
import { LANGUAGES } from "./const/languages";
import styled from 'styled-components';
import React from 'react';
import {useEffect,useState} from 'react';

const Haeader = styled.header`
  display: flex;
  justify-content:space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HaeaderUl = styled.ul`
  display: flex;
  margin:0;
  padding:0;
`
const HaeaderLi = styled.li`
  list-style: none;
  padding: 4px 22px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`


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
        <Haeader>
          <HaeaderUl>
            <HaeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HaeaderLi>
            <HaeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HaeaderLi>
          </HaeaderUl>
        </Haeader>
      </header>
      {
        tab === 'list' ? <List title ={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
