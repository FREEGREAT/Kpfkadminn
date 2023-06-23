import { useState } from "react";
import "./App.css";
import ListGroups from "./components/ListGroups";
import Modal from "./components/Modal";
import { Routes, Route} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { AuthProvider } from "./components/auth";
import {Login} from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
import Header from "./components/Header";
import WelcomePage from "./components/wellcome";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick = () => {
    setOpenModal(true);
  };
  

  return (
    <div className="App">
    
      
    <Modal open={openModal} onClose={() => setOpenModal(false)} />
  < Header />

      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={< WelcomePage/>}/>
          <Route
            path="/list"
            element={
              <RequireAuth>  
                <ListGroups onButtonClick={handleButtonClick} />
              </RequireAuth>
          }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
