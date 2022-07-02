import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Chatroom from '../pages/Chatroom';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chatroom" element={<Chatroom />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
