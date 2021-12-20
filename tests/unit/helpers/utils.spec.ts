
import {calculateSavings, getDealByGame} from '@/helpers/utils'
import Deal from '@/models/Deal';


describe('calculateSavings', () => {
    it('calculates and returns savings of a given deal', () => {
      const deal = new Deal('1w','1','50','50','30','','1','2ew','','test' )

     const savings = calculateSavings(deal)

      expect(savings).toMatch('20.00');
    })
  })

  describe('getDealByGame', () => {
    it('remove the deal that\'s passed  from the list', () => {
      const deal1 = new Deal('1w','1','50','50','30','','1','1ew','','test' )
      const deal2 = new Deal('2w','0','50','50','30','','1','2ew','','test' )
      const deal3 = new Deal('3w','1','50','50','30','','1','2ew','','test' )

      const deals = <Deal[]>[deal2, deal3, deal1];

      const filtered = getDealByGame(deals, deal1.dealID);
     

      expect(filtered).toEqual([deal2, deal3]);

    })
  })