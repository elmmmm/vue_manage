<template>
  <el-dialog
    width="40%"
    :title="title"
    :visible.sync="dialogVisible"
    :before-close="clearForm"
  >
    <!-- 表单内容区域 -->
    <el-form
      :model="goodsForm"
      :rules="rules"
      ref="ruleForm"
      size="medium"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="goodsForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="goodsForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="num">
        <el-input v-model="goodsForm.num"></el-input>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="goodsForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="goodsForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="商品品牌" prop="brand">
        <el-input v-model="goodsForm.brand"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="image">
        <el-input v-model="goodsForm.image"></el-input>
        <img
          :src="goodsForm.image"
          height="150px"
          style="margin-top: 10px"
          alt=""
        />
      </el-form-item>
      <el-form-item label="商品卖点" prop="sellPoint">
        <el-input v-model="goodsForm.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="descp">
        <el-input
          v-model="goodsForm.descp"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
        ></el-input>
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
      default: "添加商品",
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
      goodsForm: {
        //表单参数容器-对象
        id: 0,
        name: "", //商品名称
        price: 0,
        num: 0,
        brand: "",
        image: "",
        sellPoint: "",
        descp: "",
        date1: "", //发布时间
        date2: "",
      },
      groups: [], //规格参数
      rules: {
        //校验规则
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        num: [{ required: true, message: "请输入库存数量", trigger: "blur" }],
        brand: [{ required: true, message: "请输入商品品牌", trigger: "blur" }],
      },
    };
  },

  watch: {
    rowData(newVal) {
      console.log("监听数据变化", newVal);
      this.goodsForm = newVal;
    },
  },

  methods: {
    submitForm() {
      if (this.title == "添加商品") {
        this.$http.addGoods(this.goodsForm).then((res) => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "添加商品条目成功",
            });
            this.$parent.getGoods();
            //清空表单
            this.clearForm();
          }
        });
      }else{ //编辑商品
        this.$http.editGoods(this.goodsForm).then((res) => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "编辑商品条目成功",
            });
            this.$parent.getGoods();
            //清空表单
            this.clearForm();
          }
        });
      }

    },
    clearForm() {
      this.$refs["ruleForm"].resetFields();
      this.goodsForm = {
        //清空表单
        //表单参数容器-对象
        id: 0,
        name: "", //商品名称
        price: 0,
        num: 0,
        brand: "",
        image: "",
        sellPoint: "",
        descp: "",
        date1: "", //发布时间
        date2: "",
      };
      this.dialogVisible = false; //关闭弹框
    },
  },

  mounted() {
    console.log("对话框挂载", this.$refs);
  },
};
</script>

<style>
</style>