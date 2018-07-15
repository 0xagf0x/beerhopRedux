import React, { PropTypes as T } from '../Library/Caches/typescript/2.9/node_modules/@types/react'
import Map from 'google-maps-react'
import styles from './styles.module.css'

export class MapComponent extends React.Component {
  renderIcons() {
    if (this.props.places) {
      return;
    }
  render() {
    const {children} = this.props;
    return (
      <Map map={this.props.map}
        google={this.props.google}
        className={styles.map}>
        {this._renderChildren()}
      </Map>
    )
  }
}
export default Map;