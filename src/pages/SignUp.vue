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
                    }, {
                      validator: validateToNextPassword,
                    }],
                  }
                ]"
                placeholder="Password"
                type="password"
              />
            </a-form-item>
            <a-form-item
              v-bind="formItemLayout"
              :labelCol="{span: 24}"
              label="Confirm Password"
            >
              <a-input
                v-decorator="[
                  'confirm',
                  {
                    rules: [{
                      required: true, message: 'Please confirm your password!',
                    }, {
                      validator: compareToFirstPassword,
                    }],
                  }
                ]"
                placeholder="Confirm password"
                type="password"
                @blur="handleConfirmBlur"
              />
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
              <a-button
                type="primary"
                html-type="submit"
              >
                Register
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
      confirmDirty: false,
      formItemLayout: {
        labelCol: {
          sm: { span: 24 },
        },
        wrapperCol: {
          sm: { span: 24 },
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
          this.$store.dispatch('auth/signUp', values)
        }
      });
    },
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  }
};
</script>