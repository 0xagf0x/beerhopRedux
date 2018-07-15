import React, { PropTypes as T } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import Map, { mapApi } from 'google-maps-react'
import { query } from 'utils/googleApiHelpers'
import Hero1 from 'components/Hero1/Hero1'
import styles from './styles.module.css'
export class Container extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      places: []
    }
  }
  
  }onReady(mapProps, map) {
    query(
      this.props.google,
      map,
      {
        location: map.center,
        radius: '200',
        types: ['bars']
      }
    )};
  onMarkerClick(item) {
    const push = this.context.router;
    const place = item;
    push(`/map/detail/${place.place_id}`)
  }
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        places: this.state.places,
        zoom: this.props.zoom,
        google: this.props.google      
      })
      console.log('test3')
    }
    return (
      <Map
        google={this.props.google}
        onReady={this.onReady.bind(this)}
        className={styles.wrapper}>
      </Map>
    )
  }
};
console.log('test4')
Container.contextTypes = {
  router: T.object
}
export default mapApi({
  apiKey: GAPI_KEY
});