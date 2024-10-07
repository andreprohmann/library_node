import userRepository from '../repositories/userRepositories.js';


async function createUserService(newUser){
    const user = await userRepository.createUserRepository(newUser)
    return user;
}


export default {
    createUserService
};