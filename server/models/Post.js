import { Schema,model,models } from 'mongoose'

delete models['Post']

const PostSchema = new Schema({
	title:{
		type:String,
		required:[true,'Title required.'],
		unique:true,
		maxlength:[25,'Title must be less than 25 characters.']
	},
	content:{
		type:String,
		required:[true,'Content required.'],
		maxlength:[4000,'Content must be less than 4000 characters.']
	},
	published:{
		type:Date,
		value:new Date()//NO FUNCIONA LA FECHA
	},
	tags:[{//debe de ser requerido al menos una
		type:String,
		trim:true
	}],
	userId:{
		type:String,
		trim:true
	}
})

export default model('Post',PostSchema)