import { z }from 'zod';

const userSchema = z.object({
    userName: z.string().min(3, {message: 'O nome deve ter pelo menos 3 caracteres'}),
    email: z.string().email({massage: 'Email inválido'}),
    password: z.string().min(10, {message: 'A senha deve ter pelo menos 10 caracteres'}).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/, {message: 'A senha deve conter pelo menos uma letra e um número'}),
    avatar: z.string().url()
});

export { userSchema };