/**
 * Created by Liu.Jun on 2020/7/22 13:21.
 */
import moment from 'moment';

export default {
    name: 'DatePickerWidget',
    functional: true,
    render(h, context) {
        const { isNumberValue, isRange, ...otherProps } = context.data.attrs || {};

        context.data.attrs = {
            type: isRange ? 'date-range' : 'date',
            'append-to-body': true,
            ...otherProps,
            value: context.data.attrs.value
                ? isRange
                    ? context.data.attrs.value.map(val => moment(val))
                    : moment(context.data.attrs.value)
                : undefined,
        };

        // 字符串为 0 时区ISO标准时间
        const oldInputCall = context.data.on.input;
        context.data.on = {
            ...context.data.on,
            input(val) {
                let trueVal;
                if (isRange) {
                    trueVal = (val === null) ? [] : val.map(item => (new Date(item))[isNumberValue ? 'valueOf' : 'toISOString']());
                } else {
                    trueVal = (val === null) ? undefined : (new Date(val))[isNumberValue ? 'valueOf' : 'toISOString']();
                }

                oldInputCall.apply(context.data.on, [trueVal]);
            }
        };

        return h('gs-date-picker', context.data, context.children);
    }
};
