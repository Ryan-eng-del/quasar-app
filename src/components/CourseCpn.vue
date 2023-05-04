<template>
  <div class="card-wrapper column">
    <q-img
      src="../assets/img/class.jpg"
      spinner-color="primary"
    ></q-img>
    <section class="q-px-xs q-pt-xs q-pb-md text-center">
      <div class="text-subtitle1">离散数学</div>
      <div class="ellipsis-2-lines q-my-xs q-mb-md text-grey-7">
        离散数学是研究离散量关系及结构的数学分支，是计算机科学的理论基础，
        是计算机科学与技术专业的专业基础必修课程。离散数学是研究离散量关系及结构的数学分支，是计算机科学的理论基础，
        是计算机科学与技术专业的专业基础必修课程。
      </div>
      <div class="row justify-center">
        <q-btn color="primary" class="q-mr-md add-btn"
          >进入课程</q-btn
        >
        <q-btn
          color="primary"
          size="sm"
          round
          icon="edit"
          class="edit-btn"
          @click="emit('editCourse')"
        ></q-btn>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface CourseCpn {
  courseName?: string;
  courseDesc?: string;
  coursePic?: string;
  courseId: string;
}

const props = withDefaults(defineProps<CourseCpn>(), {
  courseName: '',
  courseDesc: '',
  coursePic: '',
});

const emit = defineEmits(['editCourse']);
</script>
<style lang="scss">
.card-wrapper {
  width: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  overflow: hidden;
  border-radius: 7px;
  transition: transform 300ms;

  img {
    width: 100%;
    transition: transform 500ms;
  }

  &:hover {
    transform: translateY(-6px);
  }
}
</style>
