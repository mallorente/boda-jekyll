function fondorandom(){

    var MyDiv1 = document.getElementById('save');
    var randnum = Math.ceil( Math.random() * 6 );
    console.log(randnum);
    console.log(MyDiv1);
    var urlString = 'url(../img/save_the_date/save-'+randnum+'.jpg)';
    MyDiv1.style.backgroundImage=urlString;
    MyDiv1.style.backgroundSize = "cover";
    
}

					