var eklebutonu = document.getElementById("ekle");
var temizlebutonu = document.getElementById("temizle");
var vazife = document.getElementById("vazife");
var liste = document.getElementById("ul");
eklebutonu.addEventListener("click", function(event){
    event.preventDefault()
  });

function ekleme() {
  
  if (vazife.value == "") {
    alert("Lütfen yapılacak bir görev giriniz")    
  } else {
    var gorev = vazife.value;
    var yenivazife = document.createElement("li");
    var yenibuton = document.createElement("button");
    yenibuton.classList.add("vazifesilme");
    yenibuton.innerText = "X";
    yenivazife.innerText = gorev;
    liste.appendChild(yenivazife);
    yenivazife.appendChild(yenibuton);
    yenibuton.addEventListener("click", function name() {
        var parentLi = this.parentElement;
      parentLi.remove();
      vazifesayma();
        
    })
    yenivazife.addEventListener("click", function name() {
      this.classList.toggle("cizili");
      vazifesayma();
      
    })
    vazife.value = "";
    
  }
   vazifesayma(); 
    
}

function vazifesayma() {
  var a = document.querySelectorAll("li");
  var b = document.querySelectorAll(".cizili");
  var c = a.length - b.length;
  if (c>0) {
    document.getElementById("vazifesayisiii").innerText = c + " Adet yapılmamış göreviniz kaldı";    
  }
  else {
    document.getElementById("vazifesayisiii").innerText = "";
  }
  
  
  
}

eklebutonu.addEventListener("click", ekleme);
//eklebutonu.addEventListener("click", vazifesayma);
function temizleme() {
  document.getElementById("ul").innerHTML = "";
  vazifesayma();
  
}
document.getElementById("temizle").addEventListener("click", temizleme);






