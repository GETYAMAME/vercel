import React from 'react';
import { useEffect } from 'react';


export const List = ({title}) => {
    //マウント、アンマウント時だけ動く
    useEffect(() => {
        console.log('List.js');
        return () => {
            console.log('unmount');
        }
    },[])
    return (
        <div>
            {
                title.map((lang,index) => {
                    return <div key={index}>{lang}</div>
                })
            }
        </div>
    )
}