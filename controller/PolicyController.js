const axios = require("axios").default;
const PolicyNumber = require('../model/PolicyNumber')
const PolicyNumberCheck = require('../model/PolicyNumberCheck')

const { customAlphabet } = require('nanoid')

exports.generatePolicy = async (req, res) => {
  // mongodb://127.0.0.1:27017/turtlefin?compressors=disabled&gssapiServiceName=mongodb
  
  console.log('starting script')
  console.log('---------------')

  console.log('db.createCollection("policyNumbers");')
  var start = new Date().getTime();
  
  for (let i = 0; i < 200000; i++) {
      // const nanoid  = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 13);
      const nanoid  = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 13);
      const policyId = nanoid()
      // const num = (Math.random().toString(36).slice(2).toUpperCase()+Math.random().toString(36).slice(2).toUpperCase()).substring(1,14)
      await PolicyNumber.create({policyId: policyId, isAvailable: true})
      console.log(`db.policyNumbers.insert({"policyId": "${policyId}", "isAvailable" : true});`)
  }

  console.log('---------------')
  console.log('ending script')
  var end = new Date().getTime();
  var time = end - start;

  console.log ('Execution time: ' + time * 0.001 + ' seconds.');

  res.status(200).json({
    success: true,
    greeting: `policy id saved!`,
  });
};

exports.fetchPolicy = async (req, res) => {

  await generatePolicyNumber()
    
  res.status(200).json({
    success: true,
    greeting: `policy id saved in another table!`,
  });
};

async function generatePolicyNumber() {

  await axios
      .get(
          `http://localhost:9098/api/minterprise/v1/products/hospicash/policies/randomPolicyNumber?insurerCode=HDFC`
      )
      .then(async (response) => {
          // console.log("response -- > " + (response.data));
          const policyId = response.data
          await PolicyNumberCheck.create({policyId: policyId, isAvailable: false})
          console.log(`policy number -------> ${policyId}`)
      })
      .catch(function (error) {
          console.log("error"+ error);
      });
}