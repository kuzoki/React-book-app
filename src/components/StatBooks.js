
import { useContext, useEffect, useState } from "react"
import { UserGlobal } from "./useGlobal"
const StatBooks = () =>{

    const books = useContext(UserGlobal);

    const [total, setTotal] = useState(0);
    const [bookRead, setRead] = useState(0);

    
    //console.log(books.allBooks.length)
    useEffect(()=>{
        setTotal(books.allBooks.length);   
        setRead(books.allBooks.filter(book => book.read === 'read').length);
    },[books]);
   
    return (
        <div className="sidebar-widget widget-library-log">
            <h2 className="sec-title">Library log</h2>
            <div className="library-log">
                <div className="library-log--single">      
                    <h4>Total books : <span id="library-log--total">{total}</span></h4>
                </div>
                <div className="library-log--single">  
                    <h4>Books read : <span id="library-log--read">{bookRead}</span></h4>
                </div>
                <div className="library-log--single">   
                    <h4>Books not read : <span id="library-log--notread">{total - bookRead }</span></h4>
                </div>
            </div>
            
        </div>
    );
}
export default StatBooks;