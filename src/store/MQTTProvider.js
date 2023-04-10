import { useReducer, useEffect, useState } from 'react'
import { MQTTContext } from './authContext'
import Reducer, { initState } from './Reducer'
import * as actions from '../store/Action'

// MQTT service
import MQTTService from '../core/services/MQTTService'

function MQTTProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState)

  const handleSuccess = async () => {
    await MQTTService.subscribe('thoiduyphat/feeds/dadn-temp')
    await MQTTService.subscribe('thoiduyphat/feeds/dadn-humid')
    // console.log(state)
  }

  // create connection
  useEffect(() => {
    if (MQTTService && !MQTTService.isConnected) {
      MQTTService.connect(handleSuccess)
      // console.log('Server is connected? ', MQTTService.isConnected)
    }

    // get the latest data
    const fetchData = setInterval(() => {
      if (MQTTService.isConnected) {
        // temperature
        MQTTService.publishMessage('thoiduyphat/feeds/dadn-temp')
        const temp = MQTTService.valuelist['thoiduyphat/feeds/dadn-temp']
        dispatch(actions.setTemp(temp))
        //humidity
        MQTTService.publishMessage('thoiduyphat/feeds/dadn-humid')
        const humid = MQTTService.valuelist['thoiduyphat/feeds/dadn-humid']
        dispatch(actions.setHumid(humid))
        // console.log(payload)
      }
    }, 10000)

    // clean up session
    return () => {
      clearInterval(fetchData)
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-temp')
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-humid')
      MQTTService.disconnect()
    }
  }, [])

  return (
    <MQTTContext.Provider value={[state, dispatch]}>
      {children}
    </MQTTContext.Provider>
  )
}

export default MQTTProvider