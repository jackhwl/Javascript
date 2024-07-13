class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
        Object.freeze(this);
    }

    equals(other) {
        return other instanceof Money && this.amount === other.amount && this.currency === other.currency;
    }   
}