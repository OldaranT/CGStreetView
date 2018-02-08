var loader = new THREE.ObjectLoader();
var objLoader = new THREE.OBJLoader();
var house = new THREE.Mesh();

// Create scene
var scene = new THREE.Scene();

objLoader.load(
    //path to the obj.
    "js/obj/model.obj",
    function (object) {
        //define what material each component is.
        var mat = new THREE.MeshNormalMaterial();
        object.traverse( function ( child ) {

            if ( child instanceof THREE.Mesh ) {

                child.material = mat;
            }

        } );
        //turn it into a global variable so we can change the object later on in the code.
        house = object;
        //add the object to the scene.
        scene.add(house);
        console.log(object);
    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( error );

    }
);


// Create camera
var camera = new THREE.PerspectiveCamera(
	100, // fov — Camera frustum vertical field of view.
	window.innerWidth/window.innerHeight, // aspect — Camera frustum aspect ratio.
	0.01, // near — Camera frustum near plane.
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

var light = new THREE.DirectionalLight( 0xdddddd, 10 );
light.position.set(0, 1, 0 );
scene.add( light );



// Move camera from center
camera.position.x = 2; // move right from center of scene
camera.position.y = 1; // move up from center of scene
camera.position.z = 3; // move camera away from center of scene

renderer.render(scene, camera);

var clock = new THREE.Clock();

var render = function () {
    requestAnimationFrame(render);
    var delta = clock.getDelta();

    //cube.rotation.y += 1 * delta;
    //cube.rotation.x +=  1 * delta;
    // cube.rotation.z += 1* delta;
    renderer.render(scene, camera);
};




render();
