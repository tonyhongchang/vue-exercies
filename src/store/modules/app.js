import Cookies from 'js-cookie'
const app={
 state: {
    device: 'desktop',
    language: Cookies.get('language') || 'en',
    size: Cookies.get('size') || 'medium',
    sidebar: {
      opened: !+ Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
  }
}
export default app
