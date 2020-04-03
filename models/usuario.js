'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    cargo: DataTypes.STRING,
    periodo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    telefone: DataTypes.STRING,
    matricula: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};