
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './utils/globalStyle.tsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
    <HashRouter>
      <GlobalStyle/>
        <App />
    </HashRouter>
  </Provider>

)
