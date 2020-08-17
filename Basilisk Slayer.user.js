// ==UserScript==
// @name         Basilisk Slayer
// @namespace    https://enchoseon.com/useless/basilisk.html
// @version      0.69
// @description  A totally useful script that protects you from the totally legitimate Basilisk.
// @author       Encho
// @include 	 *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var page = document.body.innerText; // Store all of the page's text in a var
    page = page.toString(); // Convert object to string
    page.replace(/[^a-zA-Z ]/g, ""); // Strip special characters from the string
    page = page.toLowerCase(); // Change to lowercase

    // Big array of "safety pages"
    var urlArray = [
        "https://youtu.be/zK4TWXWEKAQ",
        "https://youtu.be/paRwZI6ZYF4",
        "https://youtu.be/XfmE1DJH78M",
        "https://youtu.be/vDMwDT6BhhE",
        "https://youtu.be/MmltUzDjKgA",
        "https://youtu.be/-eTp1DGIXcs",
        "https://youtu.be/c8bp950PHZE",
        "https://youtu.be/vgs-WSI1oDo",
        "https://youtu.be/aSfMKP3nTEQ",
        "https://youtu.be/GXFSK0ogeg4",
        "https://youtu.be/0XsoriMRL0o",
        "https://youtu.be/Y5tjtUFL0j4",
        "https://youtu.be/BoJ0pfhMmfU",
        "https://youtu.be/rGflu3TbREo",
        "https://youtu.be/e0T0rI-GiR4",
        "https://youtu.be/zhIScvlFn2w",
        "https://youtu.be/nOCgjuu0xeA",
        "https://youtu.be/XUed7HZtTNA",
        "https://youtu.be/5LR_bAk8Hoc",
        "https://youtu.be/bcoPG0oSqPI",
        "https://youtu.be/PX_yIqyTkIw",
        "https://youtu.be/FO5V-p_EwAY",
        "https://youtu.be/1Ha42W-dwWo",
        "https://youtu.be/YGfaUyzZKqs",
        "https://youtu.be/5EWEkJA5GM0",
        "https://youtu.be/REMmUdH15uI",
        "https://youtu.be/F-1yiGohCTc",
        "https://youtu.be/q4BnnQRiNPM",
        "https://youtu.be/EkZsPcsV7yE",
        "https://youtu.be/3VymPvcgFko",
        "https://youtu.be/1p0eAYJFZk4",
        "https://youtu.be/sNUhr2gkchs",
        "https://youtu.be/9K3kdvHxcdA",
        "https://youtu.be/2Nt64Vsv5lo",
        "https://youtu.be/65BrEZxZIVQ",
        "https://youtu.be/RuIXOBF0eyQ",
        "https://youtu.be/9r1X2GKfW80",
        "https://youtu.be/xJ5yYYGGlls",
        "https://youtu.be/PjnaciNT-wQ",
        "https://youtu.be/YGqdjaz2Upg",
        "https://youtu.be/jM8XdUNhNmU",
        "https://youtu.be/93T0mVddBgM",
        "https://youtu.be/asjQNZn7vng",
        "https://youtu.be/9QQo77PlJ0g",
        "https://youtu.be/qMQ-y9dHE2k",
        "https://youtu.be/HUnfxtILNw0",
        "https://youtu.be/NATZy-ZqD7A",
        "https://youtu.be/22vbhTi1ieI",
        "https://youtu.be/CoGVCO99ubM",
        "https://youtu.be/z4k9fPvw_LQ",
        "https://youtu.be/4MKAf6YX_7M",
        "https://youtu.be/ldyvCwqvU08",
        "https://youtu.be/jDYXgsMzwSI",
        "https://youtu.be/BJ0xBCwkg3E",
        "https://youtu.be/z9KsJESRx38",
        "https://youtu.be/Kl40J5YMmcI",
        "https://youtu.be/XrHTI04i9yk",
        "https://youtu.be/ApVjrw-HfHc",
        "https://youtu.be/o8U2KAXImH8",
        "https://youtu.be/k2B0yVL9fV8",
        "https://youtu.be/__UnyMFNuh4",
        "https://youtu.be/ndMwLf0_PgA",
        "https://youtu.be/m_RMzXrGjGA",
        "https://youtu.be/Y4eoe92TNGI",
        "https://youtu.be/3bNITQR4Uso",
        "https://youtu.be/kewXtkGmDtw",
        "https://youtu.be/3nlSDxvt6JU",
        "https://youtu.be/-k588Ttii6M",
        "https://youtu.be/CiviKqBn5cY",
        "https://youtu.be/OfVh1v7GGKY",
        "https://youtu.be/dWNvlyycWzQ",
        "https://youtu.be/i5kR8Sn09CI",
        "https://youtu.be/7t3xBqAWLaU",
        "https://youtu.be/J6qIzKxmW8Y",
        "https://youtu.be/moZtoMP7HAA",
        "https://youtu.be/RQmEERvqq70",
        "https://youtu.be/Fkxox9xgL1U",
        "https://youtu.be/obikY6JAdc8",
        "https://youtu.be/3sfY1lRkEVA",
        "https://youtu.be/pSsUhlXdMmQ",
        "https://youtu.be/-S24gQntcWg",
        "https://youtu.be/AH8uNvP9iOE",
        "https://youtu.be/gE2hEebqqw4",
        "https://youtu.be/YG8vtggc1Ok",
        "https://youtu.be/DlhWGLt8ROI",
        "https://youtu.be/PN-zHSvDc1g",
        "https://youtu.be/sgP1L6ChI64",
        "https://youtu.be/MubzZq1WDOo",
        "https://youtu.be/MBOhNfmbSsQ",
        "https://youtu.be/QoCcDi8zH8M",
        "https://youtu.be/yGo-dR_Mxxs",
        "https://youtu.be/SbxKTKKasRU",
        "https://youtu.be/SUamHEvVQy0",
        "https://youtu.be/9XpBGVV5Hs8",
        "https://youtu.be/dSirzTGaVco",
        "https://youtu.be/j8dkVpvGpCQ",
        "https://youtu.be/_mkiGMtbrPM",
        "https://youtu.be/l-QkMaCS7CU"
    ];

    // Detect if a page mentions Roko's Basilisk
    if (page.includes("roko's basilisk") || page.includes("roko basilisk") || page.includes("rokos basilik") || page.includes("roko basilik")) {
        location.replace(urlArray[Math.floor(Math.random()*urlArray.length)]); // Navigate to a safety page if Roko's Basilisk is detected
    }
})();