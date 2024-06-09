import Book from "./Book";

const BookList = (props) => {
  return (
    <ul>
      {props.books.map((prod) => {
        return (
          <li key={prod.id}>
            <Book title={prod.title} price={prod.price} />
          </li>
        );
      })}
    </ul>
  );
};
export default BookList;
