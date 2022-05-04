function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano ) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   if (fsex[0].checked){
       genero = 'homem'
       res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
       
   } else if (fsex[1].checked){
       genero = 'mulher'
       res.innerHTML = `Detectamos uma ${genero} com ${idade} anos`
   }
   res.style.textAlign = 'center'
   //res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
 }
}