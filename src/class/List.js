import React from "react";
import MusicForm from "./MusicForm";
// import Korn from "./Images/Korn.jpg"

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [
        { artist: "Korn", song: "Forgotten", price: 1.99 },
        { artist: "Falling in Reverse", song: "Zombified", price: 2.99 },
        { artist: "Rob Zombie", song: "Dragula", price: 1.5 },
        {
          artist: "Avenged Sevenfold",
          song: "Welcome to the Family",
          price: 2.99,
        },
        { artist: "Tenacious D", song: "The Metal", price: 0.99 },
      ],
      showForm: true,
    };
  }
  addMusic = (music) => {
    let updateMusic = [music, ...this.state.music];
    this.setState({
      music: updateMusic,
    });
  };
  deleteMusic = (musicName) => {
    let filteredMusic = this.state.music.filter((m) => m.artist !== musicName);
    this.setState({
      music: filteredMusic,
    });
  };

  renderMusic = () => {
    return this.state.music.map((m, index) => {
      return (
        <div className="box2" key={index}>
          <h2>Artist:</h2>
          <h4>{m.artist}</h4>
          <h2>Song:</h2>
          <h4>{m.song}</h4>
          <h2>Price:</h2>
          <h4>{m.price}</h4>
          <button className="delete" onClick={() => this.deleteMusic(m.artist)}>
            <span>Delete</span>{" "}
          </button>
        </div>
      );
    });
  };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  // define render
  render() {
    return (
      <div className="border">
        <div>
          <button className="form" onClick={this.toggleForm}>
            <span>{this.state.showForm ? "Hide Form" : "Show Form"}</span>
          </button>
          {this.state.showForm && <MusicForm addMusic={this.addMusic} />}
        </div>

        <div>
          <h1 className="heading">List of Artists with Song</h1>
          {this.renderMusic()}
        </div>
      </div>
    );
  }
}

export default List;
