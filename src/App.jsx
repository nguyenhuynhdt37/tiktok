import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './Componets/Layout';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? React.Fragment : DefaultLayout;
          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
