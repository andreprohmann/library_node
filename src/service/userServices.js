import userRepository from '../repositories/userRepositories.js';
import bcrypt from 'bcrypt';


async function createUserService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
        if(foundUser) throw new Error('Usuário já cadastrado')

    const passHash = await bcrypt.hash(newUser.password, 10)        
    const user = await userRepository.createUserRepository({...newUser, password: passHash})
        if(!user) throw new Error('Não foi possível criar o usuário')


    return user
}


export default {createUserService};