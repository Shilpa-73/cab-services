const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'cab_stations',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      lat: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      long: {
        type: DataTypes.DOUBLE,
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
      address: {
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
      tableName: 'cab_stations',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'cab_stations_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
