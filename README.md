# Teamwork

This project was developed as part of the free Angular course from [The Rolling Scopes School](https://rs.school/)
Deploy: https://app-teamwork.netlify.app/welcome

## About this project
Stack: Angular, Angular Material, NgRx, RxJS. ESLint for linting.

Teamwork - it's a project management app, like Trello. You can create projects (boards) and create columns with tasks. Simply drag and drop tasks within its column and change order of tasks.

## How to run
1) Clone this project: `git clone https://github.com/AdiletMaksatuly/teamwork.git`
2) Install all dependencies by `npm i`
3) Run `ng serve` for a dev server. 
4) Open in browser `http://localhost:4200/`

## Bugs that will be fixed in future
- If try to log in with incorrect email or password, it shows a message with error, which is correct. But then, if fill the form fields with correct data, it wouldn't send request to log in. 
- When first entering app, app sends request to server, but with no token, so it shows error message in popup
- You can't change belonging of the task from one column to another
