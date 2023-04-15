const Home = () => {

    const handleClick = (e) => {
        alert('hello world', e.getModifierState);
    }
    const paramClick = (param, e) => {
        console.log('Hey ' + param + '! ermmm... I really dont remember your Lastname', e);
    }
     
    return ( 
        <div className="home">
            <h1>All Homepage content goes in here</h1>
            <button onClick={handleClick}>Hello World Button</button>
            <button onClick={(e) => paramClick('Josiah', e.target)}>Do you know me?</button>
        </div>
    );
}
 
export default Home;