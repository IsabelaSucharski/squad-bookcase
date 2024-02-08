import { useState, useEffect } from "react";
import "./App.css";

import { IBooks, addBook, getBooks, updateBooks } from "./handles/handlesBook";

function App() {
  const [books, setBooks] = useState<IBooks[] | any>([]);

  useEffect(() => {
    getBooks().then((book) => {
      setBooks(book);
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          {books.map((book: IBooks) => {
            return <div>{book.nome}</div>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
