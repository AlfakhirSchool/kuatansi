  (function(){
    var ACCOUNTS = {
      "kuitansi.alfakhir": { pass: "kuitansi.AF", name: "Admin" },
      "nurhidayati": { pass: "bendahara1.af123", name: "Nurhidayati, S.Pd." },
      "miaandini": { pass: "bendahara2.af123", name: "Mia Andini Caniago, S.Ak." }
    };
    var gate = document.getElementById("login-gate");
    document.addEventListener("DOMContentLoaded", function(){
      var sd = document.getElementById("logo-sd"), smp = document.getElementById("logo-smp");
      if(sd) document.getElementById("login-logo-sd").src = sd.src;
      if(smp) document.getElementById("login-logo-smp").src = smp.src;
    });
    if(sessionStorage.getItem("afKuitansiAuth") === "1"){ gate.style.display = "none"; }
    function tryLogin(){
      var u = document.getElementById("login-user").value.trim();
      var p = document.getElementById("login-pass").value;
      var acc = ACCOUNTS[u];
      if(acc && acc.pass === p){
        sessionStorage.setItem("afKuitansiAuth", "1");
        sessionStorage.setItem("afKuitansiUserName", acc.name);
        sessionStorage.setItem("afKuitansiSigner", u);
        gate.style.display = "none";
        var gb = document.getElementById("btn-generate");
        if(gb) gb.click();
      } else {
        document.getElementById("login-error").style.display = "block";
      }
    }
    document.getElementById("login-btn").addEventListener("click", tryLogin);
    document.getElementById("login-pass").addEventListener("keydown", function(e){ if(e.key === "Enter") tryLogin(); });
    document.addEventListener("DOMContentLoaded", function(){
      var lo = document.getElementById("btn-logout");
      if(lo) lo.addEventListener("click", function(){
        sessionStorage.removeItem("afKuitansiAuth");
        document.getElementById("login-user").value = "";
        document.getElementById("login-pass").value = "";
        document.getElementById("login-error").style.display = "none";
        gate.style.display = "flex";
      });
    });
  })();
