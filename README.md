# <p align = "center">📖 My Website 📖</p>

<p align="center">
   <img src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif" width="600" height="400" object-fit="cover"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lucasmartinso-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lucasmartinso/my-website?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

This is a backend application to control the data flow of an portfolio website that shows my history, projects and texts blog. Also, there is a hidden CRUD to me update website info as a simple way, that requeries special authorization. Furthermore, the user can explore different tools exploring the details of which project seen his documentation, front and back code, description, used techs and also play with the hosted project. The user can navigate throught the tech blog and search about my habilities that used on all projects.The main resposnsability this backend have is to secure project and blog data, keeping the important and sensitive infos protected from malicious attackers who want to edit information, also have to make the quickly integration and communication with database and also with the frontend. 
***

## :computer:	 Tecnolgy and Concepts 

- JWTs
- Node.js
- TypeScript
- PostgresSQL

***

## :rocket: Routes

### 👥 Users 

```yml
POST /email
    - Route to send a personal email to me
    - headers: {}
    - body:{
        "email": "lorem@domain.com",
        "subject": "lorem",
        "text": "lorem ipsum ...."
}
```
    
```yml 
POST /auth
    - Route to make the login to acess the CRUD
    - headers: {}
    - body: {
        "email": "lorem@domain.com",
        "password": "**********"
    }
```

```yml 
POST /verify/auth (autentify)
    - Route to certify the user is logged to edit and acess sensitive CRUD info 
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

### 🔬​ Techs  

```yml 
GET /techs
    - Route to get all technologies
    - headers: {}
    - body: {}
```

```yml 
POST /techs (autentify)
    - Route to add a new technology 
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "name": "Lorem Ipsum"
    }
```

```yml 
POST /techs/search
    - Route to search a especify's technologies
    - headers: {}
    - body: {
        "name": "lorem ips...."
    }
```

```yml 
DELETE /delete/techs/:id (autentify)
    - Route to delete some tech
    - headers: { "Authorization": `Bearer $token` }
    - params: id(number)
    - body: {}
```

```yml 
PUT /edit/techs/:id (autentify)
    - Route edit tech name
    - headers: { "Authorization": `Bearer $token` }
    - params: id(number)
    - body: {
        "name": "Lorem Ipsum"
    }
```


### 📑 Types  

```yml 
GET /types
    - Route to get all ptoject types
    - headers: {}
    - body: {}
```

```yml 
POST /types (autentify)
    - Route to add a new project type 
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "name": "Lorem Ipsum"
    }
```

```yml 
DELETE /delete/types/:id (autentify)
    - Route to delete some project type
    - headers: { "Authorization": `Bearer $token` }
    - params: id(number)
    - body: {}
```

```yml 
PUT /edit/types/:id (autentify)
    - Route edit tech name
    - headers: { "Authorization": `Bearer $token` }
    - params: id(number)
    - body: {
        "name": "Lorem Ipsum"
    }
```

### 💻 Projects  

```yml 
GET /projects
    - Route to get all projects
    - headers: {}
    - body: {}
```

```yml 
GET /projects/pinned
    - Route to get pinned projects
    - headers: {}
    - body: {}
```

```yml 
GET /projects/:id 
    - Route to get complete info about a project
    - headers: {}
    - body: {}
```

```yml 
POST /projects (autentify)
    - Route to add a new project 
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "name": "Lorem Ipsum",
        "typeId": number (select a type),
        "image": "https://lorem.png",
        "description": "lorem ipsum ...",
        "url"?: "https://lorem.com",
        "documentation": "https://drive.google.com/file/...",
        "front"?: "https://github.com/...",
        "back"?: "https://github.com/...",
        "pinned": true || false,
        "techs": ['string1','string2',...] (select techs)
    }
```

```yml 
DELETE /delete/projects/:id (autentify)
    - Route to delete a project
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
PUT /edit/projects/:id (autentify)
    - Route edit tech name
    - headers: { "Authorization": `Bearer $token` }
    - params: id(number)
    - body: {
        "name": "Lorem Ipsum",
        "typeId": number (select a type),
        "image": "https://lorem.png",
        "description": "lorem ipsum ...",
        "url"?: "https://lorem.com",
        "documentation": "https://drive.google.com/file/...",
        "front"?: "https://github.com/...",
        "back"?: "https://github.com/...",
        "pinned": true || false,
        "techs": ['string1','string2',...] (select techs)
    }
```

### 💬 Blog   

## 🏁 Running the application locally

First, make the clone repository in your machine:

```
git clone https://github.com/lucasmartinso/my-website.git
```

After, inside the folder, run the comand to install the dependencies.

```
npm install
```
Config the .env, .env.test and .env.development based on .env.example

To run the tests 
```
npm run test
```

To finish the process, to init the server
```
npm start or npm run dev
```

:stop_sign: Don't forget to repeat the sequence above with [repository](https://github.com/lucasmartinso/my-website-front) that contains the interface of aplication, to test the project per complet.
