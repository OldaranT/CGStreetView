

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
function LoadInnerSideWalk(x, y, z) {
    TextureLoader.load('images/SideWalk/TexturesCom_FloorHerringbone0118_2_seamless_S.jpg', function (texture) {
        var PillarMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var SideWalkFountain = new THREE.CylinderGeometry(5.2, 5.2 ,0.3, 500);
        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 10, 10 );
        // Makes it so that the floor is horizontal(default is vertical).
        var SideWalkFountainMesh = new THREE.Mesh(SideWalkFountain, PillarMaterial);
        SideWalkFountainMesh.position.set(x, y, z);
        scene.add(SideWalkFountainMesh);
    });
    TextureLoader.load('images/SideWalk/Stoep.jpg', function (texture) {
        var outerRadius = 5.4;
        var innerRadius = 5.2;
        var height = 0.3;

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


        // Allows for floor to repeat itself (to prevent blurriness).
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Optimizing quality of texture.
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
        texture.repeat.set( 0.5, 0.5 );
        var InnerCurdMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var InnerCurdmesh = new THREE.Mesh(InnerCurdGeometry,InnerCurdMaterial);
        InnerCurdmesh.position.set(x, y, z);
        scene.add(InnerCurdmesh);
    });
}
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


    TextureLoader.load('images/SideWalk/Stoep.jpg', function (texture) {
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

var length = 5;

for(var i = 0; i < 2*Math.PI; i += 1/16*Math.PI){
    LoadPillar(length*Math.cos(i),1,length*Math.sin(i));
}
LoadPillar(0,1,0);
LoadRoad(0,0.5,0);
LoadOuterSideWalk(0,0.5,0);
LoadInnerSideWalk(0,0.5,0);

