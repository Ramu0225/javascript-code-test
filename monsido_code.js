// function changeDateFormat(dates) {
//   // Write the code that goes here
//   const arrDates = dates.map((date)=>{
//     const isValidDate = date.includes(\s-\);
//     console.log(isvalidDate)
    
//   })
// }
// var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);

class base {
  f;
  constructor(f) {
    this.f = f;
  }

  finalPrice() {
    return this.f;
  }
}

class y extends base {
  constructor(g) {
    super(g);
  }
  finalPrice() {
    super.finalPrice()
  }
}