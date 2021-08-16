import React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types'

export const Form = () => {
    const [text,setText] = useState();

    const submitForm = (event) => {
        event.preventDefault();
        console.log(text)
    }

    return (
        <div>
            <h4>新しい言語の追加</h4>
            <form onSubmit={submitForm}>
                <div>
                    <input 
                    type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    />
                </div>
                <div>
                    <button>追加</button>
                </div>
            </form>
        </div>
    )
}