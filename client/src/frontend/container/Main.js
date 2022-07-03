import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Chat from '../pages/Chat';
import Chatroom from '../pages/Chatroom';
import MyNFT from '../pages/MyNFT';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chatroom" element={<Chatroom />} />
                <Route path="/my-nft" element={<MyNFT />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
