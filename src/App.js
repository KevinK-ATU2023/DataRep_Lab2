import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Navigation_Bar from './components/navigation';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation_Bar />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/read" element={<Header />}></Route>
        <Route path="/create" element={<Footer />}></Route>
      </Routes>
      {/* <Header />
      <Content />
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
