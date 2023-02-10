class Payment {
  private id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro) 
  private payByPerson: string;
  private payToPerson: string;
  private amount: number;
  private key: string;

  constructor(
    payByPerson: string,
    payToPerson: string,
    amount: number,
    key: string,
    id: string | undefined,
  ) {
    this.id = id;
    this.payByPerson = payByPerson;
    this.payToPerson = payToPerson;
    this.amount = amount;
    this.key = key;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setPayByPerson(payByPerson: string) {
    this.payByPerson = payByPerson;
  }

  public getPayByPerson() {
    return this.payByPerson;
  }

  public setPayToPerson(payToPerson: string) {
    this.payToPerson = payToPerson;
  }

  public getPayToPerson() {
    return this.payToPerson;
  }

  public setAmount(amount: number) {
    this.amount = amount;
  }

  public getAmount() {
    return this.amount;
  }

  public setKey(key: string) {
    this.key = key;
  }

  public getKey() {
    return this.key;
  }
}

export default Payment;