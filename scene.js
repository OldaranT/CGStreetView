// Create scene
var scene = new THREE.Scene();

// Create camera
var camera = new THREE.PerspectiveCamera(
	75, // fov — Camera frustum vertical field of view.
	window.innerWidth/window.innerHeight, // aspect — Camera frustum aspect ratio.
	0.1, // near — Camera frustum near plane.
	7000); // far — Camera frustum far plane.

// Create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(1, 32, 24);
var normalMap = THREE.ImageUtils.loadTexture("images/textures/earth_normal.jpg");
var colorMap = THREE.ImageUtils.loadTexture("images/textures/earth.jpg");
var material = new THREE.MeshPhongMaterial(
    {
        map: colorMap,
        normalMap: normalMap
    }
);
var cube = new THREE.Mesh(geometry,material);

// Skybox
var directions  = ["images/skybox/xpos.png", "images/skybox/xneg.png", "images/skybox/ypos.png", "images/skybox/yneg.png", "images/skybox/zpos.png", "images/skybox/zneg.png"];
var materialArray = [];
for (var i = 0; i < 6; i++)
{
    console.log(directions[i]);
    materialArray.push( new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture( directions[i]),
        side: THREE.BackSide})
    );
}

var skyGeometry = new THREE.CubeGeometry( 5000, 5000, 5000 );
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
scene.add( skyBox );



// Move camera from center
camera.position.x = 0; // move right from center of scene
camera.position.y = 0; // move up from center of scene
camera.position.z = 0; // move camera away from center of scene

renderer.render(scene, camera);

var clock = new THREE.Clock();

var render = function () {
    requestAnimationFrame(render);
    var delta = clock.getDelta();

    //cube.rotation.y += 1 * delta;
    //cube.rotation.x +=  1 * delta;
    cube.rotation.z += 1* delta;
    renderer.render(scene, camera);
};




render();

scene.add(THREE.OrbitControls(,scene))

var light = new THREE.DirectionalLight(0xdddddd, 1000);
light.position.set(-1, 10, 1);
scene.add(light);
