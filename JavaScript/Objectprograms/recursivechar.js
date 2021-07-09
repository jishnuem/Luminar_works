// var pattern="ABABC";

// var dict={}

// for(let char of pattern){
//     if(!(char in dict)){
//         dict[char]=1
//     }
//     else{
//         console.log("first recursive char is "+ char);
//         break;
//     }
// }

var temparature = [
  { district: "tvm", temprature: 25 },
  { district: "kollam", temprature: 27 },
  { district: "kottayam", temprature: 24 },
  { district: "ekm", temprature: 27 },
  { district: "tsr", temprature: 25 },
  { district: "pkd", temprature: 30 },
  { district: "tvm", temprature: 27 },
  { district: "kollam", temprature: 25 },
  { district: "kottayam", temprature: 28 },
  { district: "ekm", temprature: 29 },
  { district: "tsr", temprature: 30 },
  { district: "pkd", temprature: 31 },
];

var weather = {};

for (let data of temparature) {
    
  let district = data["district"];
   let temp = data["temprature"];
  if (!(district in weather)) {
      
    weather[district] = temp;
  } else {
    let old_temp = weather[district];
    if (old_temp < temp) {
      weather[district] = temp;
    } else {
      weather[district] = old_temp;
    }
  }

}
console.log(weather);

function sortTemo(data){
  return Object.entries(data).sort((dist1,dist2)=>dist2[2] - dist1[1])
}
console.log(weather);