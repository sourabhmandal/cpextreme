import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    model() {
        return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    }
}
