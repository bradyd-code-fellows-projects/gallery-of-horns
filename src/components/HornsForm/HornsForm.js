import React from 'react'
import { Form } from 'react-bootstrap'


class HornsForm extends React.Component {

  render() {
    return (
      <>
        <Form>
          <fieldset>Filter beasts by their number of horns</fieldset>
          <Form.Group className="filterHorns">
            <Form.Select onChange={this.props.handleSelect}>
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