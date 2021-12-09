import React, { useState, useEffect } from 'react'

const Age = () => {
  const [age, setAge] = useState('0')

  useEffect(() => {
    const interval = setInterval(() => {
      const time =
        (new Date() - new Date(1080550800000)) / (1000 * 60 * 60 * 24 * 365.25)
      setAge(time.toString().substring(0, 12))
    }, 50)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <span>{age}</span>
}

export default Age
