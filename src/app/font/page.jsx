import { Poppins } from "next/font/google"
const poppins = Poppins({
  weight:"900",
  subsets: ["latin","latin-ext"],
  display: "swap"
})

const fontOptimization = () => {
  return (
    <>
      <h2>Font Optimization</h2>
      <div className={poppins.className}>
        <p style={{ fontSize: "60px" }}>Optimized Fonts</p>
        <p style={{ fontSize: "40px" }}>Advantages :</p>
        <p style={{ fontSize: "30px" }}>1. It does not load in each refresh. So faster</p>
        <p style={{ fontSize: "30px" }}>2. It hides all details about the fonts.</p>
      </div>
      
      
    </>
  )
}

export default fontOptimization
