import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;


// import { useEffect, useState } from "react";
// import useLocalStorage from "./useLocalStorage";

// const useColorMode = () => {
//   const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     // Ensure the code runs only in the browser
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!isClient) return;

//     const className = "dark";
//     const bodyClass = window.document.body.classList;

//     colorMode === "dark"
//       ? bodyClass.add(className)
//       : bodyClass.remove(className);
//   }, [colorMode, isClient]);

//   return [colorMode, setColorMode];
// };

// export default useColorMode;
