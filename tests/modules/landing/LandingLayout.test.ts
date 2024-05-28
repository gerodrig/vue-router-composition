import { shallowMount } from "@vue/test-utils";
import { RouterView } from "vue-router";
import LandingLayout from "@/modules/landing/layouts/LandingLayout.vue";
import router from "@/router";

describe('<LandingLayout />', () => {

    test('that it renders correctly', () => {
        // Arrange
        const wrapper = shallowMount(LandingLayout, {
            global: {
                plugins: [router]
            }
        });
        // Act
        // Assert

        expect(wrapper.find('header').exists()).toBe(true);
        expect(wrapper.find('main').exists()).toBe(true);
        expect(wrapper.find('footer').exists()).toBe(true);
        expect(wrapper.find('footer').html()).toContain('Gerar Corporation');
        expect(wrapper.find('footer').html()).toContain(
            `${new Date().getFullYear()} Gerar Corporation`
        );

        expect(wrapper.findComponent({name: "RouterView"}).exists()).toBe(true);
        expect(wrapper.findComponent(RouterView).exists()).toBe(true);
    });
    
});