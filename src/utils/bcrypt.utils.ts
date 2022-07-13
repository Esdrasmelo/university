import { hashSync, compareSync } from 'bcrypt';

export class BcryptUtils {
  private saltRounds: number = Number(process.env.SALT);

  async encrypt(value: string): Promise<string> {
    try {
      const encryptedValue = hashSync(value, this.saltRounds);

      return encryptedValue;
    } catch (error) {
      throw error;
    }
  }

  async compareValues(
    value: string,
    encrypted_value: string,
  ): Promise<boolean> {
    try {
      const areValuesEquals = compareSync(value, encrypted_value);

      return areValuesEquals;
    } catch (error) {
      throw error;
    }
  }
}
