class UserService {
    constructor({ userRepository }) {
      this.userRepository = userRepository;
    }
  
    getUser(id) {
      return this.userRepository.findUserById(id);
    }
  }
  
  module.exports = UserService;