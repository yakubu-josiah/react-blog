import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {

    //useState function
    const [name, setName] = useState('Hey you! you skipped telling me your name ');
    const [age, setAge] = useState('your age. Click the button below to fix this.');
    const [button, setButton] = useState('Fix? Click here');
    
    function quest() {
        let theName = prompt('What\'s your name please?');
        let theAge = prompt('Now tell me your Age');

        setName('Good, welcome here ' + theName);
        setAge('it is good to know that you\'re ' + theAge + 'years old.' || ' ');
        setButton('Wrong? Update here');
    }
    const {data: bible, isLoading, error: bibErr} = useFetch('http://localhost:3210/bibleVerses');
    
    function blogDelete(id) {
        let oldTitle = bible.find(post => post.chapter === id);
        alert('You have successfully deleted ' + oldTitle.writer + '\'s writings. ');
        const newBlog = bible.filter(post => post.chapter !== id);
        // setData(newBlog); This will go in the useEffect dependency array since state changes with time
        // setIsLoading(false); This will also be a useEffect dependency arrary
    } 

    

    return ( 
        <div className="mtb">
            <p>{name} and {age}</p>
            <button onClick={quest}> {button} </button>
            { bibErr && 
                <div className="loader">
                    <div className="aniMe"><p>{ bibErr }</p></div>
                </div>
                
            }
            { isLoading && 
                <div className="loader">
                    <div className="aniMe"><p> Loading...</p></div>
                    <div className="aniMe"><p> Loading...</p></div>
                    <div className="aniMe"><p> Loading...</p></div>
                </div>
                
            }
            { bible && <BlogList posts={bible} header="My Day-to-Day Bible Read Verses" blogDelete={blogDelete}/> }
        </div>
    );
}
 
export default Home;