$(document).ready(function(){
    
    $('#btn').submit(function(){
      
        
            $.ajax({
                url : `https://geocoding-api.open-meteo.com/v1/search?name=${$('#ville').val()}`,
                success:function(data){
                   console.log(data)  
                }
           })
       return false
    })
})

