// Core
import { makeAutoObservable } from 'mobx';

// Types
import { RootStore } from '.';

export class UserStore {
    root: RootStore;

    constructor(root: RootStore) {
        this.root = root;

        makeAutoObservable(this, {}, { autoBind: true });
    }
}
