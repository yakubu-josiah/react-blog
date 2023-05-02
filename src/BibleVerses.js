// import { useState } from "react";

// const [bible, setBible] = useState('Request For Bible Verses Now');


function getBible(req) {
    const bibleRequest = new XMLHttpRequest();
    if (bibleRequest.readyState === 4 && bibleRequest.status === 200) {
        const data = JSON.parse(bibleRequest.responseText);
        console.log(useState(data));
    } else if (bibleRequest.readyState === 4) {
        const err = 'Oops!! Couldn\'t process your request';
        console.log(useState(err));
    }

    bibleRequest.open('GET', 'database/bible.json');
    bibleRequest.send();

}
const Bible = () => {
    return (
        <div className="preview-list">
            {/* <p>{ bible }</p>
            <button readystatechange={() => getBible(err, data)}>Request Scriptures</button> */}
        </div>
    );
}
 
export default Bible;