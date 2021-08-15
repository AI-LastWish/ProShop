import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../redux/actions/productActions.js'

const HomePage = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  // useEffect chạy sau tất cả những lần render? Đúng! Theo mặc định, nó chạy sau lần render đầu tiên và mỗi lần update. 
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  if (error) {
    console.log('error')
    console.log(error, loading)
  }

  return (
    <>
      <h1>Lastest Products</h1>
      {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      }

    </>
  )
}

export default HomePage
