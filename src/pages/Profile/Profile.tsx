import Lottie from "lottie-react"
import profile from "@assets/lottieFiles/profile.json"
import { useAppSelector } from "@store/hooks"
const Profile = () => {
  const {user} = useAppSelector(state => state.auth)
  return (
    <div>
      <div className="icon flex justify-center items-center p-4">
      <Lottie animationData={profile} loop={false} className="w-[300px]"/>
      </div>
      <div className="text-center mt-7">
        <h1 className="text-3xl mb-8">Hello {user?.firstName}</h1>
        <div className="box flex justify-between p-5 mt-5 gap-4 flex-wrap">
          <div className="bg-[#00aaff] p-2 rounded-md shadow grow">
            <h2 className="text-xl text-white">First Name</h2>
            <h3 className="mt-1">{user?.firstName}</h3>
          </div>
          <div className="bg-[#00aaff] p-2 rounded-md shadow grow">
            <h2 className="text-xl text-white">Last Name</h2>
            <h3 className="mt-1">{user?.lastName}</h3>
          </div>
          <div className="bg-[#00ffbf] p-2 rounded-md shadow w-full">
            <h2 className="text-xl text-white">Email</h2>
            <h3 className="mt-1">{user?.email}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile