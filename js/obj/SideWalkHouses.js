function LoadOuterSideWalk(x, y, z) {
    TextureLoader.load('images/SideWalk/TexturesCom_FloorHerringbone0118_2_seamless_S.jpg', function (texture) {
        var outerRadius = 10;
        var innerRadius = 8.1;
        var height = 0.3;


        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 0.8, 0.8 );
        // Makes it so that the floor is horizontal(default is vertical).

        var arcShape = new THREE.Shape();
        arcShape.moveTo(outerRadius * 2, outerRadius);
        arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
        var holePath = new THREE.Path();
        holePath.moveTo(outerRadius + innerRadius, outerRadius);
        holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var OuterSidewalkGeometry = new THREE.ExtrudeGeometry(arcShape, {
            amount: height,
            bevelEnabled: false,
            steps: 1,
            curveSegments: 60
        });
        OuterSidewalkGeometry.center();
        OuterSidewalkGeometry.rotateX(Math.PI * -.5);
        var OuterSideWalkMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var OuterSideWalkMesh = new THREE.Mesh(OuterSidewalkGeometry,OuterSideWalkMaterial);
        OuterSideWalkMesh.position.set(x, y, z);
        scene.add(OuterSideWalkMesh);
    });


    TextureLoader.load('images/SideWalk/Curb.jpg', function (texture) {
        var outerRadius = 8.1;
        var innerRadius = 8;
        var height = 0.3;

        var arcShape = new THREE.Shape();
        arcShape.moveTo(outerRadius * 2, outerRadius);
        arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
        var holePath = new THREE.Path();
        holePath.moveTo(outerRadius + innerRadius, outerRadius);
        holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var OuterCurdGeometry = new THREE.ExtrudeGeometry(arcShape, {
            amount: height,
            bevelEnabled: false,
            steps: 1,
            curveSegments: 60
        });
        OuterCurdGeometry.center();
        OuterCurdGeometry.rotateX(Math.PI * -.5);


        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 0.5, 0.5 );
        var OuterCurdMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var OuterCurdMesh = new THREE.Mesh(OuterCurdGeometry,OuterCurdMaterial);
        OuterCurdMesh.position.set(x, y, z);
        scene.add(OuterCurdMesh);
    });
}


LoadOuterSideWalk(0,0.5,0);