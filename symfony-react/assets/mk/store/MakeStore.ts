import {makeObservable} from "mobx";

class StudioStore {
   constructor() {
      makeObservable(this, {})
   }
}

const studioStore = new StudioStore()
export default studioStore