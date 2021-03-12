//code that iterates in multiples of 7 up until 100, 
//then in multiples of 8 up to 200,
//then multiples of 9 up to 300.

function iterate() {
    var num = 0;
    while (num < 300) {
        switch (true) {
            case (num < 100):
                if (num % 7 == 0) console.log(num);
                break;

            case (num < 200):
                if (num % 8 == 0) console.log(num);
                break;

            default:
                if (num % 9 == 0) console.log(num)
        }
        num++;
    }
}

iterate();