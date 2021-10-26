import react from 'react'
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';


function App() {
const [quotes, setQuotes] = react.useState({"quote":"I can't even say the word 'titmouse' without gigggling like a schoolgirl.","character":"Homer Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939","characterDirection":"Right"})

    const getQuote = () => {
      axios
        .get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((res) => res.data)
        .then((data) => {
          setQuotes(data[0]);
        });
    };
  return (
    <div className="App">
      <button onClick={getQuote} > Change simpson's quote </button>
      <QuoteCard 
      key = {quotes.index}
      character = {quotes.character}
      image = {quotes.image}
      quote = {quotes.quote} 
/>
     
    </div>
  );
}

export default App;
