import React from 'react'
import { useState } from 'react'
import "./works.scss"

export default function Works() {
  const[currentSlide,setCurrentSlide]= useState()
  const data= [
    {
      id: 1,
      title: "Social Media App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint inventore ab exercitationem.",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
    },
    {
      id: 2,
      title: "Rampa UI Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint inventore ab exercitationem.",
      img:
        "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
    },
    {
      id: 3,
      title: "E-commerce Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint inventore ab exercitationem.",
      img:
        "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
    setCurrentSlide (currentSlide < data.length-1 ? currentSlide+1 : 0);
  }

  return (
    <div className="works" id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {
          data.map(d=>(
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8-1536x936.png" alt="" />
              </div>
            </div>
          </div>
          ))
        }
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=> handleClick("right")} />

    </div>
  )
}
