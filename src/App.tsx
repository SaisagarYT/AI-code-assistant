
import { useEffect,useState } from "react"
import {checkBackendAlive} from "./api/api"

export const App = () => {
  const [res,setRes] = useState("");
  useEffect(() =>{
    const fetchData = async() =>{
      const respnose = await checkBackendAlive();
      setRes(respnose.message);
    }
    fetchData();
  },[])
  return (
    <div className="w-screen h-screen bg-red-300 flex justify-center items-center text-8xl">
      <p>{res}</p>
    </div>
  )
}
