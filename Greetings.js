import React from 'react';

function Greetings() {
    let myDate = new Date();
    let hours = myDate.getHours();
    let name = 'Nabila';
    let greet;

    if (hours >= 6 && hours < 12)
        greet = "Jangan Lupa Sarapan";
    else if (hours >= 12 && hours < 18)
        greet = "Jangan Lupa Makan Siang";
    else if (hours >= 18 && hours < 24)
        greet = "Jangan Lupa Makan Malam";
    else {
        greet = 'Selamat Tidur & Jangan Lupa Berdoa';
    }

    return (
        <div>
            <h2>{greet}, {name}</h2>
        </div>
    );
}

export default Greetings;
