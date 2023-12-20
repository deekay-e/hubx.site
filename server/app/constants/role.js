class Role {
  USER = {
    name: 'user',
    description: 'Default user with basic priviledges'
  }

  ADMIN = {
    name: 'admin',
    description: 'Platform administrator with all priviledges'
  }
}

module.exports = new Role()