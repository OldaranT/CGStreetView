function LoadPillar(x, y, z){

    TextureLoader.load('images/Pillar/PillarTexture.jpg', function ( texture ) {

        //Create material
        var PillarMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});

        //Create Geo's
        var TopPillar = new THREE.SphereGeometry(0.055, 32, 32);
        var RingPillar = new THREE.TorusGeometry(0.06, 0.015, 30, 200);
        var BasePillar = new THREE.CylinderGeometry(0.05, 0.15, 1, 500);

        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        //Create Mesh for pillar.
        var TopPillarMesh = new THREE.Mesh(TopPillar, PillarMaterial);
        var BasePillarMesh = new THREE.Mesh(BasePillar, PillarMaterial);
        var RingPillarMesh = new THREE.Mesh(RingPillar, PillarMaterial);
        TopPillarMesh.position.set(x, y + 0.5, z);
        BasePillarMesh.position.set(x, y, z);
        RingPillarMesh.position.set(x, y + 0.5, z);
        RingPillarMesh.rotateX(-Math.PI / 2);

        scene.add(TopPillarMesh);
        scene.add(RingPillarMesh);
        scene.add(BasePillarMesh);
    });
}


var length = 5;

//Create Circle with pillars/
for(var i = 0; i < 2*Math.PI; i += 1/16*Math.PI){
    LoadPillar(length*Math.cos(i),1,length*Math.sin(i));
}