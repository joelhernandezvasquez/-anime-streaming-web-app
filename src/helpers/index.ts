
export const shortnenText = (text:string,limiterWord:number) =>{
 return `${text.slice(0,limiterWord)}...`;
}

export const convertToRemUnit = (size:number) => {
    const valueToConvert = size / 16;
    return `${valueToConvert}rem`;
   }