const Mock = require('mockjs')

const Random = Mock.Random

let tableList = []
for (let i = 0; i < 33; i++) {
  let newObject = Mock.mock({
    userId: "@id",
    userName:'@ctitle',
    "userDept|1":['计科','物联网','电子信息','通信工程'],
    'userRole|1':[0,1]
  })
  tableList.push(newObject)
}

Mock.mock('/api/score/add', 'post', function(data){
    let student = JSON.parse(data.body)
    const resMsg = {
        'code': 200,
        'msg': '添加成功'
      }
    for(let index in tableList){
        if(tableList[index].userId == student.userId){
          tableList[index] = student
          return resMsg
        }
    }
    student.userRole = parseInt(student.userRole)
    tableList.push(student)
    return resMsg
  });

  Mock.mock('/api/score/delete', 'post', function(data){
    let id = parseInt(JSON.parse(data.body))
    for(let index in tableList){
      if(tableList[index].userId == id){
        tableList.splice(index, 1)
        break
      }
    }
    const resMsg = {
      'code': 200,
      'msg': '删除成功'
    }
    return resMsg
  });

Mock.mock('/api/pageList', 'post', (params) => {
    console.log(params, 'params')
    const [index, size, total] = [JSON.parse(params.body).page, JSON.parse(params.body).size, tableList.length]
    let len = total / size
    // console.log(index, size, total, 'index, size, total')
    const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    // 截取list
    // const newProduceNewsData = tableList.slice(index * size, (index + 1) * size)
    const newProduceNewsData = tableList.slice((index - 1) * size, index * size)
    // console.log(newProduceNewsData, 'newProduceNewsData')
    return {
      code: '0',
      message: 'success',
      data: {
        page: index,
        size: size,
        list: newProduceNewsData,
        total: total,
        totalPages: totalPages
      }
    }
  })
