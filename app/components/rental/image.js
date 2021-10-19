import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    // constructor(...args) {
    //   super(...args);
    //   this.isLarge = false;
    // }
    // The following line is equal to the above
    // isLarge = false

    // @tracked decorator to the isLarge instance variable. 
    // This annotation tells Ember to monitor this variable for updates. 
    // Whenever this variable's value changes, 
    // Ember will automatically re-render any templates that depend on its value.
    @tracked isLarge = false;

    // Next, we added a toggleSize method to our class 
    // that switches this.isLarge to the opposite of its current state
    @action toggleSize() {
      this.isLarge = !this.isLarge;
    }
  }
