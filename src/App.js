import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AlbumsList from "./pages/AlbumsList/AlbumsList";
import ImageList from "./pages/ImageList/ImageList";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<AlbumsList />} />
            <Route path="/albums/" element={<ImageList />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
