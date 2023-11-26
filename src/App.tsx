import logo from './logo.svg';
import './App.css';
import { CardWidget } from './components/CardWidget';
import { Card } from './components/Card'

const cardProps = {
  src : logo,
  title : 'card-title',
  text : "Some quick example text to build on the card title and make up the bulk of the card's content",
}
export interface ICard {
  src?: string,
  title: string
  text: string
}

function App() {
  return (
    <div className="container">
      <CardWidget>
        <Card {...cardProps}></Card>
      </CardWidget>
      
    </div>
  );
}

export default App;
