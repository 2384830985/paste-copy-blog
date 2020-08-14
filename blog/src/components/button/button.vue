<template>
    <div>
        <component-title title="小课堂"
                         small="我们可以这样玩" />
        <code-block :code="keCode">
            <template slot="demo">
                <pc-button type="success" :disabled="disabled" :loading="disabled" @click="disabled = true">
                    <span v-if="!disabled">Click me!</span>
                    <span v-else>Loading...</span>
                </pc-button>
                <pc-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="large">
                    <span v-if="!disabled">Click me!</span>
                    <span v-else>Loading...</span>
                </pc-button>
                <pc-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="small">
                    <span v-if="!disabled">Click me!</span>
                    <span v-else>Loading...</span>
                </pc-button>
            </template>
        </code-block>
        <component-title title="代码演示"
                         small="我们对按钮进行了大量当业务封装，下面是按钮类型" />
        <code-block :code="buttonCode">
            <template slot="demo">
                <pc-button type="default">default</pc-button>
                <pc-button type="primary">primary</pc-button>
                <pc-button type="info">info</pc-button>
                <pc-button type="success">success</pc-button>
                <pc-button type="warning">warning</pc-button>
                <pc-button type="error">error</pc-button>
            </template>
        </code-block>
        <component-title small="text文本的样式" />
        <code-block :code="textButtonCode">
            <template slot="demo">
                <pc-button text>default</pc-button>
                <pc-button type="success" text>success</pc-button>
                <pc-button type="warning" text>warning</pc-button>
                <pc-button type="info" text>info</pc-button>
                <pc-button type="error" text>error</pc-button>
            </template>
        </code-block>
        <component-title small="朴素的按钮" />
        <code-block :code="plainButtonCode">
            <template slot="demo">
                <pc-button plain>default</pc-button>
                <pc-button plain type="primary">primary</pc-button>
                <pc-button plain type="success">success</pc-button>
                <pc-button plain type="warning">warning</pc-button>
                <pc-button plain type="info">info</pc-button>
                <pc-button plain type="error">error</pc-button>
            </template>
        </code-block>
        <component-title small="按钮的大小" />
        <code-block :code="sizeButtonCode">
            <template slot="demo">
                <pc-button size="large">large</pc-button>
                <pc-button>default</pc-button>
                <pc-button size="small">small</pc-button>
            </template>
        </code-block>
        <component-title small="圆角按钮" />
        <code-block :code="circleButtonCode">
            <template slot="demo">
                <pc-button  circle size="large">circleLarge</pc-button>
                <pc-button  circle size="default">circleDefault</pc-button>
                <pc-button  circle size="small">circleSmall</pc-button>
            </template>
        </code-block>
        <component-title small="虚线按钮" />
        <code-block :code="dashedButtonCode">
            <template slot="demo">
                <pc-button dashed size="large">dashedLarge</pc-button>
                <pc-button dashed>dashed</pc-button>
                <pc-button dashed size="small">dashedSmall</pc-button>
                <pc-button dashed ghost circle>dashedGhostCircle</pc-button>
            </template>
        </code-block>
        <component-title small="添加icon以及可以添加按钮类型" />
        <code-block :code="iconButtonCode">
            <template slot="demo">
                <pc-button circle dashed size="large" icon="time-circle">largeIconLarge</pc-button>
                <pc-button circle size="small" icon="time-circle">smallIconLarge</pc-button>
                <pc-button circle icon="time-circle">defaultIconLarge</pc-button>
                <pc-button dashed size="large" icon="time-circle">largeIconLarge</pc-button>
                <pc-button size="small" icon="time-circle">smallIconLarge</pc-button>
                <pc-button icon="time-circle">defaultIconLarge</pc-button>
                <pc-button type="success" icon="time-circle">successIconLarge</pc-button>
            </template>
        </code-block>
        <component-title small="disabled集合" />
        <code-block :code="disabledButtonCode">
            <template slot="demo">
                <pc-button disabled type="default">default</pc-button>
                <pc-button disabled type="primary">primary</pc-button>
                <pc-button disabled text>default</pc-button>
                <pc-button disabled type="success" text>success</pc-button>
                <pc-button disabled plain type="primary">primary</pc-button>
                <pc-button disabled plain type="success">success</pc-button>
            </template>
        </code-block>
        <component-title small="loading集合" />
        <code-block :code="loadingButtonCode">
            <template slot="demo">
                <pc-button loading disabled >default</pc-button>
                <pc-button loading disabled type="success" size="large" icon="time-circle">success</pc-button>
            </template>
        </code-block>
        <component-title small="iconLoading集合" />
        <code-block :code="iconLoadingButtonCode">
            <template slot="demo">
                <pc-icon class="pc-icon-loading" type="loading1"></pc-icon>
                <pc-icon class="pc-icon-loading" type="loading2"></pc-icon>
                <pc-icon class="pc-icon-loading" type="loading3"></pc-icon>
                <pc-icon class="pc-icon-loading" type="loading4"></pc-icon>
                <pc-icon class="pc-icon-loading" type="Loading"></pc-icon>
                <pc-icon class="pc-icon-loading" type="loading5"></pc-icon>
            </template>
        </code-block>
        <component-title title="API"
                         small="具体属性" />
        <pc-table :columns="ApiColumns"
                  :data="ApiData"
        >
        </pc-table>
        <component-title title="事件" />
        <pc-table :columns="ApiEvent"
                  :data="ApiEventData"
        >
            <span slot="name">123</span>
            <div slot="111"></div>
        </pc-table>
    </div>
</template>

<script>
    export default {
        name: "buttons",
        created() {
            this.ApiEvent = this.$utils.ApiEvent
            this.ApiColumns = this.$utils.ApiColumns
        },
        data(){
            return {
                ApiEvent: [],
                ApiEventData: [
                    {
                        name: 'click',
                        explain: '点击按钮时的回调',
                        parameter: '(event) => void',
                        edition: '-',
                    }
                ],
                ApiColumns: [],
                ApiData:[
                    this.$utils.setApiData(
                        'type',
                        '类型有\'default\', \'primary\', \'info\', \'success\', \'warning\', \'error\'',
                        'string',
                        'default',
                        '-'
                    ),
                    {   //属性
                        attribute: 'loading',
                        //说明
                        explain: '当前是否需要loading',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'loadingType',
                        //说明
                        explain: 'loading样式',
                        //类型
                        type: 'string',
                        //默认值
                        default: '',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'customIcon',
                        //说明
                        explain: 'icon 切换的class',
                        //类型
                        type: 'string',
                        //默认值
                        default: '',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'noMoreClickTime',
                        //说明
                        explain: '点击间隔时间',
                        //类型
                        type: 'Number',
                        //默认值
                        default: '',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'icon',
                        //说明
                        explain: 'icon',
                        //类型
                        type: 'String',
                        //默认值
                        default: '',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'disabled',
                        //说明
                        explain: 'disabled样式',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'plain',
                        //说明
                        explain: '是否朴素',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'long',
                        //说明
                        explain: '是否100%',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'dashed',
                        //说明
                        explain: '是否虚线',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'circle',
                        //说明
                        explain: '是否圆形',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'text',
                        //说明
                        explain: '是否是文本',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'ghost',
                        //说明
                        explain: '是否幽灵模式',
                        //类型
                        type: 'boolean',
                        //默认值
                        default: 'false',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'size',
                        //说明
                        explain: '按钮大小 \'small\', \'large\', \'default\'',
                        //类型
                        type: 'String',
                        //默认值
                        default: 'default',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'htmlButton',
                        //说明
                        explain: '\'button\', \'submit\', \'reset\'（默认的button 的值）',
                        //类型
                        type: 'String',
                        //默认值
                        default: 'button',
                        //版本
                        edition: '-'
                    },
                    {   //属性
                        attribute: 'animationType',
                        //说明
                        explain: '（是否动画效果 1开启 0关闭 默认1）',
                        //类型
                        type: 'String',
                        //默认值
                        default: '0',
                        //版本
                        edition: '-'
                    },
                ],
                disabled: false,
                buttonCode: `
                    <pc-button type="default">default</pc-button>
                    <pc-button type="primary">primary</pc-button>
                    <pc-button type="info">info</pc-button>
                    <pc-button type="success">success</pc-button>
                    <pc-button type="warning">warning</pc-button>
                    <pc-button type="error">error</pc-button>`,
                textButtonCode: `
                    <pc-button text>default</pc-button>
                    <pc-button type="success" text>success</pc-button>
                    <pc-button type="warning" text>warning</pc-button>
                    <pc-button type="info" text>info</pc-button>
                    <pc-button type="error" text>error</pc-button>
                `,
                plainButtonCode: `
                    <pc-button plain>default</pc-button>
                    <pc-button plain type="primary">primary</pc-button>
                    <pc-button plain type="success">success</pc-button>
                    <pc-button plain type="warning">warning</pc-button>
                    <pc-button plain type="info">info</pc-button>
                    <pc-button plain type="error">error</pc-button>
                `,
                sizeButtonCode: `
                    <pc-button size="large">large</pc-button>
                    <pc-button>default</pc-button>
                    <pc-button size="small">small</pc-button>
                `,
                circleButtonCode: `
                    <pc-button  circle size="large">circleLarge</pc-button>
                    <pc-button  circle size="default">circleDefault</pc-button>
                    <pc-button  circle size="small">circleSmall</pc-button>
                `,
                dashedButtonCode: `
                    <pc-button dashed size="large">dashedLarge</pc-button>
                    <pc-button dashed>dashed</pc-button>
                    <pc-button dashed size="small">dashedSmall</pc-button>
                    <pc-button dashed ghost circle>dashedGhostCircle</pc-button>
                `,
                iconButtonCode: `
                    <pc-button circle dashed size="large" icon="time-circle">largeIconLarge</pc-button>
                    <pc-button circle size="small" icon="time-circle">smallIconLarge</pc-button>
                    <pc-button circle icon="time-circle">defaultIconLarge</pc-button>
                    <pc-button dashed size="large" icon="time-circle">largeIconLarge</pc-button>
                    <pc-button size="small" icon="time-circle">smallIconLarge</pc-button>
                    <pc-button icon="time-circle">defaultIconLarge</pc-button>
                    <pc-button type="success" icon="time-circle">successIconLarge</pc-button>
                `,
                disabledButtonCode: `
                    <pc-button disabled type="default">default</pc-button>
                    <pc-button disabled type="primary">primary</pc-button>
                    <pc-button disabled text>default</pc-button>
                    <pc-button disabled type="success" text>success</pc-button>
                    <pc-button disabled plain type="primary">primary</pc-button>
                    <pc-button disabled plain type="success">success</pc-button>
                `,
                loadingButtonCode: `
                    <pc-button loading disabled >default</pc-button>
                    <pc-button loading disabled type="success" size="large" icon="time-circle">success</pc-button>
                `,
                iconLoadingButtonCode: `
                    <pc-icon class="pc-icon-loading" type="loading1"></pc-icon>
                    <pc-icon class="pc-icon-loading" type="loading2"></pc-icon>
                    <pc-icon class="pc-icon-loading" type="loading3"></pc-icon>
                    <pc-icon class="pc-icon-loading" type="loading4"></pc-icon>
                    <pc-icon class="pc-icon-loading" type="Loading"></pc-icon>
                    <pc-icon class="pc-icon-loading" type="loading5"></pc-icon>
                `,
                keCode: `
                    <pc-button type="success" :disabled="disabled" :loading="disabled" @click="disabled = true">
                        <span v-if="!disabled">Click me!</span>
                        <span v-else>Loading...</span>
                    </pc-button>
                    <pc-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="large">
                        <span v-if="!disabled">Click me!</span>
                        <span v-else>Loading...</span>
                    </pc-button>
                    <pc-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="small">
                        <span v-if="!disabled">Click me!</span>
                        <span v-else>Loading...</span>
                    </pc-button>
                `
            }
        }
    }
</script>

<style>
    .t-red{
        color: red;
    }
</style>
