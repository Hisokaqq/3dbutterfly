import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Butterfly = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/butterfly/scene.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Object_0.timeScale = 0.2;
    actions.Object_0.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group  name="Object_3">
          <group  name="Object_4" position={[2.473, -1.185, 1.224]} rotation={[-Math.PI / 2, 0, 0]}>
            <group  name="Object_8" position={[0.144, -1.17, 1.185]}>
              <group  name="Object_9" position={[29.774, 0.869, 0]}>
                <group  name="MorphMainGroup_16">
                  <mesh
                  
                    name="Line001"
                    geometry={nodes.Line001.geometry}
                    material={materials.Line001}
                    morphTargetDictionary={nodes.Line001.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line001.morphTargetInfluences}
                  />
                </group>
                <group   name="MorphMainGroup_17">
                  <mesh
                    name="Line001_1"
                    geometry={nodes.Line001_1.geometry}
                    material={materials.Line001}
                    morphTargetDictionary={nodes.Line001_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line001_1.morphTargetInfluences}
                  />
                </group>
              </group>
              <group  visible={false} name="Object_14" position={[29.774, 0.869, 0]}>
                <group name="MorphMainGroup_18">
                  <mesh
                    name="Line001_2"
                    geometry={nodes.Line001_2.geometry}
                    material={materials.Line001}
                    morphTargetDictionary={nodes.Line001_2.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line001_2.morphTargetInfluences}
                  />
                </group>
                <group   name="MorphMainGroup_19">
                  <mesh
                    name="Line001_3"
                    geometry={nodes.Line001_3.geometry}
                    material={materials.Line001}
                    morphTargetDictionary={nodes.Line001_3.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line001_3.morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
            <group  name="Object_19" position={[0.128, -1.891, 1.185]}>
              <group name="Object_20" position={[-31.618, -4.184, 0]}>
                <group name="MorphMainGroup_20">
                  <mesh
                    name="Line004"
                    geometry={nodes.Line004.geometry}
                    material={materials.Line004}
                    morphTargetDictionary={nodes.Line004.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line004.morphTargetInfluences}
                  />
                </group>
                <group  name="MorphMainGroup_21">
                  <mesh


                    name="Line004_1"
                    geometry={nodes.Line004_1.geometry}
                    material={materials.Line004}
                    morphTargetDictionary={nodes.Line004_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line004_1.morphTargetInfluences}
                  />
                </group>
              </group>
              <group visible={false} name="Object_26" position={[-31.618, -4.184, 0]}>
                <group name="MorphMainGroup_22">
                  <mesh
                  
                    name="Line004_2"
                    geometry={nodes.Line004_2.geometry}
                    material={materials.Line004}
                    morphTargetDictionary={nodes.Line004_2.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line004_2.morphTargetInfluences}
                  />
                </group>
                <group name="MorphMainGroup_23">
                  <mesh
                    name="Line004_3"
                    geometry={nodes.Line004_3.geometry}
                    material={materials.Line004}
                    morphTargetDictionary={nodes.Line004_3.morphTargetDictionary}
                    morphTargetInfluences={nodes.Line004_3.morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Butterfly;
