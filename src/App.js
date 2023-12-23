import Navbar from "./Component/Navbar/Navbar";
import AlbumList from "./Component/AlbumList/AlbumList";
import "./App.css"
import background from "./Images/background.jpg"





function App() {
  return (
    < div style={{ backgroundImage: `url(${background})` }}>
      {/* upper navbar of the page */}
      <Navbar />
    
      {/* main container of the page */}
      <AlbumList />
      
    </div>
  );
}

export default App;

