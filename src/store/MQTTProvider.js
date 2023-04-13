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
    await MQTTService.subscribe('thoiduyphat/feeds/dadn-fan')
    await MQTTService.subscribe('thoiduyphat/feeds/dadn-light')
    await MQTTService.subscribe('thoiduyphat/feeds/dadn-fire')
    await MQTTService.subscribe('thoiduyphat/feeds/dadn-theft')
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
      
        //MQTTService.publishMessage('thoiduyphat/feeds/dadn-temp')
        const temp = MQTTService.valuelist['thoiduyphat/feeds/dadn-temp']
        dispatch(actions.setTemp(temp))
        //humidity
        //MQTTService.publishMessage('thoiduyphat/feeds/dadn-humid')
        const humid = MQTTService.valuelist['thoiduyphat/feeds/dadn-humid']
        dispatch(actions.setHumid(humid))
        // console.log(payload)
        
        //MQTTService.publishMessage('thoiduyphat/feeds/dadn-fan')
        const fan = MQTTService.valuelist['thoiduyphat/feeds/dadn-fan']
        dispatch(actions.setFan(fan))

        const light = MQTTService.valuelist['thoiduyphat/feeds/dadn-light']
        dispatch(actions.setLight(light))

        const door = MQTTService.valuelist['thoiduyphat/feeds/dadn-door']
        dispatch(actions.setDoor(door))
        
        const fire = MQTTService.valuelist['thoiduyphat/feeds/dadn-fire']
        dispatch(actions.setFire(fire))

        const theft = MQTTService.valuelist['thoiduyphat/feeds/dadn-theft']
        dispatch(actions.setTheft(theft))
      }
    }, 1000)
    
    // clean up session
    return () => {
      clearInterval(fetchData)
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-temp')
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-humid')
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-fan')
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-light')
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-door')
      MQTTService.unsubscribe('thoiduyphat/feeds/dadn-fire')
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