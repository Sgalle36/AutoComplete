import { useState, useEffect } from 'react';

const words = ["bots", "fill", "mate", "focus", "complete"];

function Heading() {
    const [displayWord, setDisplayWord] = useState(0);

    useEffect(() => {
        while (displayWord != words.length - 1) {
            const interval = setInterval(() => { setDisplayWord(displayWord + 1) }, 800);
            return () => clearInterval(interval);
        }
    }, [displayWord]);

    return (
        <h1>Hello Auto<span className="bordered-subtle">{words[displayWord]}</span>!</h1>
    );
}

export default Heading;