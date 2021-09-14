
//--------------------------------------------------------------------------------------------------------//  
//--------------------------------------     AUTHORS       -----------------------------------------------//   
//--------------------------------------------------------------------------------------------------------//  
//--------------------------------------   Maciej Kowalka  -----------------------------------------------// 
//--------------------------------------   Kacper Doleba   -----------------------------------------------//
//--------------------------------------  Tomasz Żukowski  -----------------------------------------------//
//--------------------------------------------------------------------------------------------------------//  

// IMPORTS
import *  as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBA_ASTC_10x10_Format, Vector2 } from 'three';

//INSTRUCTION
alert("To move camera use your mouse (zoom - scroll). You can pick 7 default camera positions, just click number from 1 to 6. To reset perspective click 'r' ")

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// CONTROLS
 
var controls = new OrbitControls(camera, renderer.domElement);
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
camera.position.z = 20;
camera.position.x = 6;
camera.position.y = 8;
controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
controls.target = new THREE.Vector3(6, 3, 3);

// INIT HEMISPHERE LIGHT
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// SCENE

//TEXTURE LOADING
const textureLoader = new THREE.TextureLoader();
const background = textureLoader.load("./nebula.jpg");
scene.background = background;

const woodCeilingbasecolor = textureLoader.load("./Wood_Ceiling_Coffers_002_basecolor.jpg");
const planewoodCeilingbasecolor = textureLoader.load("./Wood_Ceiling_Coffers_002_basecolor.jpg");
const woodCeilingnormalMap = textureLoader.load("./Wood_Ceiling_Coffers_002_normal.jpg");
const planewoodCeilingnormalMap = textureLoader.load("./Wood_Ceiling_Coffers_002_normal.jpg");
const woodCeilingheightMap = textureLoader.load("./Wood_Ceiling_Coffers_002_height.png");
const planewoodCeilingheightMap = textureLoader.load("./Wood_Ceiling_Coffers_002_height.png");
var y_axis = 1.5;
var x_axis = 1.5;
woodCeilingbasecolor.wrapS= woodCeilingnormalMap.wrapS= woodCeilingheightMap.wrapS= planewoodCeilingbasecolor.wrapS= planewoodCeilingnormalMap.wrapS= planewoodCeilingheightMap.wrapS=THREE.RepeatWrapping;
woodCeilingbasecolor.wrapT=  woodCeilingnormalMap.wrapT= woodCeilingheightMap.wrapT= planewoodCeilingbasecolor.wrapT=  planewoodCeilingnormalMap.wrapT= planewoodCeilingheightMap.wrapT= THREE.RepeatWrapping;
woodCeilingbasecolor.repeat.x = woodCeilingnormalMap.repeat.x = woodCeilingheightMap.repeat.x = x_axis;
woodCeilingbasecolor.repeat.y = woodCeilingnormalMap.repeat.y = woodCeilingheightMap.repeat.y = y_axis;



const iceBase = textureLoader.load("./Blue_Ice_001_COLOR.jpg");
const iceNormal = textureLoader.load("./Blue_Ice_001_NORM.jpg");
const iceHeight = textureLoader.load("./Blue_Ice_001_DISP.png");
const planeiceBase = textureLoader.load("./Blue_Ice_001_COLOR.jpg");
const planeiceNormal = textureLoader.load("./Blue_Ice_001_NORM.jpg");
const planeiceHeight = textureLoader.load("./Blue_Ice_001_DISP.png");
var y_axis = 2;
var x_axis = 2;
iceBase.wrapS= THREE.RepeatWrapping;
iceBase.wrapT= THREE.RepeatWrapping;
iceNormal.wrapS= THREE.RepeatWrapping;
iceNormal.wrapT= THREE.RepeatWrapping;
iceHeight.wrapS= THREE.RepeatWrapping;
iceHeight.wrapT= THREE.RepeatWrapping;
iceBase.repeat.x = iceNormal.repeat.x = iceHeight.repeat.x = x_axis;
iceBase.repeat.y = iceNormal.repeat.y = iceHeight.repeat.y = y_axis;


const teracotaPlatebasecolor = textureLoader.load("./Terracota_Tiles_003_basecolor.jpg");
const teracotaPlatenormalMap = textureLoader.load("./Terracota_Tiles_003_normal.jpg");
const teracotaPlateheightMap = textureLoader.load("./Terracota_Tiles_003_height.png");
const planeteracotaPlatebasecolor = textureLoader.load("./Terracota_Tiles_003_basecolor.jpg");
const planeteracotaPlatenormalMap = textureLoader.load("./Terracota_Tiles_003_normal.jpg");
const planeteracotaPlateheightMap = textureLoader.load("./Terracota_Tiles_003_height.png");
teracotaPlatebasecolor.wrapS= THREE.RepeatWrapping;
teracotaPlatebasecolor.wrapT= THREE.RepeatWrapping;
var y_axis = 2;
var x_axis = 2;

teracotaPlatenormalMap.wrapS= THREE.RepeatWrapping;
teracotaPlatenormalMap.wrapT= THREE.RepeatWrapping;
teracotaPlateheightMap.wrapS= THREE.RepeatWrapping;
teracotaPlateheightMap.wrapT= THREE.RepeatWrapping;
teracotaPlatebasecolor.repeat.x = teracotaPlatenormalMap.repeat.x = teracotaPlateheightMap.repeat.x = x_axis;
teracotaPlatebasecolor.repeat.y = teracotaPlatenormalMap.repeat.y = teracotaPlateheightMap.repeat.y = y_axis;


const dirtBase = textureLoader.load("./Ground_Dirt_008_basecolor.jpg");
const dirtNormal = textureLoader.load("./Ground_Dirt_008_normal.jpg");
const dirtHeight = textureLoader.load("./Ground_Dirt_008_height.png");
const planedirtBase = textureLoader.load("./Ground_Dirt_008_basecolor.jpg");
const planedirtNormal = textureLoader.load("./Ground_Dirt_008_normal.jpg");
const planedirtHeight = textureLoader.load("./Ground_Dirt_008_height.png");
dirtBase.wrapS= THREE.RepeatWrapping;
dirtBase.wrapT= THREE.RepeatWrapping;
var y_axis = 2;
var x_axis = 2;

dirtNormal.wrapS= THREE.RepeatWrapping;
dirtNormal.wrapT= THREE.RepeatWrapping;
dirtHeight.wrapS= THREE.RepeatWrapping;
dirtHeight.wrapT= THREE.RepeatWrapping;
dirtBase.repeat.x = dirtNormal.repeat.x = dirtHeight.repeat.x = x_axis;
dirtBase.repeat.y = dirtNormal.repeat.y = dirtHeight.repeat.y = y_axis;

let lava_Base = "./LAVA_004_COLOR.jpg"
let lava_Norm = "./LAVA_004_NORM.jpg"
let lava_Disp = "./LAVA_004_DISP.png"

const lavabasecolor = textureLoader.load(lava_Base);
const planelavabasecolor = textureLoader.load(lava_Base);
const lavanormalMap = textureLoader.load(lava_Norm);
const planelavanormalMap = textureLoader.load(lava_Norm);
const lavaheightMap = textureLoader.load(lava_Disp);
const planelavaheightMap = textureLoader.load(lava_Disp);

lavabasecolor.wrapS= lavanormalMap.wrapS= lavaheightMap.wrapS= planelavabasecolor.wrapS= planelavanormalMap.wrapS= planelavaheightMap.wrapS= THREE.RepeatWrapping;
lavabasecolor.wrapT =lavanormalMap.wrapT= lavaheightMap.wrapT= planelavabasecolor.wrapT =planelavanormalMap.wrapT= planelavaheightMap.wrapT= THREE.RepeatWrapping;
var y_axis = 3;
var x_axis = 3;

lavabasecolor.repeat.x = lavanormalMap.repeat.x = lavaheightMap.repeat.x = x_axis;
lavabasecolor.repeat.y = lavanormalMap.repeat.y = lavaheightMap.repeat.y = y_axis;



let Brick_Wall_Base = "./Brick_Wall_018_basecolor.jpg";
let Brick_Wall_Normal = "./Brick_Wall_018_normal.jpg"
let Brick_Wall_Height = "./Brick_Wall_018_height.png"
const wallStonebasecolor = textureLoader.load(Brick_Wall_Base);
const planeWallStoneBase = textureLoader.load(Brick_Wall_Base);
const wallStonenormalMap = textureLoader.load(Brick_Wall_Normal);
const planeWallStonenormalMap = textureLoader.load(Brick_Wall_Normal);
const wallStoneheightMap = textureLoader.load(Brick_Wall_Height);
const planeWallStoneheightMap = textureLoader.load(Brick_Wall_Height);

planeWallStoneBase.wrapS = planeWallStonenormalMap.wrapS = planeWallStoneheightMap.wrapS = wallStonebasecolor.wrapS= wallStonenormalMap.wrapS= wallStoneheightMap.wrapS=THREE.RepeatWrapping;
planeWallStoneBase.wrapT = planeWallStonenormalMap.wrapT = planeWallStoneheightMap.wrapS = wallStonebasecolor.wrapT= wallStonenormalMap.wrapT= wallStoneheightMap.wrapT=THREE.RepeatWrapping;
var y_axis = 3;
var x_axis = 3;
wallStonebasecolor.repeat.x = wallStonenormalMap.repeat.x = wallStoneheightMap.repeat.x = x_axis;
wallStonebasecolor.repeat.y = wallStonenormalMap.repeat.y = wallStoneheightMap.repeat.y = y_axis;


let numOfSegments =512

// PLANES

const plane1 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, numOfSegments,numOfSegments), new THREE.MeshStandardMaterial({  map: planewoodCeilingbasecolor, normalMap: planewoodCeilingnormalMap, displacementMap: planewoodCeilingheightMap, displacementScale: 0.02 }))
plane1.geometry.attributes.uv2 = plane1.geometry.attributes.uv
plane1.position.y = 3
plane1.position.x = -4
scene.add(plane1)

const plane2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, numOfSegments,numOfSegments), new THREE.MeshStandardMaterial({ map: planeWallStoneBase, normalMap: planeWallStonenormalMap, displacementMap: planeWallStoneheightMap, displacementScale: 0.019 }))
plane2.position.y = 3
plane2.position.x = 8
scene.add(plane2)

const plane3 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, numOfSegments,numOfSegments), new THREE.MeshStandardMaterial({ map: planeteracotaPlatebasecolor, normalMap: planeteracotaPlatenormalMap, displacementMap: planeteracotaPlateheightMap, displacementScale: 0.02 }))
plane3.position.y = 3
plane3.position.x = 4
scene.add(plane3)

const plane4 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, numOfSegments,numOfSegments), new THREE.MeshStandardMaterial({ map: planedirtBase, normalMap: planedirtNormal, displacementMap: planedirtHeight, displacementScale: 0.02 }))
plane4.position.y = 3
plane4.position.x = 0
scene.add(plane4)

const plane5 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, numOfSegments,numOfSegments), new THREE.MeshStandardMaterial({ map: planelavabasecolor, normalMap: planelavanormalMap, displacementMap: planelavaheightMap, displacementScale: 0.02 }))
plane5.position.y = 3
plane5.position.x = 12
scene.add(plane5)

const plane6 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, numOfSegments,numOfSegments), new THREE.MeshStandardMaterial({ map: planeiceBase, normalMap: planeiceNormal, displacementMap: planeiceHeight, displacementScale: 0.02 }))
plane6.position.y = 3
plane6.position.x = 16
scene.add(plane6)

var poligon_count = 512;

//SPHERES 

const sphere0 = new THREE.Mesh(new THREE.SphereGeometry(1, poligon_count, poligon_count), new THREE.MeshStandardMaterial({ map: woodCeilingbasecolor, normalMap: woodCeilingnormalMap, displacementMap: woodCeilingheightMap, displacementScale: 0.05 }))
sphere0.geometry.attributes.uv2 = sphere0.geometry.attributes.uv
sphere0.position.y = 3
sphere0.position.x = -4
sphere0.position.z = 3
scene.add(sphere0)


const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1, poligon_count, poligon_count), new THREE.MeshStandardMaterial({ map: wallStonebasecolor, normalMap: wallStonenormalMap, displacementMap: wallStoneheightMap, displacementScale: 0.05 }))
sphere1.geometry.attributes.uv2 = sphere1.geometry.attributes.uv
sphere1.position.y = 3
sphere1.position.x = 8
sphere1.position.z = 3

scene.add(sphere1)

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1, poligon_count,poligon_count), new THREE.MeshStandardMaterial({ map: iceBase, normalMap: iceNormal, displacementMap: iceHeight, displacementScale: 0.05 } ))
sphere2.geometry.attributes.uv2 = sphere2.geometry.attributes.uv
sphere2.position.y = 3
sphere2.position.x = 16
sphere2.position.z = 3

scene.add(sphere2)

const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(1, poligon_count,poligon_count), new THREE.MeshStandardMaterial({ map: teracotaPlatebasecolor, normalMap: teracotaPlatenormalMap, displacementMap: teracotaPlateheightMap, displacementScale: 0.05 }))
sphere3.geometry.attributes.uv2 = sphere3.geometry.attributes.uv
sphere3.position.y = 3
sphere3.position.x = 4
sphere3.position.z = 3

scene.add(sphere3)

const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(1, poligon_count,poligon_count), new THREE.MeshStandardMaterial({ map: dirtBase, normalMap: dirtNormal, displacementMap: dirtHeight, displacementScale: 0.05 }))
sphere4.geometry.attributes.uv2 = sphere4.geometry.attributes.uv
sphere4.position.y = 3
sphere4.position.x = 0
sphere4.position.z = 3

scene.add(sphere4)

const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(1, poligon_count, poligon_count), new THREE.MeshStandardMaterial({ map: lavabasecolor, normalMap: lavanormalMap, displacementMap: lavaheightMap, displacementScale: 0.1}))
sphere5.geometry.attributes.uv2 = sphere5.geometry.attributes.uv
sphere5.position.y = 3
sphere5.position.x = 12
sphere5.position.z = 3

scene.add(sphere5)

// DIRECTIONAL LIGHT
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.x += 20
directionalLight.position.y += 20
directionalLight.position.z += 20
scene.add(directionalLight);

//VISIBILITY BUTTON

let visibility = true

var props = {visibility:true,
    depthZ_Fraction:0.015,
barColor: '#000000',
barDirection:'Vertical'};

var datGui = new dat.GUI();


var visibilityController = datGui.add(props,'visibility').name('Visibility').listen();

visibilityController.onChange(
    function(newValue) {
        
        visibility = !visibility
        if(visibility) {
            sphere0.material.displacementScale = sphere1.material.displacementScale = sphere2.material.displacementScale = sphere3.material.displacementScale = sphere4.material.displacementScale = sphere5.material.displacementScale = 0.075
            sphere1.material.displacementScale = 0.05
            plane6.material.displacementScale = plane1.material.displacementScale = plane2.material.displacementScale = plane3.material.displacementScale = plane4.material.displacementScale = plane5.material.displacementScale = 0.05
            plane1.material.normalScale = plane2.material.normalScale = plane3.material.normalScale = plane4.material.normalScale = plane5.material.normalScale = plane6.material.normalScale = new Vector2(1,1)
            sphere0.material.normalScale = sphere1.material.normalScale = sphere2.material.normalScale = sphere3.material.normalScale = sphere4.material.normalScale = sphere5.material.normalScale = new Vector2(1,1)
        }
        else {
            sphere0.material.displacementScale = sphere1.material.displacementScale = sphere2.material.displacementScale = sphere3.material.displacementScale = sphere4.material.displacementScale = sphere5.material.displacementScale = 0.0
            
            plane6.material.displacementScale = plane1.material.displacementScale = plane2.material.displacementScale = plane3.material.displacementScale = plane4.material.displacementScale = plane5.material.displacementScale = 0.0
            plane1.material.normalScale = plane2.material.normalScale = plane3.material.normalScale = plane4.material.normalScale = plane5.material.normalScale = plane6.material.normalScale = new Vector2(0,0)
            sphere0.material.normalScale = sphere1.material.normalScale = sphere2.material.normalScale = sphere3.material.normalScale = sphere4.material.normalScale = sphere5.material.normalScale = new Vector2(0,0)
        }
        
});


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

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
document.body.appendChild(renderer.domElement);
animate();

//CHANGES IN THE POSITION OF THE CAMERA

document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;

    if(name =="1"){
        camera.position.z = 10;
        camera.position.x = -4;
        camera.position.y = 4;
        
        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(-4, 3, 3);
        
    }
    if(name =="2"){
        camera.position.z = 10;
        camera.position.x = 0;
        camera.position.y = 4;
        
        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(0, 3, 3);
    }
    if(name =="3"){
        camera.position.z = 10;
        camera.position.x = 4;
        camera.position.y = 4;

        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(4, 3, 3);
        
    }
    if(name =="4"){
        camera.position.z = 10;
        camera.position.x = 8;
        camera.position.y = 4;

        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(8, 3, 3);
    }
    if(name =="5"){
        camera.position.z = 10;
        camera.position.x = 12;
        camera.position.y = 4;

        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(12, 3, 3);
        
    }
    if(name =="6"){
        camera.position.z = 10;
        camera.position.x = 16;
        camera.position.y = 4;

        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(16, 3, 3);
        
    }
    //restart camera position
    if(name =="r"){
        camera.position.z = 20;
        camera.position.x = 6;
        camera.position.y = 8;
        controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
        controls.target = new THREE.Vector3(6, 3, 3);
        
    }

  }, false);
  