import { Link } from 'react-router-dom'

import './notFound.css'

const notFound = () => {
  return (
    <section>
      <div className="container notFound__container">
        <h2>Pagenot Found</h2>
        <Link to='/' className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default notFound