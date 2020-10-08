
<!DOCTYPE html>
<html>
<body>
<script> 
function sorterfunc() {   
    var arr = [2, 5, 8, 1, 4]  
    document.write(arr); 
    document.write("<br>"); 
    for (let index = 0; index < arr.length; index++) {
      document.write(arr.sort()[index]);
      document.write("<br>");
    }
}
sorterfunc(); 
</script>
</body>
</html>
