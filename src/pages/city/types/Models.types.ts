import * as THREE from 'three'

import type { GLTF } from 'three-stdlib'
export type GLTFLogo = GLTF & {
  nodes: {
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
  }
//   materials: {
//     ['Material.002']: THREE.MeshStandardMaterial
//     ['Material.003']: THREE.MeshStandardMaterial
//   }
}

//Car

export type GLTFCar = GLTF & {
  nodes: {
    meshId5_name: THREE.Mesh;
    meshId5_name_1: THREE.Mesh;
    meshId5_name_2: THREE.Mesh;
    meshId5_name_3: THREE.Mesh;
    meshId5_name_4: THREE.Mesh;
    meshId5_name_5: THREE.Mesh;
    spinner003: THREE.Mesh;
  };
  materials: {
    ["white light"]: THREE.MeshStandardMaterial;
    ex: THREE.MeshStandardMaterial;
    int: THREE.MeshStandardMaterial;
    mirror: THREE.MeshStandardMaterial;
    ["red light"]: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
    ["lights purple"]: THREE.MeshStandardMaterial;
  };
};
//Cone
export type GLTFCone = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
  materials: {
    RingMat: THREE.MeshStandardMaterial
  }
}