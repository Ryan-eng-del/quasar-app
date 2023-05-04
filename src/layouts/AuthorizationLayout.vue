<template>
  <section
    class="row no-wrap authorization-wrapper justify-center items-center"
  >
    <section
      class="row no-wrap justify-center rounded-borders authorization"
    >
      <div class="gt-sm authorization-pic authorization-left">
        <q-img
          :src="props.pic"
          :alt="props.pic"
          spinner-color="primary"
        ></q-img>
      </div>
      <div class="authorization-right q-pa-xl">
        <div class="text-h4 q-pb-md">Hey! hello👋</div>

        <div
          :style="{
            marginBottom: '25px',
            display: 'inline-block',
            color: 'rgb(155, 155, 155)',
          }"
        >
          欢迎
          <span
            :style="{
              color: 'rgb(64, 169, 255)',
              padding: '0 3px',
            }"
            >{{ props.name === 'login' ? '登录' : '注册' }}</span
          >
          学习者个性化推荐系统 !
        </div>
        <q-form>
          <q-input
            v-model="userName"
            label="用户名"
            class="q-pb-lg"
          />
          <q-input v-model="password" label="密码" class="q-pb-lg" />
          <div class="captcha row no-wrap justify-between">
            <div
              class="row justify-center items-center col-6"
              v-if="props.isLoading"
            >
              <q-spinner color="primary" size="3em" />
            </div>
            <img v-else :src="props.codeImg" :alt="props.codeImg" />
            <q-input
              v-model="code"
              label="验证码"
              class="q-pb-lg"
            ></q-input>
          </div>
          <div class="submit-btn q-mt-xl">
            <q-btn
              :label="props.name === 'login' ? '登录' : '注册'"
              color="primary"
              :style="{
                height: '47px',
                width: '100%',
              }"
            ></q-btn>
          </div>

          <div
            :style="{
              textAlign: 'center',
              marginTop: '16px',
              color: 'red',
            }"
          >
            <router-link
              :to="props.name === 'login' ? '/register' : '/login'"
              class="authorization-link"
            >
              立即{{ props.name === 'login' ? '注册' : '登录' }}
            </router-link>
          </div>
        </q-form>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

interface AuthorizationLayout {
  codeImg: string;
  name?: 'login' | 'register';
  pic: string;
  isLoading?: boolean;
}

// 方式 1
// const propType = {
//   foo: {
//     type: String,
//     require,
//     default: '',
//   },
// };
// const props = defineProps(propType);

// 方式 2
// 纯 TypeScript 类型声明
const props = withDefaults(defineProps<AuthorizationLayout>(), {
  name: 'login',
});

const { userName, password, code } = reactive({
  userName: ref(''),
  password: ref(''),
  code: ref(''),
});
</script>

<style lang="scss" scoped>
.authorization-wrapper {
  width: $full-vw;
  height: $full-vh;
  .authorization-right {
    width: 420px;
  }

  .authorization-pic {
    width: 420px;
    img {
      width: 100%;
    }
  }
}

.submit-btn {
  text-align: center;
}

.authorization-link {
  color: $primary;
}
</style>
