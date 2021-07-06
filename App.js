import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
       {!user ? (
       <Login />
       ) : (
         <>
           {/* header */}
           <Header />

         {/* app body */}
          <div className="app__body">
                {/* (1)sidebar */}
               <Sidebar />
                    {/* (2)feed */}
               <Feed />
               <Widgets />
                </div>
                </>

       )}

        
        
    </div>
  );
}

export default App
