Unit.module('MasodfokuEgyenletMegoldasa', function() {
    QUnit.test('Létezik-e?', function(assert) {
      assert.ok(masodfokuEgyenletMegoldasa,"Létezik a masodfokuEgyenletMegoldasa fv");
    });
    QUnit.test('Létezik-e?', function(assert) {
        assert.ok(typeof masodfokuEgyenletMegoldasa==="function", "Fv-e?");
    });
  

  //bemenet: a,b,c bemenet kimenete {
    // X1: X1
    // X2: X2
  //};

  //1. általános eset: 2 gyöke van
    QUnit.test('masodfokuEgyenletMegoldasa(1, 4, 2) - 2 gyök', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 4, 2), {
            x1: -0.587864376269049,
            x2: -3.414213562373095,
        });
    });
  //2. D=0
    QUnit.test('D=0', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 2, 1), {
            x1: -1,
            x2: -1,
        });
    });
  //3. D<0
    QUnit.test('D<0 (2, 1, 2)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(2, 1, 2), {
            x1: "A Diszkrimináns kisebb mint 0! komplex szám a megoldás",
            x2: "A Diszkrimináns kisebb mint 0! komplex szám a megoldás",
        });
    });
  //4. a=0
    QUnit.test('a=0 (0, 1, 2)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(0, 1, 2), {
            x1: "0-val nem osztunk! Nm másodfokú az egyenlet!",
            x2: "0-val nem osztunk! Nm másodfokú az egyenlet!",
        });
    });
  //5. b, c=0
    QUnit.test('b=0, c=2, a<>0 (16, 0, -2)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(16, 0, -2), {
            x1: 0.3535533905932738,
            x2: -0.3535533905932738
        });
    });
    QUnit.test('b=2, c=0, a<>0 (16, 0, 0)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(16, 2, 0), {
            x1: 0,
            x2: -0.125
        });
    });
    QUnit.test('b=0, c=0, a<>0 (16, 0, 0)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(16, 0, 0), {
            x1: 0,
            x2: 0
        });
    });
  //6. a,b,c tört szám
    QUnit.test('a,b,c tört szám (2.3, 5.5, 1.1)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(2.3, 5.5, 1.1), {
            x1: -0.22029416199241053,
            x2: -2.1710101858336768
        });
    });
  //7. a szöveg - de nem értelmezhető számként
    QUnit.test('a szöveg, de nem értelmezhető számként("a", 1, 1)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("a", 1, 1), {
            x1: "a értéke nem szám!",
            x2: "a értéke nem szám!"
        });
    });
    QUnit.test('b szöveg, de nem értelmezhető számként(1, "B", 1)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, "B", 1), {
            x1: "b értéke nem szám!",
            x2: "b értéke nem szám!"
        });
    });
    QUnit.test('a szöveg, de nem értelmezhető számként(1, 1, "C")', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 1, "C"), {
            x1: "c értéke nem szám!",
            x2: "c értéke nem szám!"
        });
    });
  //8. b szöveg - de nem értelmezhető számként
  //9. c szöveg - de nem értelmezhető számként
  //10. a értéke szövegként megadott szám
    QUnit.test('a,b,c tört szám (2.3, 5.5, 1.1)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(2.3, 5.5, 1.1), {
            x1: -0.22029416199241053,
            x2: -2.1710101858336768
        });
    });
  //11. b értéke szövegként megadott szám
  //12. c értéke szövegként megadott szám
  //13. a értéke szövegként megadott 0 a="0"
  QUnit.test('a=0 (0, 1, 2)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(0, 1, 2), {
            x1: "0-val nem osztunk! Nm másodfokú az egyenlet!",
            x2: "0-val nem osztunk! Nm másodfokú az egyenlet!",
        });
    });
  //14. b, c értéke szövegként megadott 0 a="0"
  //15. a=""
  QUnit.test('a="" ("", 1, 2)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("", 1, 2), {
            x1: "a értéke nincs megadva",
            x2: "a értéke nincs megadva",
        });
    });
  //16. b=""
  QUnit.test('b="" (1, "", 2)', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, "", 2), {
            x1: "b értéke nincs megadva",
            x2: "b értéke nincs megadva",
        });
    });
  //17. c=""
  QUnit.test.only('c="" (2, 1, "")', function(assert) {             // ha oda írom, h .only akk csak ezt fogja lefuttatni, és nem kell mindent kikommentezni
        assert.deepEqual(masodfokuEgyenletMegoldasa(2, 1, ""), {
            x1: "c értéke nincs megadva",
            x2: "c értéke nincs megadva",
        });
    });
  //18. a=null
});