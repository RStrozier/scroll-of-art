import BlueBlob from "../assets/BlueBlob"
import LightWaves from "../assets/LightWaves"
import PinkBlob from "../assets/PinkBlob"


const Homepage = () => {
  return (
    <>
    <div className="art-piece">
    <PinkBlob />
    </div>

    <div className="art-piece">
    <BlueBlob />
    </div>
    
    <div className="art-piece">
    <LightWaves />
    </div>
    </>
  )
}

export default Homepage