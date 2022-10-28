import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {GUI} from 'dat.gui';
import {MapControls, OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module'


  const { scene, renderer, camera, gui, stats } = setUp();

  //create array with strings of sound file names
  const audioFile = ["A4.mp3", "A5.mp3", "C4.mp3", "C5.mp3", "D4.mp3",
   "D5.mp3", "E4.mp3", "E5.mp3", "G4.mp3", "G5.mp3"];

   const gltfLoader = new GLTFLoader();
   gltfLoader.load('/assets/lowpolyworld.gltf', function( polyWorld ) {
     
     
     scene.add(polyWorld.scene);
     polyWorld.scale.set(.1);
     //polyWorld.poosition.x = 0;
     //polyWorld.poosition.y = 0;
     //polyWorld.poosition.z = 0;

   }); 
   
   

  animate();
  mousePresssed();

function setUp() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 5);
  ambientLight.castShadow = true;
  scene.add(ambientLight);

  const gui = new GUI()
  const controls = new OrbitControls(camera, renderer.domElement);
  const stats = Stats();
  document.body.appendChild(stats.dom);

  return { scene, renderer, camera, gui, controls, stats };
}

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02
    stats.update();
    controls.update();
    
  }

  function playAudio(){
    const audioFile = ["A4.mp3", "A5.mp3", "C4.mp3", "C5.mp3", "D4.mp3",
   "D5.mp3", "E4.mp3", "E5.mp3", "G4.mp3", "G5.mp3"];

   const audioName = randomItem(audioFile);
    
   var audio = new Audio('/assets/audio/' + audioName);
    
   audio.play();
  }

  function mousePresssed(){
    playAudio();
  }

  function randomItem(arr){
    //random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];

    return item;
  }
