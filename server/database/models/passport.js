export function getAttributes(sequelize, DataTypes) {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    passportType: {
      field: 'passport_type',
      type: DataTypes.ENUM(["GOOGLE","GITHUB","LOCAL"]),
      allowNull: false,
      defaultValue:"LOCAL"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    serviceProviderId:{ //In case of Provider except LOCAL
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId:{
      field:'user_id',
      allowNull:false,
      references: {
        model: 'users',
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
  const passport = sequelize.define('passport', getAttributes(sequelize, DataTypes), {
    tableName: 'passport',
    paranoid: true,
    timestamps: true
  });

  passport.associate = function(models) {
    passport.belongsTo(models.users, {
      sourceKey: 'id',
      targetKey:'user_id'
    });
  };

  return passport;
}
