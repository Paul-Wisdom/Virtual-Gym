const passwd = document.getElementById("passwd");
let tog1 = document.querySelector(".hide");
let tog2 = document.querySelector(".view");
function change()
{
    let type = passwd.getAttribute("type")
    if (type === "password")
    {
        type="text";
        tog1.style.visibility = "hidden";
        tog2.style.visibility = "initial";
    }
    else{
        type="password";
        tog2.style.visibility = "hidden";
        tog1.style.visibility = "initial";
    }
    passwd.setAttribute("type",type);
}
tog1.addEventListener("click",change);
tog2.addEventListener("click",change);