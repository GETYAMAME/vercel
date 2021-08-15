import React from 'react';
const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'PHP',
    'GO',
]

export const List = ({title}) => {
    return (
        <div>
            <h4>{title}</h4>
            {
                LANGUAGES.map((lang : string ,index : number) => {
                    return <div key={index}>{lang}</div>
                })
            }
        </div>
    )
}