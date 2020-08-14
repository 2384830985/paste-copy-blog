<template>
    <div>
        <component-title title="checkbox"
                         small="checkbox组整合及大小" />
        <code-block :code="checkboxCode">
            <template slot="demo">
                <pc-checkbox-group v-model="checkBoxList">
                    <pc-checkbox :label="1" disabled size="large">large1</pc-checkbox>
                    <pc-checkbox :label="2" size="large">large2</pc-checkbox>
                    <pc-checkbox :label="3" size="large">large3</pc-checkbox>
                    <pc-checkbox :label="4" size="large">large4</pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList">
                    <pc-checkbox :label="1">default1</pc-checkbox>
                    <pc-checkbox :label="2" disabled>default2</pc-checkbox>
                    <pc-checkbox :label="3">default3</pc-checkbox>
                    <pc-checkbox :label="4">default4</pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList">
                    <pc-checkbox :label="1" size="small">small1</pc-checkbox>
                    <pc-checkbox :label="2" size="small">small2</pc-checkbox>
                    <pc-checkbox :label="3" size="small" disabled>small3</pc-checkbox>
                    <pc-checkbox :label="4" size="small">small4</pc-checkbox>
                    <pc-checkbox :label="1" indeterminate>添加对-全部选中样式的支持</pc-checkbox>
                </pc-checkbox-group>
            </template>
        </code-block>
        <component-title small="checkbox按钮样式以及大小整合" />
        <code-block :code="entityButtonCheckboxCode">
            <template slot="demo">
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="large"
                                   entity>
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"disabled></pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   entity>
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="small"
                                   entity>
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
            </template>
        </code-block>
        <component-title small="checkbox朴素按钮样式以及大小整合" />
        <code-block :code="buttonCheckboxCode">
            <template slot="demo">
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="large">
                    <pc-checkbox :label="1" disabled></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button">
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="small">
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
            </template>
        </code-block>
        <file-text :ApiEventData="ApiEventData" :ApiData="ApiData"/>
    </div>
</template>

<script>
    import FileText from "../../componentsUilst/fileText";
    export default {
        name: "checkbox",
        components: {FileText},
        data(){
            return {
                ApiEventData: [
                    {
                        name: 'on-change',
                        explain: '值被改变的时候',
                        parameter: '(val) => void',
                        edition: '-',
                    }
                ],
                ApiData: [
                    this.$utils.setApiData(
                        'type',
                        '类型有button',
                        'string',
                        '',
                        '-'
                    ),
                    this.$utils.setApiData(
                        'entity',
                        '是否铺满(button)',
                        'boolean',
                        'false',
                        '-'
                    ),
                    this.$utils.setApiData(
                        'disabled',
                        '是否禁用',
                        'boolean',
                        'false',
                        '-'
                    ),
                    this.$utils.setApiData(
                        'trueValue',
                        '正确的值',
                        'string',
                        '',
                        '-'
                    ),
                    this.$utils.setApiData(
                        'falseValue',
                        '正确的值',
                        'string',
                        '',
                        '-'
                    ),
                    this.$utils.setApiData(
                        'size',
                        '\'small\', \'large\', \'default\' (只在按钮状态下才可以使用)',
                        'string',
                        'default',
                        '-'
                    ),
                    this.$utils.setApiData(
                        'indeterminate',
                        '是否是全选样式',
                        'boolean',
                        'false',
                        '-'
                    ),
                ],
                x: [1],
                checkBoxList: [1,2],
                checkboxCode: `
                <pc-checkbox-group v-model="checkBoxList">
                    <pc-checkbox :label="1" disabled size="large">large1</pc-checkbox>
                    <pc-checkbox :label="2" size="large">large2</pc-checkbox>
                    <pc-checkbox :label="3" size="large">large3</pc-checkbox>
                    <pc-checkbox :label="4" size="large">large4</pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList">
                    <pc-checkbox :label="1">default1</pc-checkbox>
                    <pc-checkbox :label="2" disabled>default2</pc-checkbox>
                    <pc-checkbox :label="3">default3</pc-checkbox>
                    <pc-checkbox :label="4">default4</pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList">
                    <pc-checkbox :label="1" size="small">small1</pc-checkbox>
                    <pc-checkbox :label="2" size="small">small2</pc-checkbox>
                    <pc-checkbox :label="3" size="small" disabled>small3</pc-checkbox>
                    <pc-checkbox :label="4" size="small">small4</pc-checkbox>
                    <pc-checkbox :label="1" indeterminate>添加对-全部选中样式的支持</pc-checkbox>
                </pc-checkbox-group>
                `,
                buttonCheckboxCode: `
                 <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="large">
                    <pc-checkbox :label="1" disabled></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button">
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="small">
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                `,
                entityButtonCheckboxCode: `
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="large"
                                   entity>
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"disabled></pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   entity>
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                <br/>
                <br/>
                <pc-checkbox-group v-model="checkBoxList"
                                   type="button"
                                   size="small"
                                   entity>
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
                `
            }
        }
    }
</script>

<style scoped>

</style>
