import { mount } from '@vue/test-utils';

import App from '@/App.vue';
import router from '@/router';
import type { RouteLocationNormalized } from 'vue-router';

describe('Router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  test('renders HomePage when visiting /', async () => {
    await router.replace('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Welcome to Gerar Corporation');
  });

  test('renders Features when visitng /features', async () => {
    await router.replace('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });
  test('renders Features when visitng /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();
    expect(wrapper.html()).toContain('Flexible');
  });

  test('renders Features when visitng /contact', async () => {
    await router.replace('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain(
      'Post-ironic portland shabby chic echo park, banjo fashion axe',
    );
  });

  test('renders PokemonPage when visiting /pokemon/:id with authentication', async () => {
    localStorage.setItem('userId', 'ABC-123');

    await router.replace('/pokemon/151');
    await router.isReady();

    expect(wrapper.find('h1').text()).toBe('Pokémon #151');
    expect(wrapper.html()).toContain(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
    );
  });

  test('Should convert the segment into numbers', () => {
    const route: RouteLocationNormalized = {
      matched: [],
      fullPath: '/pokemon/2',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      name: undefined,
      meta: {},
      path: '',
      params: { id: '2' },
    };

    const pokemonRoute = router.getRoutes().find((r) => r.name === 'pokemon');
    const { id } = (pokemonRoute?.props as any).default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(2);
  });
  test('Should return default value if argument is not a number', () => {
    const route: any = {
      fullPath: '/pokemon/2',
      params: { id: '2abc' },
    };

    const pokemonRoute = router.getRoutes().find((r) => r.name === 'pokemon');

    const { id } = (pokemonRoute?.props as any).default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(1);
  });
});
