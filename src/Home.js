import { useState } from "react";

const Home = () => {

    //useState function
    const [name, setName] = useState('Hey you! you skipped telling me your name ');
    const [age, setAge] = useState('your age. Click the button below to fix this.');
    const [button, setButton] = useState('Fix? Click here')
    const quest = () => {
        let theName = prompt('What\'s your name please?');
        let theAge = prompt('Now tell me your Age');
        
        setName('Good, welcome here ' + theName);
        setAge('it is good to know that you\'re ' +theAge+ 'years old.');
        setButton('Wrong? Update here');
    }
    
    //target function
    const handleClick = (e) => {
        let name = prompt('What\'s your name?');
        alert('Welcome here ' + name + '! ermmm... I didn\'t request for your lastname ' +name+ '.');
    }
    const paramClick = (param, e) => {
        console.log('Hey ' + param + '! ermmm... I really dont remember your Lastname', e);
    }
    

    
    return ( 
        <div className="mtb">
            <h1>All Homepage content goes in here</h1>
            <button onClick={handleClick}>Hey You!</button>
            <button onClick={(e) => paramClick('Josiah', e.target)}>Click and Check Console</button>
            <div className="mtb">
                <p>{name} and {age}</p>
                <button onClick={quest}> {button} </button>
            </div>
        </div>
    );
}
 
export default Home;