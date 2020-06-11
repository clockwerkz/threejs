import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
var camera, scene, renderer;
var geometry, material, mesh;
 
init();

 
function init() {
 
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
 
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xddddd);

    const hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);
 
    const loader = new GLTFLoader();
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    loader.load('../models/scene.gltf', function (obj) {
        scene.add(obj);
        renderer.render(scene, camera);
    });
 
}
 
