/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { store } from './AppService';
import { addInput as addINPUT } from './reduxAction';

export class InputService {
  addInput(input) {
    store.dispatch(addINPUT(input));
  }
}
