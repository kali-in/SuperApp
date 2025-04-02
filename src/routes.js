import Wiki from './Wiki'
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
    element: <Wiki />,
    title: 'Wiki Search Term Generator'
  },
  {
    path: '/cli-to-api',
    element: <CliToApi />,
    title: 'CLI to API Converter'
  }
]
