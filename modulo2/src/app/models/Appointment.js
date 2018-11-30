module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' }) // quem agendou
    Appointment.belongsTo(models.User, {
      as: 'provider',
      foreignKey: 'provider_id'
    }) // quem prestou o servico
  }

  return Appointment
}
