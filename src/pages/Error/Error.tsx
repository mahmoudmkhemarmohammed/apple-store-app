import Lottie from "lottie-react"
import notFound from "@assets/lottieFiles/notFound.json"
const Error = () => {
  return <div className="h-screen flex justify-center items-center">
    <Lottie animationData={notFound} loop={true} className="w-3/4"/>
  </div>
}

export default Error