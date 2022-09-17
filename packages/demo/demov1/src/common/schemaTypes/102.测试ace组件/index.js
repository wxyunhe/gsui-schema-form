/**
 * Created by Liu.Jun on 2020/7/22 11:07 下午.
 */

export default {
    schema: {
        title: '测试ace输入框',
        type: 'object',
        properties: {
            test: {
                title: 'Email',
                type: 'string'
            }
        }
    },
    uiSchema: {
        test: {
            'ui:widget': 'CodeEditorWidget'
        }
    }
};
