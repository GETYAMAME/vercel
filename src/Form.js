import React from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { Button } from './components/button'
import { TabBodyContainer } from "./components/tab-body-container";
import { Hint } from "./Hint";



const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`
const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    margin: 0px 0px 20px 0px;
    border: 1px solid black;
`

const FormButton = styled(Button)`
    width: 120px;
`

export const Form = ({ onAddLang }) => {
    const [text,setText] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        onAddLang(text);
        console.log(text);
    }

    return (
        <TabBodyContainer main='新しい言語の追加'>
            <form onSubmit={submitForm}>
                <div>
                <Label>言語</Label>
                    <Input 
                    type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    />
                    <Hint/>
                </div>
                <div>
                    <FormButton>追加</FormButton>
                </div>
            </form>
        </TabBodyContainer>
    )
}