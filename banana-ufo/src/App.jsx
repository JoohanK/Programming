import "./App.css";
import "./components/Artist/ArtistCard.css"
import "./components/Artist/ArtistBox.css";
import "./components/Dino/DinoInfoBox.css";
import ArtistBox from "./components/Artist/ArtistBox";
import List from "./components/List/AnimalList";
import DinoInfoBox from "./components/DIno/DinoInfoBox";


const App = () => {
    const dinoInfo = {
        name: 'Diplodocus',
        discoveryYear: 1878,
        period: 'Jurassic',
        length: '25 meters',
        weight: '13 tons',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg'
    }

    return (
    <>
    <h1>🍌 Hello World! 🛸</h1>
    <ArtistBox />
    <List animals={["dog", "cow", "horse", "cat", "turtle"]} ordered={true}/>
    <DinoInfoBox info={dinoInfo} imagePosition="right" />
    </>
    )
}



export default App;