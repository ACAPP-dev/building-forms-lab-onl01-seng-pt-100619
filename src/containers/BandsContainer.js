import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        < BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => {
            return <li>{band}</li>
          })}

        </ul>
      </div>
    )
  }
}

const MapStateToProps = state => {
  console.log(state)
  return state
}

const MapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch(addBandAction(formData))
  }
}

const addBandAction = band => {
  return {
    type: 'ADD_BAND',
    band: band
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BandsContainer)
