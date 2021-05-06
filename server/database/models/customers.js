const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'customers',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      mobile_no: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn('now')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'customers',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'customer_email',
          fields: [{ name: 'email' }]
        },
        {
          name: 'customer_mobile_no',
          unique: true,
          fields: [{ name: 'mobile_no' }]
        },
        {
          name: 'customers_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        },
        {
          name: 'drivers_mobile_no',
          unique: true,
          fields: [{ name: 'mobile_no' }]
        }
      ]
    }
  );
};
