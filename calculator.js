function calculator(a, b, operator){
    switch(operator){
        case '+':
            return a + b
        case '-':
            return  a - b
        case '*':
            return a * b
        case '/':
            if(b === 0){
                return "You can't divide by zero."
            }else{
            return a / b
            }
        default:
            return "Operator error"
    }
}
console.log(calculator(5, 0, '/'))
