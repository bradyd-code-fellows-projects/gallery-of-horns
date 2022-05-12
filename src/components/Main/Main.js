import React from 'react'
import HornedBeast from '../HornedBeast/HornedBeast';
import { Row, Container } from 'react-bootstrap'

class Main extends React.Component {

  render() {

    let hornedBeasts = this.props.data.map((beast, idx) => {
      return (
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          key={beast._id}
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