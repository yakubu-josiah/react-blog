import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

// const [bible, setBible] = useState('Request For Bible Verses Now');

// All of this isn't needed to fetch data because the useFetch is configured...
// function getBible(req) {
//     const bibleRequest = new XMLHttpRequest();
//     if (bibleRequest.readyState === 4 && bibleRequest.status === 200) {
//         const data = JSON.parse(bibleRequest.responseText);
//         console.log(useState(data));
//     } else if (bibleRequest.readyState === 4) {
//         const err = 'Oops!! Couldn\'t process your request';
//         console.log(useState(err));
//     }

//     bibleRequest.open('GET', 'database/bible.json');
//     bibleRequest.send();

// }
const Bible = () => {
    const { id } = useParams();
    const { data: bible, isLoading, error } = useFetch("http://localhost:3200/bibleVerses/" + id)
    return (
        <div className="mtb">
            {/* <div className="preview-list"> */}
                { error && 
                    <div className="loader">
                        <div className="loader-single"><p>{ error }</p></div>
                    </div>
                    
                }
                { isLoading && 
                    <div className="loader">
                        <div className="loader-single"><p> Loading...</p></div>
                    </div>
                    
                }
                { bible && 
                    <div className="blogCont">
                        <div className="writer">
                            <p>Here's the { bible.writer } </p>
                            <p>Date here </p>
                        </div>
                        <div className="verse">
                            <article>
                                <p>The verses here...</p>
                                <p>The verses here...</p>
                            </article>
                        </div>
                    </div>
                }
            {/* </div> */}
        </div>
    );
}
 
export default Bible;