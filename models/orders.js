/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiver_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    information: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bank_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transaction_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    voucher_percent: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    voucher_money: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    transaction_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tax_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    discount_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    free_shipping: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    error_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secure_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    buyer_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyer_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'orders'
  });
};
