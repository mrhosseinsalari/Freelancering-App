## About project

This project is a practical application for communication between employers and freelancers for the development of various projects. In this application, users can have one of the three roles of admin, employer, and freelancer, each of which has its own panel. Employer can create projects and approve or reject proposals. Freelancer can send proposals for projects. 
Admin can also view and manage all users, projects and proposals. In the following, I will describe other important features of the project :

- Authentication by sending a verification code to the user's phone number
- Authorization and control of user access level based on its role
- Management of refresh token and access token
- Light mode & dark mode feature, and stores the theme in the browser's local storage
- Filter, categorize and sort projects based on query strings

## Libraries used

- Asynchronous remote states management with react-query
- Validation and management of states related to forms with react-hook-form
- Styling and responsive application with TailwindCSS
- Axios
- headlessui
,
.
.
.

## Preview

To view it online, please click on this link : [Freelancering App](https://freelancering-app.ir/)

## Setup the project

To set up the project on your localhost, follow the steps below. Afterwards, you can utilize the project's back-end and test it accordingly:

#### 1) Setup Back-End

To set up the website's back-end, please refer to the following repository and follow the steps to set up the backend:

[Repository Link](https://github.com/mrhosseinsalari/Freelancering-App-Backend)

#### 2) Clone project

```shell
git clone https://github.com/mrhosseinsalari/Freelancering-App
```

```shell
cd Freelancering-App
```

#### 3) Add environment variable

Now you need to create a `.env.development.local` file in the root directory. Here's the variable you need to create :

```env
VITE_BASE_URL=http://localhost:5000/api
```

#### 4) Setup project

```shell
npm install
```

```shell
npm run dev
```
