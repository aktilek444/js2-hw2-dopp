const fruits = ['kiwi', 'apple', 'orange', 'kiwi', 'apple']
function FruitsDelDublikate(array) {
    return [...new Set(array)];
}

const deldubFruits = FruitsDelDublikate(fruits);

console.log(deldubFruits);