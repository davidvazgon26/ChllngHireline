# Rutas del back


* getAll: localhost:3001/api/libros   **(ojo, se limito la carga a 100 elementos, pero se puede modificar el limit en el controller si desean mas resultados...)**

* search: localhost:3001/api/search/:key/:value

* delete: localhost:3001/api/delete/:key/:value

* update: localhost:3001/api/search/:key/:value + body{propiedad:"nuevo valor"}

* create: localhost:3001/api/create  + body {}


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






