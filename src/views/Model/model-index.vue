<template>
  <div>
    <Tabs style="margin:20px;">
      <TabPane label="模型管理" icon="ios-browsers">
        <img src="/static/mock/model_list.png" width="95%" height="82%">
      </TabPane>
      <TabPane label="模型实例库"  icon="md-flask">
        <Table size="large" :width="tableRealWidth" border :style="'left:'+tableLeftEdge+'px;'" :columns="table_column_arr"
               :data="table_data_arr"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    name: 'model-index',
    components: {},
    props:[],
    data() {
      return {
        tableRealWidth:932,
        tableLeftEdge:10,
        table_data_arr:[],
        table_column_arr:[]
      }
    },
    computed: {},
    watch: {},
    created: function(){
      this.table_column_arr = [];
      this.table_column_arr.push({title:'ID',key:'model_instance_id',width:100,align: 'center'});
      this.table_column_arr.push({title:'模型实例的名称',key:'model_instance_name',width:200,align: 'left'});
      this.table_column_arr.push({title:'模型实例的描述',key:'model_instance_description',width:500,align: 'left'});
      this.table_column_arr.push({title:'发布任务',key:'publish_task',align: 'center',render: (h, params) => {
        return h('span', {
          domProps: {
            innerHTML: params.row.publish_task,
            title:'点击发布'
          },
          style: {
            cursor: "pointer",
            color: "#007FFF"
          },
          on: {
            click: () => {
              this.jumpToPublishTaskPage();
            }
          }
        })
     }});

      this.table_data_arr = [];

      this.table_data_arr.push({model_instance_id:'MIns001',model_instance_name:'SPC_Test_1',model_instance_description:'基于XXX数据得出的SPC的训练模型 ......',publish_task:'点击发布'});
      this.table_data_arr.push({model_instance_id:'MIns002',model_instance_name:'My_CustomModelX',model_instance_description:'通过XXX算法推导出来的适用于XXX生产场景的模型 ......',publish_task:'点击发布'});
      this.table_data_arr.push({model_instance_id:'MIns003',model_instance_name:'Render_DT_Model',model_instance_description:'一个经过数据探查和选取得出的决策树模型实例 ......',publish_task:'点击发布'});

    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 模型 页面',
        duration: 3
      });

    },
    methods: {
      jumpToPublishTaskPage(){
        this.$router.push("/PublishTask")
      }
    }
  }
</script>

<style>

</style>
