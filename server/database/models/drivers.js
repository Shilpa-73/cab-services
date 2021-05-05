export function getAttributes(sequelize, DataTypes) {
    return {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: { //Reference to user table
            field: 'user_id',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        driving_license_number:{
            type : DataTypes.TEXT,
            allowNull:false
        },
        active:{
            type : DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
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
    const drivers = sequelize.define('drivers', getAttributes(sequelize, DataTypes), {
        tableName: 'drivers',
        paranoid: true,
        timestamps: true
    });
    drivers.associate = function(models) {
        drivers.belongsTo(models.users, {
            sourceKey: 'id',
            targetKey:'user_id'
        });

        drivers.hasMany(models.bookings, {
            through: models.bookings,
            otherKey: 'driver_id',
            sourceKey: 'id'
        });
    };
    return drivers;
}
