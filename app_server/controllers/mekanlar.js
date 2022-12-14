var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
    res.render('anasayfa',
    {
    "baslik": 'Anasayfa',
    "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Çay","Kek"],
            "mesafe":"10km"
        },
        {
            "ad":"Barida Cafe",
            "puan":"4",
            "adres":"SDU Batı Kampüsü",
            "imkanlar":["Kahve","Çay","Kek"],
            "mesafe":"1km"
        }

    ]

});
}

const mekanBilgisi=function(req,res,next){
    res.render('mekanbilgisi',
    {"baslik": "Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"4",
        "adres":"1 Yas Park AVM",
        "saatler":[
            {
                "gunler":"Pazartesi-Cuma",
                "acilis":"9:00",
                "kapanis":"23:00",
                "kapali":false
            },
            {
                "gunler":"Pazar-Çarşamba",
                "acilis":"10:00",
                "kapanis":"22:00",
                "kapali":false
            }

        ],
        "imkanlar":[
            "Shawo K.","Etiopya K.","Santos K."

        ],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
                "yorumYapan":"Alper Kosgeroglu",
                "yorumMetni":"Zamanla Alisiyorsun",
                "tarih":"19 Ekim 2022",
                "puan":"3"
            },
            {
                "yorumYapan":"Kemalettin Sarı",
                "yorumMetni":"Biraz sert gibi..",
                "tarih":"02 Kasım 2022",
                "puan":"5"
            }
        ]
    }

});
}

const yorumEkle=function(req,res,next){
    res.render('yorumekle',{title: 'Yorum Ekle'});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}