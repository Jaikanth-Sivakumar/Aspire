var mongoose=require('mongoose')

var Schema=mongoose.Schema;


async function mongo(){
var  skillSchema=new Schema({
    skillName:String,
    experience:Number,
    proficiency:String
})

var jobSeekerSchema=new Schema({
    jobseekerName:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
})

var js=mongoose.model('jobseeker',jobSeekerSchema);
mongoose.connect("mongodb://127.0.0.1:27017/Aspire");

var jobseeker1=new js({
    jobseekerName:"jai",
    age:22,
    emailId:"jai@gmail.com",
    certified:true,
    skills:[{skillName:"java", experience:1, proficiency:"beginner"},
        {skillName:"angular", experience:2, proficiency:"intermediate"}
    ]
}) 

//jobseeker1.save();
const updateresult=await js.findOneAndUpdate({jobseekerName:"jai"},{age:21},{new:true})
//const result = await js.find({"skills.experience":{$lte:2}});
//result.map(record=>console.log(record));

}
mongo()