const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'admin',
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
      cab_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cab_stations',
          key: 'id'
        }
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
      tableName: 'admin',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'admin_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
