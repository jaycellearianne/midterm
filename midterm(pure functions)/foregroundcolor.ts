export  function foreground (hex: string) {
    const convert = hex.match(/.{1,2}g/)
    const RGB = [
        parseInt(convert[0], 16),
        parseInt(convert[1], 16),
        parseInt(convert[2], 16)
    ]
    return RGB  
} 

const foregroundColor = (foreground: number[]) => {
    const red = foreground[0]
    return console.log(red)

}

const colorval = foreground('ffffff')
const getrgb = foregroundColor(colorval)
console.log(colorval)





