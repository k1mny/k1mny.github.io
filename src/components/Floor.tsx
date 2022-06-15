import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial, useTexture } from "@react-three/drei"
import { FC } from "react"
import { BufferGeometry, Mesh } from "three";

const Floor: FC = () => {
	// const filePath = (name: string) => process.env.PUBLIC_URL + `/assets/textures/SurfaceImperfections003_1K_${name}.jpg`
	// const [roughness] = useTexture([filePath('var1')])
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

	return (
		<mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>} position-y={-5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
			<planeGeometry args={[200, 200, 100, 100]} />
			<MeshReflectorMaterial
				resolution={2048}
				mirror={1}
				blur={[500, 300]}
				mixBlur={20}
				mixStrength={1.5}
				metalness={1}
				// roughnessMap={roughness}
				// distortionMap={normal}
				// distortion={0.15}
				// normalMap={normal}
				// normalScale={new THREE.Vector2(2, 2)}
				color="#f0f0f0"
			/>
		</mesh>
	)
}

export default Floor;
