export function getAttributes(sequelize, DataTypes) {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tokenId:{
      field: 'token_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tokens',
        key: 'id'
      }
    },
    driverId: {
      field: 'driver_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'drivers',
        key: 'id'
      }
    },
    shiftId:{
      field: 'shift_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shifts',
        key: 'id'
      }
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
      allowNull: true
    }
  };
}

export function model(sequelize, DataTypes) {
  const driverLoginLogs = sequelize.define('driver_login_logs', getAttributes(sequelize, DataTypes), {
    tableName: 'driver_login_logs',
    paranoid: true,
    timestamps: true
  });

  driverLoginLogs.associate = function(models) {

    driverLoginLogs.drivers = driverLoginLogs.belongsToMany(models.drivers, {
      through: models.drivers,
      otherKey: 'driver_id',
      sourceKey: 'id'
    });

    driverLoginLogs.belongsTo(models.tokens, {
      targetKey: 'id',
      sourceKey: 'token_id'
    });
  };
  return driverLoginLogs;
}
