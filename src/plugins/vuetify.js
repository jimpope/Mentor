import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#05416a',
                secondary: '#f4d16f',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70'
            },
            dark: {
                swift: '#05416a',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70'
            }
        }
    }
});
