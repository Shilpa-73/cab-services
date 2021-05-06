const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'vehicle_categories',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
      tableName: 'vehicle_categories',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'vehicle_categories_name',
          unique: true,
          fields: [{ name: 'name' }]
        },
        {
          name: 'vehicle_categories_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
