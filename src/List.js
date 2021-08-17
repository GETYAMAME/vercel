import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { TabBodyContainer } from "./components/tab-body-container";


const ListItem = styled.div`
    padding: 8px 16px;
    
    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE
    }

`

export const List = ({title}) => {
    //マウント、アンマウント時だけ動く
    useEffect(() => {
        console.log('List.js');
        return () => {
            console.log('unmount');
        }
    },[])
    return (
        <TabBodyContainer main='取り扱い言語リスト'>
            {
                title.map((lang,index) => {
                    return <ListItem key={index}>{lang}</ListItem>
                })
            }
        </TabBodyContainer>
    )
}