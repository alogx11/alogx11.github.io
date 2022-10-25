import * as THREE from 'https://unpkg.com/three@0.145/build/three.module.js';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  console.log(scene);
  console.log(camera);
  console.log(renderer);

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({color: 0x00FF00});
  const mesh = new THREE.Mesh(boxGeometry, material);
  
  scene.add(mesh);

  camera.position.z = 5;

  //create array with strings of sound file names
  const audioFile = ["A4.mp3", "A5.mp3", "C4.mp3", "C5.mp3", "D4.mp3",
   "D5.mp3", "E4.mp3", "E5.mp3", "G4.mp3", "G5.mp3"];

  animate()
playAudio();

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02
  }

  function playAudio(){
    const audioFile = ["A4.mp3", "A5.mp3", "C4.mp3", "C5.mp3", "D4.mp3",
   "D5.mp3", "E4.mp3", "E5.mp3", "G4.mp3", "G5.mp3"];

   const audioName = randomItem(audioFile);
    
   var audio = new Audio('/audio/' + audioName);
    
   audio.play();
  }

  function randomItem(arr){
    //array of soundFileNames
    const audioFile = ["A4.mp3", "A5.mp3", "C4.mp3", "C5.mp3", "D4.mp3",
   "D5.mp3", "E4.mp3", "E5.mp3", "G4.mp3", "G5.mp3"];
    //random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];

    return item;
  }
