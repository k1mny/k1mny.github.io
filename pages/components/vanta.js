import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

export default function Vanta(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          THREE: THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9e9ea7,
          shininess: 18.00,
          waveHeight: 9.00,
          waveSpeed: 0.50,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Box ref={vantaRef} w="full" h="100vh">
      <div>{props.children}</div>
    </Box>
  );
}
