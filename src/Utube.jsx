import {useEffect, useState} from "react"
const API = "AIzaSyBAPWIAtkDMxTqIgfh8q4di0IonNG-nrF0"
const channelId = "UCwfaAHy4zQUb2APNOGXUCCA"
var fetUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=40`

function Utube() {
    const [allvideos, setAllvideos] = useState([]);

    useEffect(() => {
        fetch(fetUrl)
            .then((response) => response.json())
            .then((resJson) => {
                const result = resJson.items.map((doc) => ({
                    ...doc,
                    Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
                }));
                setAllvideos(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <p>Visit Our You tube channel Of THAPA TECH</p>
            {allvideos.map((item) => (
                <div key={item.id.videoId}>
                    <iframe
                    
                        width="760"
                        height="415"
                        src={item.Videolink}
                        title={item.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <p>{item.snippet.title}</p>
                </div>
            ))}
        </div>
    );
}
export default Utube