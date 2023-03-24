import React from 'react'
import Alert from 'react-bootstrap/Alert';

const AlertComponent = (props) => {
  return (
    <>
      {[
        'primary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {props.message}
        </Alert>
      ))}
    </>
  )
}

export default AlertComponent