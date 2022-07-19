<p align="center">
  <img src="./assets/university-stack.png" width="1000" alt="Nest Logo" />
</p>

# University

This project intent to simulate a system/API of an University, where the access on the system resources is controlled by the permissions based on 4 roles (USER, ADMIN, STUDENT, TEACHER).

## Stack

The system was developed using **[Nest.js](https://nestjs.com/)** as a back-end framework; **[GraphQL](https://graphql.org/)** and **[Apollo Server](https://www.apollographql.com/docs/)** to build and manage endpoints and handle with requests; **[Prisma.io](https://www.prisma.io/)** as ORM; the Javascript Superset **[Typescript](https://www.typescriptlang.org/)** to write/develop the code; **[Passport.js](https://docs.nestjs.com/security/authentication#implementing-passport-strategies)** to handle with Authentication and Authorization; **[Jest](https://jestjs.io/)** and **[Supertest](https://www.npmjs.com/package/supertest)** to build and run Tests; **[Docker](https://www.docker.com/)** to virtualize and build an image of this Project.

## System Resources

The system has many resources which are:

- Users;
- Students;
- Teachers;
- Courses Categories;
- Courses;
- Subjects;
- Courses Subjects;
- Teachers Subjects;
- Grades;
- System Resources;
- Permissions;
- Courses Teachers;

## Roles & Endpoints

These are the Endpoints that each Role (USER, ADMIN, STUDENT, TEACHER) can access/manipulate freely:

- USER:
  - **queries:** users, coursesCategories, courses, subjects, coursesSubjects, teachersSubjects, grades, coursesTeachers.
  - **mutations:** createUser, updateUser, deleteUser, createStudent, createTeacher;
- ADMIN:
  - **queries:** ADMIN can access/manipulate all queries;
  - **mutations:** ADMIN can access/manipulate all mutations;
- STUDENT:
  - **queries:** users, students, teachers, coursesCategories, courses, subjects, coursesSubjects, teachersSubjects, grades, coursesTeachers;
  - **mutations:** updateUser, deleteUser, updateStudent, deleteStudent;
- TEACHER:
  - **queries:** users, students, teachers, coursesCategories, courses, subjects, coursesSubjects, teachersSubjects, grades, coursesTeachers;
  - **mutations:** updateTeacher, deleteTeacher, createGrade, updateGrade, deleteGrade;

## How to Use the System

First of all, to use the system it's necessary clone the repository on your machine and open it on [Visual Studio Code](https://code.visualstudio.com/) and after this open an integrated terminal and execute the following CLI commands and steps:

- run the command **yarn** or **yarn install**;
- fill the environment variables which are located on .env file;
- run the command **yarn prisma migrate reset -f**;
- run the command **yarn start** or **yarn start:dev**;

After that you must create an account/user using the **createUser** mutation and then log-in on the system using the **login** mutation.
To access and manipulate the system endpoints you have to be Authenticated, otherwise you will be prohibited by the Authentication mechanism to access/manipulate the endpoints.

To be Authenticated you have to get a [JWT](https://jwt.io/) token which is returned from the **login** mutation and pass it on the Authorization header parameter - you have to pass it on the field where you put the Header value, the value must be like this: **Bearer _generated_token_here_**.

![](/assets/how_to_use_the_app.gif)

## Author

- [@Esdrasmelo](https://www.github.com/Esdrasmelo)
