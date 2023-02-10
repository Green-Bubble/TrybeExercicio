interface IPayment {
  id?: string
  payByPerson: string;
  payToPerson: string;
  amount: number;
  key: string;
}

export default IPayment;