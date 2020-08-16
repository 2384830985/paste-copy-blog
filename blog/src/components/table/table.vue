<template>
    <div>
        <component-title title="table"
                         small="普通table" />
        <code-block :code="tableCode">
            <template slot="demo">
                <pc-table :columns="columns"
                          :data="tableData"
                          stripe
                          height="400"
                ></pc-table>
            </template>
        </code-block>
        <component-title small="添加边框table" />
        <code-block :code="tableBorderCode">
            <template slot="demo">
                <pc-table :columns="columns2"
                          :data="tableData"
                          stripe
                          border
                ></pc-table>
            </template>
        </code-block>
        <component-title small="多级表头table" />
    </div>
</template>

<script>
    export default {
        name: "tables",
        data(){
            return {
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
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
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
        }
    }
</script>

<style scoped>

</style>
