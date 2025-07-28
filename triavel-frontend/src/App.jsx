import { useEffect, useState } from 'react'
import './App.css'
import Loadingpage from './Pages/Loadingpg/Loadingpage'
import Loginpage from './Pages/Login/Loginpage';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{setLoading(false)}, 3000);
  }, []);
  return (
      <>

        { loading && <Loadingpage/>}
        {!loading && 
          <Loginpage/>}
      </>
  )
}

export default App
