import { useReducer, useEffect, useState } from 'react'
import { MQTTContext } from './authContext'
import Reducer, { initState } from './Reducer'
import * as actions from '../store/Action'

// MQTT service
import MQTTService from '../core/services/MQTTService'

function MQTTProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState)

  const handleSuccess = async () => {
    await MQTTService.subscribe('tracogt/feeds/mb-temp')
    // await MQTTService.subscribe('tracogt/feeds/mb-humid')
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
        MQTTService.publishMessage('tracogt/feeds/mb-temp')
        const temp = MQTTService.valuelist['tracogt/feeds/mb-temp']
        dispatch(actions.setTemp(temp))
        //humidity
        // MQTTService.publishMessage('tracogt/feeds/mb-humid')
        // const humid = MQTTService.valuelist['tracogt/feeds/mb-humid']
        // dispatch(actions.setTemp(humid))
        // console.log(payload)
      }
    }, 10000)

    // clean up session
    return () => {
      // clearInterval(fetchData)
      MQTTService.unsubscribe('tracogt/feeds/mb-temp')
      MQTTService.unsubscribe('tracogt/feeds/mb-humid')
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