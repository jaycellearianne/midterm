 export function HextoRGB(hex: string) {  
    
        const convert = hex.match(/.{1,2}/g)
        const RGB = [
            parseInt(convert[0], 16),
            parseInt(convert[1], 16),
            parseInt(convert[2], 16)
        ]
        return RGB        
}

console.log(HextoRGB('ffffff'))

module.exports = HextoRGB


