
function LoadRoad(x, y, z) {
    TextureLoader.load('images/Road/TexturesCom_FloorsPortuguese0049_M.jpg', function (texture) {
        var outerRadius = 8;
        var innerRadius = 5.4;
        var height = 0.01;


        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 0.3, 0.3 );
        // Makes it so that the floor is horizontal(default is vertical).

        var arcShape = new THREE.Shape();
        arcShape.moveTo(outerRadius * 2, outerRadius);
        arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
        var holePath = new THREE.Path();
        holePath.moveTo(outerRadius + innerRadius, outerRadius);
        holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var RoadGeometry = new THREE.ExtrudeGeometry(arcShape, {
            amount: height,
            bevelEnabled: false,
            steps: 1,
            curveSegments: 60
        });
        RoadGeometry.center();
        RoadGeometry.rotateX(Math.PI * -.5);
        var RoadMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var RoadMesh = new THREE.Mesh(RoadGeometry,RoadMaterial);
        RoadMesh.position.set(x, y, z);
        scene.add(RoadMesh);
    });
}

LoadRoad(0,0.5,0);