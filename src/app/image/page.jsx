import Image from "next/image"
import img from "/public/next.svg"

const imageOptimization = () => {
  console.log(img)
  const netImage = "https://images.pexels.com/photos/12560704/pexels-photo-12560704.jpeg?auto=compress&cs=tinysrgb&w=400"
  return (
    <>
      <h2>Image Optimization</h2>
      <b>1-Optimized Image (Loaded From Hard Disk)</b>
      <br /><br />
      <Image src={img} alt="Next Image"/>
      <br /><br />
      <b>2-Optimized Image (Loaded From Internet)</b>
      <br /><br />
      <Image 
        src={netImage} 
        width={300}
        height={550}
        alt="Internet Image"
      />
    </>
  )
}

export default imageOptimization
