import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //useState function
    const [name, setName] = useState('Hey you! you skipped telling me your name ');
    const [age, setAge] = useState('your age. Click the button below to fix this.');
    const [button, setButton] = useState('Fix? Click here');
    const [isLoading, setIsLoading] = useState(true);
    const [bibErr, setBibErr] = useState(null);
    function quest() {
        let theName = prompt('What\'s your name please?');
        let theAge = prompt('Now tell me your Age');

        setName('Good, welcome here ' + theName);
        setAge('it is good to know that you\'re ' + theAge + 'years old.' || ' ');
        setButton('Wrong? Update here');
    }
    
    const [blog, setBlog] = useState(null);

    function blogDelete(id) {
        let oldTitle = blog.find(post => post.chapter === id);
        alert('You have successfully deleted ' + oldTitle.writer + '\'s writings. ');
        const newBlog = blog.filter(post => post.chapter !== id);
        setBlog(newBlog);
        setIsLoading(false);
    } 


    useEffect(() => {
      fetch('http://localhost:3210/bibleVerses')
        .then(res => {
            if (!res.ok) {
                throw Error('Couldn\'t fetch data! Please refresh page server is down...');
            }
            return res.json();
        })
        .then(data => {
            setInterval(() => {
                setBlog(data);
                setBibErr(null);
                setIsLoading(false);
            }, 1000);
        })
        .catch(err => {
            setBibErr(err.message);
            setIsLoading(false);
        })
    }, [])
    

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
            {blog && <BlogList posts={blog} header="My Day-to-Day Bible Read Verses" blogDelete={blogDelete}/>}
        </div>
    );
}
 
export default Home;