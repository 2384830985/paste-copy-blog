<template>
    <div>
        <component-title title="radio"
                         small="radio大小" />
        <code-block :code="radioCode">
            <template slot="demo">
                <pc-radio-group  v-model="smallRadio" >
                    <pc-radio :label="1" size="small">small1</pc-radio>
                    <pc-radio disabled :label="2" size="small">small2</pc-radio>
                    <pc-radio :label="3" size="small">small3</pc-radio>
                </pc-radio-group>
                <br/>
                <br/>
                <pc-radio-group  v-model="defaultRadio">
                    <pc-radio :label="1">default1</pc-radio>
                    <pc-radio disabled :label="2">default2</pc-radio>
                    <pc-radio :label="3">default3</pc-radio>
                </pc-radio-group>
                <br/>
                <br/>
                <pc-radio-group  v-model="largeRadio" size="large">
                    <pc-radio :label="1" size="large" >large1</pc-radio>
                    <pc-radio disabled :label="2" size="large" >large2</pc-radio>
                    <pc-radio :label="3" size="large" >large3</pc-radio>
                </pc-radio-group>
            </template>
        </code-block>
        <component-title small="按钮样式" />
        <code-block :code="buttonRadioCode">
            <template slot="demo">
                <pc-radio-group  v-model="entityRadio" type="button" entity >
                    <pc-radio :label="1">entityRadio1(铺满的样式)</pc-radio>
                    <pc-radio :label="2" disabled>entityRadio2</pc-radio>
                    <pc-radio :label="3">entityRadio3</pc-radio>
                </pc-radio-group>
                <br/>
                <br/>
                <pc-radio-group  v-model="smallButtonRadio" type="button" size="small">
                    <pc-radio :label="1" >smallButtonRadio1</pc-radio>
                    <pc-radio :label="2" >smallButtonRadio2</pc-radio>
                    <pc-radio :label="3" >smallButtonRadio3</pc-radio>
                </pc-radio-group>
                <br/>
                <br/>
                <pc-radio-group  v-model="defaultButtonRadio" type="button">
                    <pc-radio :label="1" disabled>defaultButtonRadio1</pc-radio>
                    <pc-radio :label="2">defaultButtonRadio2</pc-radio>
                    <pc-radio :label="3" size="large">defaultButtonRadio3</pc-radio>
                </pc-radio-group>
                <br/>
                <br/>
                <pc-radio-group  v-model="largeButtonRadio" type="button" size="large">
                    <pc-radio :label="1" >largeButtonRadio1</pc-radio>
                    <pc-radio :label="2" >largeButtonRadio2</pc-radio>
                    <pc-radio :label="3" disabled size="large">largeButtonRadio3</pc-radio>
                </pc-radio-group>
            </template>
        </code-block>
        <file-text :ApiEventData="ApiEventData" :ApiData="ApiData"/>
    </div>
</template>

<script>

    import FileText from "../../componentsUilst/fileText";
    export default {
        name: "radio",
        components: {FileText},
        data(){
            return{
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
                ],
                radioCode: `
                <p>small</p>
                <pc-radio-group  v-model="smallRadio" >
                    <pc-radio :label="1" size="small">small1</pc-radio>
                    <pc-radio :label="2"  size="small">small2</pc-radio>
                    <pc-radio :label="3"  size="small">small3</pc-radio>
                </pc-radio-group>
                <p>default</p>
                <pc-radio-group  v-model="defaultRadio">
                    <pc-radio :label="1">default1</pc-radio>
                    <pc-radio :label="2">default2</pc-radio>
                    <pc-radio :label="3" size="large">default3</pc-radio>
                </pc-radio-group>
                <p>large</p>
                <pc-radio-group  v-model="largeRadio" size="large">
                    <pc-radio :label="1" size="large" >large1</pc-radio>
                    <pc-radio :label="2" size="large" >large2</pc-radio>
                    <pc-radio :label="3" size="large" >large3</pc-radio>
                </pc-radio-group>
                `,
                defaultRadio: 1,
                largeRadio: 1,
                smallRadio: 1,
                entityRadio: 1,
                defaultButtonRadio: 1,
                smallButtonRadio: 1,
                largeButtonRadio: '',
                buttonRadioCode: `
                <pc-radio-group  v-model="entityRadio" type="button" entity >
                    <pc-radio :label="1">entityRadio1(铺满的样式)</pc-radio>
                    <pc-radio :label="2" disabled>entityRadio2</pc-radio>
                    <pc-radio :label="3">entityRadio3</pc-radio>
                </pc-radio-group>
                <pc-radio-group  v-model="smallButtonRadio" type="button" size="small">
                    <pc-radio :label="1" >smallButtonRadio1</pc-radio>
                    <pc-radio :label="2" >smallButtonRadio2</pc-radio>
                    <pc-radio :label="3" >smallButtonRadio3</pc-radio>
                </pc-radio-group>
                <pc-radio-group  v-model="defaultButtonRadio" type="button">
                    <pc-radio :label="1" disabled>defaultButtonRadio1</pc-radio>
                    <pc-radio :label="2">defaultButtonRadio2</pc-radio>
                    <pc-radio :label="3" size="large">defaultButtonRadio3</pc-radio>
                </pc-radio-group>
                <pc-radio-group  v-model="largeButtonRadio" type="button" size="large">
                    <pc-radio :label="1" >largeButtonRadio1</pc-radio>
                    <pc-radio :label="2" >largeButtonRadio2</pc-radio>
                    <pc-radio :label="3" disabled size="large">largeButtonRadio3</pc-radio>
                </pc-radio-group>
                `
            }
        }
    }
</script>

<style scoped>

</style>
