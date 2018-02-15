function LoadInnerSideWalk(x, y, z) {

    //Create sidewalk
    TextureLoader.load('images/SideWalk/TexturesCom_FloorHerringbone0118_2_seamless_S.jpg', function (texture) {

        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 10, 10 );

        //Creat material
        var PillarMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});

        //Create Geo
        var SideWalkFountain = new THREE.CylinderGeometry(5.2, 5.2 ,0.3, 500);

        //Create mesh
        var SideWalkFountainMesh = new THREE.Mesh(SideWalkFountain, PillarMaterial);
        SideWalkFountainMesh.position.set(x, y, z);
        scene.add(SideWalkFountainMesh);
    });

    //Create curb
    TextureLoader.load('images/SideWalk/Curb.jpg', function (texture) {

        var outerRadius = 5.4;
        var innerRadius = 5.2;
        var height = 0.3;

        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 0.5, 0.5 );

        //Create shape for curb.
        var arcShape = new THREE.Shape();
        arcShape.moveTo(outerRadius * 2, outerRadius);
        arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
        var holePath = new THREE.Path();
        holePath.moveTo(outerRadius + innerRadius, outerRadius);
        holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var InnerCurdGeometry = new THREE.ExtrudeGeometry(arcShape, {
            amount: height,
            bevelEnabled: false,
            steps: 1,
            curveSegments: 60
        });
        InnerCurdGeometry.center();
        InnerCurdGeometry.rotateX(Math.PI * -.5);

        //Create material
        var InnerCurdMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});

        //Create Curd Mesh
        var InnerCurdmesh = new THREE.Mesh(InnerCurdGeometry,InnerCurdMaterial);

        //Position and add curd to scene
        InnerCurdmesh.position.set(x, y, z);
        scene.add(InnerCurdmesh);
    });
}
LoadInnerSideWalk(0,0.5,0);