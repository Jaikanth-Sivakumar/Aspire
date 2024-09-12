import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Array to hold the cart items
  private cartItems: any[] = [];
  
  // BehaviorSubject to keep track of cart items and allow components to subscribe to updates
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  // Method to get the current cart items as an Observable
  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  // Method to add a product to the cart
  addToCart(product: any): void {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers of the updated cart
  }

  // Method to remove a product from the cart
  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers of the updated cart
  }

  // Method to clear the cart
  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers that the cart is cleared
  }
}
