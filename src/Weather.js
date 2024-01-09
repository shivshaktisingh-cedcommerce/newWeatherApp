import "./Weather.css"
import React from 'react'
import { useState, useEffect } from 'react'


export default function Weather() {
  //  <img id="home" src="https://media.giphy.com/media/xT1XGLSb5E1VjIUw4E/giphy.gif" alt=""/>
  const [post, setPost] = useState()
  const [place, setPlace] = useState("Lucknow")
  const [currentgif, setCurrentgif] = useState()
  const [first, setfirst] = useState()
  var d = new Date();

  const getData = () => {

    fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=${place}`)
      .then((res) => res.json())
      .then(json => { setPost(json) })
      (post === undefined ? "" : setfirst("1"))

  }
  console.log(first);

  useEffect(() => {
    var k;
    var z;

    if (post !== undefined) {
      z = post.current.condition.text

      if (z === "Partly cloudy") {
        k = "partlycloudy";
      }
      if (z === "Mist") {
        k = "mist";
      }
      if (z === "Patchy rain possible") {
        k = "patchyrain";
      }
      if (z === "Heavy rain") {
        k = "heavyrain";
      }
      if (z === "Light rain shower") {
        k = "lightrainshower";
      }
      if (z === "Moderate or heavy rain with thunder") {
        k = "heavyrain";
      }
      if (z === "Patchy light rain") {
        k = "patchyrain"
      }
      if (z === "Sunny") {
        k = "sunny"
      }


    }
    setCurrentgif(k)


  }, [post])

  return (
    <div id={currentgif} className="maindiv" >
   
      <h2 style={{ marginTop: 0, color: "black" }}>Weather App</h2>

      <input type="text" id="findplace" onChange={(event) => setPlace(event.target.value)} value={place} />
      <button onClick={getData}>Find</button>
      <div id="result">

        <h2>{post === undefined ? "" : "City : " + post.location.name} </h2>
        <h2>{post === undefined ? "" : "Country : " + post.location.country}</h2>
        <h2>{post === undefined ? "" : "Date : " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()}</h2>
        <h2>{post === undefined ? "" : "Temperature : " + post.current.temp_c} &#8451; </h2>
        <h2>{post === undefined ? "" : post.current.condition.text}</h2>

      </div>
      


    </div>
  )
}
