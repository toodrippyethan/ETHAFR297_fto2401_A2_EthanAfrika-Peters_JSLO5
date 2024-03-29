// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    //My 5 songs i added 
    { title: "So What", artist: "Miles Davis", genre: "Jazz" },
    { title: "Blue in Green", artist: "Miles Davis", genre: "Jazz" },
    { title: "Best Part", artist: "Daniel Cessaer", genre: "R&B" },
    { title: "What a wonderful World", artist: "Louis Armstrong", genre: "Jazz" },
    { title: "La vi en rose", artist: "Louis Armstrong", genre: "Jazz" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Jazz",
    "Rocket": "Pop",
    "Groot": "R&B",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  //Your code here 
  const playlists = Object.keys(guardians).map(guardian => {
    const preferredGenre = guardians[guardian];
    const playlist = songs.filter(song => song.genre === preferredGenre);
    return {
        guardian: guardian,
        playlist: playlist
    };
});

//This so it displays in The Chrome/open live server 
// Convert the playlists into HTML content
const htmlContent = playlists.map(playlist => {
    const songsHtml = playlist.playlist.map(song => {
        return `<div class="song"><p class="song-title">${song.title}</p><p>${song.artist}</p></div>`;
    }).join('');
    return `<div class="playlist"><h2>${playlist.guardian}</h2>${songsHtml}</div>`;
}).join('');

// Display playlists in the #playlists div
document.getElementById('playlists').innerHTML = htmlContent;
}


// Call generatePlaylist to display the playlists for each Guardian
generatePlaylist(guardians, songs);