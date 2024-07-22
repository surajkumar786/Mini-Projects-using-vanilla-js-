let selectfield=document.querySelector("#selectfield");
let selecttext=document.querySelector("#selecttext");
let options=document.querySelectorAll(".option");
let list=document.getElementById("list");
let arrowicon=document.getElementById("arrowicon");


for(option of options)
{
  option.onclick = function()
  {
    selecttext.innerHTML=this.textContent;
    list.classList ="hide";
    arrowicon.classList.toggle("rotate");
  }
}


selectfield.onclick = function()
{
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");

}

