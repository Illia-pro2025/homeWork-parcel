export function maxNumber(numbers) {
    let num=numbers[0]
    for (const number of numbers) {
        if(num<number){
            num=number
        }
    }
    return num
}