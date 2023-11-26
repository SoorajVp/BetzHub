import Details from "./Details"
import Statistics from "./Statistics"

const About = () => {
  return (
    <div className='grid md:grid-cols-3 p-2 py-14 gap-2'>
      <Details />
      <Statistics />
      <div className="md:col-span-1 w-full bg-gray-200 rounded-md">
        <div className="text-center py-2">
          <h3 className="text-sm text-gray-700 font-semibold">Bonus subscription</h3>
          <h4 className="text-2xs text-gray-700 py-1">Bonus subscription not available.</h4>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 w-full  bg-gray-200 rounded-md">
        <div className="text-center py-3">
          <h3 className="text-sm text-gray-700 font-semibold">Today total deposit</h3>
          <h4 className="text-2xs text-gray-700 font-semibold py-1">0</h4>
        </div>

      </div>
    </div>
  )
}

export default About