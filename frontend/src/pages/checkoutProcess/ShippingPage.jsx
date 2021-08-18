import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/form/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { saveShippingAddress } from '../../redux/actions/cartActions'

const ShippingPage = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Row className='py-2'>
          <Col>
            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control required type='text' placeholder='Enter address' value={address} onChange={(e) => setAddress(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col>
            <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control required type='text' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col>
            <Form.Group controlId='postalCode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control required type='text' placeholder='Enter Postal Code' value={postalCode} onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col>
            <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control required type='text' placeholder='Enter country' value={country} onChange={(e) => setCountry(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col>
            <Button type='submit' variant='primary'>Continue</Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default ShippingPage
