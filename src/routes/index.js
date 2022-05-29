import FollowingPage from '~/pages/Following'
import HomePage from '~/pages/Home'

export const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/follow',
    component: FollowingPage,
  },
]

export const privateRoutes = []
