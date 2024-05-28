import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import type { RouteLocationNormalized } from "vue-router";

describe('is-authenticated.guard', () => {
    const to: RouteLocationNormalized = {
        matched: [],
        fullPath: '',
        query: {},
        hash: '',
        redirectedFrom: undefined,
        name: undefined,
        path: '/home',
        params: {},
        meta: {},
    };

    const from: any = {};

    const next = vi.fn();

    beforeEach(() => {
        localStorage.clear();
    });

    test('Should block if not authenticated', async () => {
        // Arrange
        await isAuthenticatedGuard(to, from, next);

        const lastPath = localStorage.getItem('lastPath');

        // Assert
        expect(lastPath).toBe(to.path);
    });

    test('Should block if not authenticated with spies', async () => {
        // Arrange
        const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

        await isAuthenticatedGuard(to, from, next);


        //? Assert
        expect(setItemSpy).toHaveBeenCalledWith('lastPath', to.path);
    });

    test('Should allow if authenticated', async () => {
        vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('ABC-123456');

        await isAuthenticatedGuard(to, from, next);

        expect(next).toHaveBeenCalledWith();
    });
});
