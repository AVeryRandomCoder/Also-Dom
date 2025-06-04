    function myFunction() {
      // First way to access the title node
      document.getElementById("result").innerHTML =
        document.getElementById("demo").firstChild.nodeValue;

      // Second way to access the title node
      document.getElementById("result1").innerHTML =
        document.getElementById("demo").childNodes[0].nodeValue;
    }
