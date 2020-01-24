import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Users=sequelize.define('users',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  name:{
    type: Sequelize.TEXT
  },
  login:{
    type: Sequelize.TEXT
  },
  Email:{
    type: Sequelize.TEXT
  },
  profession:{
    type: Sequelize.TEXT
  },
  projectid:{
    type: Sequelize.INTEGER
  },
  location:{
    type: Sequelize.TEXT
  },
  job:{
    type: Sequelize.TEXT
  },
  school:{
    type: Sequelize.TEXT
  },
  company:{
    type: Sequelize.TEXT
  },
  nbfollowers:{
    type: Sequelize.INTEGER
  },
  listoffollow:{
    type: Sequelize.JSON
  },
  picture:{
    type: Sequelize.TEXT

  },
  hashedPassword:{
    type: Sequelize.TEXT

  },
  mastodon:{
     type: Sequelize.TEXT

    }

},{
  timestamps:false
});
export default Users;
