<template>
  <el-dialog
    width="40%"
    :title="title"
    :visible.sync="dialogVisible"
    :before-close="clearForm"
  >
    <!-- 表单内容区域 -->
    <el-form
      :model="orderForm"
      :rules="rules"
      ref="ruleForm"
      size="medium"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="goods">
        <el-input v-model="orderForm.goods"></el-input>
      </el-form-item>
      <el-form-item label="卖家姓名" prop="name">
        <el-input v-model="orderForm.name"></el-input>
      </el-form-item>
      <el-form-item label="卖家昵称" prop="nickname">
        <el-input v-model="orderForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="卖家邮箱" prop="email">
        <el-input v-model="orderForm.email"></el-input>
      </el-form-item>
      <el-form-item label="收货地址" prop="address">
        <el-input
          v-model="orderForm.address"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="发布时间" prop="time">
        <el-date-picker
          v-model="orderForm.time"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="当前状态" prop="status">
        <el-select v-model="orderForm.status" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <!-- 对话框底部区域 -->
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="clearForm">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "添加订单",
    },
    rowData: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      isShow: false, //是否显示规格参数配置
      dialogVisible: false, //外弹框
      innerVisible: false, //内弹框
      innerVisibleImg: false, //图片弹框
      imgUrl: "",
      orderForm: {
        //表单参数容器-对象
        id: "",
        goods: "", //商品名
        name: "", //买家名
        nickname: "",
        email: "",
        address: "",
        time: "",
        status: "",
      },
      groups: [], //规格参数
      rules: {
        //校验规则
        goods: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        name: [{ required: true, message: "请输入卖家姓名", trigger: "blur" }],
        address: [
          { required: true, message: "请输入卖家地址", trigger: "blur" },
        ],
      },
      options: [
        {
          value: "待付款",
          label: "待付款",
        },
        {
          value: "待发货",
          label: "待发货",
        },
        {
          value: "待收货",
          label: "待收货",
        },
        {
          value: "待评价",
          label: "待评价",
        },
      ],
    };
  },

  watch: {
    rowData(newVal) {
      console.log("监听数据变化", newVal);
      this.orderForm = newVal;
    },
  },

  methods: {
    submitForm() {
      if (this.title == "添加订单") {
        this.$http.addOrder(this.orderForm).then((res) => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "添加订单条目成功",
            });
            this.$parent.getOrder();
            //清空表单
            this.clearForm();
          }
        });
      } else {
        //编辑订单
        this.$http.editOrder(this.orderForm).then((res) => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "编辑订单条目成功",
            });
            this.$parent.getOrder();
            //清空表单
            this.clearForm();
          }
        });
      }
    },
    clearForm() {
      this.$refs["ruleForm"].resetFields();
      this.orderForm = {
        //清空表单
        goods: "", //商品名
        name: "", //买家名
        nickname: "",
        email: "",
        address: "",
        time: "",
        status: "",
      };
      this.dialogVisible = false; //关闭弹框
    },
  },

  mounted() {
    console.log("订单对话框挂载", this.$refs);
  },
};
</script>

<style>
</style>