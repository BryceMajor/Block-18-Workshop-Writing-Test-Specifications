// Start Multiplication

const multiplication = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return NaN
    }
    return num1 * num2
  }
  
// Start ConcatOdds

  const concatOdds = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return []
  }
  
  if (!arr1.every(input => typeof input === 'number') || !arr2.every(input => typeof input === 'number')) {
    return []
  }
  const combinedSortedOddsArray = arr1.concat(arr2).filter(num => (num % 2 === 1) || num % 2 === -1).sort((a, b) => a - b)
  const result = []
  
  for (let num of combinedSortedOddsArray) {
    if (!result.includes(num)) {
      result.push(num)
    }
  }
    
  return result
}

// Start Shopping Cart

class ShoppingCart{
  constructor (loggedIn) {
    this.cart = {}
    this.loggedIn = loggedIn
  }

  addToCart(item) {
    const name = item.name
    name in this.cart ? this.cart[item].quantity++ : this.cart[item].quantity = 1
  }

  removeFromCart(item) {
    const name = item.name
    if (name in this.cart) {
      if (this.cart[item].quantity > 1) {
        this.cart[item].quantity--
      } else {
        delete this.cart[item]
      }
    }
  }

  checkout() {
    const total = 0
    if (Object.keys(this.cart).length) {
      for (let item in this.cart) {
        total += (this.cart[item].price * this.cart[item].quantity)
      }
    
      if (!this.loggedIn) {
        return 'Do you want to log in or create account?'
      } else {
        return total
      }  
    } else {
      return 'You need to add items to checkout'
    }
  }
}

module.exports = {multiplication, concatOdds, ShoppingCart};
