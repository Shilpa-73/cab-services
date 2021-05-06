const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'payments',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'bookings',
          key: 'id'
        }
      },
      payment_mode: {
        type: DataTypes.ENUM('CASH', 'CREDIT_CARD', 'DEBIT_CARD'),
        allowNull: false,
        defaultValue: 'CASH'
      },
      payment_meta: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      payable_amount: {
        type: DataTypes.DOUBLE,
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
      tableName: 'payments',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'payments_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
