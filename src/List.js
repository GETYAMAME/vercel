import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container =  styled.div`
    padding: 12px 64px;
`

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
        <Container>
            {
                title.map((lang,index) => {
                    return <ListItem key={index}>{lang}</ListItem>
                })
            }
        </Container>
    )
}