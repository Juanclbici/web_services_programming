const { createContainer, asClass } = require('awilix');

// Crear el contenedor de dependencias
const container = createContainer();

// Importar clases
const UserService = require('./services/UserService');
const UserRepository = require('./repositories/UserRepository');

// Registrar dependencias
container.register({
  userRepository: asClass(UserRepository).singleton(),
  userService: asClass(UserService).scoped(),
});

module.exports = container;