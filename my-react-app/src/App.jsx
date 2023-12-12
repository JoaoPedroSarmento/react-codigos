import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import post1 from "./imagens/star-wars.jpg";
import post2 from "./imagens/empire.jpg";
import post3 from "./imagens/return.jpg";
export default function App() {
    return (
        <><Header />
            <Card src={post1} />
            <Card src={post2}/>
            <Card  src={post3}/>
            </>
    )
}