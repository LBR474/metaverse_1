

const Ground: React.FC = () => {

  
  return (
    <>
      <mesh rotation-x={Math.PI / -2} receiveShadow>
        <planeBufferGeometry args={[250, 250]} />
        <meshStandardMaterial 
        //color={"blue"}
         />
      </mesh>
    </>
  );
};

export default Ground;
