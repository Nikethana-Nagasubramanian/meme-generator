import React from "react"
import { useState, useEffect } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [memeArray, setMemeArray] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeArray(data.data.memes))
    }, [])
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const newMemeUrl = memeArray[randomNumber].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }

    return (
        <>
        <main>
        <h3>Click 'Make a meme', find a meme you like, write the text!</h3>
        <div className = "form">
            <label>Top Text:
                <input 
                    type="text" 
                    placeholder="Shut up" 
                    name="topText" 
                    onChange={handleChange}
                    value={meme.topText}/>
            </label>
            <label>Bottom Text:
                <input 
                    type="text" 
                    placeholder="Walk into Mordor" 
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}/>
            </label>
            <button onClick={getMemeImage}>Make a meme</button>
        </div>
        <div className="meme">
            <img src={meme.imageUrl} />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
        </main>
        </>
    )
}