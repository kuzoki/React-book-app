
import { useContext } from "react"
import { UserGlobal } from "./useGlobal"




const DisplayBooks = () => {
    const books = useContext(UserGlobal);
    const deleteBook = (x) =>{
        
        const newAfter = books.allBooks.filter((el) => {
            return el.id !== x;
        });
        //console.log(newAfter);
        books.setAllBooks(newAfter);
        localStorage.setItem("my_books", JSON.stringify(newAfter));
    };
    
    return(
        <div className="book-list">
                
            <div className="row" id="books-list-grid">
                { books.allBooks.map((book)=>(
                    <div className="col-4" key={book.id}>
                      <div className="book-card" >
                          <h4 className="title" > Title : {book.title} - {book.id}</h4>
                          <p className="author">Author : {book.author}</p>
                          <p className="pages">Pages : {book.pages}</p>
                          <p className="status">State : {book.read}</p>
                          <button className="btn btn-delete" onClick={()=>deleteBook(book.id)}>Delete</button>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    ) 
}

export default DisplayBooks;