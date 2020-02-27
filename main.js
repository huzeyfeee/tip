function calculateTip() {
    var bill = document.getElementById('bill').value;
    var service = document.getElementById('service').value;
    var paylas = document.getElementById('paylas').value;

    //değer girilmez ise ;

    if (bill === "" || service == 0) {
        alert('Lütfen Değerleri Giriniz');
        return;

    }
    //kaç kişi girilmez ise
    if (paylas === "" || paylas <= 1) {
        paylas = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }
    //Bahşişi hesapla

    var toplam = (bill * service) / paylas;
    toplam = Math.round(toplam * 100) / 100;
    toplam = toplam.toFixed(2);
//bahşişi gösterme
    document.getElementById('toplamBahsis').style.display = 'block';
    document.getElementById('tip').innerHTML = toplam;
}
//gizleme

    document.getElementById('toplamBahsis').style.display = 'none';
    document.getElementById('each').style.display = 'none';

    //fonskiyonu çağırma

    document.getElementById('calculate').onclick = function () {
calculateTip();
};