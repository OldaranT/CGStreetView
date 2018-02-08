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
scene.add(cube);

var HouseboxGeometry =  new THREE.BoxGeometry(1,1,1);
var HouseBox
var HouseboxGeometry = new THREE.Geometry();
HouseboxGeometry.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
HouseboxGeometry.vertices.push( new THREE.Vector3( 1.0, 0.0, 0.0 ) );
HouseboxGeometry.vertices.push( new THREE.Vector3( 1.0, 1.0, 0.0 ) );

var uvs = [];
uvs.push( new THREE.Vector2( 0.0, 0.0 ) );
uvs.push( new THREE.Vector2( 1.0, 0.0 ) );
uvs.push( new THREE.Vector2( 1.0, 1.0 ) );
uvs.push( new THREE.Vector2( 0.0, 1.0 ) );

// Skybox
var directions  = ["images/skybox/posx.jpg", "images/skybox/negx.jpg", "images/skybox/posy.jpg", "images/skybox/negy.jpg", "images/skybox/posz.jpg", "images/skybox/negz.jpg"];
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


// generate faces
HouseboxGeometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
HouseboxGeometry.faceVertexUvs[ 0 ].push( [ uvs[0], uvs[1], uvs[2] ] );


// Move camera from center
camera.position.x = 2; // move right from center of scene
camera.position.y = 2; // move up from center of scene
camera.position.z = 6; // move camera away from center of scene

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


var light = new THREE.DirectionalLight(0xdddddd, 1);
light.position.set(-1, 1, 1);
scene.add(light);
