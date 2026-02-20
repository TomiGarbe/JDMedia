import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Clientes from './pages/Clientes'
import Home from './pages/Home'
import Insights from './pages/Insights'
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound'
import ServiceDetail from './pages/ServiceDetail'
import Servicios from './pages/Servicios'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
