import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
    return (
        <div className="style">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
