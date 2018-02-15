//specify the directional pictures
var directions  = ["xpos.png", "xneg.png", "ypos.png", "yneg.png", "zpos.png", "zneg.png"];
var materialArray = [];

//Add files to array
for (var i = 0; i < 6; i++)
{
    materialArray.push( new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture("images/skybox/" + directions[i]),
        side: THREE.BackSide})
    );
}

//Create SkyBox
var skyGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );

//Add SkyBox to scene
scene.add( skyBox );