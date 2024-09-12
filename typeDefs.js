// you can define types here there are libraries there to auto complete this
//this is the place all schema and qury and mutaion should define
//!used for mandatory fields
//When you have [authors] means youhave multiple authors
// here alsoe you can the relation making betwwen athot have books and book ahev eauthor
export const typeDefs = `#graphql
type Author {
id:ID!
name:String!
books:[Book]
}
type Book{
id:ID!
title:String
publishYear:Int
author:Author
}
type Query{
authors:[Author] 
books:[Book]
}
type Mutation{
addBook(title:String!,publishYear:Int,authorId:ID!):Book!
}
`;
