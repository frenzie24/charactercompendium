const { v4: uuidv4 } = require('uuid');


const genDummyInputList = (listName) => {
        let dummy = [];
        for(let i = 0; i < 10; i++) {
          dummy.push({
            value: `${listName}: i`,
            id: uuidv4()
          })
        }
        return dummy;
      }
