import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Blog from './Blog/Blog';
import Animation from './Animation/Animation';
import Design from './Design/Design';
import Storyboarding from './Storyboarding/Storyboarding';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/willportfolio">
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/storyboarding" element={<Storyboarding />} />
            <Route path="/design" element={<Design/>} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/*
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
*/
