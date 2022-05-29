var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(img){ //doubt
        
        Img_object=img;
        Img_object.scaleToWidth(700);
        Img_object.scaleToHeight(520);

        Img_object.set({
            top:0, 
            left: 0, 
        })
        canvas.add(Img_object)

    })
	
}

function playSound(){
	x.play();
    new_image()
}
