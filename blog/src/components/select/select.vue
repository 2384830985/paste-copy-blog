<template>
    <div>
        <component-title title="select"
                         small="select的大小" />
        <code-block :code="selectCode">
            <template slot="demo">
                <pc-select size="large">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="苹果" value="1"></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                </pc-select>
                <br/>
                <br/>
                <pc-select>
                    <pc-option label="西瓜" value="0" disabled></pc-option>
                    <pc-option label="苹果" value="1"></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                </pc-select>
                <br/>
                <br/>
                <pc-select size="small">
                    <pc-option label="西瓜" value="0" disabled></pc-option>
                    <pc-option label="苹果" value="1"></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                </pc-select>
            </template>
        </code-block>
        <component-title small="select添加选择组" />
        <code-block :code="selectGroupCode">
            <template slot="demo">
                <pc-select size="large" clearable>
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="苹果" value="1" disabled></pc-option>
                        <pc-option label="香蕉" value="2"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
                <br/>
                <br/>
                <pc-select size="large">
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="苹果" value="1" disabled></pc-option>
                        <pc-option label="香蕉" value="2"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
            </template>
        </code-block>
        <component-title small="select多选" />
        <code-block :code="selectMultipleCode">
            <template slot="demo">
                <pc-select v-model="x" multiple :maxTagCount="4">
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                        <pc-option label="西瓜香蕉" value="2"></pc-option>
                        <pc-option label="西草莓" value="3"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="西瓜耳机" value="6"></pc-option>
                        <pc-option label="西瓜馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
                <br/>
                <br/>
                <pc-select v-model="y" multiple filterable :maxTagCount="4">
                    <pc-option-group label="我可以进行搜索">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                        <pc-option label="西瓜香蕉" value="2"></pc-option>
                        <pc-option label="西草莓" value="3"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="西瓜耳机" value="6"></pc-option>
                        <pc-option label="西瓜馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
            </template>
        </code-block>
        <file-text :ApiEventData="ApiEventData" :ApiData="ApiData"/>
    </div>
</template>

<script>
    import FileText from "../../componentsUilst/fileText";
    export default {
        name: "selects",
        components: {FileText},
        data(){
            return {
                ApiEventData: [
                    this.$utils.setApiEventData('on-change','值被修改时触发', '(val) => void'),
                    this.$utils.setApiEventData('onFocus','onFocus时触发', '(val) => void'),
                    this.$utils.setApiEventData('onBlur','onBlur时触发', '(val) => void'),
                ],
                ApiData: [
                    this.$utils.setApiData('value', '当前值多选的时候为Array', 'Number,String,Array', ''),
                    this.$utils.setApiData('placeholder', 'placeholder', 'Number,String', ''),
                    this.$utils.setApiData('size', 'select的大小', 'small,large,default', 'default'),
                    this.$utils.setApiData('filterable', '是否支持搜索', 'boolean', 'false'),
                    this.$utils.setApiData('clearable', '是否显示清空按钮', 'Boolean', 'false'),
                    this.$utils.setApiData('disabled', '是否禁用', 'Boolean', 'false'),
                    this.$utils.setApiData('multiple', '是否支持多选', 'Boolean', 'false'),
                    this.$utils.setApiData('maxTagCount', '最多可以选择几个', 'Number', ''),
                ],
                x: [],
                y: [],
                selectCode: `
                 <pc-select size="large">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="苹果" value="1"></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                </pc-select>
                <pc-select>
                    <pc-option label="西瓜" value="0" disabled></pc-option>
                    <pc-option label="苹果" value="1"></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                </pc-select>
                <pc-select size="small">
                    <pc-option label="西瓜" value="0" disabled></pc-option>
                    <pc-option label="苹果" value="1"></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                </pc-select>
                `,
                selectGroupCode: `
                 <pc-select size="large" clearable>
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="苹果" value="1" disabled></pc-option>
                        <pc-option label="香蕉" value="2"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
                <pc-select size="large">
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="苹果" value="1" disabled></pc-option>
                        <pc-option label="香蕉" value="2"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
                `,
                selectMultipleCode: `
                <pc-select multiple :maxTagCount="4">
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                        <pc-option label="西瓜香蕉" value="2"></pc-option>
                        <pc-option label="西草莓" value="3"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="西瓜耳机" value="6"></pc-option>
                        <pc-option label="西瓜馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
                <pc-select multiple filterable :maxTagCount="4">
                    <pc-option-group label="我可以进行搜索">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                        <pc-option label="西瓜香蕉" value="2"></pc-option>
                        <pc-option label="西草莓" value="3"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="西瓜耳机" value="6"></pc-option>
                        <pc-option label="西瓜馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
                `
            }
        }
    }
</script>

<style scoped>

</style>
