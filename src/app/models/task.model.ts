export class Task{
  constructor(
    public id:number,
    public name:string,
    public priority:string,
    public time:Date,
    public duration:number
  ){
  }
}
