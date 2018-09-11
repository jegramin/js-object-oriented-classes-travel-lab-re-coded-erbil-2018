class Driver{
  constructor(name,startDate){
    this.name=name;
    this.startDate=new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year,1,1);
    let totalYears = (endDate  - this.startDate) / (365*24*60*60*1000);
    return parseInt(totalYears)+1;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.endingLocation = endingLocation.vertical;
    this.beginningLocation = beginningLocation.vertical;
  }
  blocksTravelled(){
    return this.endingLocation - this.beginningLocation;
  }
  beginningLocation(){
    
  }
  endingLocation(){
    
  }
}