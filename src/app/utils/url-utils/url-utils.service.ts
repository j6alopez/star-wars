import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UrlUtilsService {
    public static extractIdFromSwApi(url: string): string {
        return url.split('/')
            .filter((segment) => segment !== '')
            .pop()!;
    }

    public static extractParameterFromUrl( url: string, queryParameter: string): string | null {
        try {
            const currentUrl: URL = new URL(url);
            return currentUrl.searchParams.get(queryParameter);
        } catch (error) {
            throw new Error(`Parameter ${queryParameter} not present in ${url}`);
            return null;
        }
    }
}
