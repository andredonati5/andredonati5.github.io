import React from 'react'
import OceanWave from './ocean-wave2.svg'

export default class LaunchScreen extends React.Component {
  render () {
    return <div>
            <object
                    type="image/svg+xml"
                    width = "700px"
                    height = "700px"
                    data={OceanWave}/>
                    <object
                    type="image/svg+xml"
                    width = "400px"
                    height = "400px"
                    data={OceanWave}/>
        </div>
  }
}
