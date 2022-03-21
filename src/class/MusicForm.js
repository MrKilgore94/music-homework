import React from "react";

class MusicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      song: "",
      price: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMusic(this.state);
  };

  render() {
    return (
      <div className="box">
        <form className="box1" onSubmit={this.handleSubmit}>
          <h1>Music Form</h1>
          <h3>Artist:</h3>
          <input
            name="artist"
            placeholder="E.X. Ice Nine Kills..."
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <h3>Song:</h3>
          <input
            name="song"
            placeholder="E.X. Hip to be Scared..."
            value={this.state.song}
            onChange={this.handleChange}
          />
          <h3>price:</h3>
          <input
            name="price"
            placeholder="E.X. 3.99..."
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button className="add">
            <span>add</span>{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default MusicForm;
