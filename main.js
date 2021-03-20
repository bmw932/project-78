array_of_images=[];
array_of_images=[];
array_of_names=[];
array_of_images.push("https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg ");
array_of_names.push("Mahesh Patel");
array_of_images.push("https://img.pngio.com/cartoon-mom-png-cartoon-mother-clipart-clip-art-library-cartoon-mother-png-920_2340.png ");
array_of_names.push("Amita Patel");
array_of_images.push("https://img.freepik.com/free-vector/cartoon-school-boy-carrying-backpack-waving-hand_29190-4926.jpg?size=338&ext=jpg ");
array_of_names.push("Om Patel");
array_of_images.push("https://i.pinimg.com/originals/01/1b/38/011b387aff90b672fb11dd680380c33b.jpg ")
array_of_images.push("Flash")
array_of_images.push("https://i.pinimg.com/originals/ec/09/e0/ec09e0c01c580779fe44af82e1ed22f0.jpg ")
array_of_names.push("Pinky")
var i = 0;
function next(){
    document.getElementById("image").setAttribute("src",array_of_images[i]);
    document.getElementById("imagename").innerHTML = array_of_names[i];
    i = i + 1
    if(i>=array_of_images.length)
    {
        document.getElementById("next").style.display="none";
    }
}