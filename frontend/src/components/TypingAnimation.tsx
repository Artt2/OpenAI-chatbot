import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat with your own AI",
        1000,
        "Built with OpenAI",
        1000,
        "Customized ChatGPT experience",
        1500,
        "Built using React, TypeScript & more",
        1500,
      ]}
      speed={50}
      style={{ 
        fontSize: "60px",
        color: "white", 
        display: "inline-block", 
        textShadow: "1px 1px 20px #000" 
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;