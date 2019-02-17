import React, { Component } from "react";
import "./App.css";

let defaultTextColor = "#fff";
let defaultStyle = {
  color: defaultTextColor
};

let fakeServerData = {
  user: {
    name: "Adam",
    playlists: [
      {
        name: "My favourites",
        songs: [
          { name: "Beat it", duration: 1345 },
          { name: "Run baby run", duration: 1825 },
          { name: "You make me feel like HR", duration: 1825 }
        ]
      },
      {
        name: "Discover weekly",
        songs: [
          { name: "Who rang", duration: 1145 },
          { name: "Jump out da gym", duration: 1225 },
          { name: "Fool me thrice", duration: 7000 }
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2 style={{ color: defaultTextColor }}>
          {this.props.playlists.length} playlists
        </h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{Math.round(totalDuration / 60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img alt="stuff" />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "25%", display: "inline-block" }}>
        <img alt="stuff" />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, "font-size": "54px" }}>
              {this.state.serverData && this.state.serverData.user.name}'s
              playlists
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
          </div>
        ) : (
          <h1 style={defaultStyle}>Loading...</h1>
        )}

        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
