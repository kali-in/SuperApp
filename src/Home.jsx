import { Link } from 'react-router-dom'
import './Home.css'
import { usePageTitle } from './hooks/usePageTitle'

function Home() {
  usePageTitle('Home')
  const pages = [
    {
      path: '/wiki',
      title: 'Wiki Search Term Generator',
      description: 'Generate formatted search terms for wiki queries'
    },
    {
      path: '/cli-to-api',
      title: 'CLI to API Name Converter',
      description: 'Convert AWS CLI command names to their corresponding API operation names'
    }
  ]

  return (
    <div className="home-container">
      <h1 className="home-title">Available Tools</h1>
      <div className="pages-grid">
        {pages.map((page) => (
          <Link to={page.path} key={page.path} className="page-card">
            <h2>{page.title}</h2>
            <p>{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
