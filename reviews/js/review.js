

function changeimage(image){
	image_path = image.src.split("/")
	console.log(image_path)
	if (image_path[image_path.length - 1] == "like.png") {
		image.src = 'images/like50.png';
	}else {
		image.src = 'images/like.png';
	}
	
}






