// Core
import { makeAutoObservable } from 'mobx';

export class UiStore {
    isLoading: boolean;

    constructor() {
        this.isLoading = false;

        makeAutoObservable(this, {}, { autoBind: true });
    }
}
