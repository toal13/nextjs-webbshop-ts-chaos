import { Box, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const textList = [
  "Last Chance To Get 20% OFF On All Products",
  "5% OFF For Newsletter-Sign Up",
  "365 Days Return Policy",
  "Free Shipping On Orders Over 500 Kr",
];

const slideDown = keyframes`
  0% { transform: translateY(-100%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;

export default function SlidingTextBanner() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((currentText) => (currentText + 1) % textList.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      bg='#E4A757'
      position='relative'
      overflow='hidden'
      w='100%'
      h='1.5rem'
      textAlign='center'
      color='white'
      fontWeight='bold'
    >
      <Box animation={`${slideDown} 3s linear infinite`}>
        {textList[currentText]}
      </Box>
    </Box>
  );
}
