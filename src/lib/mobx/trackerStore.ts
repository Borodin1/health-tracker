// Core
import { makeAutoObservable } from 'mobx';

// API
import { api } from '../../api';

// Types
import { RootStore } from '.';

export class TrackerStore {
    root: RootStore;

    constructor(root: RootStore) {
        this.root = root;

        makeAutoObservable(this, {}, { autoBind: true });
    }
}
