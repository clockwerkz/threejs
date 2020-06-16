import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer;
let geometry, material, mesh;
 
init();

 
function init() {
 
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xddddd);

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 900;
    camera.position.y = 100;
    camera.position.z = 1000;    

    const hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    let light1 = new THREE.PointLight(0xc4c4c4, 10);
    light1.position.set(0, 300, 500);
    scene.add(light1);

    let light2 = new THREE.PointLight(0xc4c4c4, 10);
    light2.position.set(500, 100, 0);
    scene.add(light2);

    let light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    let light4 = new THREE.PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 0);
    scene.add(light4);


    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor('#DDDDDD');
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    let controls = new OrbitControls(camera, renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('../models/scene.gltf', function (obj) {
        let car = obj.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);
        scene.add(obj.scene);
        animate();
    });
    
    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    
    animate();
 
}
 
