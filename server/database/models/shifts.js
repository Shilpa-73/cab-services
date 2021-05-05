export function getAttributes(sequelize, DataTypes) {
    return {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        startTime: {
            field: 'start_time',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        endTime: {
            field: 'end_time',
            type: DataTypes.DATE,
            allowNull: true
        }
    };
}

export function model(sequelize, DataTypes) {
    const payments = sequelize.define('payments', getAttributes(sequelize, DataTypes), {
        tableName: 'payments',
        paranoid: true,
        timestamps: true
    });
    payments.associate = function(models) {
        payments.belongsTo(models.bookings, {
            through: models.driverLoginLogs,
            otherKey: 'shift_id',
            sourceKey: 'id'
        });
    };
    return payments;
}
