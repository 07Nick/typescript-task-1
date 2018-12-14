import { IObservable, IObserver } from '../utils/observable/types';
import { IView } from './types';

export class DesktopView implements IObserver, IView {
    public update(observable: IObservable) {
        throw new Error('Not implemented');
    }

    public render() {
        throw new Error('Not implemented');
    }
}
