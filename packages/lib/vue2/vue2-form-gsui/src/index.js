/**
 * Created by Liu.Jun on 2019/11/29 11:25.
 */

import createVue2Core, { fieldProps, SchemaField } from '@cps/vue2-form-core';

import i18n from '@cps/vjsf-utils/i18n';
import * as vueUtils from '@cps/vjsf-utils/vueUtils';
import * as formUtils from '@cps/vjsf-utils/formUtils';
import * as schemaValidate from '@cps/vjsf-utils/schema/validate';
import getDefaultFormState from '@cps/vjsf-utils/schema/getDefaultFormState';

import WIDGET_MAP from './config/widgets/WIDGET_MAP.js';

import './style.css';

const globalOptions = Object.freeze({
    WIDGET_MAP: Object.freeze(WIDGET_MAP),
    COMPONENT_MAP: Object.freeze({
        form: 'gs-form',
        formItem: 'gs-form-item',
        button: 'gs-button',
        popover: 'gs-popover'
    }),
    HELPERS: {
        // 是否mini显示 description
        isMiniDes(formProps) {
            return formProps && ['left', 'right'].includes(formProps.labelPosition);
        }
    }
});

const JsonSchemaForm = createVue2Core(globalOptions);

// 存在Vue 全局变量默认注册 VueForm 组件
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('VueForm', JsonSchemaForm);
}

export default JsonSchemaForm;

export {
    globalOptions,
    SchemaField,
    getDefaultFormState,
    fieldProps,
    vueUtils,
    formUtils,
    schemaValidate,
    i18n
};
