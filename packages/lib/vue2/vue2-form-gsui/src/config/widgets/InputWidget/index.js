/**
 * Created by Liu.Jun on 2020/7/22 13:22.
 */
export default {
    name: 'InputWidget',
    functional: true,
    render(h, context) {
        const isTextarea = context.data.attrs.type === 'textarea';
        return h(isTextarea ? 'gs-textarea' : 'gs-input', context.data, context.children);
    }
};
