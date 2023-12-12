/* eslint-disable react/jsx-key */
const games = [
  {
    "id": 1,
    "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
    "title": "Super Mario Bros",
    "releaseYear": 1985,
    "description": "A classic platformer game."
  },
  {
    "id": 2,
    "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
    "title": "The Legend of Zelda",
    "releaseYear": 1986,
    "description": "A top-down adventure game."
  },
  {
    "id": 3,
    "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
    "title": "Final Fantasy",
    "releaseYear": 1987,
    "description": "A classic role-playing game."
  }];

function App() {
  return (
    <>    {games.map((game) => (
      <div key={game.id}>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p>{game.releaseYear}</p>
        <img src={game.coverImage} alt={game.description} />
      </div>)
    )}
    </>
  )
}

export default App;