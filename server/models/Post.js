import { Schema,model,models } from 'mongoose'
import moment from 'moment'

delete models['Post']

const PostSchema = new Schema({
	title:{
		type:String,
		required:[true,'Title required.'],
		unique:true,
		maxlength:[100,'Title must be less than 100 characters.']
	},
	content:{
		type:String,
		required:[true,'Content required.'],
		maxlength:[7000,'Content must be less than 7000 characters.']
	},
	published:{
		type:String,
		default:moment().format('YYYY-MM-DD'),
		required:true
	},
	author:{
		type:String,
		trim:true
	}
})

export default model('Post',PostSchema)