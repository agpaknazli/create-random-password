
let button = document.getElementById("button");
let name1 = document.getElementById("ad");
let surname = document.getElementById("soyad");
let sifre = document.getElementById("şifre");



function pasaport() {
    let nameSurname = name1.value + surname.value;
// console.log(name1.value);
//  console.log('nameSurname:', nameSurname);

    let arrName = nameSurname.split("");
    let olusturulanSifre = "";
    console.log(arrName);
    
    // 6 adet random karakter seç
    
    for (let i = 0; i<6; i++) {
        let randomIndex = Math.floor(Math.random() *arrName.length);
         console.log('randomIndex:', randomIndex);
        olusturulanSifre += arrName[randomIndex];
        // console.log('randomChars: ', randomChars);
    }
    
    // 1'den 10'a kadar random bir sayı ekle
    let sonuc="";
    for (let i= 0;  i<3; i++){
     let randomNumber = Math.floor(Math.random() *9);
     sonuc += randomNumber;
    
        
    }
    let result = olusturulanSifre + sonuc;
    // console.log(result);
    
    // Şifre değişkeninin value değerine atama
    sifre.value = result;
   name1.value="";
   surname.value="";
name1.focus();
    
}


// Butona tıklandığında pasaport fonksiyonunu çalıştır
button.addEventListener("click",()=>{
pasaport();



})



// pasaport();