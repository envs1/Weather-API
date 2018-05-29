$(document).ready(function(){

var lat,long;
    $.getJSON("http://ip-api.com/json",function(data2){
      lat=data2.lat;
      long= data2.lon;
       var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b86d21440d8c9a110912a2eb0845abb4'; 
    
$.getJSON(api, function(data){
       var fTemp, cTemp,kTemp;
      var tempSwap=true;
    
   var weatherType= data.weather[0].description;
        kTemp = data.main.temp;
       var windSpeed= data.wind.speed;
    var city = data.name;
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp-273).toFixed(1);
      console.log(city);
     $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457;");
      $("#fTemp").click(function(){
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;"); 
          tempSwap=true;
        }
        else{
          $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;
        }   
      });
windSpeed = (2.237*(windSpeed)).toFixed(1);
       $("#windSpeed").html(windSpeed + " mph");
    if(fTemp>80){
     $('body').css('background-image','url(https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c9dbd6aa8af03f04449a29f03affa24&auto=format&fit=crop&w=2100&q=80)');
    }
     else if(fTemp>70){
         $('body').css('background-image','url(https://images.unsplash.com/photo-1525865078758-cece94cd4f0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dea0153c5e5928cb287c4bc41a1f0ace&auto=format&fit=crop&w=2250&q=80)');
     }
       else if(fTemp>60){
         $('body').css('background-image','url(https://images.unsplash.com/photo-1524241282200-9f75c7acaac3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92bae2fce8981e7f140645f7e2c75534&auto=format&fit=crop&w=3900&q=80)');
     }
      else if(fTemp>50){
        $('body').css('background-image','url(https://images.unsplash.com/photo-1422020297037-97bd356cc312?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2400)');
      } 
  });
    });
 //API URL with geolocation
   

});