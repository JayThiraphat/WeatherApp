import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const name ="Bangkok"
  const apiKey = "a94466f2a17972dca32f2017a5497e79"
  const [city,setCity] =useState({})
  const [isLoading,setIsLoading] =useState(false)

  useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
      setIsLoading(true)
      
    })
  },[name])

  const convertTemp=(k)=>{
    return (k-273).toFixed()
  }
  return (
    (isLoading && <div className="App">
      <section>
        <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className='state'>{city.sys.country}</p>
        </div>
        <div className="card">
          <div className="weather">
            <h1>{convertTemp(city.main.temp)}&deg;C</h1>
            <small>max:{convertTemp(city.main.temp_max)}&deg;C, min {convertTemp(city.main.temp_min)}&deg;C</small>
          </div>
          <div className="info">
            <div className="status">{city.weather[0].main}</div>
            <div className="humidity">{city.main.humidity}</div>
            <div className="wind">{city.wind.speed}</div>
          </div>
        </div>
      </section>
     
    </div>)
    
  )
}

export default App
