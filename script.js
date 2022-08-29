var input_text=document.getElementsByClassName("input_text")[0];
var mirror_text=document.getElementsByClassName("mirror")[0];
fun=function(){
    mirror_text.textContent=input_text.value;
    console.log(mirror_text.textContent);
    console.log("entered");
}