import React from 'react';
import axios from 'axios';
import MediaCarousel from './MediaCarousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    };
  }

  componentDidMount() {
    this.getMediaDataFromServer();
  }

  getMediaDataFromServer() {
    axios.get('/mediaData')
      .then((response) => {
        this.setState({ media: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render() {
    return (
      <div>
        <MediaCarousel data={this.state.media}/>
      </div>
    )
  }
};

export default App;
