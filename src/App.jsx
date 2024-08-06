import React from 'react'
import "../node_modules/rsuite/dist/rsuite.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
const WebpageRoutes = React.lazy(() => import('./pages/WebpageRoutes'))

function App() {

  return (
    <>
      <WebpageRoutes />
    </>
  )
}

export default App
