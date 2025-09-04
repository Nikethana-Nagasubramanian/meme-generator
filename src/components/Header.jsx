import trollface from "../assets/TrollFace1.png"
export default function Header() {
    return (
        <>
            <header>
                <img src = {trollface} height='30px' width='30px'/>
                <h1>Meme Generator</h1>
            </header>
        </>
    )
}