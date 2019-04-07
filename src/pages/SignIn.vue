<template>
  <a-row type="flex" justify="space-around">
    <a-col :xs="22" :md="12" :lg="6">
      <a-spin :spinning="checkLoading">
        <a-card>
          <a-form
            :form="form"
            @submit="handleSubmit"
          >
            <a-form-item
              v-bind="formItemLayout"
              :labelCol="{span: 24}"
              label="E-mail"
            >
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [{
                      type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                      required: true, message: 'Please input your E-mail!',
                    }]
                  }
                ]"
                placeholder="Email"
              />
            </a-form-item>
            <a-form-item
              v-bind="formItemLayout" 
              :labelCol="{span: 24}"
              label="Password"
            >
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [{
                      required: true, message: 'Please input your password!',
                    }],
                  }
                ]"
                placeholder="Password"
                type="password"
              />
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
              <a-button
                type="primary"
                html-type="submit"
              >
              Sign in
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-spin>
    </a-col>
  </a-row>
</template>

<script>
export default {
  data () {
    return {
      spinning: true,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
        },
        wrapperCol: {
          xs: { span: 24 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 9,
          },
        },
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  computed: {
    checkLoading() {
      return this.$store.state.auth.loading
    }
  },
  methods: {
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.$store.dispatch('auth/signIn', values)
        }
      });
    }
  }
};
</script>