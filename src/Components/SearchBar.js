import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [text, setText] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(text);

        //callback from parent component
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a video.</label>
                    <input 
                        type="text" 
                        value={text}
                        onChange={(event) => setText(event.target.value)} 
                    />
                </div>
            </form>
        </div>
    );
};


export default SearchBar;