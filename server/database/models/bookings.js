export function getAttributes(sequelize, DataTypes) {
    return {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sourceAddress:{
            fields:'source_add',
            type: DataTypes.TEXT,
        },
        destinationAddress:{
            fields:'dest_add',
            type: DataTypes.TEXT,
        },
        starting_point_lat: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        starting_point_long: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        ending_point_lat: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        ending_point_long: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM(["REQUESTED","CONFIRMED","NOT_AVAILABLE"]),
            allowNull: false
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
        customerId: {
            field: 'customer_id',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'customers',
                key: 'id'
            }
        },
        vehicleId: {
            field: 'vehicleId',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'vehicles',
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
    const bookings = sequelize.define('bookings', getAttributes(sequelize, DataTypes), {
        tableName: 'bookings',
        paranoid: true,
        timestamps: true
    });

    bookings.associate = function(models) {

        bookings.belongsTo(models.drivers, {
            sourceKey: 'id',
            targetKey:'driver_id'
        });

        bookings.belongsTo(models.customers, {
            sourceKey: 'id',
            targetKey:'customer_id'
        });
    };
    return bookings;
}
