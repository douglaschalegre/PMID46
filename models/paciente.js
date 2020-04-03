'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nome: DataTypes.STRING,
    necessidade: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {});
  Paciente.associate = function(models) {
    // associations can be defined here
  };
  return Paciente;
};