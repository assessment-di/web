import { Box } from '@island.is/island-ui/core'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App'

const CustomApp = () => {
  return (
    <BrowserRouter>
      <Box>
        <App />
      </Box>
    </BrowserRouter>
  )
}

export default CustomApp 