import { useReducer, useEffect, useState } from 'react'
import { MQTTContext } from './authContext'
import Reducer, { initState } from './Reducer'
import * as actions from '../store/Action'

// MQTT service
import MQTTService from '../core/services/MQTTService'

function MQTTProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState)

  const handleSuccess = async () => {
    await MQTTService.subscribe('hienhien612/feeds/dadn-temp-1')
    await MQTTService.subscribe('hienhien612/feeds/dadn-humi-1')
    await MQTTService.subscribe('hienhien612/feeds/dadn-fan-1')
    await MQTTService.subscribe('hienhien612/feeds/dadn-led-1')
    await MQTTService.subscribe('hienhien612/feeds/dadn-gas')
    await MQTTService.subscribe('hienhien612/feeds/dadn-door')
    await MQTTService.subscribe('hienhien612/feeds/dadn-human')
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
        const temp = MQTTService.valuelist['hienhien612/feeds/dadn-temp-1']
        dispatch(actions.setTemp(temp))
        //humidity
        //MQTTService.publishMessage('thoiduyphat/feeds/dadn-humid')
        const humid = MQTTService.valuelist['hienhien612/feeds/dadn-humi-1']
        dispatch(actions.setHumid(humid))
        // console.log(payload)
        const fire = MQTTService.valuelist['hienhien612/feeds/dadn-gas']
        dispatch(actions.setFire(fire))
        
        const human = MQTTService.valuelist['hienhien612/feeds/dadn-human']
        dispatch(actions.setTheft(human))
        
        const fan = MQTTService.valuelist['hienhien612/feeds/dadn-fan-1']
        dispatch(actions.setFan(fan))

        const light = MQTTService.valuelist['hienhien612/feeds/dadn-led-1']
        dispatch(actions.setLight(light))        

        const door = MQTTService.valuelist['hienhien612/feeds/dadn-door']
        dispatch(actions.setDoor(door))  }
      },3000)        
    
    // clean up session
    return () => {
      clearInterval(fetchData)
      MQTTService.unsubscribe('hienhien612/feeds/dadn-temp-1')
      MQTTService.unsubscribe('hienhien612/feeds/dadn-humi-1')
      MQTTService.unsubscribe('hienhien612/feeds/dadn-fan-1')
      MQTTService.unsubscribe('hienhien612/feeds/dadn-led-1')
      MQTTService.unsubscribe('hienhien612/feeds/dadn-door')
      MQTTService.unsubscribe('hienhien612/feeds/dadn-gas')
      MQTTService.unsubscribe('hienhien612/feeds/dadn-human')
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