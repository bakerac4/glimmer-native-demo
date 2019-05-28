import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Dashboard extends Component {
    @tracked
    title = "Welcome to glimmer";

    buttonText = "Click Me!"

    buttonClick() {
        console.log('in next');
        this.title = "Ive heard it both ways";
    }
}
