import { calculateDateDiff } from './stockUtils'

describe('StocksComponent()', () => {

    it('should return period as 1d when todate and fromdate difference is less than or equals to 1 day', () => {
      const todate = new Date('11/14/2019');
      const fromdate = new Date('11/14/2019');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual(null);
    });

    it('should return period as 5d when todate and fromdate difference is less than or equals to 5 days', () => {
      const todate = new Date('01/01/2020');
      const fromdate = new Date('01/04/2020');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual('5d');
    });

    it('should return period as 1m when todate and fromdate difference is less than or equals to 30 days', () => {
      const todate = new Date('09/24/2019');
      const fromdate = new Date('10/12/2019');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual('1m');
    });

    it('should return period as 6m when todate and fromdate difference is less than or equals to 180 days', () => {
      const todate = new Date('11/14/2019');
      const fromdate = new Date('10/09/2019');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual('6m');
    });

    it('should return period as 1y when todate and fromdate difference is less than or equals to 365 days', () => {
      const todate = new Date('11/14/2019');
      const fromdate = new Date('11/14/2018');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual('1y');
    });

    it('should return period as 2y when todate and fromdate difference is less than or equals to 730 days', () => {
      const todate = new Date('11/14/2019');
      const fromdate = new Date('03/09/2018');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual('2y');
    });

    it('should return period as max when todate and fromdate difference is greater than 730 days', () => {
      const todate = new Date('11/14/2019');
      const fromdate = new Date('11/09/2015');

      const result = calculateDateDiff(todate, fromdate);

      expect(result).toEqual('max');
    });

  });