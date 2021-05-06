const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'passport',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_type: {
        type: DataTypes.ENUM('CUSTOMER', 'DRIVER'),
        allowNull: false,
        defaultValue: 'CUSTOMER'
      },
      provider_type: {
        type: DataTypes.ENUM('GOOGLE', 'GITHUB', 'LOCAL'),
        allowNull: false,
        defaultValue: 'GOOGLE'
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      service_provider_id: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
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
      tableName: 'passport',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'passport_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        },
        {
          name: 'passport_user_type',
          unique: true,
          fields: [{ name: 'user_type' }, { name: 'user_id' }, { name: 'provider_type' }]
        }
      ]
    }
  );
};
