import { matchPath } from 'react-router'
import { HOME } from '../../util/routes'

const isMatch = ({ url, path, options }) => {
  return matchPath(url, {
    ...options,
    path,
  })
}
function Router({ history }) {
  const routeRules = []
  this.unlisten = null
  const isMatchRoute = ({ url, path, options }) => {
    return !!isMatch({ url, path, options })
  }

  const match =
    ({ url }) =>
    ({ route, options }) =>
      isMatchRoute({ url, path: route, options })

  //Checking agains location.pathname since the route that come from the history not reflect the  path in case of not exact
  const excluded =
    ({ pathname }) =>
    ({ options: { exclude } = {} }) => {
      return (
        !exclude ||
        !isMatchRoute({
          url: exclude.url,
          path: pathname,
          options: { exact: exclude.exact },
        })
      )
    }

  const handleRoutes = ({ pathname: url, ...routeParams }) => {
    const { location } = window
    this.routeRules
      .filter(match({ url }))
      .filter(excluded(location))
      .forEach(({ route, options, handler }) => {
        handler.call(null, {
          ...isMatch({ url, path: route, options }),
          options,
          routeParams,
          urlRoute: location.pathname,
        })
      })
  }

  const listen = () => {
    if (typeof this.unlisten === 'function') {
      this.unlisten()
    }
    this.unlisten = history.listen(handleRoutes)
  }

  const stripQuery = (url) => {
    return url.split('?')[0]
  }
  const startRoute = ({ defaultLocation, allowedRoutes }) => {
    if (
      defaultLocation &&
      allowedRoutes.some((path) =>
        isMatch({ url: stripQuery(defaultLocation), path }),
      )
    ) {
      history.replace(defaultLocation)
    } else {
      history.replace(HOME)
    }
  }

  const init = (defaultLocation, allowedRoutes) => {
    this.routeRules = routeRules.filter(({ route }) =>
      allowedRoutes.some((r) => route.includes(r)),
    )

    listen()
    startRoute({ defaultLocation, allowedRoutes })
  }

  function redirect(route) {
    route && handleRoutes(route)
  }

  function setRoute(...settings) {
    const [route] = settings
    if (typeof route !== 'string') {
      throw new Error('Route must be a string')
    }

    const [handler] = settings.slice(-1)
    if (typeof handler !== 'function') {
      throw new Error(
        'Handler must be a function, and at should be the last param',
      )
    }

    const options = settings.slice(1, -1).reduce(
      (obj, prop) => ({
        ...obj,
        ...prop,
      }),
      {},
    )

    routeRules.push({
      route,
      handler,
      options,
    })

    return {
      setRoute,
      redirect,
    }
  }

  return {
    setRoute,
    init,
    redirect,
  }
}

const routerConfig = ({ history }) => new Router({ history })
export default routerConfig
