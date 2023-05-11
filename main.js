$(function(){
    console.log(masodfokuEgyenletMegoldasa(1,4,4))
})
// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a, b, c) {

    if (a==="") {
        const eredmeny = {
            x1: "a értéke nincs megadva",
            x2: "a értéke nincs megadva"
        }
        return eredmeny
    }
    if (b==="") {
        const eredmeny = {
            x1: "b értéke nincs megadva",
            x2: "b értéke nincs megadva"
        }
        return eredmeny
    }
    if (c==="") {
        const eredmeny = {
            x1: "c értéke nincs megadva",
            x2: "c értéke nincs megadva"
        }
        return eredmeny
    }

    if (typeof a != "number") {
        a = a.replace(",", ".");
        a = Number(a)
        //szöveg ami nem értelmezhető számként : NaN (not a number)
        //isNaN -> megmutatja, h egy változó értéke szám-e?
        console.log(isNaN(a))
        if (isNaN(a) ){
            const eredmeny = {
                x1: "a értéke nem szám",
                x2: "a értéke nem szám"
            };
            return eredmeny
        }
    }
    if (typeof b != "number") {
        b = b.replace(",", ".");
        b = Number(b)
        //szöveg ami nem értelmezhető számként : NaN (not a number)
        //isNaN -> megmutatja, h egy változó értéke szám-e?
        console.log(isNaN(b))
        if (isNaN(b) ){
            const eredmeny = {
                x1: "b értéke nem szám",
                x2: "b értéke nem szám"
            };
            return eredmeny
        }
    }if (typeof c != "number") {
        c = c.replace(",", ".");
        c = Number(c)
        //szöveg ami nem értelmezhető számként : NaN (not a number)
        //isNaN -> megmutatja, h egy változó értéke szám-e?
        console.log(isNaN(c))
        if (isNaN(c) ){
            const eredmeny = {
                x1: "c értéke nem szám",
                x2: "c értéke nem szám"
            };
            return eredmeny
        }
    }

    if (typeof a != "number") {
        b = b.replace(",", ".");
    }
    if (typeof a != "number") {
        c = c.replace(",", ".");
    }

    if (a == 0) {
        const eredmeny = {
            x1: "0-val nem osztunk! Nm másodfokú az egyenlet!",
            x2: "0-val nem osztunk! Nm másodfokú az egyenlet!"
        }
    }

    let D=(b * b - 4 * a * c)
    if (D<0){
        eredmeny = {
            X1: "A Diszkrimináns kisebb mint 0! komplex szám a megoldás",
            X2: "A Diszkrimináns kisebb mint 0! komplex szám a megoldás",
        };
        return eredmeny
    }

        let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        const eredmeny = {
            X1: x1,
            X2: x2,
        };
        return eredmeny;
}

