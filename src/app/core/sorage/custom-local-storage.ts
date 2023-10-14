import { isPlatformBrowser } from "@angular/common";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CustomLocalStorage {
    private isInBrowser: boolean;
    private isLocalStorageSupported: boolean;
    private isLocalSessionSupported: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: string) {
        this.isInBrowser = isPlatformBrowser(this.platformId);
        this.isLocalStorageSupported = typeof (localStorage) !== "undefined";
        this.isLocalSessionSupported = typeof (sessionStorage) !== "undefined";
    }

    public get IsInBrowser(): boolean {
        return this.isInBrowser;
    }

    public get IsInMobile(): boolean {
        let userAgent = navigator.userAgent || navigator.vendor;
        let mobile = /android/i.test(userAgent) || /iPhone|ipad|iPod/i.test(userAgent);
        return mobile;
    }

    /**
     * @param key for reference to date
     * @param value data to be stored
     */
    public setItem(key: string, value: string) {
        if (this.isInBrowser && this.isLocalStorageSupported)
            localStorage.setItem(key, value);
    }

    /**
   * @param key for reference to date
   * @param value data to be stored
   */
    public setItemSession(key: string, value: string) {
        if (this.isInBrowser && this.isLocalSessionSupported)
            sessionStorage.setItem(key, value);
    }

    /**
   * @param key for reference key to retrive value
   */
    public getItem(key: string) {
        return (this.isInBrowser && this.isLocalStorageSupported)
            ? localStorage.getItem(key)
            : null;
    }

    /**
  * get data from localStorage by taking care of SSR
  * @param key for reference key to retrive value
  */
    public getItemJson<T>(key: string): T | null {
        return (this.isInBrowser && this.isLocalStorageSupported)
            ? JSON.parse(localStorage.getItem(key)!) as T
            : null;
    }

    /**
    * @param key for reference key to retrive value
    */
    public getItemSession(key: string) {
        return (this.isInBrowser && this.isLocalSessionSupported)
            ? sessionStorage.getItem(key)
            : null;
    }

    /**
    * Clear local Storage
    */
    public clear() {
        if (this.isInBrowser && this.isLocalStorageSupported)
            localStorage.clear();
    }

    /**
    * Clear given kyes from local Storage
    */
    public clearItems(keys: string[]) {
        for (const key of keys) {
            if (localStorage.getItem(key)) {
                localStorage.removeItem(key);
            }
            else
                continue;
        }
    }

    /**
    * clear session storage
    */
    public clearSession() {
        if (this.isInBrowser && this.isLocalSessionSupported)
            sessionStorage.clear();
    }

    /**
     * remove from local Storage
     * @param key for reference key to remove value
     */
    public remove(key: string) {
        if (this.isInBrowser && this.isLocalStorageSupported)
            localStorage.removeItem(key);
    }

    /**
    * remove from Session Storage
    * @param key for reference key to remove value
    */
    public removeSession(key: string) {
        if (this.isInBrowser && this.isLocalSessionSupported)
            sessionStorage.removeItem(key);
    }
}
