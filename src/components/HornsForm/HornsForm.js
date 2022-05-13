import React from 'react'
import data from '../../data/data.json'
import { Form } from 'react-bootstrap'


class HornsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0,
      data: data
    }
  }

  handleSelect = (e) => {
    let selected = e.target.value;
    if (selected === '1') {
      //return beasts with 1 horns
      let oneHorn = data.filter(num => 1);
      this.setState({data: oneHorn})
    }
    if (selected === '2') {
      //return beasts with 2 horns
      let twoHorns = data.filter(num => 2);
      this.setState({data: twoHorns})
    }
    if (selected === '3') {
      //return beasts with 3 horns
      let threeHorns = data.filter(num => 3);
      this.setState({data: threeHorns})
    }
    if (selected === '100') {
      //return beasts with 100 horns
      let oneHundredHorns = data.filter(num => 100);
      this.setState({data: oneHundredHorns})
    } else {
      // return all beasts
      this.setState({data: data})
    }
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>Filter beasts by their number of horns</fieldset>
          <Form.Group className="filterHorns">
            <Form.Select onChange={this.handleSelect}>
              <option>Choose here...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>

      </>
    )
  }
}

export default HornsForm;