/**
 * Created by Liu.Jun on 2020/7/22 13:22.
 */
import moment from 'moment';

export default {
    name: 'TimePickerWidget',
    functional: true,
    render(h, context) {
        const valueFormat = 'HH:mm:ss';

        context.data.attrs = {
            format: valueFormat,
            'append-to-body': true,
            ...context.data.attrs || {},
            value: context.data.attrs.value ? moment(context.data.attrs.value, valueFormat) : undefined,
        };

        const oldInputCall = context.data.on.input;

        context.data.on = {
            ...context.data.on,
            input(val) {
                oldInputCall.apply(context.data.on, [val === null ? undefined : val.format(valueFormat)]);
            }
        };

        return h('gs-time-picker', context.data, context.children);
    }
};
