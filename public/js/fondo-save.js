function fondorandom(){

    var myIm = document.getElementById('stdim');
    var randNum = Math.ceil( Math.random() * 14 );
    console.log(randNum);
    console.log(myIm);
    var urlString = '../images/save_the_date/resized/std'+randNum+'.jpg';
 
     //document.write("<img src='" + urlString + "' id='saveTheDateIm' type='file'>");

     switch(randNum){
       case 6:
       case 10:
       case 11:
       document.write("<img src='" + urlString + "' id='saveTheDateIm' width='60%' style='-webkit-transform: scaleY(-1); transform: scaleY(-1); >'");
       default:
       document.write("<img src='" + urlString + "' id='saveTheDateIm' width='60%' style='-webkit-transform: scaleY(1); transform: scaleY(1);>'");
     }              

    /* MyDiv1.style.backgroundImage=urlString;
    MyDiv1.style.backgroundSize = "cover"; */
    
}

					