const Home = () => {

    const handleClick = (e) => {
        let name = prompt('What\'s your name?');
        alert('Welcome here ' + name + '! ermmm... I didn\'t request for your lastname ' +name+ '.');
    }
    const paramClick = (param, e) => {
        console.log('Hey ' + param + '! ermmm... I really dont remember your Lastname', e);
    }
     
    return ( 
        <div className="home">
            <h1>All Homepage content goes in here</h1>
            <button onClick={handleClick}>Hey You!</button>
            <button onClick={(e) => paramClick('Josiah', e.target)}>Click and Check Console</button>
        </div>
    );
}
 
export default Home;