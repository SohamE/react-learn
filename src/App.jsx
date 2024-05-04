import './App.css'
import Header from './components/Header'
import MyComponent from './components/MyComponent'
import { HOME_DATA } from './data.jsx'

function App() {

  return (
    <>
      <Header>
        First React Page Header
      </Header>
      <main>
        {
          HOME_DATA.map((data, index) => (
            <MyComponent key={index} {...data} />
          ))
        }
      </main>
    </>
  )
}

export default App
