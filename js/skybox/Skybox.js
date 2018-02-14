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

var skyGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
scene.add( skyBox );