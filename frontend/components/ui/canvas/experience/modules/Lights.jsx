export default function Lights() {
    return (
        <>
            <ambientLight color={'white'} intensity={0} />
            <directionalLight color={'white'} intensity={1.0} position={[- 50, 300, -80]} />
        </>
    )
}