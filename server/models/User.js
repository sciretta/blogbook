import { Schema,model,models } from 'mongoose'

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
		type:Date,
		value:new Date()//NO FUNCIONA LA FECHA
	},
	country:{
		type:String
	},
	description:{
		type:String,
		maxlength:[100,'Description must be less than 100 characters.']
	},
	tags:[{
		type:String,
		trim:true
	}],
	postsId:[{
		type:String,
		trim:true
	}]
})

export default model('User',UserSchema)