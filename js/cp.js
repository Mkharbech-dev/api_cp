$(document).ready(function(){

    $('#cp').keyup(function(){
        if($(this).val().length == 5){
            $.ajax({
                url : `https://geo.api.gouv.fr/communes?codePostal=${$('#cp').val()}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`,
                success:function(data){
                    for ( let ville of data){
                        $('ul').append(`<li><span style="color: orange;">${ville.nom}</span> et le nombre de la population est : <span style="color: orange;">${ville.population} habitants</span> </li>`);
                    }
                    
                }
           })
        }
        return false
    })

    // Autre méthode
    // document.querySelector('#cp').addEventListener('input', function(){
    //     if( this.value.length == 5){
    //         let url =`https://geo.api.gouv.fr/communes?codePostal=${this.value}` ;
    
    //         fetch(url).then(response => response.json().then(data =>{
    //             console.log(data);
    //             let affichage = ''
    //             for(let ville of data){
    //                 affichage = affichage + `<li>${ville.nom} - ${ville.population} habitants</li>`
    //             }
    //             affichage+= '</ul>'
    //             document.querySelector('.ville').innerHTML = affichage
    //         }))
    //     }
    // })

    

})

