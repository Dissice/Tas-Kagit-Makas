//Açıklama : Oyuncuya prompt ile seçeneğini (taş, kağıt veya makas) soralım.
//Bilgisayarın hamlesi için "let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));" kodunu kullanın.
//if else ile console'a "kazandın, berabere veya kaybettin" yazdıralım.

let kullaniciHamlesi = prompt("Hamle Seçin: taş, kağıt, makas");
let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3)) 
  console.log(bilgisayarHamlesi);

if (kullaniciHamlesi == bilgisayarHamlesi) { 
  console.log('Berabere. ')
} else if ( 
  (kullaniciHamlesi === "taş" && bilgisayarHamlesi === "makas")||
  (kullaniciHamlesi === "makas" && bilgisayarHamlesi === "kağıt") ||
  (kullaniciHamlesi === "kağıt" && bilgisayarHamlesi === "taş")
) {
  console.log('Bravo! Kazandın.');
} else {
  console.log('Hahaha Kaybettin.');
}
   
//Oransal olarak acaba nasıl daha zevkli hale getirilir diye düşündüm ancak bir çözüm bulamadım. Diğer ödevleri yapacağım ancak bu oyunu
// daha zevkli hale getirmek için daha sonrasında revize mutlaka edeceğim.. ilk ödeve göre çok zevkliydi.
