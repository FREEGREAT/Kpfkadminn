import { useState } from "react";
import "./App.css";
import ListGroups from "./Page/ListGroups";
import Modal from "./components/Modal";
import { Routes, Route} from "react-router-dom";
import { AuthProvider } from "./Page/auth";
import {Login} from "./Page/Login";
import { RequireAuth } from "./components/RequireAuth";
import Header from "./components/Header";
import WelcomePage from "./Page/wellcome";

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
