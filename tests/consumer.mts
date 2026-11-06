import * as api from '@lp-labs/weekday-index';
import { weekdayIndex } from '@lp-labs/weekday-index';
console.log(weekdayIndex('2024-01-01'));
// @ts-expect-error invalid argument must be rejected by declarations
api.weekdayIndex(20240101);
