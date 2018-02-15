function LoadPillar(x, y, z){

    TextureLoader.load('images/Pillar/PillarTexture.jpg', function ( texture ) {
        var BaseLantern = new THREE.SphereGeometry(0.055, 32, 32);
        var PillarMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var RingLantern = new THREE.TorusGeometry(0.06, 0.015, 30, 200);
        var GroundLantern = new THREE.CylinderGeometry(0.05, 0.15, 1, 500);
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        var BaseMesh = new THREE.Mesh(BaseLantern, PillarMaterial);
        var GroundMesh = new THREE.Mesh(GroundLantern, PillarMaterial);
        var RingMesh = new THREE.Mesh(RingLantern, PillarMaterial);
        BaseMesh.position.set(x, y + 0.5, z);
        GroundMesh.position.set(x, y, z);
        RingMesh.position.set(x, y + 0.5, z);
        RingMesh.rotateX(-Math.PI / 2);

        scene.add(BaseMesh);
        scene.add(RingMesh);
        scene.add(GroundMesh);
    });
}
var length = 5;

for(var i = 0; i < 2*Math.PI; i += 1/16*Math.PI){
    LoadPillar(length*Math.cos(i),1,length*Math.sin(i));
}