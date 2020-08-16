// 事件table api 事件
const ApiEvent = [
    { title: '事件名称', key: 'name' },
    { title: '说明', key: 'explain' },
    { title: '回调参数', key: 'parameter' },
    { title: '版本', key: 'edition' }
]

// 事件table api 属性
const ApiColumns = [
    { title: '属性', key: 'attribute' },
    { title: '说明', key: 'explain' },
    { title: '类型', key: 'type' },
    { title: '默认值', key: 'default' },
    { title: '版本', key: 'edition' }
]

/**
 * setApi 获取数据
 * attribute: //属性
 * explain: //说明
 * type: //类型
 * default: //默认值
 * edition: //版本
 * @returns {{}}
 */
const setApiData = function (attribute,explain,type,def,edition='-') {
    return {
        attribute,
        explain,
        type,
        default: def,
        edition
    }
}

const setApiEventData = function (name,explain,parameter,edition='-') {
    return {
        name,
        explain,
        parameter,
        edition
    }
}
export default {
    ApiEvent,
    ApiColumns,
    setApiData,
    setApiEventData,
}
