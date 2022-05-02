const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
 // throw new NotImplementedError('Not implemented');
  let teamName = '';
  if (members.constructor === Array) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        let strTrim = members[i].trim();
        teamName += strTrim[0];
        let step = 0;
        step++;
      } else if(typeof members[i] != 'string') { 
        step++;
      } else if (step == 0) {
        return Boolean = false;
      } else {
        return Boolean = false;
      }
      
    }
    teamName = teamName.split('').sort().join('').toUpperCase();
    return String = teamName;
  } else {
    return Boolean = false;
  }

   
}

module.exports = {
  createDreamTeam
};
