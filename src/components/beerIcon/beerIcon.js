import React, { PropTypes as T } from 'react'
import styles from './styles.module.css';

const beerMug = (props) => (<div>🍺</div>)
export class Rating extends React.Component {
  render() {
    const = this.props;
    const style = {
      width: 100%
    }
    return (
      <div className={styles.sprite}>
        <div className={styles.top} style={style}>
        {/* rating 1 */}
            <beerMug /> 
          {/* rating 2 */}
            <beerMug />
          {/* rating 3 */}
            <beerMug />
          {/* rating 4 */}
            <beerMug />
          {/* rating 5 */}
            <beerMug />
        </div>
      </div>
    )
  }
}

export default Rating;