/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('social_accouts', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    provider_user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
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
    tableName: 'social_accouts'
  });
};
