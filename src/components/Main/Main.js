import React from 'react'
import HornedBeast from '../HornedBeast/HornedBeast.js';
import { Row, Container } from 'react-bootstrap'

class Main extends React.Component {

  render() {

    let hornedBeasts = this.props.data.map((beast, beastID) => {
      return (
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          beastID={beast._id}
          key={beastID}
          horns={beast.horns}
          description={beast.description}
          openModalHandler={this.props.openModalHandler}
        />)
    })

    return (
      <main>

        <Container>

          <Row xs={1} sm={2} md={3} lg={4}>

            {hornedBeasts}

          </Row>

        </Container>

      </main>
    );
  }
}

export default Main;