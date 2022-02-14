import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

class DayJsData {
  comparaHoras(data_inicial: Date, data_final: Date): number {
    const data_final_utc = this.converteUTC(data_final);
    const data_inicial_utc = this.converteUTC(data_inicial);
    return dayjs(data_final_utc).diff(data_inicial_utc, 'hours');
  }

  converteUTC(data: Date): string {
    return dayjs(data).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

}

export { DayJsData };
