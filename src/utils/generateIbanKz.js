const bankCodes = {
  ATYNKZKA: 949,
  BKCHKZKA: 913,
  BRKEKZKA: 914,
  CASPKZKA: 722,
  CEDUKZKA: 766,
  CITIKZKA: 832,
  DVKAKZKA: 907,
  EABRKZKA: 700,
  EURIKZKA: 948,
  GCVPKZ2A: 9,
  HCSKKZKA: 972,
  HLALKZKZ: 246,
  HSBKKZKX: 601,
  ICBKKZKX: 930,
  INEARUMM: 550,
  INLMKZKA: 886,
  IRTYKZKA: 965,
  KCCJKZKK: 715,
  KCJBKZKX: 856,
  KICEKZKX: 927,
  KINCKZKA: 821,
  KKMFKZ2A: 70,
  KPSTKZKA: 563,
  KSNVKZKA: 551,
  KZIBKZKA: 885,
  NBRKKZKX: 125,
  NURSKZKX: 849,
  SHBKKZKA: 435,
  TSESKZKA: 998,
  VTBAKZKZ: 432,
  ZAJSKZ22: 896
}

function generateKazakhstanIban (bic) {
  const countryCode = 'KZ'
  console.log('Bic - ' + bic)
  const bankCode = bic == null ? String(getRandomAvailableBankCode()) : bankCodes[bic]
  const accountNumber = String(Math.floor(Math.random() * Math.pow(10, 13))).padStart(13, '0')

  const ibanWithoutCheckDigits = `${countryCode}00${bankCode}${accountNumber}`

  let rearrangedIban = ibanWithoutCheckDigits.slice(4) + 'KZ00'

  rearrangedIban = rearrangedIban.replace(/[A-Z]/g, letter => letter.charCodeAt(0) - 55)

  const remainder = BigInt(rearrangedIban) % 97n

  const checkDigits = String(98n - remainder).padStart(2, '0')

  return `${countryCode}${checkDigits}${bankCode}${accountNumber}`
}
function getRandomAvailableBankCode () {
  const keys = Object.keys(bankCodes)
  const randomKey = keys[Math.floor(Math.random() * keys.length)]
  return bankCodes[randomKey]
}

export {
  generateKazakhstanIban,
  bankCodes
}
