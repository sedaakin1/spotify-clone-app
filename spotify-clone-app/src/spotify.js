//https://developer.spotify.com/
//documentation/web-playback-sdk/tutorials/getting-started/#

export const authEndpoint = 
"https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "12683a3c68e246349b9ccef7d905ff08";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent (parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;