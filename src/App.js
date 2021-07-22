

import './App.css';
import Row from './Row';
import request from './requst';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      
     <Row 
     title="NETFLIX ORIGINALS"
     fetchUrl={request.fetchNetflixOriginals}
      isLargeRow
      />
     <Row title="Trending Now" 
     fetchUrl={request.fetchTrending}
     />
     <Row title="" 
     fetchUrl={request.fetchTopRatedMovies}
     />
     <Row title="Action Movies"
     fetchUrl={request.fetchActionMovies}
     />
     <Row title="Commedy Movies"
     fetchUrl={request.fetchComedyMovies}
     />
     <Row title="Horror Movies"
     fetchUrl={request.fetchHorrorMovies}
     />
     <Row title="Romance Movies"
     fetchUrl={request.fetchRomanceMovies}
     />

    </div>
  );
}

export default App;
