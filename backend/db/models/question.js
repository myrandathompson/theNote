import mongoose from 'mongoose';

const QuestionSchema = mongoose.Schema ({
  questionTitle: { type: String, required: true },
  questioonBody: { type: String, required: true },
  questionTags: { type: [String], required: true },
  noOfAnswers:{type:Number, default:0},
  downVote:{type:[String], default:[]},
  userPosted: {type:String, required:'user'},
  userId: {type:String},
  askedOn: {type: Date, default:Date.now},
  answer: [
    {
      answerBody:String,
      userAnswered:String,
      userId:String,
      answeredOn:{type:Date, default:Date.now}
    },
  ],
});

export default mongoose.Model("Question", QuestionSchema)



// 'use strict';
// import { Model } from 'sequelize';

// export default (sequelize, DataTypes) => {
//   class Question extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Question.belongsTo(models.User, {
//         foreignKey: 'userId'
//       });
//       Question.hasMany(models.Answers, {
//         foreignKey: 'questionId',
//         onDelete: "CASCADE",
//       });
//     }
//   }
//   Question.init({
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//       references: {
//         model: 'Users',
//         key: 'id',
//       }, 
//       onDelete: 'CASCADE'
//       },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//   }, {
//     sequelize,
//     modelName: 'Question',
    
//   });
//   return Question;
// };