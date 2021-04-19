# crispy-carnival
Interview Task repo for tdcx

API folder contains the API which is deployed as a serverless lambda on AWS Cloud, written purely in NodeJS and connects to MongoDB for requests

The rest of the directory is the Gatsby JS files. 

The site is currently deployed at 
https://youthful-hoover-146c82.netlify.app/

I've tried to showcase my skills as much as I can given that I was only able to work on this over the weekend due to my current employment.
The Front Setup is 
React Gatsby JS + Tailwind CSS + Styled Components talking via axios to the endpoints.

The backend is a node js function which based on the different incoming requests routes and processes accordingly.

Let me know if you have any doubts.

Setup:

```yarn or npm install```

```yarn develop or npm run develop```

Backend: 

 Setup the aws credentials of you account on your local and create a profile
 
 Got to serverless.yml and change the profile name to your now created profile
 
 Run below command to deploy the function and get the endpoint
 
 ```sls deploy```
 
 
 Some Quick Updates: 
  Due to my limited time because of my current employemnt I still feel there's room for improvement on this from my side but since time didn't permit me I chose to cover everything I can in this limited time period!
  Regards
