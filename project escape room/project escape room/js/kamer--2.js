let a = confirm(
    'Puzzel(2) , Hier moet de vergelijking worden opgelost ,Als je het niet oplost , kom je er niet uit ',
  )
  
  function myFunction() {
    console.log('hello')
    
    var x = document.getElementById('myText').value
    if (x == '96') {
      alert('Correct , je bent nu vrij')
        location.replace("kamer-3.html")
    } else {
      alert('False , je mag niet naar buiten')
    }
  }

  //timer
  const createTimer = (num= 44) => {
    const timer = setInterval(() => {
        console.log(num)
        num--;
        if(num == 0) {
            alert("de tijd is op, de puzzel word gereset probeer opnieuw!")

            clearInterval(timer)
            location.reload()
        }
    }, 1000)
}
createTimer(600)
