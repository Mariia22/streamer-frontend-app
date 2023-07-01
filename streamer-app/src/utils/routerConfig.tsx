import ErrorPage from '../pages/ErrorPage';
import StreamerFormPage from '../pages/StreamerFormPage';
import StreamerInfoPage from '../pages/StreamerInfoPage';

export const routerConfig = [
  {
    id: 0,
    path: '/',
    element: <StreamerFormPage />,
    errorElement: <ErrorPage />,
  },
  {
    id: 1,
    path: 'streamer/:id',
    element: <StreamerInfoPage />,
    errorElement: <ErrorPage />,
  },
];
