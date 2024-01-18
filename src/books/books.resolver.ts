import { Ctx, Query, Resolver, Arg } from "type-graphql";
import { Context } from "../context";
import { Books } from "./books.object";

@Resolver(Books)
export class BooksResolver {
  @Query(() => [Books])
  async books(@Ctx() context: Context) {
    const books = await context.dataSources.booksDataSource.getBooks();
    return books;
  }

  @Query(() => [Books])
  async getBookById(@Ctx() context: Context, @Arg("id") id: string) {
    const book = await context.dataSources.booksDataSource.getBooksById(id);
    return book;
  }
}