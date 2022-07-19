import { cpf } from 'cpf-cnpj-validator';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class ValidCpfConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    if (value.includes('/') || value.includes('.')) return false;

    return cpf.isValid(value);
  }
}

export function ValidCpf(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: ValidCpfConstraint,
    });
  };
}
