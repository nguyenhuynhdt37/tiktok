import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Proflie from '~/Page/Profile';
import Upload from '~/Page/Upload';
import { HeaderOnly } from './Componets/Layout';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/proflie', component: Proflie },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [
  { path: '/', component: Home },
  { path: '/Following', component: Following },
];

export { publicRoutes, privateRoutes };
