import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routerConfig } from '../utils/routerConfig';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConfig.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
