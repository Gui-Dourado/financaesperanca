const fetch = require('node-fetch');

const geoFromIp = async (ip) => {
    try {
        const url = `https://ipapi.co/${ip}/json/`;
        const res = await fetch(url, { timeout: 3000 });
        if (!res.ok) return null;
        const data = await res.json();
        return {
            country: data.country_name || null,
            city: data.city || null,
        }
    } catch (err) {
        console.error('geoFromIp error', err);
        return null;
    }
}

module.exports = geoFromIp