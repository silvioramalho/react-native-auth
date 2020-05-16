import IPayload from '../interfaces/payload.interface';

export function signIn(): Promise<IPayload> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ajsdhflajkshdkfljaldsfhkajsfdklaskdjhlajsdhf',
        user: {
          name: 'Silvio',
          email: 'silvioramalho@gmail.com',
        },
      });
    }, 2000);
  });
}
