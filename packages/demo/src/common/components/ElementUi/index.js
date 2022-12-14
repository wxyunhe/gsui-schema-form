/**
 * Created by Liu.Jun on 2020/11/20 9:43.
 */
import ELEMENT from 'element-ui';

const {
    Loading,
    MessageBox,
    Message
} = ELEMENT;

export default {
    install(Vue) {
        Vue.use(ELEMENT)
        Vue.use(Loading.directive);
        // 原型方法
        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$message = Message;
    }
};
