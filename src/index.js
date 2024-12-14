const express = require('express');
const os = require('os');
const moment = require('moment-timezone');

const app = express();

// Konfiguracja
const PORT = 8080;
const AUTHOR = "Lukasz Likos";

// Logi
const serverStartTime = new Date();
console.log(`Data uruchomienia: ${serverStartTime.toISOString()}`);
console.log(`Autor: ${AUTHOR}`);
console.log(`Serwer nasluchuje na porcie: ${PORT}`);

app.get('/', (req, res) => {
    // Pobranie adresu IP klienta
    const clientIP =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress;

    // Pobieranie strefy czasowej
    const timezone = moment.tz.guess(); 
    const localTime = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');

    // Odpowiedü HTML
    res.send(`
        <h1>Informacje o kliencie</h1>
        <p><strong>Adres IP klienta:</strong> ${clientIP}</p>
        <p><strong>Data i godzina w strefie czasowej klienta:</strong> ${localTime}</p>
    `);
});

// Start
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serwer dziala na porcie ${PORT}`);
});
