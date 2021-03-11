const fs = require('fs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cuda')
const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: Number,
    required: true
  },
  hobby: {
    type: String,
    required: true
  }
})
const student = mongoose.model('student', Schema)

exports.render = function (callback) {
  student.find(function (err, data) {
    if (err) {
      console.log(err)
    } else {
      callback(data)
    }
  })
}

exports.new = function (data, callback) {
  var datas = new student(data)
  datas.save().then(r => callback())
}

exports.FindById = function (data, callback) {
  student.findById(data, function (err, datas) {
    if (err) {
      return 0
    } else {
      datas = JSON.stringify(datas)
      datas = JSON.parse(datas) //MonGoDB返回的是文档对象，导致对象过大，无法渲染，需要使用JSON方法进行转换
      callback(datas)
    }
  })
}

exports.update = function (data, callback) {
  student.updateOne({"_id":data.id},data,callback)
}

exports.delete =function (data,callbcak){
  student.deleteOne({"_id":data},callbcak)
}