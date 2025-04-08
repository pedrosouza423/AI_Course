function xyz(n) {
    if (n % 2 == 0) 
        return --n; // Decrementa n antes de retornar
    else
        return ++n; // Incrementa n antes de retornar
}

console.log(xyz(10));
