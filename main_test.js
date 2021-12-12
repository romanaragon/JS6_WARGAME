let expect = chai.expect;

describe('MyFunctions', function() {                                        
    describe('#showCard', function() {                                   
        it('should show a card when called', function(){             
            let x = new Card('Diamonds', '9',  9);                            
            expect(x.showCard()).to.equal('Suit: Diamonds, Rank: 9, Value:9');                                   
        });
    }); 
});          