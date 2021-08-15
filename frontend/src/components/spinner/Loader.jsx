import React from 'react'
import { Spinner } from 'react-bootstrap'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <Spinner animation='border' role='status' className={styles['spinner-size']}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
