function calculate(){
    try{
        document.getElementById("re").value=eval(document.getElementById("cal").value)
        document.getElementById("re").focus()
    } catch(error){
        alert("can't make this")
    }
}