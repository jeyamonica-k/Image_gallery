import "./style.css"
import picture1 from "./assets/images/Americandragon.jpg"
import picture2 from "./assets/images/ben10.jpg"
import picture4 from "./assets/images/Jackiechan.jpg"
import picture3 from "./assets/images/courage-the-cowardly-dog.jpg"
import picture5 from "./assets/images/mr-bean.jpg"
import picture6 from "./assets/images/ninja-hattori.jpg"
import picture7 from "./assets/images/scooby-doo.jpg"
import picture8 from "./assets/images/tom-and-jerry.jpg"


function Gallery(){
  
  const arr=["American Dragon", "Ben10","Courage-the-cowardly-dog","Jackiechan","MrBean","NinjaHattori","Scoobydoo","Tom&Jerry"]
  const imagelist=[{
    id:'1',
    picture: picture1,
    name:'American Dragon'
  },
  {
    id:'2',
    picture:picture2,
    name:'Ben10'
  },
  {
    id:'3',
    picture:picture3,
    name:'Courage-the-cowardly-dog'
  },
  {
    id:'4',
    picture:picture4,
    name:'Jackiechan'
  },
  {
    id:'5',
    picture:picture5,
    name:'MrBean'
  },
  {
    id:'6',
    picture:picture6,
    name:'NinjaHattori'
  },
  {
    id:'7',
    picture:picture7,
    name:'ScoobyDoo'
  },
  {
    id:'8',
    picture:picture8,
    name:'Tom&Jerry'
  }
]
  return (<div className="container" >{

    imagelist.map(function(item,index){
      return (<div className="course_card">
      <img src={item.picture}  className="clr" alt={index} width="300px" height="400px"></img> 
      <h1>{item.name}</h1></div>
      )
   })
   }
   </div>)
}

export default Gallery