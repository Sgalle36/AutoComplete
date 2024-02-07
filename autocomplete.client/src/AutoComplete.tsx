import { ChangeEvent, useState } from 'react';

const words = ["apples", "bananas", "donuts", "tacos", "astronaut", "appendix"];
const search = ((str: string) => words.filter(w => w.includes(str)));


function AutoComplete() {
    const [suggestions, setSuggestions] = useState(['']);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSuggestions(search(e.target.value));
    }

    return (
        <>
            <h1>Hello Auto...complete!</h1>
            <div>
            <input list="word-suggestions" type="text" className="simple-input-field" onChange={handleOnChange} />
            <datalist id="word-suggestions">
                {suggestions.map((word) => <option value={word} key={word}>{word}</option>)}
                </datalist>
            </div>
        </>

    );
}

export default AutoComplete;