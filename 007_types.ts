// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 31;
var taxRate : number = 7.5;

// String
var fullName : string = "Jordan Cummings";

// Array
var ages : number[] = [31, 31, 8, 6, 5, 2];

// Tuple
let player : [number, string, string];
player = [45, "Donovan Mitchell", "Resident BAMF"];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiDara : any[] = [1986, "Jordan Cummings", true];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}