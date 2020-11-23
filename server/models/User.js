import { Schema,model,models } from 'mongoose'
import moment from 'moment'

delete models['User']

const UserSchema = new Schema({
	username:{
		type:String,
		required:[true,'Username required.'],
		unique:true,
		trim:true
	},
	name:{
		type:String,
		required:[true,'Name required.'],
		maxlength:[40,'Name must be less than 40 characters.']
	},
	password:{
		type:String,
		required:[true,'Password required'],
		minlength:[5,'Password must be at least 5 characters.'],
		trim:true
	},
	joined:{
		type:String,
		default:moment().format('YYYY-MM-DD'),
		required:true
	},
	country:{
		type:String
	},
	description:{
		type:String,
		maxlength:[100,'Description must be less than 100 characters.']
	},
	postsId:[{
		type:String,
		trim:true
	}]
})

export default model('User',UserSchema)