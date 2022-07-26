import MenuRoutes from '../router'
import {Route, withRouter} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import {Suspense, useEffect} from 'react'
import {PageNotFound} from '../../pages'

interface props {
  history: any
}
const Content: React.FC<props> = (props) => {
  const setTitle = (path: string, routeArray: any) => {
    var pageTitle
    for (var i = 0; i < routeArray.length; i++) {
      if (routeArray[i].path === path) {
        pageTitle = 'Admin Lte | ' + routeArray[i].title
      }
    }
    document.title = pageTitle ? pageTitle : 'Admin Lte | React App'
  }
  useEffect(() => {
    // console.log(MenuRoutes)
    // console.log(props.history.location.pathname)
    // let cekRouter = MenuRoutes.find((list) => list.path === props.history.location.pathname)
    // // console.log(cekRouter)\
    // if (cekRouter === undefined) {
    //   // window.location.replace('/404')
    //   props.history.push('/404')
    // }
    setTitle(props.history.location.pathname, MenuRoutes)
    return () => {
      setTitle(props.history.location.pathname, MenuRoutes)
    }
  })
  return (
    <Suspense fallback={<Skeleton width={'100%'} height={1000} />}>
      {MenuRoutes.find((list) => list.path === props.history.location.pathname) === undefined ? (
        <Route component={() => <PageNotFound />} />
      ) : (
        MenuRoutes.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route?.component} />
        ))
      )}
    </Suspense>
  )
}

export default withRouter(Content)
