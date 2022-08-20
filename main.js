var dog=0;
var cat=0;
var bird=0;
var guinea_pig=0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SUTSuQQ7j/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
    console.error(error);
}
else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='Detected Voice is of: ' + results[0].label;
    document.getElementById("result_count").innerHTML='Detected Dog:' + dog + 'Detected Cat: ' + cat + 'Detected Bird: ' + bird + 'Detected Guinea Pig: ' + guinea_pig;

    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('animal_image');

    if(results[0].label=="dog") {
        img.src='dog.jpeg';
    }

    else if(results[0].label=="cat") {
        img.src='cat.jpeg';
    }

    else if(results[0].label=="guinea pig") {
        img.src='guinea pig.jpeg';
    }

    else if(results[0].label=="bird") {
        img.src='bird.jpeg';
    }

    else {
        img.src='ear.jpeg';
    }
}
}