import Details from "./Details"
import Statistics from "./Statistics"



const About = () => {
  return (
    <div className='grid grid-cols-3 p-2 gap-2'>
      <Details />
      <Statistics />
    </div>
  )
}

export default About