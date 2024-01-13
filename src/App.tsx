import { Provider } from 'react-redux'
import { store } from './state/store'
import { Counter } from './components/Counter'
import { CounterSettings } from './components/CounterSettings'

function App() {
  

  return (
    <Provider store={store}>
    <Counter/>
    <CounterSettings/>
    </Provider>
  )
}

export default App
