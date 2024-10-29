const User = require('../models/user')
const Company = require('../models/company')
const Job = require('../models/job')
const Application = require('../models/application')



const defineRelationships = () => {
  // User-Application Relationship
  User.hasMany(Application, { foreignKey: 'UserID' });
  Application.belongsTo(User, { foreignKey: 'UserID' });

  // Company-Job Relationship
  Company.hasMany(Job, { foreignKey: 'CompanyID' });
  Job.belongsTo(Company, { foreignKey: 'CompanyID' });

  // Job-Application Relationship
  Job.hasMany(Application, { foreignKey: 'JobID' });
  Application.belongsTo(Job, { foreignKey: 'JobID' });
};






module.exports = defineRelationships;
