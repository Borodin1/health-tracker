// Core
import { makeAutoObservable } from 'mobx';

// Types
import { RootStore } from '.';

export class TrackerStore {
    root: RootStore;

    constructor(root: RootStore) {
        this.root = root;

        makeAutoObservable(this, {}, { autoBind: true });
    }
}
