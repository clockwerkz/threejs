var camera, scene, renderer;
var geometry, material, mesh;
 
init();

 
function init() {
 
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
 
    scene = new THREE.Scene();
    camera.position.z = 100;
    scene.background = new THREE.Color(0xddddd);

    const hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);
 
    const loader = new THREE.GLTFLoader();
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor('#DDDDDD');
    var light = new THREE.PointLight(0xFFFFFF, 1.4, 1000);
    light.position.set(0,15,15);
    scene.add(light);

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    loader.load('../models/scene.gltf', function (obj) {
        scene.add(obj);
        renderer.render(scene, camera);
    });
 
}
 
