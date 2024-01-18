import { BooksDataSource } from "./books/books.dataSource";

export interface Context {
  dataSources: {
    booksDataSource: BooksDataSource;
  };
}