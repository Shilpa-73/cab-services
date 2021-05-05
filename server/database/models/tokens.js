export function getAttributes(sequelize, DataTypes) {
    return {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        token: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        token_expiry:{
            field: 'login_time',
            type: DataTypes.DATE,
            allowNull: true
        },
        loginTime: {
            field: 'login_time',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        logoutTime: {
            field: 'logout_time',
            type: DataTypes.DATE,
            allowNull: true
        }
    };
}

export function model(sequelize, DataTypes) {
    const tokens = sequelize.define('tokens', getAttributes(sequelize, DataTypes), {
        tableName: 'tokens',
        paranoid: true,
        timestamps: true
    });
    tokens.associate = function(models) {
        tokens.hasMany(models.driverLoginLogs, {
            through: models.driverLoginLogs,
            otherKey: 'driver_id',
            sourceKey: 'id'
        });
    };
    return tokens;
}
