import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlUtilsService {

  public static extractStarShipIdFromSwApi(url: string): string {
    return url.split('/').filter(segment => segment!=='').pop()!;
  }
}
