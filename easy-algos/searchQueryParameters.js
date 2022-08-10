/* Break down URL query parameters:
if multiple params, store values as an array.
if single param, store as a string.
should return an object literal of all params. */

function getQueryParams(url) {
  let queryArray = url.split("?");
  let queries = queryArray[1].split("&");
  let key, value;
  let dupliKey = [];
  let result = {};

  for (let i = 0; i < queries.length; i++) {
    key = queries[i].split("=")[0];
    value = queries[i].split("=")[1];

    if (key in result) {
      dupliKey.push(value);
      console.log(dupliKey);
      //If you've already created an array, you are now pushing into dupliKey, an array
      //You need to either check if this is an array, and only push the content of the array
      //or you can push the latest value into current array
      result[key] = dupliKey;
    } else {
      result[key] = value;
    }
  }
  return result;
}
getQueryParams(
  "https://www.iamdoingmybest.com/?please=iBeg&please=PLEASE&please=test&dont=doNot&count=thinkI&meOut=cantDoThis"
);

/* 
Test Cases:
'https://www.iamdoingmybest.com/?please=please&dont=dont&count=count&meOut=meOut'
'https://www.example.com/widgets?color=blue'
'https://www.domain.com/page?key1=value1&key2=value2'
*/
