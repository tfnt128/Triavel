import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Loadingpage from './Pages/Loadingpg/Loadingpage'
import Loginpage from './Pages/Login/Loginpage';
import Register from './Pages/Register/Register';
import RGoogle from './Pages/RegisterGoogle/RGoogle';
import Esquecisenha from './Pages/Esquecisenha/Esquecisenha';
import Entrar from './Pages/Entrar/Entrar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <Loadingpage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/esqueciasenha" element={<RGoogle/>}/>
        <Route path="/entrarcomgoogle" element={<Esquecisenha/>}/>
        <Route path="/entrar" element={<Entrar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
