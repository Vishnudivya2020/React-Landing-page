import React from 'react';
import Card from './card.jsx';
import Icons,{People} from './Icons.jsx';
import Header from './HF.jsx';
import "bootstrap/dist/css/bootstrap.min.css";



import './App.css'

function App() {
 const cardData=[
  {
    type:'description',  
    title:"Fully Responsive Design",
    description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  },
  {
    type:"image",
    title:"image 1",
    image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
  },
  {
    type:"image",
    title:"image 2",
    image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg", 
  },
  {
    type:'description', 
    title:"Updated For Bootstrap 5",
    description:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  },
  
  {
    type:'description', 
    title:"Easy to Use & Customize",
    description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  },
  {
    type:"image",
    title:"image 3",
    image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg", 
  }
 ] 
 const icondata=[
  {
   
     icons:<div className='window'><i className="bi bi-window" ></i></div>, 

    title:"Fully Responsive",
    description:"This theme will look great on any device, no matter the size!",
  
  },
  {
     icons:<div className="layer"><i className="bi bi-layers"></i></div>,
    title:"Bootstrap 5 Ready",
    description:"Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
     icons:<div className="terminal"><i className="bi bi-terminal"></i></div>,
    title:"Easy to Use",
    description:"Ready to use with your own content, or customize the source files!",
  },
 ]

 const peopledata=[
  {
    image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    name:"Margaret E.",
    review:`"This is fantastic!Thanks so much guys!"`,
  },
  {
    image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    name:"Fred S.",
    review:`"Bootstrap is amazing.I've been using it 
             to create lots of super nice landing 
                         pages."`,
  },
  {
    image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    name:"Sarah W.",
    review:`"Thanks so much for making these free 
                resources available to us!"`,
  },

  
 ]
 

  return (
    <>
    <div className='h-container'>
      <p className='para'>Generate more leads with a professional landing page!</p>
    <Header/>
    </div>
      <div className='I-data'>
       {icondata.map((data)=>(<Icons {...data} key={data.title}/>))}
       </div>
  
    <div className='container'>
      
     {cardData.map((val) => (<Card {...val} key={val.title} />
    ))} 
    </div>

    
    <div className='peo-container'>
    <div><h2 className='head'>What people are saying...</h2></div>
      {peopledata.map((Data) =>(<People {...Data} key={Data.name}/>
    ))}
    </div>
    <div  className='f-container'>
      <p className='f-para'>Ready to get started?Sign up now!</p>
    <Header />
    </div>
     <Anchor/>
    
    

    </>
   
    
  )
}

export default App;

function Anchor() {
return(
  <div>
    <div className='anchor-container'>
  <a className='about' >About</a>.
  <a className='contact'>Contact</a>.
  <a className='terms'>Terms of Use</a>.
  <a className='policy'>Privacy policy</a>.
  </div>
  <p className="endpara">© Your Website 2023.All Rights Reserved.</p>
  <div className="mediacontainer">
  <span className='fb'><i className="bi bi-facebook"></i></span>
   <span className='twitter'><i className="bi bi-twitter"></i></span>
  <span className='instra'><i className="bi bi-instagram"></i></span>
  </div>
  </div>
)
}
