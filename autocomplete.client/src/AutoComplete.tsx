import React from 'react';

const words = ["apples", "bananas", "donuts", "tacos", "austronaut", "appendix"];
const search = ((e: any) => words.filter(w => w === e.value));


function AutoComplete() {
    return (
        <>
            <p>Hello Auto...complete!</p>
            <input type="text" className="simple-input-field" onChange={search} />
            <select>
                <option value="banana">Banana</option>
            </select>
        </>

    );
}

export default AutoComplete;