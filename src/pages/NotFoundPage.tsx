import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section>
      <h1>Sidan finns inte</h1>
      <Link to="/">Till startsidan</Link>
    </section>
  )
}

export default NotFoundPage
