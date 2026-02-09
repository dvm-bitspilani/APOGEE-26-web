import React from 'react'
import InfernusLeva from './InfernusLeva/InfernusLeva'
import BloomLeva from './BloomLeva/BloomLeva'
import CityDebugLeva from './CityDebugLeva/CityDebugLeva'


const CombinedLeva = () => {
  return (
    <>
      <BloomLeva/>
      <InfernusLeva/>
      <CityDebugLeva/>
    </>
  )
}

export default CombinedLeva
