function isPrimeNumber(num) {
    if(num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

  return true;
}

export function smallProgram() {
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const result = numbers.reverse()
                    .reduce((result, num, i) => {
                        if(!isPrimeNumber(num)) {
                            let data = num;
                            
                            if(num % 3 === 0) data = 'Foo';

                            if(num % 5 === 0) data = typeof data === 'string' ? data + 'Bar' : 'Bar';

                            result.push(data);
                        }
                        return result;
                    }, [])
                    .join(', ');
    console.log(result)
    return result;
}


