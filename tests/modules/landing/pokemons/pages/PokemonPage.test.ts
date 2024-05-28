import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';
import { RouterLinkStub, mount } from '@vue/test-utils';

describe('<PokemonPage />', () => {
  const id = 25;
  const wrapper = mount(PokemonPage, {
    props: {
      id,
    },
    global: {
      stubs: {
        // RouterLink: true,
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('that it renders correctly', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    );
  });

  test('Should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);

    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: id + 1 } });
  });
});
