import {useEffect, useState} from "react"
const API = "AIzaSyBAPWIAtkDMxTqIgfh8q4di0IonNG-nrF0"
const channelId = "UCwfaAHy4zQUb2APNOGXUCCA"
var fetUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`

function UtubePlaylist() {
    const [allvideos, setAllvideos] = useState([]);

    useEffect(() => {
        fetch(fetUrl)
            .then((response) => response.json())
            .then((resJson) => {
                const result = resJson.items.map((doc) => ({
                    ...doc,
                    
                }));
                setAllvideos(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {allvideos.map((item) => (
                <div key={item.id}>
                    <img src={item.snippet.thumbnails.high.url} width="600px" />
                    <p>{item.snippet.title}</p>
                </div>
            ))}
        </div>
    );
}
export default UtubePlaylist