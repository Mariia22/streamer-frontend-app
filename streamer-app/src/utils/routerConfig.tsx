import StreamerFormPage from '../pages/StreamerFormPage';
import StreamerInfoPage from '../pages/StreamerInfoPage';

export const routerConfig = [
  {
    id: 0,
    path: '/',
    element: <StreamerFormPage />,
  },
  {
    id: 1,
    path: 'streamers/:id',
    element: <StreamerInfoPage />,
  },
];
