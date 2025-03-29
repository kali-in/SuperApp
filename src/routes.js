import App from './App'
import Home from './Home'
import CliToApi from './CliToApi'

export const routes = [
  {
    path: '/',
    element: <Home />,
    title: 'Home'
  },
  {
    path: '/wiki',
    element: <App />,
    title: 'Wiki Search Term Generator'
  },
  {
    path: '/cli-to-api',
    element: <CliToApi />,
    title: 'CLI to API Converter'
  }
]
