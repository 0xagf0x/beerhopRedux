import React, { PropTypes as T } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import styles from './styles.module.css';
const beerMug = (props) => (<span>★</span>)

export class Rating extends React.Component {
  render() {
    const {percentage} = this.props;
    const style = {
      width: 100%;
    }
    return (
      <div className={styles.sprite}>
        <div className={styles.top} style={style}>
            <beerMug />
            <beerMug />
            <beerMug />
            <beerMug />
            <beerMug />
        </div>
      </div>
    )
  }
}

export default Rating;
