<template>
    <div>
        <component-title title="table"
                         small="功能展示" />
        <code-block :code="tableCode">
            <template slot="demo">
                <pc-table :columns="columns"
                          :data="tableData"
                          :spanMethod="spanMethod"
                          border
                          stripe
                          height="400"
                          :rowClassName="rowClassName"
                ></pc-table>
            </template>
        </code-block>
        <component-title small="添加边框table" />
        <code-block :code="tableBorderCode">
            <template slot="demo">
                <pc-table :columns="columns2"
                          :data="tableData"
                          border
                ></pc-table>
            </template>
        </code-block>
        <component-title small="loading" />
        <pc-table :columns="columns2"
                  :data="tableData"
                  loading
                  stripe
                  border
        ></pc-table>
        <file-text :ApiEventData="ApiEventData" :ApiData="ApiData"/>
        <file-text :ApiData="columnsData" ApiEventDataTitle="columns"/>
    </div>
</template>

<script>
    import FileText from "../../componentsUilst/fileText";
    export default {
        name: "tables",
        components: {FileText},
        data(){
            return {
                ApiEventData: [
                    this.$utils.setApiEventData('on-sort','上下排序进行触发', ''),
                    this.$utils.setApiEventData('checkboxChange','单个checkbox触发', 'tableData,checkbox 所有数据和是否选中'),
                    this.$utils.setApiEventData('checkboxChangeHead','header上选中所有checkbox触发', 'tableData,item,index 选中数据和当前行和当前行下标'),
                ],
                columnsData: [
                    this.$utils.setApiData('title', '当前名称', 'String', ''),
                    this.$utils.setApiData('type', '类型：expand|index|selection', 'String', ''),
                    this.$utils.setApiData('width', '宽度', 'Number', ''),
                    this.$utils.setApiData('key', '当前的data的key', 'Number', ''),
                    this.$utils.setApiData('align', '位置：center|left|right', 'Number', ''),
                    this.$utils.setApiData('children', '可以进行一个嵌套', 'Object', ''),
                    this.$utils.setApiData('sort', '是否需要排序', 'Boolean', ''),
                    this.$utils.setApiData('fixed', '是否要靠左或者靠右left|right', 'Boolean', ''),
                ],
                ApiData: [
                    this.$utils.setApiData('stripe', '添加 # 后面会自动排序', 'Boolean', 'false'),
                    this.$utils.setApiData('border', '是否添加边框', 'Boolean', 'false'),
                    this.$utils.setApiData('loading', '是否添加loading', 'Boolean', 'false'),
                    this.$utils.setApiData('height', '高度', 'Number', ''),
                    this.$utils.setApiData('rowClassName', '单行Class', 'Function', ''),
                    this.$utils.setApiData('spanMethod', '处理合并单元行', 'Function', '{row,column,rowIndex,columnIndex} row 当前行数据 column 当前行的  column rowIndex 当前行的 index columnIndex 当前列的 index'),
                    this.$utils.setApiData('columns', '当前table的内容', 'Object', ''),
                    this.$utils.setApiData('data', '当前table的数据', 'Object', ''),
                ],
                tableCode: `
                <pc-table :columns="columns"
                          :data="tableData"
                          stripe
                          height="400"
                ></pc-table>
                `,
                tableBorderCode: `
                <pc-table :columns="columns2"
                          :data="tableData"
                          stripe
                          border
                ></pc-table>
                `,
                columns: [
                    {
                        type: 'index',
                        width: 40,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 45,
                        align: 'center',
                        render: (h, { row, index }) => {
                            return h('div','支持render 注入写法')
                        }
                    },
                    {
                        title: '支持render 注入写法，支持多层级操作',
                        key: 'name2',
                    },
                    {
                        title: '支持上下筛选（只抛出事件）',
                        key: 'name2',
                        sort: true,
                        order: 'top',
                        slotSort: 'name'
                    },
                    {
                        title: '支持横坐标合并',
                        key: 'name3',
                    },
                    {
                        title: '支持纵坐标合并',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '支持多层级嵌套table',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: '多级表头可以加滚动',
                                children: [
                                    {
                                        title: '可以取消边框',
                                        key: 'Address1',
                                        children: [
                                            {
                                                title: 'Address1',
                                                key: 'Address1',
                                            },
                                        ]
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                            {
                                title: '可以对单个框进行class 的赋值',
                                key: 'Address123456789',
                            },
                        ]
                    },
                    {
                        type: 'selection',
                        width: 48,
                        align: 'center',
                    },
                    {
                        title: '添加选中',
                        key: 'name3',
                    },
                ],
                columns2: [
                    {
                        type: 'index',
                        width: 40,
                        align: 'center'
                    },
                    {
                        title: '123',
                        key: 'name',
                        width: 100,
                        fixed: true
                    },
                    {
                        title: '456',
                        key: 'name',
                        width: 100,
                        fixed: 'right'
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                ],
                tableData: [
                    {
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },
                    {
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },
                    {
                        name: '123',
                        name1: '123',
                        name2: '12323',
                        _checkbox: true,
                        name3: '123',
                    },
                ]
            }
        },
        methods: {
            rowClassName({row,index,data}){
                // console.log(row)
                // console.log(index)
                // console.log(data)
                if (index===2) {
                    return 'red'
                }
            },
            spanMethod({row,column,rowIndex,columnIndex}){
                // console.log(row)
                // console.log(rowIndex)
                // console.log(columnIndex)
                if (columnIndex === 4) {
                    if (rowIndex % 3 === 0) {
                        return {
                            rowspan: 3,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return {
                            rowspan: 1,
                            colspan: 3
                        };
                    } else if (columnIndex === 1) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }else if (columnIndex === 2) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }else {
                        return {
                            rowspan: 1,
                            colspan: 1
                        };
                    }
                }
            }
        }
    }
</script>

<style>
    .red{
        background: red;
    }
</style>
