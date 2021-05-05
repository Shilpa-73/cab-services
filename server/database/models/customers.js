export function getAttributes(sequelize, DataTypes) {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addressId: {
      field: 'address_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
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
  const customers = sequelize.define('customers', getAttributes(sequelize, DataTypes), {
    tableName: 'customers',
    paranoid: true,
    timestamps: true
  });
  customers.associate = function(models) {
    customers.belongsTo(models.users, {
      sourceKey: 'id',
      targetKey:'user_id'
    });

    customers.hasMany(models.bookings, {
      through: models.bookings,
      otherKey: 'customer_id',
      sourceKey: 'id'
    });
  };
  return customers;
}
