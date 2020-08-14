<template>
    <div>
        <component-title title="input"
                         small="input组整合及大小" />
        <code-block :code="inputCode">
            <template slot="demo">
                <pc-input placeholder="large" size="large"></pc-input>
                <br/>
                <br/>
                <pc-input placeholder="default"></pc-input>
                <br/>
                <br/>
                <pc-input placeholder="small" size="small"></pc-input>
            </template>
        </code-block>
        <component-title small="input添加前后卡槽和搜索" />
        <code-block :code="inputSlotCode">
            <template slot="demo">
                <pc-input placeholder="prepend和append">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
                <br/>
                <br/>
                <pc-input placeholder="search" search>
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
                <br/>
                <br/>
                <pc-input placeholder="search" search></pc-input>
                <br/>
                <br/>
                <pc-input placeholder="searchButton" search searchButton="searchButton"></pc-input>
                <br/>
                <br/>
                <pc-input placeholder="search和append一起" search searchButton="searchButton">
                    <span slot="append">.com</span>
                </pc-input>
                <br/>
                <br/>
                <pc-input placeholder="支持password"
                          type="password"
                          clearable
                          disabled
                          show-password
                          search
                          :searchButton="true"
                >
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
            </template>
        </code-block>
        <component-title small="input添加前后下拉框的支持" />
        <code-block :code="selectInputCode">
            <template slot="demo">
                <pc-input placeholder="下拉框的样式支持"
                          style="margin-bottom: 20px"
                          disabled
                >
                    <pc-select slot="prepend">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                <pc-input placeholder="下拉框的样式支持"
                          style="margin-bottom: 20px"
                >
                    <pc-select slot="append">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                <pc-input placeholder="下拉框的样式支持"
                          style="margin-bottom: 20px"
                >
                    <pc-select slot="prepend">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                    <pc-select slot="append">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
            </template>
        </code-block>
        <component-title small="textarea的支持" />
        <code-block :code="textareaInputCode">
            <template slot="demo">
                <pc-input placeholder="textarea"
                          type="textarea"
                          disabled
                          rows="5"
                          style="margin-bottom: 20px"
                >
                </pc-input>
                <pc-input placeholder="showWordLimit"
                          type="textarea"
                          rows="5"
                          blankSpace
                          showWordLimit
                          :maxlength="100"
                >
                </pc-input>
            </template>
        </code-block>
        <file-text :ApiEventData="ApiEventData" :ApiData="ApiData"/>
    </div>
</template>

<script>
    import FileText from "../../componentsUilst/fileText";
    export default {
        name: "input",
        components: {FileText},
        data(){
            return {
                ApiEventData: [
                    {
                        name: 'onAppend',
                        explain: 'Append被点的时候触发，返回当前input的值',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'onPrepend',
                        explain: 'Prepend被点的时候触发，返回当前input的值',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'onIconClickLeft',
                        explain: 'icon左边点击被触发',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'onIconClickRight',
                        explain: 'icon右边点击被触发',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'clear',
                        explain: '被清除时候触发',
                        parameter: '() => void',
                        edition: '-',
                    },
                    {
                        name: 'on-change',
                        explain: '值被修改时触发',
                        parameter: '(event) => void',
                        edition: '-',
                    },
                    {
                        name: 'on-keypress',
                        explain: 'keypress事件',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'on-keydown',
                        explain: 'keydown事件',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'on-enter',
                        explain: 'enter事件',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'on-keyup',
                        explain: 'keyup事件',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                    {
                        name: 'focus',
                        explain: 'focus事件',
                        parameter: '(currentValue) => void',
                        edition: '-',
                    },
                ],
                ApiData: [
                    this.$utils.setApiData('wrap', '规定当在表单中提交时，文本区域中的文本如何换行。。 textarea \'hard\', \'soft\'', 'string', 'soft', '-'),
                    this.$utils.setApiData('elementId', '当前的domID', 'string', '', '-'),
                    this.$utils.setApiData('autofocus', '规定在页面加载后文本区域自动获得焦点。 textarea', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('blankSpace', '是否去除头尾的空格', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('rows', 'textarea 的高度', 'Number', '', '-'),
                    this.$utils.setApiData('iconLeft', '左边当icon', 'string', '', '-'),
                    this.$utils.setApiData('icon', '右边当icon', 'string', '', '-'),
                    this.$utils.setApiData('value', '当前值', 'Number,String', '', '-'),
                    this.$utils.setApiData('placeholder', 'placeholder', 'String', '', '-'),
                    this.$utils.setApiData('type', '类型 \'text\', \'textarea\', \'password\', \'url\', \'email\', \'date\', \'number\', \'tel\'', 'String', 'text', '-'),
                    this.$utils.setApiData('showWordLimit', '是否展示数量（textarea）的时候才可以使用', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('search', '是否搜索', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('readonly', '是否只读', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('disabled', '是否禁用', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('maxlength', '最大长度', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('clearable', '是否显示清空按钮', 'Boolean', 'false', '-'),
                    this.$utils.setApiData('name', 'input的Name', 'String', '', '-'),
                    this.$utils.setApiData('classIcon', '添加icon的class', 'String', '', '-'),
                    this.$utils.setApiData('searchButton', 'search是否需要Button化', 'Boolean|String', '', '-'),
                    this.$utils.setApiData('size', '大小', '\'small\', \'large\', \'default\'', 'default', '-'),
                ],
                inputCode: `
                    <pc-input placeholder="large" size="large"></pc-input>
                    <pc-input placeholder="default"></pc-input>
                    <pc-input placeholder="small" size="small"></pc-input>
                `,
                inputSlotCode: `
                <pc-input placeholder="prepend和append">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
                <pc-input placeholder="search" search>
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
                <pc-input placeholder="search" search></pc-input>
                <pc-input placeholder="searchButton" search searchButton="searchButton"></pc-input>
                <pc-input placeholder="search和append一起" search searchButton="searchButton">
                    <span slot="append">.com</span>
                </pc-input>
                <pc-input placeholder="支持password"
                          type="password"
                          clearable
                          show-password
                          search
                          :searchButton="true"
                >
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
                `,
                selectInputCode:`
                <pc-input placeholder="下拉框的样式支持">
                    <pc-select slot="prepend">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                <pc-input placeholder="下拉框的样式支持">
                    <pc-select slot="append">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                <pc-input placeholder="下拉框的样式支持">
                    <pc-select slot="prepend">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                    <pc-select slot="append">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                `,
                textareaInputCode: `
                <pc-input placeholder="textarea"
                          type="textarea"
                          rows="5"
                >
                </pc-input>
                <pc-input placeholder="123"
                         type="textarea"
                         v-model="maxlength"
                         rows="5"
                         blankSpace
                         showWordLimit
                         :maxlength="100"
                         >
                </pc-input>
                `
            }
        }
    }
</script>

<style scoped>

</style>
