import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import Route  from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router'
import Container from './Container'
import Map from './Map/Map'
import Detail from './Detail/Detail'
export const newRoute = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="map" component={Map}>
        <Route path="detail/:placeId"
          component={Detail} />
      </Route>
      <IndexRoute component={Map} />
    </Route>
  )
}
export default newRoute;