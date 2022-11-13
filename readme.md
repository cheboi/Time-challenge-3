## Weekend Test Assignment JavaSript Asignment

1. Why did we move from Context API to Redux?

   ### Redux

   Redux is a JavaScript library that helps to manage data flow in a centralized manner. It stores the entire state of the application.

   This state can be accessed by any component without having to pass down props from one component to another. It has 3 core concepts:

   1. Actions.
   2. Reduxers.
   3. Store.

   ### Context API

   The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

If you have big project it contains a lot of components you should be use redux because context api can't wrappe a lot of components.

2. Why Did we move from react-redux to Redux Toolkit

Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler

### Explain this code what it logs and why?

    `
    let x = [1, 2, 3, 4] === [1, 2, 3, 4];

    console.log(x);

    let y = [1, 2, 3, 4];

    x = "hello" === "hello";
    console.log(x);

    `

4. Rewrite this React class Based component into a react functional component

`
    import React, { useEffect} from "react";
    
    export default function Post {

        const [posts, setPost ] = React.useState([]);
        const [id, setId ] = React.useState(2);

        useEffect (( prevstate) => {
        if (prevstate.id !== setId) {
        fetchPost();
        }
        fetchPost();
        });

        const fetchPost = async () => {
        const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        const data = await response.json();
        setPost({ posts: data });
    }

    return (
        <div>
            <input
            type="text"
            value={id}
            onChange={(e) =>setId(e.target.value )}
            />

            <p>{JSON.stringify(posts)}</p>
        </div>
    );

}
`

3. How would you implement a Loging functionality that only logs in users saved in the database? (Explain no code)

Establishing a connection to a your database and selecting rows using SQL queries.
Implementing GET and POST requests with programming languages and it's framework.
Designing a login form with CSS.
Implementing validation that will ensure the captured data is valid.
Leveraging sessions, which will determine whether a user is logged in or not.
