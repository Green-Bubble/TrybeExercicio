module.exports = (sequelize, Datatypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Datatypes.INTEGER,
      primaryKey: true,
    },
    firstName: {
      type: Datatypes.STRING,
    },
    lastName: {
      type: Datatypes.STRING,
    },
    phone: {
      type: Datatypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'Profiles',
    underscored: true,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, {
      foreignKey: 'accountId',
      as: 'account',
    });
  };

  return Profile;
};