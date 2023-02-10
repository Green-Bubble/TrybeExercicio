import { Model, Schema, model, models } from 'mongoose';
import IPayment from '../Interfaces/IPayment';

class PaymentODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<IPayment>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
    });
    this.model = models.Payment || model('Payment', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado.
  }

  public async create(payment: IPayment): Promise<IPayment> {
    return this.model.create({ ...payment });
  }
}

export default PaymentODM;