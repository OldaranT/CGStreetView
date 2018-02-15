
function CreateHouse1(x,y,z) {

    var x = x;
    var y = y;
    var z = z;
    var height = 2.5;
    var length = 8;
    var width = 5 ;

    //Build House Container.
    var House2container = new THREE.Object3D();

    //Load Textures
    var Wall = new THREE.TextureLoader().load( 'images/House1/Wall.jpg' );
    var Wall2 = new THREE.TextureLoader().load( 'images/House1/Wall.jpg' );
    var Roof = new THREE.TextureLoader().load( 'images/House1/Roof.jpg' );
    var Pillar = new THREE.TextureLoader().load( 'images/House1/Pillar.jpg' );
    var Porch = new THREE.TextureLoader().load( 'images/House1/Porch.jpg' );

    // Allows for Textures to repeat them self (to prevent blurriness).
    Wall.wrapS = Wall.wrapT = THREE.RepeatWrapping;
    Wall2.wrapS = Wall2.wrapT = THREE.RepeatWrapping;
    Roof.wrapS = Roof.wrapT = THREE.RepeatWrapping;
    Pillar.wrapS = Pillar.wrapT = THREE.RepeatWrapping;
    Porch.wrapS = Porch.wrapT = THREE.RepeatWrapping;

    Wall2.repeat.set( 0.3, 0.3 );

    //Create Materials.
    var RoofMaterial = new THREE.MeshBasicMaterial( { map: Roof } );
    var WallMaterial = new THREE.MeshBasicMaterial( { map: Wall} );
    var WallMaterial2 = new THREE.MeshBasicMaterial( { map: Wall2} );
    var PorchMaterial = new THREE.MeshBasicMaterial( { map: Porch} );
    var FrontPillarMaterial = new THREE.MeshBasicMaterial( { map: Pillar} );

    //Floor 1 and 2
    var WallGeometry = new THREE.BoxGeometry( width, height, length, 15,15,15);
    var FirstFloor = new THREE.Mesh( WallGeometry, WallMaterial );
    var SecondFloor = new THREE.Mesh( WallGeometry, WallMaterial );
    FirstFloor.position.set(0,(height / 2 ),0);
    SecondFloor.position.set(0,(height*3 / 2 ),0);

    //Floor 3

    //Creating a triangle.
    var shape = new THREE.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( 0,height);
    shape.lineTo( height,0 );
    shape.lineTo( -height, 0 );
    shape.lineTo( 0, height );

    var extrudeSettings = {
        steps: 10,
        amount: length,
        bevelEnabled: false
    };

    var ThirdFloorGeo = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    var ThirdFloor = new THREE.Mesh( ThirdFloorGeo, WallMaterial2 ) ;
    ThirdFloor.position.set(0,(height*4 / 2 ),0- length/2);

    //FrontPorch
    var PorchGeo = new THREE.BoxGeometry( width, height*0.05, 2 );
    var FrontPorch = new THREE.Mesh( PorchGeo, PorchMaterial );

    FrontPorch.position.set(0,height*0.05/2,-5);

    //FrontPorchRoof
    var PorchRoofGeo = new THREE.BoxGeometry( width -0.01, height*0.05, 2.2 );
    var FrontRoofPorch = new THREE.Mesh( PorchRoofGeo, RoofMaterial );

    FrontRoofPorch.position.set(0,height,-5);
    FrontRoofPorch.rotation.x = -1/16 * Math.PI;

    //FrontPillars
    var FrontPillarGeo = new THREE.BoxGeometry( 0.1, height-0.21, 0.1 );
    var FrontPillar1 = new THREE.Mesh( FrontPillarGeo, FrontPillarMaterial );
    var FrontPillar2 = new THREE.Mesh( FrontPillarGeo, FrontPillarMaterial );
    FrontPillar1.position.set(2.2,(height / 2 ),-5.8);
    FrontPillar2.position.set(-2.2,(height / 2 ),-5.8);

    //Roof
    var RoofGeo = new THREE.BoxGeometry( width * 0.75 + 0.1, 0.1, length + 0.1);
    var RoofLeft = new THREE.Mesh( RoofGeo, RoofMaterial );
    var RoofRight = new THREE.Mesh( RoofGeo, RoofMaterial );
    RoofLeft.position.set(-1.33,(height * 2.5),0);
    RoofLeft.rotation.z = 1/4 * Math.PI;

    RoofRight.position.set(1.33,(height * 2.5),0);
    RoofRight.rotation.z = -1/4 * Math.PI;

    //Adding the elements of the house to a container.
    House2container.add( FirstFloor );
    House2container.add( SecondFloor );
    House2container.add( ThirdFloor );
    House2container.add( FrontPorch );
    House2container.add( FrontRoofPorch );
    House2container.add( FrontPillar1 );
    House2container.add( FrontPillar2 );
    House2container.add( RoofLeft );
    House2container.add( RoofRight );

    //Rotate and position the house.
    House2container.rotation.y = Math.PI;
    House2container.position.set(x ,y + 0.5,(z + (length/2)));

    //Add house to scene
    scene.add(House2container);


}

CreateHouse1(0,0,-21);

