
function CreateCourageDog(x,y,z){

    var CourageDog = new THREE.Object3D();

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('js/obj/CourageDog/');
    mtlLoader.load('courage_apply.mtl', function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('js/obj/CourageDog/courage_apply.obj', function(object) {
                object.children.forEach(function (value) {value.material.shininess = 0});
                CourageDog.add(object);
                CourageDog.position.set(x,y,z);

                CourageDog.scale.set(0.2,0.2,0.2);

            },     // called when loading is in progresses
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( error );

            }
        );
    });
    console.log(CourageDog);
    return CourageDog;

}