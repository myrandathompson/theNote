'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Answer.belongsTo(models.Question, {
        foreignKey: 'quastionId',
        onDelete: 'CASCADE'
      });
      Answer.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  }
  Answer.init({
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Question',
        // key: 'id'
      },
      onDelete: 'CASCADE'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        // key: 'id',
      },
      onDelete: 'CASCADE'
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};