import axios from 'axios'
import { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const KEY =
  'pk_test_51MrvdCSFBpWCgda8OAOo34kBXvQRrsFTjVbmFFfszPiPaMX2wg7GGZEFfXZeSee0wgQ0IQ9c8KtGaP1ZHVQhplCs00KNO5cfPe'
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/checkout/payment')
        alert(res)
      } catch (err) {
        console.log(err)
      }
    }
    makeRequest()
  }, [stripeToken])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StripeCheckout
        name='Shuvam Liquors'
        image=''
        billingAddress
        shippingAddress
        description='Your Total amount is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  )
}
export default Pay
