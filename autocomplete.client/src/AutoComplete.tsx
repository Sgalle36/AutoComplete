import { ChangeEvent, useEffect, useState } from 'react';

const search = ((str: string, words: string[]) => words.filter(word => word.includes(str)).slice(0,10));

function AutoComplete() {
    const [suggestions, setSuggestions] = useState(['']);
    const [words, setWords] = useState(['']);

    useEffect(() => {
        getWords();
    }, []);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSuggestions(search(e.target.value, words));
    }

    return (
        <>
            <div>
                <input list="word-suggestions" type="text" className="simple-input-field" onChange={handleOnChange} />
                <datalist id="word-suggestions">
                    {suggestions.map((word) => <option value={word} key={word}>{word}</option>)}
                </datalist>
            </div>
        </>

    );

    async function getWords() {
        const response = await fetch("api/autocomplete");
        const data = await response.json();
        setWords(data);
    }
}



export default AutoComplete;