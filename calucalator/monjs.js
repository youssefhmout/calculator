      function inputt(a) {
        var m = document.getElementById("cal").value;
        var b = a;
        document.getElementById("cal").value = m + b;
      }
      function ddegal() {
        var m = (document.getElementById("cal").value);
        if (m == "") {
          document.getElementById("cal").value = 0
        }
        else {
          var m = eval(document.getElementById("cal").value);
          document.getElementById("cal").value = m;
        }
      }
      function deletetous() {
        var m = document.getElementById("cal").value;
        document.getElementById("cal").value = '';
      }
      function dddc() {
        document.getElementById("cal").value= document.getElementById("cal").value.slice(0,-1)
      }
