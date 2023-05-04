import { useMutation } from '@tanstack/vue-query';
import { client } from '../index';

interface getCaptcha {
  codeImg: string;
  verifyKey: string;
}

export const useGetCaptcha = () => {
  return useMutation(async () => {
    return new Promise<getCaptcha>((resolve) => {
      setTimeout(() => {
        resolve(
          client.get<getCaptcha>({
            url: '/user/get-code',
          })
        );
      }, 2000);
    });
  });
};
