/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { hero } from '../models/hero';
const MY_FAVORITES = 'myFavorites';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private charactersFavSubject = new BehaviorSubject<hero[]>(null);
  charactersFav$ = this.charactersFavSubject.asObservable();

  constructor() {
    // Llamamos al método de inicializar el storage cuando se inicialice la clase.
    this.initialStorage();
  }

  addOrRemoveFavorite(character: hero): void {
    const { id } = character;
    const currentsFav = this.getFavoritesCharacters();
    const found = currentsFav.find((fav: hero) => fav.id === id);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    found ? this.removeFromFavorite(id) : this.addToFavorite(character);
  }

  private removeFromFavorite(id: string): void {
    try {
      const currentsFav = this.getFavoritesCharacters();
      const newsFav = currentsFav.filter((fav: hero) => fav.id !== id);

      localStorage.setItem(MY_FAVORITES, JSON.stringify([...newsFav]));
      this.charactersFavSubject.next([...newsFav]);
    } catch (error) {
      console.log('Error removing localStorage', error);
    }
  }

  private addToFavorite(character: hero): void {
    try {
      const currentsFav = this.getFavoritesCharacters();
      localStorage.setItem(
        MY_FAVORITES,
        JSON.stringify([...currentsFav, character])
      );
      this.charactersFavSubject.next([...currentsFav, character]);
    } catch (error) {
      console.log('Error saving localStorage', error);
    }
  }

  getFavoritesCharacters(): any {
    try {
      const charactersFav = JSON.parse(localStorage.getItem(MY_FAVORITES));
      this.charactersFavSubject.next(charactersFav);

      return charactersFav;
    } catch (error) {
      console.log('Error getting favorites from localStorage', error);
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error cleaning localStorage', error);
    }
  }

  private initialStorage(): void {
    const currents = JSON.parse(localStorage.getItem(MY_FAVORITES));

    if (!currents) {
      localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
    }

    this.getFavoritesCharacters();
  }
}
