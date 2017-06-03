describe("MathUtils", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
    });
 
    describe("MathUtils", function(){
         
        //Spec for sum operationjasmine
            it("should be able to calculate sum of 3 and 5", function() {
            expect(calc.sum(3,5)).toEqual(8);
        });
 
        //Spec for multiply operation
        it("should be able to multiply 10 and 40", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
               });
        //Spec for division operation
        it("should be able to calculate division of 10 and 5", function(){
            expect(calc.divide(10, 5)).toEqual(2);             
    });
    //Spec for Addition operation
    it("should be able to calculate addition of 10 and 5", function() {
        expect(calc.add(10,5)).toEqual(15);
    })})});
