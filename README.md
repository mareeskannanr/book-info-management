# book-info-management
A Simple Book Info Management Application using Node.js, MongoDB

Simply start application by run the below command<br>
**npm install**<br>
followed by<br>
**MONGO_URL={INSERT MONGO_DB_CONNECTION_URL HERE}  node server.js**

**To Retrive All Book Informations**<br>
Method : **GET**<br>
Url: **http://localhost:3000/api/books**<br>

**To Retrive a Single Book Details**<br>
Method : **GET**<br>
Url: **http://localhost:3000/api/books/{id}**<br>

**To Save a Book Information**<br>
Method : **POST**<br>
Url: **http://localhost:3000/api/books/**

**To Update the Book Information**<br>
Method : **PUT**<br>
Url: **http://localhost:3000/api/books/**

**To Remove a Book Information**<br>
Method : **DELETE**<br>
Url: **http://localhost:3000/api/books/{id}**<br>
