const dataBase = {
  authors: [
    { id: "1", name: "Author 1", bookIds: ["101", "102"] },
    { id: "2", name: "Author 2", bookIds: ["103"] },
  ],
  books: [
    { id: "102", title: "New Book", publishYear: 2023, authorId: "1" },
    { id: "103", title: "New 123", publishYear: 2022, authorId: "2" },
    { id: "101", title: "Book Ashique", publishYear: 2023, authorId: "1" },
  ],
};
export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      console.log(parent, args, context, info);
      return dataBase.authors.find(
        (authorData) => authorData?.id === parent.authorId
      );
    },
  },
  Author: {
    books: (parent) => {
      return dataBase.books.filter((book) => parent.bookIds.inludes(book.id));
    },
  },
  Query: {
    authors: () => {
      return dataBase.authors;
    },
    books: () => {
      return dataBase.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log(args);
      const newBook = { ...args, id: Math.random() };
      dataBase.books.push(newBook);
      console.log(newBook);
      return newBook;
    },
  },
};
