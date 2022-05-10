import React from 'react'
import HornedBeast from './HornedBeast';
import data from './data/data.json'

class Main extends React.Component {

  render() {

    let hornedBeasts = [];
    
    data.forEach((beast, idx) => {
      hornedBeasts.push(<HornedBeast title={beast.title} image_url={beast.image_url} key={beast._id}/>)
    })


    return (
      <main>

        {hornedBeasts}

      </main>
    );
  }
}

export default Main;