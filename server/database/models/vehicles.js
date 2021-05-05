export function getAttributes(sequelize, DataTypes) {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    vehicle_number:{
      type: DataTypes.STRING(20),
      allowNull: false
    },
    model_no: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brand_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    manufacturing_year:{
      type: DataTypes.STRING(4),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
  const vehicles = sequelize.define('vehicles', getAttributes(sequelize, DataTypes), {
    tableName: 'vehicles',
    paranoid: true,
    timestamps: true
  });

  vehicles.associate = function(models) {
    vehicles.hasMany(models.bookings, {
      foreignKey: 'vehicle_id',
      sourceKey: 'id'
    });
  };
  return vehicles;
}
