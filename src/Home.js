import { useState } from "react";

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
            {blog.map((post) => (
                <div className="preview-list" key={post.id}>
                    <h2> {post.title} </h2>
                    <p> This was written by: <span>{ post.author }</span></p>
                </div>
            ))}        
        </div>
    );
}
 
export default Home;