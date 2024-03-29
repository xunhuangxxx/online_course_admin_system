# Online Course Admin System

It's an online course admin system that 
 
 - has registration functionality which allows the user to sign-in/sign-up
 - users can create the course and only the users who created the course can edit/delete the course
 - validates all the form input (happens in the backend and send a response back with error code and messages) and shows error message when errors occurs, shows forbidden massege when user has no access to the page
 - will redirect the user back to the main page once signed out

# How to run
This repo contains both frontend and backend of the app, so in order to run the app properly, you need to run the backend service first

## Server side
1. Navigate inside the `api` folder and run `yarn` to install all the dependencies
2. Run `yarn seed` to seed all the data to a table in the database
3. Run `yarn start` to get the backend api service running

## Client side
1. Navigate inside the `client` folder and run `yarn` to install all the dependencies
2. Run `yarn start` to start the app
3. Go to `localhost:3000` to see the app

# How it looks

![截屏2023-05-11 下午5 46 49](https://github.com/xunhuangxxx/online_course_admin_system/assets/94649745/d9f1b92c-7f2b-4cc9-b206-c63095e3ece6)
![截屏2023-05-11 下午5 47 23](https://github.com/xunhuangxxx/online_course_admin_system/assets/94649745/2812bd44-4056-450d-b758-827e3e5ada9f)
![截屏2023-05-11 下午5 47 56](https://github.com/xunhuangxxx/online_course_admin_system/assets/94649745/2218dc38-bd18-4220-b1da-de61e1921af7)
![截屏2023-05-11 下午5 48 36](https://github.com/xunhuangxxx/online_course_admin_system/assets/94649745/15a66a6e-8c3d-4744-a317-f622530f52f6)
