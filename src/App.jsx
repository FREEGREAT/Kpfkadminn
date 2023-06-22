import { useState } from "react";
import "./App.css";
import ListGroups from "./components/ListGroups";
import Modal from "./components/Modal";
import { Routes, Route,useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import { AuthProvider } from "./components/auth";
import {Login} from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
import Header from "./components/Header";
import { Profile } from "./components/Profile";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick = () => {
    setOpenModal(true);
  };


  return (
    <div className="App">
      <CSSTransition
        in={openModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </CSSTransition>

      < Header />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
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
