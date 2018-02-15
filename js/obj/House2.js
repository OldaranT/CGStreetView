var House2container = new THREE.Object3D();

var x = 0;
var y = 0;
var z = 10;
var heigth = 10;
var length = 5;
var width = 10;

var texture = new THREE.TextureLoader().load( 'images/House2/File_Red_brick_wall_texture.JPG' );
// Allows for floor to repeat itself (to prevent blurriness).
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
// Optimizing quality of texture.
//texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
// Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
texture.repeat.set( 10, 10 );

var WallGeometry = new THREE.BoxGeometry( width, heigth, length );
var WallMaterial = new THREE.MeshBasicMaterial( { map: texture} );
var WallCube = new THREE.Mesh( WallGeometry, WallMaterial );
WallCube.position.set(0,(heigth / 2 ),0);
House2container.add( WallCube );

House2container.position.set(x ,y + 0.5,(z + (length/2)));
scene.add(House2container);