import { LayoutHeader } from '~/Components/Layout'

import FollowingPage from '~/pages/Following'
import HomePage from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

export const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/follow',
    component: FollowingPage,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: LayoutHeader,
  },
]

export const privateRoutes = []
