import React, { useState } from 'react';

    const songs = [
        new Audio("./songs/flow-organically.mp3"),
        new Audio("./songs/psychofunk.mp3"),
        new Audio("./songs/action-soundtracking.mp3"),
        new Audio("./songs/TimBurtonesqueBandcamp.wav")
    ];

function Card3D() {
    const [transform, setTransform] = useState("");
    const [transition, setTransition] = useState("");
    const [titleTransform, setTitleTransform] = useState("");
    const [juanTransform, setJuanTransform] = useState("");
    const [descriptionTransform, setDescriptionTransform] = useState("");
    const [songsTransform, setSongsTransform] = useState("");
    const [playTransform, setPlayTransform] = useState("");
    const [songNumber, setSongNumber] = useState(0);


    const onMouseMove = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        setTransform(`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    };

    const onMouseEnter = () => {
        setTransition("none");
        //Popout
        setTitleTransform("translateZ(150px)");
        setJuanTransform("translateZ(200px) rotateZ(-55deg)");
        setDescriptionTransform("translateZ(125px)");
        setSongsTransform("translateZ(100px)");
        setPlayTransform("translateZ(75px)");
    };

    const onMouseLeave = () => {
        setTransition("all 0.5s ease");
        setTransform("rotateY(0deg) rotateX(0deg)");
        //Popback
        setTitleTransform("translateZ(0px)");
        setJuanTransform("translateZ(0px) rotateZ(0deg)");
        setDescriptionTransform("translateZ(0px)");
        setSongsTransform("translateZ(0px)");
        setPlayTransform("translateZ(0px)");
    }

    const onPlay = () => {
        songs.forEach((song, songKey) => {
            if (songKey === songNumber && song.paused) {
                song.play();
            } else {
                song.pause();
                song.currentTime = 0;
            }
        });
    }

    return (
    <div className="wrapper">
        <div className="container" onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="card" style={{ transform, transition }} >
                <div className="juan">
                    <div className="circle"></div>
                    <img src="./cleanjuan.png" style={{ transform: juanTransform }} alt="" />
               </div>
                <div className="info">
                    <h1 className="title" style={{ transform: titleTransform }}>juanSessions</h1>
                    <h3 style={{ transform: descriptionTransform }}> 3D Javascript </h3>
                    <div className="songs"  style={{ transform: songsTransform }}>
                        <button className={songNumber === 0 ? "active" : ""} onClick={() => setSongNumber(0)}>FlowOrganically</button>
                        <button className={songNumber === 1 ? "active" : ""} onClick={() => setSongNumber(1)}>PsychoFunk</button>
                        <button className={songNumber === 2 ? "active" : ""} onClick={() => setSongNumber(2)}>ActionSound</button>
                        <button className={songNumber === 3 ? "active" : ""} onClick={() => setSongNumber(3)}>TimBurtonesque</button>
                    </div>
                    <div className="play" style={{ transform: playTransform }}>
                        <button onClick={onPlay}>play / stop</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Card3D