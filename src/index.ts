import *  as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

// RESIZE HAMDLER
export function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// INIT CAMERA
camera.position.z = 15;
camera.position.x = 3;
camera.position.y = 6;
camera.lookAt(0, 0, -20)

// INIT HEMISPHERE LIGHT
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// SCENE

const textureLoader = new THREE.TextureLoader();
const background = textureLoader.load("./nebula.jpg");
scene.background = background;


const blocksBaseColor = textureLoader.load("./blocks-basecolor.jpg");
const blocksNormalMap = textureLoader.load("./blocks-normal.jpg");
const blocksHeightMap = textureLoader.load("./blocks-height.jpg");
const blocksRoughness = textureLoader.load("./blocks-roughness.jpg");
const blocksAmbientOcclusion = textureLoader.load("./blocks-ambientocclusion.jpg");

const brickWallbasecolor = textureLoader.load("./Wood_Ceiling_Coffers_002_basecolor.jpg");
const brickWallnormalMap = textureLoader.load("./Wood_Ceiling_Coffers_002_normal.jpg");
const brickWallheightMap = textureLoader.load("./Wood_Ceiling_Coffers_002_height.png");

const iceBase = textureLoader.load("./Blue_Ice_001_COLOR.jpg");
const iceNormal = textureLoader.load("./Blue_Ice_001_NORM.jpg");
const iceHeight = textureLoader.load("./Blue_Ice_001_DISP.png");
iceBase.wrapS= THREE.RepeatWrapping;
iceBase.wrapT= THREE.RepeatWrapping;
iceBase.repeat.x = 3;
iceBase.repeat.y = 2; 
iceNormal.wrapS= THREE.RepeatWrapping;
iceNormal.wrapT= THREE.RepeatWrapping;
iceNormal.repeat.x = 3;
iceNormal.repeat.y = 2; 
iceHeight.wrapS= THREE.RepeatWrapping;
iceHeight.wrapT= THREE.RepeatWrapping;
iceHeight.repeat.x = 3;
iceHeight.repeat.y = 2;

const metalPlatebasecolor = textureLoader.load("./Terracota_Tiles_003_basecolor.jpg");
const metalPlatenormalMap = textureLoader.load("./Terracota_Tiles_003_normal.jpg");
const metalPlateheightMap = textureLoader.load("./Terracota_Tiles_003_height.png");
metalPlatebasecolor.wrapS= THREE.RepeatWrapping;
metalPlatebasecolor.wrapT= THREE.RepeatWrapping;
metalPlatebasecolor.repeat.x = 3;
metalPlatebasecolor.repeat.y = 1; 
metalPlatenormalMap.wrapS= THREE.RepeatWrapping;
metalPlatenormalMap.wrapT= THREE.RepeatWrapping;
metalPlatenormalMap.repeat.x = 3;
metalPlatenormalMap.repeat.y = 1; 
metalPlateheightMap.wrapS= THREE.RepeatWrapping;
metalPlateheightMap.wrapT= THREE.RepeatWrapping;
metalPlateheightMap.repeat.x = 3;
metalPlateheightMap.repeat.y = 1; 

const dirtBase = textureLoader.load("./Ground_Dirt_008_basecolor.jpg");
const dirtNormal = textureLoader.load("./Ground_Dirt_008_normal.jpg");
const dirtHeight = textureLoader.load("./Ground_Dirt_008_height.png");
dirtBase.wrapS= THREE.RepeatWrapping;
dirtBase.wrapT= THREE.RepeatWrapping;
dirtBase.repeat.x = 7;
dirtBase.repeat.y = 2; 
dirtNormal.wrapS= THREE.RepeatWrapping;
dirtNormal.wrapT= THREE.RepeatWrapping;
dirtNormal.repeat.x = 7;
dirtNormal.repeat.y = 2; 
dirtHeight.wrapS= THREE.RepeatWrapping;
dirtHeight.wrapT= THREE.RepeatWrapping;
dirtHeight.repeat.x = 7;
dirtHeight.repeat.y = 2      ; 

const lavabasecolor = textureLoader.load("./LAVA_004_COLOR.jpg");
const lavanormalMap = textureLoader.load("./LAVA_004_NORM.jpg");
const lavaheightMap = textureLoader.load("./LAVA_004_DISP.png");

const metalTilesbasecolor = textureLoader.load("./Wall Stone 004_COLOR.jpg");
const metalTilesnormalMap = textureLoader.load("./Wall Stone 004_NORM.jpg");
const metalTilesheightMap = textureLoader.load("./Wall Stone 004_DISP.jpg");


const plane1 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: brickWallbasecolor }))
plane1.position.y = 3
plane1.position.x = -8
scene.add(plane1)

const plane2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap }))
plane2.position.y = 3
plane2.position.x = -5.8
scene.add(plane2)


const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding
} );

const cubeCamera = new THREE.CubeCamera( 1, 10000, cubeRenderTarget );


const sphere0 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, envMap: cubeRenderTarget.texture }))
sphere0.geometry.attributes.uv2 = sphere0.geometry.attributes.uv
sphere0.position.y = 3
sphere0.position.x = -4
sphere0.position.z = 3
scene.add(sphere0)


const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: metalTilesbasecolor, normalMap: metalTilesnormalMap, displacementMap: metalTilesheightMap, displacementScale: 0.08}))
sphere1.geometry.attributes.uv2 = sphere1.geometry.attributes.uv
sphere1.position.y = 3
sphere1.position.x = 0
sphere1.position.z = 3
sphere1.add(cubeCamera)
scene.add(sphere1)

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1, 512,512), new THREE.MeshStandardMaterial({ map: iceBase, normalMap: iceNormal, displacementMap: iceHeight, displacementScale: 0.05} ))
sphere2.geometry.attributes.uv2 = sphere2.geometry.attributes.uv
sphere2.position.y = 3
sphere2.position.x = -4
sphere2.position.z = 6
// sphere2.add(cubeCamera)
scene.add(sphere2)

const sphere3 = new THREE.Mesh(new THREE.TorusGeometry(1,0.4, 512, 512), new THREE.MeshStandardMaterial({ map: metalPlatebasecolor, normalMap: metalPlatenormalMap, displacementMap: metalPlateheightMap, displacementScale: 0.08}))
sphere3.geometry.attributes.uv2 = sphere3.geometry.attributes.uv
sphere3.position.y = 3
sphere3.position.x = 0
sphere3.position.z = 6
// sphere3.add(cubeCamera)
scene.add(sphere3)

const sphere4 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 512, 512), new THREE.MeshStandardMaterial({ map: dirtBase, normalMap: dirtNormal, displacementMap: dirtHeight, displacementScale: 0.075}))
sphere4.geometry.attributes.uv2 = sphere4.geometry.attributes.uv
sphere4.position.y = 3
sphere4.position.x = -4
sphere4.position.z = 9
// sphere4.add(cubeCamera)
scene.add(sphere4)

const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: lavabasecolor, normalMap: lavanormalMap, displacementMap: lavaheightMap, displacementScale: 0.15}))
sphere5.geometry.attributes.uv2 = sphere5.geometry.attributes.uv
sphere5.position.y = 3
sphere5.position.x = 0
sphere5.position.z = 9
// sphere5.add(cubeCamera)
scene.add(sphere5)

// DIRECTIONAL LIGHT
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.x += 20
directionalLight.position.y += 20
directionalLight.position.z += 20
scene.add(directionalLight);

// scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

// ANIMATE
function animate() {
    const time = Date.now() * 0.0005;
    directionalLight.position.x =  Math.sin(time * 0.7) * 20;
    directionalLight.position.z = Math.abs( Math.cos(time * 0.7) ) * 20;
    sphere0.rotateX(-0.001);
    sphere0.rotateY(-0.005);
    sphere1.rotateX(0.001);
    sphere1.rotateY(0.005);
    sphere2.rotateX(-0.001);
    sphere2.rotateY(-0.005);
    sphere3.rotateX(0.001);
    sphere3.rotateY(0.005);
    sphere4.rotateX(-0.001);
    sphere4.rotateY(-0.005);
    sphere4.rotateZ(0.000)
    sphere5.rotateX(0.001);
    sphere5.rotateY(0.005);
    controls.update();

    cubeCamera.update( renderer, scene );

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
document.body.appendChild(renderer.domElement);
animate();