var age = 33,
  healthissue = true;

if (age > 65) {
  console.log("Eligible for vaccination");
} else if (age >= 18 && age <= 65 && healthissue) {
  console.log("Eligible for vaccination1");
} else {
  console.log("not");
}
