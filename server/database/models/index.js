import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { getClient } from '../index';

export const db = {};

dotenv.config({ path: `.env.${process.env.ENVIRONMENT}` });

const sequelize = getClient();

db.bookings = require('@database/models/bookings').model(sequelize, Sequelize.DataTypes);
db.customers = require('@database/models/customers').model(sequelize, Sequelize.DataTypes);
db.driverLoginLogs = require('@database/models/driver_login_logs').model(sequelize, Sequelize.DataTypes);
db.passport = require('@database/models/passport').model(sequelize, Sequelize.DataTypes);

db.payments = require('@database/models/payments').model(sequelize, Sequelize.DataTypes);
db.shifts = require('@database/models/shifts').model(sequelize, Sequelize.DataTypes);
db.tokens = require('@database/models/tokens').model(sequelize, Sequelize.DataTypes);
db.users = require('@database/models/users').model(sequelize, Sequelize.DataTypes);
db.vehicles = require('@database/models/vehicles').model(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = sequelize;

export default db;
