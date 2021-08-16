import React from 'react';


export const List = ({title}) => {
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