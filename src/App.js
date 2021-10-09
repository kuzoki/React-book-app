
import { useEffect, useState } from 'react';
import './App.css';
import DisplayBooks from './components/displayBooks';
import SideBar from './components/sideBar';
import StatBooks from './components/StatBooks';

import { UserGlobal } from './components/useGlobal';
function App() {
  const [allBooks, setAllBooks] = useState([]);
 
  
  useEffect(() => {

    var storedBooks = JSON.parse(localStorage.getItem("my_books"));
    
    if(storedBooks !== null){
      setAllBooks(storedBooks)
    }
  },[]);


  return (
    <div className="App">

      <UserGlobal.Provider value={{ allBooks, setAllBooks }} >
        <div className="row">
          <div className="col-3 sidebar">
            {/* Where Form Submit */}
            <SideBar />

            <StatBooks/>

          </div>
          <div className="col-9">
            <div className="main-content">
              <h1 className="sec-title">My Books</h1>
               <DisplayBooks />
            </div>
          </div>
        </div>
      </UserGlobal.Provider>

    </div>
  );
}

export default App;
