import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import router from "@/router";

describe('<App />', () => {
    test('Should render correctly with RouterView', () => {
        const wrapper = shallowMount(App, {
            global: {
                plugins: [router]
            }
        });

        const routerView = wrapper.findComponent({ name: 'RouterView' });

        expect(routerView.exists()).toBe(true);
    });
});