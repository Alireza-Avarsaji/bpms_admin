import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({name: 'jalali'})
export class JalaliPipe implements PipeTransform {
    transform(value: any): any {
        if (!value || value === '0001-01-01T00:00:00') { return ''; }
        const MomentDate = moment(value);
        if (MomentDate.isBefore('0622-03-22')) {
            return '';
        }
        return MomentDate.format('jYYYY/jM/jD');
    }
}
@Pipe({name: 'jalaliTime'})
export class JalaliTimePipe implements PipeTransform {
    transform(value: any): any {
        if (!value || value === '0001-01-01T00:00:00') { return ''; }
        const MomentDate = moment(value);
        if (MomentDate.isBefore('0622-03-22')) {
            return '';
        }
        var result = MomentDate.format('HH:mm:ss');
        if (result === '00:00:00') { result = ''; }
        return result;
    }
}
@Pipe({name: 'jalaliTimeWithoutSecound'})
export class JalaliTimePipeWithoutSecoundPipe implements PipeTransform {
    transform(value: any): any {
        if (!value || value === '0001-01-01T00:00:00') { return ''; }
        const MomentDate = moment(value);
        if (MomentDate.isBefore('0622-03-22')) {
            return '';
        }
        var result = MomentDate.format('HH:mm');
        if (result === '00:00') { result = ''; }
        return result;
    }
}
