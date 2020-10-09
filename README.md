# handyman-jacek
##### Code Institute / Interactive Front-End Development

I was tasked with building a website which used HTML, CSS, and JavaScript. And as it just so happens that my uncle was in dire need of a website to get his business going, I though that building him a page should do the trick while also getting me through the project criteria. 

One of my goals for this project was to decrease development time with as little affect on performance and readability. And as the project came to a close, I feel as though I have somewhat achieved that with the libraries I have used.


## User Stories
- As someone in need of a handyman, I would like to be able to see Jacek's contact information as well as what he specializes in and any previous work he has done within the community. 


## Demo
You can view the demo [here]("https://handymanjacek.com").


## Installation
Starting the project in development mode locally.

**with yarn**:
```
yarn
yarn start
```

**with npm:**
```
npm i
npm start
```

Then open it at [http://localhost:3000](http://localhost:3000).


## Deployment
To deploy with gcloud please...


## Technologies
- React
  > Helps me maintain a programming standard, increasing readability and boilerplate.

  - Formik
    > Decreases boilerplate and increases readability for handling forms.
  - Yum
    > Form validation, works nicely with formik and code can be generated from gql queries.
  - Apollo
    > Can connect a graphql api with a few lines, allows for hooks to be generated from gql queries and mutations.

- Css
  - Tailwind
    > A great theme, more readability for css (IMO) and caching benefits?

* Express
  > Api's with much less boilerplate, easily implement middleware
* GraphQL

  > Solves the n+1 problem with api's

  - apollo-server-express
    > Easily start a gql server
  - graphql-compose

    - graphql-compose-mongoose
      > Turn mongoose schemas into gql schemas.

  - gql-codegen
    - gql-codegen-typescript
      > Turn gql schema, queries and mutations into types, apollo hooks, yum validation and more.

* MongoDB
  - Mongoose/Typegoose
    > Creates a layer of type safety (Using typescript types) to prevent your db from receiving bad data. Helps maintain a programming standard, increasing readability.



## UI Design with Figma
### **Home Page**
As this was a landing page that primarly targets mobile devices, I had to be tight with spacing and careful with the content.

![alt text](https://i.imgur.com/Pe86Nwv.png)
![alt text](https://i.imgur.com/qwZe3Ma.png)
![alt text](https://i.imgur.com/pghDif8.png)

### **Services Page**
The aim for this page was to expand upon the card found within the landing page, to provide additional information.

![alt text](https://i.imgur.com/iRZ5t4r.png)
