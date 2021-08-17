import styled from "styled-components"
import { useState,useRef,useEffect } from "react"

const HintContainer = styled.div`
    position: relative;
    display: inline-flex;
    margin-left: 12px;
`

const HintInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #757575;
    width: 24px;
    height:24px;
    cursor:pointer;
`

const PopupContainer = styled.div`
    position: absolute;
    left: 88%;
    bottom: 12px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    width: 140px;
`


export const Hint = () => {
    const [showFlg,setShowFlg] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current) ref.current.focus();
    })
    
    return (
        <HintContainer>
            <HintInner onClick={() => setShowFlg(true)}>?
            </HintInner>
            {
                showFlg
                && (<PopupContainer ref={ref} onBlur={() => setShowFlg(false)} tabIndex={0}>言語の名前です</PopupContainer>)
            }
        </HintContainer>
    )
}