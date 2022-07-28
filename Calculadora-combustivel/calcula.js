let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxKm = document.querySelector('#Km')
let cxLitros = document.querySelector('#Litros')
let cxMedia = document.querySelector('#media')
let cxPerfil = document.querySelector('#perfil')

// CALCULAR MEDIA
function calcularMedia(n1, n2) {
    return Math.round(n1 / n2);
}

// DEFINIR PEFIL DE CONDUÇÃO COM BASE NA MEDIA
function perfil(mediaFinal) {
    let perfil = ''
    
    if (mediaFinal <= 20) {
        perfil = 'Parabéns!!! Ótima econonima de combustível'
    } 
    if (mediaFinal > 20) {
        perfil = 'É o que? foi de Biz né?'
    }
    else if (mediaFinal <10) {
        perfil = 'Pé pesado ein? É você Toretto?'
    } 
    return perfil
}

// CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')
// pegar o valor que esta dentro das caixas
// usar metodo parseFloat p converter string p float
    let Km = parseFloat(cxKm.value)
    let Litros = parseFloat(cxLitros.value)
    let media = calcularMedia(Km, Litros)
    
    console.log(Km)
    console.log(Litros)
    console.log(media)

    if(isNaN(media) || media < 0) {
        cxPerfil.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxPerfil.value = perfil(media)
    }
    e.preventDefault()
})

