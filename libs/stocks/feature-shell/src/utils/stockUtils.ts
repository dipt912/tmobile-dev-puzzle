import { STOCK_PERIOD } from './stock-period-constants'
export const calculateDateDiff =(toDate: Date, fromDate: Date) => {
    const toDateValue = toDate.valueOf();
    const fromDateValue = fromDate.valueOf();
    const days = (toDateValue !== fromDateValue) ? Math.round(Math.abs((toDateValue - fromDateValue) / 86400000)) : 0;
    let period;
    switch (true) {
      case (days === 0 ):
        return null;
      case (days <= 2):
       period = STOCK_PERIOD.PERIOD['1D'];
        break;  
      case (days <= 5):
        period = STOCK_PERIOD.PERIOD['5D'];
        break;
      case (days <= 30):
        period = STOCK_PERIOD.PERIOD['1M'];
        break;
      case (days <= 180):
        period = STOCK_PERIOD.PERIOD['6M'];
        break;
      case (days <= 365):
        period = STOCK_PERIOD.PERIOD['1Y'];
        break;
      case (days <= 730):
        period = STOCK_PERIOD.PERIOD['2Y'];
        break;
      case (days > 730):
        period = STOCK_PERIOD.PERIOD['MAX'];
        break;
    }
    return period;

  }