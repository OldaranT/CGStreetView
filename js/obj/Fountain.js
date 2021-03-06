function CreateFountain(){
    var fountain = new THREE.Object3D();

    //load materials for fountain
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('js/obj/Fountain/');
    mtlLoader.load('Fountain.mtl', function(materials) {
        materials.preload();

        //load fountain object
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('js/obj/Fountain/Fountain.obj', function(object) {
                fountain = object;
                scene.add(fountain);
                fountain.scale.set(0.2,0.2,0.2);
                fountain.position.set(0,0.2,-5.8)
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

    //return imported fountain object
    return fountain;
}

