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

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route{
  constructor(beginningLocation, endingLocation){
    this.endingLocation = endingLocation;
    this.beginningLocation = beginningLocation;
  }
  blocksTravelled(){
    //let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
    return eastWest.indexOf(this.endingLocation.horizantal) - eastWest.indexOf(this.beginningLocation.horizantal);
  }
  beginningLocation(){
    
  }
  endingLocation(){
    
  }
}