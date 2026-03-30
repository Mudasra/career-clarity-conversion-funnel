
import { Provider } from 'react-redux'
import './App.css'
import AppRouter from './routes/AppRouter'

function App() {

  return (
 <Provider>
   <AppRouter />
 </Provider>
  )
}

export default App
