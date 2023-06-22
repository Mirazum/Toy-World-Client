import {HiEmojiSad } from "react-icons/hi";
import { Button, Container } from 'react-bootstrap'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='d-flex align-items-center '>
      <Container className=' d-flex flex-column align-items-center justify-content-center px-3 mx-auto my-3'>
        <HiEmojiSad className=' text-warning' style={{height: '100px', width: '100%'}}/>
        <div className='max-w-md text-center'>
          <h2 className='mb-4  text-warning' >
            <span>Error</span>
            {status || 404}
          </h2>
          <p className=' fw-bold md:text-3xl text-danger mb-3'>
            {error?.message}
          </p>
          <Link to='/' >
          <Button>  Back to homepage </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default ErrorPage