function CreateHouse2( x, y, z)
{
    var House2container = new THREE.Object3D();

    var height = 3;
    var length = 5;
    var width = 10;

    // Load in Textures
    var WallTexture = new THREE.TextureLoader().load( 'images/House2/File_Red_brick_wall_texture.JPG' );
    var WallTexture2 = new THREE.TextureLoader().load( 'images/House2/File_Red_brick_wall_texture.JPG' );
    var RoofTexture = new THREE.TextureLoader().load( 'images/House2/Roofing.jpg' );

    // Allows for Textures to repeat Themselves (to prevent blurriness).
    WallTexture.wrapS = WallTexture.wrapT = THREE.RepeatWrapping;
    WallTexture2.wrapS = WallTexture2.wrapT = THREE.RepeatWrapping;
    RoofTexture.wrapS = RoofTexture.wrapT = THREE.RepeatWrapping;


    // Texture repeating options, the floor is a 40x40 grid of tiles containing the texture.
    WallTexture.repeat.set( 6, 3 );
    WallTexture2.repeat.set(1,1);
    RoofTexture.repeat.set( 1, 1 );


    // Make Matterials
    var WallMaterial = new THREE.MeshBasicMaterial( { map: WallTexture});
    var WallMaterial2 = new THREE.MeshBasicMaterial( { map: WallTexture2});
    var RoofMaterial = new THREE.MeshBasicMaterial( { map: RoofTexture});

    //Make walls on ground floor
    var WallCube = new THREE.Mesh( new THREE.BoxGeometry( width, height, length ), WallMaterial);

    WallCube.position.set(0,(height / 2 ),0);

    // make the Roof
    var RoofHeight= 6, RoofWidth = 10;

    var shape = new THREE.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( -(RoofWidth / 2),0  );
    shape.lineTo( -(RoofWidth / 2), 1 );
    shape.lineTo( 0, RoofHeight);
    shape.lineTo( (RoofWidth/2), 0 );
    shape.lineTo( 0,0 );

    var extrudeSettings = {
        steps: 10,
        amount: 5,
        bevelEnabled: false
    };
    var Roof = new THREE.Mesh(new THREE.ExtrudeGeometry( shape, extrudeSettings ), [WallMaterial2, RoofMaterial]);

    Roof.position.set(0,height,-length/2);


    // Make the extention at the front of the house
    var extention = new THREE.Mesh(new THREE.BoxGeometry());


    // make the Garage


    var Garage = new THREE.Mesh(new THREE.BoxGeometry(width/3,height,length/2),[WallMaterial,WallMaterial,RoofMaterial,WallMaterial,WallMaterial,WallMaterial]);

    Garage.position.set( -width/3 - width/3,height/2,length /4);




    // adding to container
    House2container.add(Roof);
    House2container.add(WallCube);
    House2container.add(Garage);

    House2container.position.set(x ,y + 0.5,(z + (length/2)));

    return House2container;
}

scene.add(CreateHouse2(0,0,10));
