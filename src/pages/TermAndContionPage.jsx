import React, { useEffect } from 'react'
import TermAndCondition from '../components/TermAndCondition/TermAndCondition'

const TermAndContionPage = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div><TermAndCondition/></div>
  )
}

export default TermAndContionPage