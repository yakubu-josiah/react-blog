import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //useState function
    const [name, setName] = useState('Hey you! you skipped telling me your name ');
    const [age, setAge] = useState('your age. Click the button below to fix this.');
    const [button, setButton] = useState('Fix? Click here')
    function quest() {
        let theName = prompt('What\'s your name please?');
        let theAge = prompt('Now tell me your Age');

        setName('Good, welcome here ' + theName);
        setAge('it is good to know that you\'re ' + theAge + 'years old.' || ' ');
        setButton('Wrong? Update here');
    }
    
    const [blog, setBlog] = useState([
        { title: 'First Blog Post', author: 'Micheal Faraday', id: 1, body: 'lorem ipsum.....' },
        { title: 'Second Blog Post', author: 'Charles Babbage', id: 2, body: 'lorem ipsum.....' },
        { title: 'Third Blog Post', author: 'Issac Newton', id: 3, body: 'lorem ipsum.....' },

    ]);
    return ( 
        <div className="mtb">
            <p>{name} and {age}</p>
            <button onClick={quest}> {button} </button>
            <BlogList posts={blog} header="All Published Post" />
            <BlogList posts={blog.filter((post) => post.id === 1)} header="Title me" />     
        </div>
    );
}
 
export default Home;