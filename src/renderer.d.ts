import { IApi } from '@shared/IApi';

declare global {
    interface Window {
        api: IApi;
    }
}
