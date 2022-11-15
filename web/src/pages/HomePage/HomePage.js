import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>RedwoodJS on Flightcontrol 🎉</h1>
      <h2>
        <Link to={routes.posts()}>View and Create Posts</Link>
      </h2>
    </>
  )
}

export default HomePage
