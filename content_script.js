var allImg = document.getElementsByTagName("img"), i = 0, img;

var images = ["http://www.dogbreedinfo.com/images12/BorderCollie6yearsKaya.JPG",
    "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Border-Collie-3.jpg",
    "http://nextranks.com/data_images/dogs/border-collie/border-collie-05.jpg",
    "http://www.lockeyebc.com/images/spice_pup_pics/7wks/dollyrainbowwave1.jpg",
    "http://animalsbreeds.com/wp-content/uploads/2015/01/border-collie-10.jpg"];

while (img = allImg[i++]) {
    img.src = images[getRandomInt(0, images.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}