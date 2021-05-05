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
    birth_date:{
      type: DataTypes.DATE,
      allowNull: true
    },
    address:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    city:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    state:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    country:{
      type: DataTypes.TEXT,
      allowNull: false
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
  const users = sequelize.define('users', getAttributes(sequelize, DataTypes), {
    tableName: 'users',
    paranoid: true,
    timestamps: true
  });
  users.associate = function(models) {

  };
  return users;
}
