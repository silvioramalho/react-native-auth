interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
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
