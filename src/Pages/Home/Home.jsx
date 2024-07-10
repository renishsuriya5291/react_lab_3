import { useState } from "react";

function Home() {
    const [date, setDate] = useState(new Date().toLocaleDateString())
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    setInterval(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, 1000);

    return (
        <>
            <div className="container">
                <h1>Home Works</h1>
                <h2>It is {date}</h2>
                <h2>It is {time}</h2>
            </div>
        </>
    );
}

export default Home;