const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'bookings',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      booking_type: {
        type: DataTypes.ENUM('DAILY_RIDE', 'OUTSTATION', 'RENTAL'),
        allowNull: false,
        defaultValue: 'DAILY_RIDE'
      },
      source_address: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      destination_address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pickup_address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pickup_lat: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      pickup_long: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      destination_lat: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      destination_long: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('REQUESTED', 'CONFIRMED', 'NOT_AVAILABLE'),
        allowNull: false,
        defaultValue: 'REQUESTED'
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      driver_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'drivers',
          key: 'id'
        }
      },
      confirmed_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'admin',
          key: 'id'
        }
      },
      vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'vehicles',
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: true
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: true
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
      tableName: 'bookings',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'bookings_customer_id',
          fields: [{ name: 'customer_id' }]
        },
        {
          name: 'bookings_driver_id',
          fields: [{ name: 'driver_id' }]
        },
        {
          name: 'bookings_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        },
        {
          name: 'bookings_vehicle_id',
          fields: [{ name: 'vehicle_id' }]
        }
      ]
    }
  );
};
