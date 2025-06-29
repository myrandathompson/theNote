'use strict';
import { Model } from 'sequelize';
import { compareSync } from 'bcryptjs'; // Add bcrypt for password hashing
import { Op } from 'sequelize'; // Add Op for OR queries

export default (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, email } = this; // Only expose safe fields
      return { id, email };
  }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Questions, {
        foreignKey: 'userId',
        onDelete: "CASCADE",
      });
      User.hasMany(models.Answers, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }

    /**
     * Login method for user authentication.
     */
    static async login({ credential, password }) {
      const user = await User.findOne({
        where: {
          [Op.or]: {
            email: credential,
          }
        },
        attributes: { include: ['hashedPassword'] } // Include hashedPassword in the query
      });
    
      if (user && compareSync(password, user.hashedPassword.toString())) {
        return user;
      }
      return null;
    }
    
    /**
     * Safe object representation for user instance.
     */
    toSafeObject() {
      const { id, email } = this; // only return safe fields
      return { id, email };
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },     
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
          exclude: [
              "hashedPassword",
              "email",
              "createdAt",
              "updatedAt",
          ],
      },
    },
  });
  return User;
};
