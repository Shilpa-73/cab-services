export function getAttributes(sequelize, DataTypes) {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bookingId: {
      field: 'booking_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bookings',
        key: 'id'
      }
    },
    paymentMode: {
      field: 'payment_mode',
      type: DataTypes.ENUM([1, 2,3]), //1:Cash,2:Credit Card,3:Debit Card
      allowNull: false,
    },
    paymentMeta:{  //All extra fields related to payments will get stored here!, JSON to text document
      field: 'payment_meta',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    payableAmount:{
      field: 'payable_amount',
      type: DataTypes.INTEGER,
      allowNull: false,
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
  const payments = sequelize.define('payments', getAttributes(sequelize, DataTypes), {
    tableName: 'payments',
    paranoid: true,
    timestamps: true
  });

  payments.associate = function(models) {

  };
  return payments;
}
