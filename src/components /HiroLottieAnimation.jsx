import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/motherhood-nature.json"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

function HiroLottieAnimation() {
  return (
    <div>
      <h1>Hello</h1>
      <Lottie options={defaultOptions} height={600} width={1200} />
    </div>
  )
}

export default HiroLottieAnimation
