# Rutas del back


getAll: localhost:3001/api/libros

search: localhost:3001/api/search/:key/:value

delete: localhost:3001/api/delete/:key/:value

create: localhost:3001/api/create  + body {}


`
 {
      "ISBN",
      "Book-Title",
      "Book-Author",
      "Year-Of-Publication",
      "Publisher",
      "Image-URL-S",
      "Image-URL-M",
      "Image-URL-L"
  }

`

update: localhost:3001/api/search/:key/:value + body{propiedad:"nuevo valor"}


