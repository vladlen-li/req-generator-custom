export function generateKazakhstanIban() {
    const countryCode = "KZ";
    const bankCode = String(Math.floor(Math.random() * 900) + 100); 
    const accountNumber = String(Math.floor(Math.random() * Math.pow(10, 13))).padStart(13, '0'); 
    
    let ibanWithoutCheckDigits = `${countryCode}00${bankCode}${accountNumber}`;

    let rearrangedIban = ibanWithoutCheckDigits.slice(4) + "KZ00";
    
    rearrangedIban = rearrangedIban.replace(/[A-Z]/g, letter => letter.charCodeAt(0) - 55);

    const remainder = BigInt(rearrangedIban) % 97n;
    
    const checkDigits = String(98n - remainder).padStart(2, '0');

    return `${countryCode}${checkDigits}${bankCode}${accountNumber}`;
}