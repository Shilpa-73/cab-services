const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'tokens',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.ENUM('CUSTOMER', 'DRIVER'),
        allowNull: false,
        defaultValue: 'CUSTOMER'
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      token_expiry: {
        type: DataTypes.DATE,
        allowNull: false
      },
      login_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      logout_time: {
        type: DataTypes.DATE,
        allowNull: false
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
      tableName: 'tokens',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'tokens_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        },
        {
          name: 'tokens_token',
          fields: [{ name: 'token' }]
        }
      ]
    }
  );
};
