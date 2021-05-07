const DataTypes = require('sequelize').DataTypes;
const _sequelizeMeta = require('./SequelizeMeta');
const _admin = require('./admin');
const _bookings = require('./bookings');
const _cabStations = require('./cab_stations');
const _customers = require('./customers');
const _drivers = require('./drivers');
const _passport = require('./passport');
const _payments = require('./payments');
const _tokens = require('./tokens');
const _vehicleCategories = require('./vehicle_categories');
const _vehicleSubCategories = require('./vehicle_sub_categories');
const _vehicles = require('./vehicles');

function initModels(sequelize) {
  const sequelizeMeta = _sequelizeMeta(sequelize, DataTypes);
  const admin = _admin(sequelize, DataTypes);
  const bookings = _bookings(sequelize, DataTypes);
  const cabStations = _cabStations(sequelize, DataTypes);
  const customers = _customers(sequelize, DataTypes);
  const drivers = _drivers(sequelize, DataTypes);
  const passport = _passport(sequelize, DataTypes);
  const payments = _payments(sequelize, DataTypes);
  const tokens = _tokens(sequelize, DataTypes);
  const vehicleCategories = _vehicleCategories(sequelize, DataTypes);
  const vehicleSubCategories = _vehicleSubCategories(sequelize, DataTypes);
  const vehicles = _vehicles(sequelize, DataTypes);

  bookings.belongsTo(admin, { as: 'confirmed_by_admin', foreignKey: 'confirmed_by' });
  admin.hasMany(bookings, { as: 'bookings', foreignKey: 'confirmed_by' });
  payments.belongsTo(bookings, { as: 'booking', foreignKey: 'booking_id' });
  bookings.hasMany(payments, { as: 'payments', foreignKey: 'booking_id' });
  admin.belongsTo(cabStations, { as: 'cab_station', foreignKey: 'cab_station_id' });
  cabStations.hasMany(admin, { as: 'admins', foreignKey: 'cab_station_id' });
  bookings.belongsTo(customers, { as: 'customer', foreignKey: 'customer_id' });
  customers.hasMany(bookings, { as: 'bookings', foreignKey: 'customer_id' });
  bookings.belongsTo(drivers, { as: 'driver', foreignKey: 'driver_id' });
  drivers.hasMany(bookings, { as: 'bookings', foreignKey: 'driver_id' });
  vehicles.belongsTo(vehicleCategories, { as: 'vehicle_category', foreignKey: 'vehicle_category_id' });
  vehicleCategories.hasMany(vehicles, { as: 'vehicles', foreignKey: 'vehicle_category_id' });
  vehicleSubCategories.belongsTo(vehicleSubCategories, {
    as: 'vehicle_category',
    foreignKey: 'vehicle_category_id'
  });
  vehicleSubCategories.hasMany(vehicleSubCategories, {
    as: 'vehicleSubCategories',
    foreignKey: 'vehicle_category_id'
  });
  vehicles.belongsTo(vehicleSubCategories, { as: 'vehicle_sub_category', foreignKey: 'vehicle_sub_category_id' });
  vehicleSubCategories.hasMany(vehicles, { as: 'vehicles', foreignKey: 'vehicle_sub_category_id' });
  bookings.belongsTo(vehicles, { as: 'vehicle', foreignKey: 'vehicle_id' });
  vehicles.hasMany(bookings, { as: 'bookings', foreignKey: 'vehicle_id' });

  return {
    sequelizeMeta,
    admin,
    bookings,
    cabStations,
    customers,
    drivers,
    passport,
    payments,
    tokens,
    vehicleCategories,
    vehicleSubCategories,
    vehicles
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
